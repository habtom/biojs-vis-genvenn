function myFunction() {	

var svg = d3.select("#container2")
				.append("svg")
				.attr("width",500)
				.attr("height",500);
var circles = svg.selectAll("circle")
					 .data([
					 	{ size: 100 }
					 ]);

	if(document.getElementById("title1").value.length != 0){



	
	circles.enter()
		   .append("circle")
		   .attr("r",90
		   	)
		   .attr("cx",100
		   )
		   .attr("cy",100
		   )
		   .attr("fill", 'blue')
    }
	if(document.getElementById("title2").value.length != 0){
	// bind some data

	circles.enter()
		   .append("circle")
		   .attr("r",90
		   	)
		   .attr("cx",200
		   )
		   .attr("cy",300
		   )
		   .attr("fill", 'green')
    }
    if(document.getElementById("title3").value.length != 0){
	// bind some data

	circles.enter()
		   .append("circle")
		   .attr("r",90
		   	)
		   .attr("cx",550
		   )
		   .attr("cy",500
		   )
		   .attr("fill", 'yellow')
    }
	// draw some circles
  }
  


$(document).ready(main);


