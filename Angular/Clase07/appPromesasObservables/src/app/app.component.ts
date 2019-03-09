import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { map, filter } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suscripcion: Subscription
  archivo: any = ""

  convertirAJson(texto): Object {
    return JSON.parse(texto)
  }

  ngOnInit() {
    const observable: Observable<string> = Observable.create(
      (observador: Observer<string>) => {
        const self = this
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            /*             let datos: any = self.convertirAJson(xhr.responseText)
                        datos = datos.map(dato => {
                          dato.name = dato.name.toUpperCase()
                          return dato
                        })
                        datos = datos.filter(dato => dato.id > 4) */
            observador.next(xhr.responseText)
          } else if (this.readyState == 4) {
            observador.error(this.statusText)
          }
        }

        xhr.open("get", "http://jsonplaceholder.typicode.com/users", true)
        xhr.send()
      }
    )

    /*     const metodos = {
          error: error => console.log(error),
          complete: () => console.log("Fin"),
          next: mensaje => console.log(mensaje)
        } */

    this.suscripcion = observable
      .pipe(
        map(data => {
          return JSON.parse(data)
        }),
        map(data => {
          const resp = data.map(dato => {
            dato.name = dato.name.toUpperCase()
            return dato
          })

          return resp
        }),
        map(data => {
          return data.filter(dato => dato.id > 4)
        })
      )
      .subscribe(
        mensaje => {
          console.table(mensaje)
        },
        error => console.log(error),
        () => console.log("Terminé mi jornada")
      )

    //this.suscripcion = observable.subscribe(metodos)

    const observable2 = Observable.create(
      (observador: Observer<any>) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            observador.complete()
          } else if (this.readyState == 3) {
            //observador.next(xhr.response.length)
            observador.next(xhr.responseText)
          }
        }

        xhr.open("get", "/descargar/wordpress.zip", true)
        xhr.send()
      }
    )



    observable2
      /*.pipe(
        map(data => {
          return (+data) / 1000000
        }),
        filter(data => data > 4)
      )*/
      .subscribe(
        data => {
          this.archivo += data
        },
        error => console.log(error),
        complete => {
          console.log("Archivo descargado")
          console.log(this.archivo)
        }
      )


  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }


}
