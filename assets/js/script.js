var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}

var slide1 = new Slide(
	"Быдлокодер",
	"Если бы строители строили дома так же, как программисты пишут программы,<br> первый залетевший дятел разрушил бы всю цивилизацию",
	"public/images/slide1.png",
	"https://lurkmore.to/%D0%91%D1%8B%D0%B4%D0%BB%D0%BE%D0%BA%D0%BE%D0%B4%D0%B5%D1%80"
);
var slide2 = new Slide(
	"Alt+F4",
	"> щас в чат зашол где 862 человека и напесал<br>> «Все кто хочет стать модератером давите ALT+F4»<br>> 293 человека на начате только с лёту вылетели",
	"public/images/slide2.png",
	"https://lurkmore.to/Alt%2BF4"
);
var slide3 = new Slide(
	"Гитлер",
	"австрийский художник и архитектор первой половины XX века",
	"public/images/slide3.png",
	"https://lurkmore.to/%D0%90%D0%B4%D0%BE%D0%BB%D1%8C%D1%84_%D0%93%D0%B8%D1%82%D0%BB%D0%B5%D1%80"
);
var slide4 = new Slide(
	"Полкабана",
	"Бацька знает, что нужно 83% белорусиков",
	"public/images/slide4.jpg",
	"https://lurkmore.to/%D0%9F%D0%BE%D0%BB%D0%BA%D0%B0%D0%B1%D0%B0%D0%BD%D0%B0"
);



function buildSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='" + slideArray[i].id +
			"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h1 class='titleSlide'>" + slideArray[i].title + "</h1>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("mySlider").innerHTML = myHTML;
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

function buildReverseSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='r" + slideArray[i].id +
			"' class='singleSlide reverse' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h4>" + slideArray[i].subtitle + "</h4>" +
					"<a class='slider' href='" + slideArray[i].link + "' target='_blank'><span>Open</span></a>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("myReverseSlider").innerHTML = myHTML;
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;
}

buildSlider();
buildReverseSlider();

function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = (slideArray.length - 1);
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft reverse");

	currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight reverse");

	currentSlideIndex = nextSlideIndex;
}
