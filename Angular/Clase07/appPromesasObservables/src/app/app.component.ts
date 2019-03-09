import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suscripcion: Subscription

  ngOnInit() {
    const observable: Observable<string> = Observable.create(
      (observador: Observer<string>) => {
        setTimeout(() => {
          observador.next("A los 3s: Vino el del periódico")
        }, 3000)

        /* © */

        setTimeout(() => {
          observador.next("Volví")
        }, 12000)

        setTimeout(() => {
          observador.complete()
        }, 10000)


      }
    )

    const metodos = {
      error: error => console.log(error),
      complete: () => console.log("Fin"),
      next: mensaje => console.log(mensaje)
    }

    /*     this.suscripcion = observable.subscribe(
          mensaje => console.log(mensaje),
          error => console.log(error),
          () => console.log("Terminé mi jornada")
        ) */

    this.suscripcion = observable.subscribe(metodos)
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }


}
