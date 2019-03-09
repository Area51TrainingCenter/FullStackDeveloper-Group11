import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarios: Promise<any>
  fotos: [] = []

  ngOnInit() {
    /*     const promesa = new Promise((resolve, reject) => {
          setTimeout(() => {
            //resolve({ nombre: "ABC", cargo: "DEF" })
            reject({ status: 403, message: "User not authorized" })
          }, 1500)
        })

        promesa.then(
          data => console.log(data),
          error => console.log(error)
        ) */

    const promesa = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(JSON.parse(xhr.responseText))
          //console.log(xhr.responseText)
        } else if (this.readyState == 4) {
          reject({ status: this.status, message: this.statusText })
        }
        //console.log("Estado", this.readyState)
        //console.log("Estado de la respuesta", this.status)
      }

      xhr.open("get", "http://jsonplaceholder.typicode.com/posts", true)
      xhr.send()

    })

    /*     promesa.then(
          (data: string) => {
            this.usuarios = JSON.parse(data)
          },
          error => console.log("PROMESA RECHAZADA", error)
        ) */

    this.usuarios = promesa.then()

    promesa
      .catch(
        error => console.log("PROMESA RECHAZADA", error)
      )


    const promesaFotos = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(xhr.responseText)
        } else if (this.readyState == 4) {
          reject({ status: this.status, message: this.statusText })
        }
      }
      xhr.open("get", "http://jsonplaceholder.typicode.com/photos", true)
      xhr.send()
    })

    promesaFotos.then(
      (data: string) => this.fotos = JSON.parse(data),
      error => console.log(error)
    )




  }


}
