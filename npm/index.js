require("d3");

var sets = require('simplesets');

// Some data examples ...

var s1 = new sets.Set([
					'G000001',
					'G000002',
					'G000003',
					'G000004',
					'G000005',
					'G000006',
					'G000007',
					'G000008',
					'G000009',
					'G000010'
					]);

var s2 = new sets.Set([
					'G000005',
					'G000006',
					'G000007',
					'G000008',
					'G000009',
					'G000010',
					'G000011',
					'G000012',
					'G000013',
					'G000014'
					]);
var s3 = new sets.Set([
					'G000007',
					'G000008',
					'G000009',
					'G000010',
					'G000011',
					'G000006',
					'G000007',
					'G000008',
					'G000009',
					'G000010'
					]);
//var s3 = new sets.Set(d3.select('#list_1').node().value);





console.log('s1 =', s1.array());
console.log('s2 =', s2.array());
console.log('s3 =', s2.array());

// Do some set operations.
console.log('Intersection:', s1.intersection(s2).array());
console.log('s1 - s2:', s1.difference(s2).array());
console.log('s2 - s1:', s2.difference(s1).array());
console.log('Union:', s1.union(s2).array());



// venn stage

var w = 600,
    h = 420;

var svg = d3.select("#first")
	.append("svg")
	.attr("width", w)
	.attr("height", h)
	//.style("background", "yellow")


function drawCircles() {
	
	if (s1.array().length > 0 && (s2.array().length === 0 && s3.array().length === 0) ) {
		//draw one circle
		svg.append("circle")
			.style("fill", "#00bf00")
			.style("fill-opacity", 0.5)
			.attr("r", 110)
			.attr("cx", 230)
			.attr("cy", 306)

	} else if (s2.array().length > 0 && s3.array().length === 0) {
		//draw two circles

		svg.append("circle")
			.style("fill", "#00bf00")
			.style("fill-opacity", 0.5)
			.attr("r", 110)
			.attr("cx", 230)
			.attr("cy", 306)

		svg.append("circle")
			.style("fill", "#007fff")
			.style("fill-opacity", 0.5)
			.attr("r", 110)
			.attr("cx", 370)
			.attr("cy", 306)

	} else if (s3.array().length > 0) {
		//draw three circles

		var defs = svg.append("svg:defs");

		defs.append("svg:clipPath")
			.style("fill", "#00bf00")
			.style("stroke", "#ffffff")
			.style("fill-opacity", 0.5)
		    .attr("id", "circle1")
		    .append("svg:circle")
			.attr("r", 110)
			.attr("cx", 230)
			.attr("cy", 306)

		defs.append("svg:clipPath")
			.style("fill", "#007fff")
			.style("stroke", "#ffffff")
			.style("fill-opacity", 0.5)
		    .attr("id", "circle2")
		    .append("svg:circle")
			.attr("r", 110)
			.attr("cx", 370)
			.attr("cy", 306)

		defs.append("svg:clipPath")
			.style("fill", "#ff3433")
			.style("stroke", "#ffffff")
			.style("fill-opacity", 0.5)
		    .attr("id", "circle3")
		    .append("svg:circle")
			.attr("r", 110)
			.attr("cx", 300)
			.attr("cy", 185)

		//cliping 

		svg.append("svg:rect")
		    .attr("clip-path", "url(#circle1)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("fill-opacity", 0.5)
		    .style("stroke", "#ffffff")
		    .style("fill", "#000000")
		    .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "blue");
     		});

		svg.append("svg:rect")
		    .attr("clip-path", "url(#circle2)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("fill-opacity", 0.5)
		    .style("stroke", "#ffffff")
		    .style("fill", "#00ff00")
		    .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "blue");
     		});

		svg.append("svg:rect")
		    .attr("clip-path", "url(#circle3)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("stroke", "#ffffff")
		    .style("fill-opacity", 0.5)
		    .style("fill", "#0000ff")
		    .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "blue");
     		});

		svg.append("svg:g")
		    .attr("clip-path", "url(#circle1)")
		  	.append("svg:rect")
		    .attr("clip-path", "url(#circle2)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("stroke", "#ffffff")
		    .style("fill", "#00ffff")
		       .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "red");
     		});

		svg.append("svg:g")
		    .attr("clip-path", "url(#circle1)")
		  	.append("svg:rect")
		    .attr("clip-path", "url(#circle3)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("stroke", "#ffffff")
		    .style("fill", "#ff00ff")
		       .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "yellow");
       
     		});

		svg.append("svg:g")
		    .attr("clip-path", "url(#circle3)")
		  	.append("svg:g")
		    .attr("clip-path", "url(#circle2)")
		  	.append("svg:rect")
		    .attr("clip-path", "url(#circle1)")
		    .attr("width", w)
		    .attr("height", h)
		    .style("stroke", "#ffffff")
		    .style("fill", "#ffffff")
		    .on("mouseover", function(){
				d3.select(this)
				.transition().attr().duration(750)
         		.style("fill", "#19b2e8")
         		.style('fill-opacity','2');
         		
  
    		 		})
     		.on("mouseout", function(){ 
          		d3.select(this).transition().attr("r", 110)
              	.style("stroke", "black")
              	.style("fill-opacity", 0.5)
             	.style("fill", "blue");

       
     		});


	}

};
drawCircles();



module.exports = drawCircles;



