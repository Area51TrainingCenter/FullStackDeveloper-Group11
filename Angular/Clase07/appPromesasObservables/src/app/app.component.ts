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

        setTimeout(() => {
          observador.next("A los 5s: Alguien tocó la puerta")
        }, 5000)

        setTimeout(() => {
          observador.next("A los 10s: Se fue la luz")
        }, 10000)
      }
    )

    this.suscripcion = observable.subscribe(
      mensaje => console.log(mensaje)
    )

    setTimeout(() => {
      observable.subscribe(
        mensaje => console.log(mensaje)
      )
    }, 6000)



  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }


}
