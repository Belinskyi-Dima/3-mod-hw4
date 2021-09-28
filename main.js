"use strict";
const url = "https://ajax.test-danit.com/api/swapi/films";
const entity =["characters"];
const root = document.querySelector('#root')
class Film {
	constructor(url){
		this.url = url;
	}
	getList() {
		axios.get(this.url).then(({data}) => {
			data.forEach(element => {
				
				const ul = document.createElement("ul");
				const filmName = document.createElement("li");
				const episodeId = document.createElement("li");
				const openingCrawl = document.createElement("li");
				filmName.innerHTML+= `<strong> Name film </strong>: ${element.name} <br>`;
				episodeId.innerHTML+=`<strong> episode </strong>: ${element.id} <br>`;
				openingCrawl.innerHTML+=`<strong> short description </strong>: ${element.openingCrawl} <br>`;

				ul.append(filmName);
				ul.append(episodeId);
				ul.append(openingCrawl);
				root.append(ul)

				element.characters.forEach(el => {
					axios.get(el).then(({data}) => {
						const actorsLi = document.createElement("li");
						const actors = data.name;

						ul.append(actorsLi);
						actorsLi.innerHTML += `<strong> Actors </strong>: ${actors}`;
						console.log(actorsLi);
					})
					
				})
				
				ul.style.listStyle="none";

			});



		});
	

	}
}
const film = new Film(url);
film.getList();
