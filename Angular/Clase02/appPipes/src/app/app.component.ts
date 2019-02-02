import { Component } from '@angular/core';

interface IPelicula {
	id: number
	titulo: string
	sinopsis: string
	actores: string
	anno: number
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	fechaActualizacion: Date = new Date()
	precio: number = 156.3

	peliculas: Array<IPelicula> = [
		{ id: 1, titulo: "Miss Bala", sinopsis: "Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime. Surviving will require all of her cunning, inventiveness, and strength. Based on the Spanish-language film.", actores: "Gina Rodriguez, Thomas Dekker, Vivian Chan, Barbarella Pardo", anno: 2019 },
		{ id: 2, titulo: "Artic", sinopsis: "A man stranded in the Arctic after an airplane crash must decide whether to remain in the relative safety of his makeshift camp or to embark on a deadly trek through the unknown in hopes of making it out alive.", actores: "Mads Mikkelsen, Maria Thelma Smáradóttir", anno: 2018 },
		{ id: 3, titulo: "Ek Ladki Ko Dekha Toh Aisa Laga", sinopsis: "Some love stories are not simple, Sweety's is one such story. She has to contend with her over-enthusiastic family that wants to get her married, a young writer who is completely smitten by her, a secret that she harbours close to her heart and ultimately the truth that her true love might not find acceptance in her family and society. Resolving these issues proves hilarious, touching and life changing.", actores: "Anil Kapoor, Juhi Chawla, Sonam Kapoor, Rajkummar Rao", anno: 2019 },
		{ id: 4, titulo: "Aquaman", sinopsis: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.", actores: "Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson", anno: 2018 },
		{ id: 5, titulo: "Spider-Man: Un nuevo universo", sinopsis: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.", actores: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali", anno: 2018 },
		{ id: 6, titulo: "Dragon Ball Super: Broly", sinopsis: "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they've faced before.", actores: "Masako Nozawa, Aya Hisakawa, Ryô Horikawa, Toshio Furukawa", anno: 2018 },
		{ id: 7, titulo: "Upside", sinopsis: "A comedic look at the relationship between a wealthy man with quadriplegia and an unemployed man with a criminal record who's hired to help him.", actores: "Kevin Hart, Bryan Cranston, Nicole Kidman, Aja Naomi King", anno: 2017 }
	]
}
