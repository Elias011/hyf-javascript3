let repar = document.createElement('button'); //Button of HYF Repositorie 
document.body.appendChild(repar);
let repositories = document.createTextNode('HYF Repositories');
repar.appendChild(repositories);
let searchButton = document.createElement('button');
document.body.appendChild(searchButton);
let search = document.createTextNode('Search') // Button of search
searchButton.appendChild(search);
let searchInput = document.createElement('input'); // Search input
document.body.appendChild(searchInput); 
searchInput.setAttribute('placeholder', 'Repositorie name for more info') // value of the input when it is empty
let div1 = document.createElement('div');//this div controls the photo and div2 where it show all the information 
document.body.appendChild(div1);
div1.setAttribute('id', 'div1')
let div2 = document.createElement('div');
div1.appendChild(div2);
div2.setAttribute('id', 'div2') // this div controls two of <p> elements name Of Repositories and name Of Contributor
let nameOfRepositories = document.createElement('p');
div2.appendChild(nameOfRepositories); 
let nameOfContributors = document.createElement('p');
div2.appendChild(nameOfContributors);
let contributorsImage = document.createElement('img');
contributorsImage.setAttribute('src', 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'); 
div1.appendChild(contributorsImage);


repar.onclick = function(){
	nameOfContributors.innerHTML=" "; //when you click on the button HYF Repositorie it will change alle the <p> elements empty value and it will change the photo to the Github logo
	nameOfRepositories.innerHTML=" ";
	contributorsImage.setAttribute('src',"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png");
	let url = "https://api.github.com/orgs/HackYourFuture/repos";
	let req = new XMLHttpRequest();
	req.open('GET',url,false);
	req.onload = function result(){
	if (req.readyState == 4 && req.status == 200){
	nameOfRepositories.innerHTML = JSON.parse(req.responseText).map(data => "<a target = '_blank' href = "+ data.html_url + ">" + data.name + "</a>" + "<br>")		
	}
	}
	req.send();
	
}

//here I call two API in the same onclick the first API will give you the information about the word which wrote it in the input and the second API will give you the photo of the contributor and his or her photo
searchButton.onclick = function(){
	nameOfRepositories.innerHTML=" ";
	let url = "https://api.github.com/orgs/HackYourFuture/repos";
	let req = new XMLHttpRequest();
	req.open('GET',url);
	req.onload = function result(){
		if (req.readyState == 4 && req.status == 200){
		let data = JSON.parse(req.responseText);
		let x = searchInput.value;
		let cure = data.filter((i) => i.name == x);
		nameOfRepositories.innerHTML = cure.map((i)=>"<a target = '_blank' href = " + i.html_url+ ">" + i.name + "</a>" + "<br>" + "Stragazers: " + i.stargazers_count + "<br>" + "Watchers: " + i.watchers + "<br>" + "Fork: " + i.forks_count + "<br>" + "Language:" + i.language );
		}
	};

	req.send();
	
	let contributorsUrl = "https://api.github.com/repos/HackYourFuture/"+searchInput.value+"/contributors"
		let qer = new XMLHttpRequest();
	qer.open('GET',contributorsUrl,false);
	qer.onload = function result1(){
		let info = JSON.parse(qer.responseText);
		contributorsImage.setAttribute('src', info[0].avatar_url);
		nameOfContributors.innerHTML = "Contributor: "  + info[0].login;
		
	};
	qer.send();
}



