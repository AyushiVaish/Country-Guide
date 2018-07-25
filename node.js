var imageSearch ="";

function checkcountry() {
	let search=document.querySelector("#search").value;
	imageSearch=search;
	 if(!search || search==="") {
		alert("Bank Value supplied");
		return;
	}

	var queryURL = `https://restcountries.eu/rest/v2/name/${search}`;
	
	fetch(queryURL)
	.then(function(response) {
		return response.json();
	})
	.then (function (result) {
		displayLocationResult(result);
	})
	.catch (function(error) {
		console.log(error.message);
	
	}); 
}

function displayLocationResult(result) {

	console.log(result);
	
	let msgDiv=document.querySelector("#message");
	let div=document.querySelector("#result");
	
	if (0){
		div.innerHTML="";
		msgDiv.innerHTML=`<div class=" alert alert-danger alert-dismissible" role="alert"> \
							<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
							<strong>oops!</strong> ${result.message} \
						  </div>`;
							
	}
	
    		
	else 
	{
				msgDiv.innerHTML=`<div class=" alert alert-success alert-dismissible" role="alert"> \
							<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
							<h4>${imageSearch}</h4>\
						  </div>`;
	
	
		div.innerHTML="";
	
	
	for (let i=0; i<result.length; i++) 
		{
		for (let j=0; j<result.timezones.length;j++) {
			var zones = [];
			zones.push(result[i].timeszones[j]);
		}
		for (let j=0;j<result.currencies.length;j++) {
			var currencies = [];
			currencies.push(result[i].currencies[j].name);
		}
		for (let j=0;j<result.languages.length;j++) {
			var languages = [];
			languages.push(result[i].languages[j].name);
		}
		
		let image=`<div class = "jumbotron alert-success" id=${i}>
		<center>
		<div class="card">
			<img src="${result[i].flag}" alt="Avatar" style="width:100%">
			<div class = "container">
			<h2><b>${result[i].name}</b></h2>
			<h4>Capital:<small style="color:blue ; font-size: 20px;">${result[i].capital} </small></h4>
			<h4>Region:<small style="color:blue ; font-size: 20px;">${result[i].region} </small></h4>
			<h4>SubRegion: <small style="color:blue ; font-size: 20px;">${result[i].subregion} </small></h4>
			<h4>Population:<small style="color:blue ; font-size: 20px;">${result[i].population} </small></h4>
			<h4>Time Zones:<small style="color:blue ; font-size: 20px;">${result[i].timeszones} </small></h4>
			<h4>Native Name:<small style="color:blue ; font-size: 20px;">${result[i].nativeName} </small></h4>
			<h4>Currency:<small style="color:blue ; font-size: 20px;">${currencies} </small></h4>
			<h4>Languages:<small style="color:blue ; font-size: 20px;">${languages} </small></h4>

			</div>
		</div>
	</center>
				<div>`;
	$("#result").append(image);
		}
	console.log(result);
	}
}