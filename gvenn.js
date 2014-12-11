setInterval(function(){
   myFunction();
},100);



var firstCircle = false;
var secondCircle = false;
var thirdCircle = false;

var gvennStage = d3.select("#gstage")
				.append("svg")
				.attr("width",600)
				.attr("height",420);

var plotCircles = gvennStage.selectAll("circle")
					 .data([{ size: 100 }]);


function myFunction() {	


	if(document.getElementById("title1").value.length != 0 && firstCircle == false){
	plotCircles.enter().append("circle")
		.style("fill", "#00bf00")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 230)
		.attr("cy", 306)
		.attr("id", "circle1")
		firstCircle = true;
    }
    else if(document.getElementById("title1").value.length == 0 && firstCircle == true){
    	d3.select("#circle1").remove();		
    	firstCircle = false;
    }

	if(document.getElementById("title2").value.length != 0 && secondCircle == false){
	plotCircles.enter().append("circle")
		.style("fill", "#007fff")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 370)
		.attr("cy", 306)
		.attr("id", "circle2")
		secondCircle = true;
    }
    else if(document.getElementById("title2").value.length == 0 && secondCircle == true){
    	d3.select("#circle2").remove();
    	secondCircle = false;
    }

    if(document.getElementById("title3").value.length != 0 && thirdCircle == false){
	plotCircles.enter().append("circle")
		.style("fill", "#ff3433")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 300)
		.attr("cy", 185)
		.attr("id", "circle3")
		thirdCircle = true;
    }
    else if(document.getElementById("title3").value.length == 0 && thirdCircle == true){
    	d3.select("#circle3").remove();
    	thirdCircle = false;
    }
  }
  


$(document).ready(main);


