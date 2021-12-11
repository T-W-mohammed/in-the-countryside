
// header 

let overlay = document.createElement("div");

$('.nav .container .btn').click(function(){

	$(".links").css("left","0");

	let overlay = document.createElement("div");

	overlay.className = "overlay";

	document.body.appendChild(overlay);
});
$('.links .close i').click(function(){

	$(".links").css("left","-220px");

	$(".overlay").remove();

});
// header


// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");

const links =document.querySelector(".links");


for (let i = 1 ;i < secNumber - 4 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#" +sections[i].getAttribute("class"));

	sections[i].setAttribute("id", sections[i].getAttribute("class"));

	/*sections[i].setAttribute("data-link",sections[i].getAttribute("class"));*/

	li.appendChild(a);

	links.appendChild(li);

		
}
let linkAnchor = document.querySelectorAll(".links li a");
linkAnchor.forEach( a =>{

	a.onclick = ()=>{
		$(".links").css("left","-220px");

		$(".overlay").remove();
	}

});



// Slider show

const slider =Array.from(document.querySelectorAll(".slider .container .sidershow"));

// Slider Length

let countSlider = slider.length;

// current slider

let current = 0;

// slider container

let slidercontainer = document.querySelector(".slider .container ");

// Create Bullets

let bullets = document.createElement("ul");

// Add Class Bullets

bullets.className = "bullets";


const left = document.querySelector(".sliderarrowleft");

// previouse button 

const right = document.querySelector(".sliderarrowright");

// handling clicks

right.onclick = rightarrow;

// handling clicks

left.onclick = leftarrow;


for( let i = 0 ; i < countSlider ; i++){

	// Create bullet

	li = document.createElement("li");

	li.setAttribute("data-number",i);

	bullets.appendChild(li);
}

// Append Bullets To The body 

slidercontainer.appendChild(bullets);

// Get bullets

let bullet = Array.from(bullets.children);





// check bullet



// function 

function slide(){

	//function for arrow

	arrowcheck();

	
	

	// function remove

	remove();

	// put class into the slider

	slider[current].classList.add("active");

	// put class into the li

	bullet[current].classList.add("active");



}

// function For Remove Class Active

function remove(){

	slider.forEach( slid =>{
		slid.classList.remove("active");
	});

	bullet.forEach(bullet => {
		bullet.classList.remove("active");
	});


}



function rightarrow(){
	arrowcheck();
	if(right.classList.contains("disable")){
		return false;

	}else{
	current++;
	slide();

	
	}
}

// function for arrow 

function arrowcheck(){

	if(current === 0){
		left.classList.add("disable");
	}
	else{
		left.classList.remove("disable");
	}

	if(current == countSlider - 1){
		right.classList.add("disable");
	}
	else{
		right.classList.remove("disable");
	}


}



function leftarrow(){

	arrowcheck();
	if(left.classList.contains("disable")){
		return false;
	}else{
	current--;
	slide();

	
}
}

// toggle bullets 

for(var i = 0 ; i < countSlider ; i++){
	bullet[i].onclick = function(){

		current = parseInt(this.getAttribute("data-number"));

		slide();


		
	}

}

function currentf(){
	if(current == null || current ==""){
			current = 0;
			slide();
		}
}
currentf();

function autochange(){
	setInterval( ()=>{
		if(current < countSlider - 1){
			current++;
			slide();
		}
		else{
			
			current = 0 ;
			slide();
			
		}
	},2000);
}

 autochange();

