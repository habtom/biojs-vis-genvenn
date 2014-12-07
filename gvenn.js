function myFunction() {	

var gvennStage = d3.select("#gstage")
				.append("svg")
				.attr("width",600)
				.attr("height",420);
var plotCircles = gvennStage.selectAll("circle")
					 .data([{ size: 100 }]);

	if(document.getElementById("title1").value.length != 0){

	
	plotCircles.enter().append("circle")
		.style("fill", "#00bf00")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 230)
		.attr("cy", 306)
    }
	if(document.getElementById("title2").value.length != 0){

	plotCircles.enter().append("circle")
		.style("fill", "#007fff")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 370)
		.attr("cy", 306)
    }
    if(document.getElementById("title3").value.length != 0){

	plotCircles.enter().append("circle")
		.style("fill", "#007fff")
		.style("fill-opacity", 0.5)
		.attr("r", 110)
		.attr("cx", 300)
		.attr("cy", 185)
    }
  }
  


$(document).ready(main);


