import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarios: Promise<any>
  fotos: [] = []

  ajax(url, resolve, reject) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(xhr.responseText))
      } else if (this.readyState == 4) {
        reject({ status: this.status, message: this.statusText })
      }
    }

    xhr.open("get", url, true)
    xhr.send()
  }

  ngOnInit() {


    const promesa = new Promise((resolve, reject) => {
      this.ajax("http://jsonplaceholder.typicode.com/posts", resolve, reject)
    })

    this.usuarios = promesa.then()

    promesa
      .catch(
        error => console.log("PROMESA RECHAZADA", error)
      )

    const promesaFotos = new Promise((resolve, reject) => {
      this.ajax("http://jsonplaceholder.typicode.com/photos", resolve, reject)
    })
    promesaFotos.then(
      (data: any) => this.fotos = data,
      error => console.log(error)
    )




  }


}
