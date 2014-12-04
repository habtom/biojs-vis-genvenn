function myFunction() {	
	// create a root     
/*
 var jsonCircles = [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
*/
var svg = d3.select("#container2")
				.append("svg")
				.attr("width",1000)
				.attr("height",1000);
var circles = svg.selectAll("circle")
					 .data([
					 	{ size: 100 }
					 ]);

	if(document.getElementById("title1").value.length != 0){


	// bind some data
	
	circles.enter()
		   .append("circle")
		   .attr("r",100
		   	)
		   .attr("cx",100
		   )
		   .attr("cy",100
		   )
		   .attr("fill", 'red')
		   //svg.append("text").attr("x", 200).attr("y", 100).attr("text-anchor", "middle").text("function(d) { return d.id }");
    }
	if(document.getElementById("title2").value.length != 0){
	// bind some data

	circles.enter()
		   .append("circle")
		   .attr("r",100
		   	)
		   .attr("cx",200
		   )
		   .attr("cy",300
		   )
		   .attr("fill", 'yellow')
    }
    if(document.getElementById("title3").value.length != 0){
	// bind some data

	circles.enter()
		   .append("circle")
		   .attr("r",100
		   	)
		   .attr("cx",550
		   )
		   .attr("cy",500
		   )
		   .attr("fill", 'blue')
    }
	// draw some circles
  }
  


$(document).ready(main);
/*function threeCircles() {

	// create a root svg
	var svg = d3.select("body")
				.append("svg")
				.attr("width",document.body.clientWidth)
				.attr("height",document.body.clientHeight);
	// bind some data
	var circles = svg.selectAll("circle")
					 .data([
					 	{size: 5},
					 	{size: 10},
					 	{size: 15}
					 ]);
	// draw some circles
	circles.enter()
		   .append("circle")
		   .attr("r",function(d){
		   	 return d.size;
		   })
		   .attr("cx",function() {
		   	 return 50 + Math.random() * (document.body.clientWidth - 50)
		   })
		   .attr("cy",function() {
		   	 return 50 + Math.random() * (document.body.clientHeight - 50)
		   })
}*/

