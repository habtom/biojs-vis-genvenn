require("d3");

var sets = require('simplesets');

// Some data examples ...

var s1 = new sets.Set([]);
var s2 = new sets.Set([]);
var s3 = new sets.Set([]);
var s4 = new sets.Set([]);

//  var s1 = new sets.Set([
//  					'G000001',
//  					'G000002',
//  					'G000003',
//  					'G000004',
//  					'G000005',
//  					'G000006',
//  					'G000007',
//  					'G000008',
//  					'G000009',
//  					'G000010'
//  					]);
// var s2 = new sets.Set([
// 					'G000005',
// 					'G000006',
// 					'G000007',
// 					'G000008',
// 					'G000009',
// 					'G000010',
// 					'G000011',
// 					'G000012',
// 					'G000013',
// 					'G000014'
// 					]);
// var s3 = new sets.Set([
// 					'G000007',
// 					'G000008',
// 					'G000009',
// 					'G000010',
// 					'G000011',
// 					'G000006',
// 					'G000007',
// 					'G000008',
// 					'G000009',
// 					'G000010'
// 					]);

// var s4 = new sets.Set([
// 					'G000001',
// 					'G000002',
// 					'G000003',
// 					'G000004',
// 					'G000005',
// 					'G000006',
// 					'G000016',
// 					'G000008',
// 					'G000009',
// 					'G000010'
// 					]);

///once the value changed it calls fucntion update to update the list
d3.select("#s1").on("change" ,function() { 
  update(this.value.split("\n"));
});

function update (listvalue){
	s1 = new sets.Set(listvalue);
	listOperation();
}

d3.select("#s2").on("change" ,function() { 
  update2(this.value.split("\n"));
});

function update2 (listvalue){
	s2 = new sets.Set(listvalue);
	listOperation();
}

d3.select("#s3").on("change" ,function() { 
  update3(this.value.split("\n"));
});

function update3 (listvalue){
	s3 = new sets.Set(listvalue);
	listOperation();
}
var w = 600,
	h = 420;

var gvennStage = d3.select("#first")
		.append("svg")
		.attr("width", w)
		.attr("height", h)

var tooltip = d3.select("body").append("div")
    .attr("class", "genvenntooltip");

// console.log('s1 =', s1.array());
// console.log('s2 =', s2.array());
// console.log('s3 =', s2.array());

// // Do some set operations.
//console.log('Intersection:', s1.intersection(s2).array());
//console.log('s1 - s2:', s1.difference(s2).array());
// console.log('s2 - s1:', s2.difference(s1).array());
// console.log('Union:', s1.union(s2).array());
var s1ns2_arr;
var s1ns2;
var s1ns2ns3_arr;
var s1ns2ns3;



function listOperation(){
	console.log('S1:', s1.array());
	console.log('S2:', s2.array());
	console.log('S3:', s3.array());
	console.log('S1:', s1.array().length);
	console.log('S2:', s2.array().length);
	console.log('S3:', s3.array().length);
	s1ns2_arr =  s1.intersection(s2).array();
	s1ns2 = new sets.Set(s1ns2_arr);
	console.log('Intersection1n2:', s1.intersection(s2).array());
	console.log('Intersection1n2n3:', s1ns2.intersection(s3).array());
	s1ns2ns3_arr = s1ns2.intersection(s3).array();
	s1ns2ns3 = new sets.Set(s1ns2ns3_arr);




	function drawCircles() {
		// venn stage

		d3.select("#circle1").remove();		
		d3.select("#circle2").remove();	
		d3.select("#circle3").remove();	
		d3.select("#text1").remove();	
		d3.select("#text2").remove();	
		d3.select("#text3").remove();	
		d3.select("#text4").remove();	
		d3.select("#text5").remove();	
		d3.select("#text6").remove();	
		d3.select("#text7").remove();	
		//d3.select("#text1, #text2,#text3,#text4,#text5,#text6,#text7").remove();
		
		//console.log("S1 first " + s1.array()[0]);
		//three circles with intersection
		//
		if (s1.array().length > 0 && s1.array()[0] != "") {
			//circle one
			gvennStage.append("g")
				.append("circle")
					.style("fill", "#00bf00")
					.style("fill-opacity", 0.3)
					.style("stroke-opacity", 1)
			    	.style("stroke", "white")
			    	.style("stroke-width", "2")
					.attr("r", 110)
					.attr("cx", 230)
					.attr("cy", 306)
					.attr("id", "circle1")
					//circle visual behaviour
					.on("mouseover", function(){ 
				        d3.select(this).transition()
				        	.attr("r", 113)
				        	.style("fill-opacity", 0.6)
				        	.style("stroke", "#259286")
		        			.style("stroke-width", "2")
				        	.style("stroke-opacity", 1);
				        	//.duration(750);

						//Update the tooltip position and value
						d3.select("#tooltip")
							.style("left", (d3.event.pageX - 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")
							.select("#v")
							.text("List 1: ");

						d3.select("#tooltip")
							.style("left", (d3.event.pageX - 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")							
							.select("#value")
							.text(s1.array().join("\n"));

						//Show the tooltip
						d3.select("#tooltip").classed("hidden", false);
			     	})
			    	.on("mouseout", function(){ 
				       d3.select(this)
				         .transition().attr("r", 110)
				         .style("fill-opacity", 0.5)
			             .style("stroke-opacity", 0);
				       //Hide the tooltip
						d3.select("#tooltip").classed("hidden", true);      
				     })
			    	.on("mousemove", function() {
				        d3.select("#tooltip")
						.style("left", (d3.event.pageX - 160) + "px")
						.style("top", (d3.event.pageY - 100) + "px")	
			    	})
		    gvennStage.append("g")
		    		.append("text")
		    		.attr("id", "text1")
			        .attr("class", "text")
			        .text(s1.array().length)
			        .attr("x", 215)
			        .attr("y", 310)
			        .attr("fill",  "black")
		}
		
		if (s2.array().length > 0  && s2.array()[0] != "") {
				//circle two
				gvennStage.append("g")
					.append("circle")
					.style("fill", "#007fff")
					.style("fill-opacity", 0.3)
					.attr("r", 110)
					.attr("cx", 370)
					.attr("cy", 306)
					.attr("id", "circle2")
					//circle visual behaviour
					.on("mouseover", function(){ 
				        d3.select(this).transition()
				        	.attr("r", 113)
				        	.style("fill-opacity", 0.5)
				        	.style("stroke", "#259286")
		        			.style("stroke-width", "2")
				        	.style("stroke-opacity", 1);
				        	//.duration(750);

						//Update the tooltip position and value
						d3.select("#tooltip")
							.style("left", (d3.event.pageX - 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")
							.select("#v")
							.text("List 2: ");

						d3.select("#tooltip")
							.style("left", (d3.event.pageX + 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")							
							.select("#value")
							.text(s2.array().join("\n"));

						//Show the tooltip
						d3.select("#tooltip").classed("hidden", false);
			     	})
			    	.on("mouseout", function(){ 
				       d3.select(this)
				         .transition().attr("r", 110)
				         .style("fill-opacity", 0.3)
			             .style("stroke-opacity", 0);
				       //d3.select("#first").select(".text").remove();
				       //Hide the tooltip
						d3.select("#tooltip").classed("hidden", true);      
				     })
			    	.on("mousemove", function() {
				        d3.select("#tooltip")
						.style("left", (d3.event.pageX + 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")	
			    	})
			    gvennStage.append("g")
			    		.append("text")
				        //.transition().delay(750)
				        .attr("id", "text2")
				        .attr("class", "text")
				        .text(s2.array().length)
				        .attr("x", 365)
				        .attr("y", 310)
				        .attr("fill",  "black")	


		}
		if (s3.array().length > 0  && s3.array()[0] != "") {
		//circle three
		gvennStage.append("g")
			.append("circle")
			.style("fill", "#ff3433")
			.style("fill-opacity", 0.3)
			.attr("r", 110)
			.attr("cx", 300)
			.attr("cy", 185)
			.attr("id", "circle3")
			//circle visual behaviour
			.on("mouseover", function(){ 
		        d3.select(this).transition()
		        	.attr("r", 113)
		        	.style("fill-opacity", 0.5)
		        	.style("stroke", "#259286")
		        	.style("stroke-width", "2")
		        	.style("stroke-opacity", 1);
		        	

				//Update the tooltip position and value
				d3.select("#tooltip")
							.style("left", (d3.event.pageX - 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")
							.select("#v")
							.text("List 3: ");
							
				d3.select("#tooltip")
					.style("left", (d3.event.pageX + 100) + "px")
					.style("top", (d3.event.pageY - 100) + "px")							
					.select("#value")
					.text(s3.array().join("\n"));

				//Show the tooltip
				d3.select("#tooltip").classed("hidden", true);
	     	})
	    	.on("mouseout", function(){ 
		       d3.select(this)
		         .transition().attr("r", 110)
		         .style("fill-opacity", 0.3)
	             .style("stroke-opacity", 0);

		       //Hide the tooltip
				d3.select("#tooltip").classed("hidden", false);      
		     })
	    	.on("mousemove", function() {
		      d3.select("#tooltip")
				.style("left", (d3.event.pageX + 100) + "px")
				.style("top", (d3.event.pageY - 100) + "px")	
	    	})

	    gvennStage.append("g")
	    		.append("text")
		        .attr("class", "text")
		        .attr("id", "text4")
		        .text(s3.array().length)
		        .attr("x", 290)
		        .attr("y", 180)
		        .attr("fill",  "black")
  		
		
		
	    
	    }
	    // Intersection texts and areas
		if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "")) {
			//s1ns2
			gvennStage.append("g")
	    		.append("text")
	    		.attr("id", "text3")
		        .attr("class", "text")
		        .text(s1.intersection(s2).array().length)
		        .attr("x", 290)
		        .attr("y", 330)
		        .attr("fill",  "black")	
		    //s1ns2 intersection area
			gvennStage.append("g")
	    		.append("path")
	    		.attr("d", "M 300.75 222.8125 C 276.93022 242.66564 261.78125 272.56713 261.78125 306 C 261.78125 339.43287 276.93022 369.33436 300.75 389.1875 C 324.27725 369.15513 339.21875 339.32176 339.21875 306 C 339.21875 272.67824 324.27725 242.84487 300.75 222.8125 z ")
	    		.attr("id", "paths1ns2")
		        .style("fill", "black")
				.style("fill-opacity", 0)
				.style("stroke", "white")
				.style("stroke-width", "2")
				.style("stroke-opacity", 0)
			    .on("mouseover", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", .1)
			            .style("stroke-opacity", 1);
			       	tooltip.transition().style("opacity", .9);
			        tooltip.text(s1.intersection(s2).array().join("\n"));
			    })
			    .on("mouseout", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", 0)
			            .style("stroke-opacity", 0);
			        tooltip.transition().style("opacity", 0);
			    })
			    .on("mousemove", function() {
			        tooltip.style("left", (d3.event.pageX + 100) + "px")
			             	.style("top", (d3.event.pageY - 100) + "px");
			    })

		  	}

		if ((s1.array().length > 0  && s1.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
		  		//s1ns3
			    gvennStage.append("g")
		    		.append("text")
		    		.attr("id", "text5")
			        .attr("class", "text")
			        .text(s1.intersection(s3).array().length)
			        .attr("x", 240)
			        .attr("y", 240)
			        .attr("fill",  "black")	
				//s1ns3 intersection area
				gvennStage.append("g")
		    		.append("path")
		    		.attr("d", "M 229 197 C 215.85017 197 203.25169 199.33049 191.5625 203.5625 C 200.3863 255.4727 245.57637 295 300 295 C 313.14983 295 325.74831 292.66951 337.4375 288.4375 C 328.6137 236.5273 283.42363 197 229 197 z ")
		    		.attr("id", "paths1ns2")
			        .style("fill", "black")
					.style("fill-opacity", 0)
					.style("stroke", "white")
					.style("stroke-width", "2")
					.style("stroke-opacity", 0)
				    .on("mouseover", function() {
				        d3.select(this).transition()
				            .style("fill-opacity", .1)
				            .style("stroke-opacity", 1);
				       	tooltip.transition().style("opacity", .9);
				        tooltip.text(s1.intersection(s3).array().join("\n"));
				    })
				    .on("mouseout", function() {
				        d3.select(this).transition()
				            .style("fill-opacity", 0)
				            .style("stroke-opacity", 0);
				        tooltip.transition().style("opacity", 0);
				    })
				    .on("mousemove", function() {
				        tooltip.style("left", (d3.event.pageX + 100) + "px")
				             	.style("top", (d3.event.pageY - 100) + "px");
				    })

			}
		if ((s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
			//s2ns3
		   	 gvennStage.append("g")
	    		.append("text")
		        .attr("class", "text")
		        .attr("id", "text6")
		        .text(s2.intersection(s3).array().length)
		        .attr("x", 340)
		        .attr("y", 240)
		        .attr("fill",  "black")
		    //s2ns3 intersection area
			gvennStage.append("g")
	    		.append("path")
	    		.attr("d", "M 370 196 C 315.35853 196 270.03512 235.8454 261.46875 288.0625 C 273.46059 292.54799 286.44309 295 300 295 C 354.64147 295 399.96488 255.1546 408.53125 202.9375 C 396.53941 198.45201 383.55691 196 370 196 z ")
	    		.attr("id", "paths1ns2")
		        .style("fill", "black")
				.style("fill-opacity", 0)
				.style("stroke", "white")
				.style("stroke-width", "2")
				.style("stroke-opacity", 0)
			    .on("mouseover", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", .1)
			            .style("stroke-opacity", 1);
			       	tooltip.transition().style("opacity", .9);
			        tooltip.text(s2.intersection(s3).array().join("\n"));
			    })
			    .on("mouseout", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", 0)
			            .style("stroke-opacity", 0);
			        tooltip.transition().style("opacity", 0);
			    })
			    .on("mousemove", function() {
			        tooltip.style("left", (d3.event.pageX + 100) + "px")
			             	.style("top", (d3.event.pageY - 100) + "px");
			    })

	    }
	    if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
	    	  //s1ns2ns3
		      gvennStage.append("g")
				.append("text")
				.attr("id", "text7")
		        .attr("class", "text")
		        .text(s1ns2.intersection(s3).array().length)
		        .attr("x", 290)
		        .attr("y", 270)
		        .attr("fill",  "black")	
		    //s1ns2ns3 intersection area
			gvennStage.append("g")
	    		.append("path")
	    		.attr("d", "M 298.90625 222.0625 C 279.42799 238.5759 265.78574 261.74788 261.46875 288.0625 C 273.46059 292.54799 286.44309 295 300 295 C 313.14983 295 325.74831 292.66951 337.4375 288.4375 C 332.91784 261.84846 318.86249 238.50525 298.90625 222.0625 z ")
	    		.attr("id", "paths1ns2")
		        .style("fill", "black")
				.style("fill-opacity", 0)
				.style("stroke", "white")
				.style("stroke-width", "2")
				.style("stroke-opacity", 0)
			    .on("mouseover", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", .1)
			            .style("stroke-opacity", 1);
			       	tooltip.transition().style("opacity", .9);
			        tooltip.text(s1ns2.intersection(s3).array().join("\n"));
			    })
			    .on("mouseout", function() {
			        d3.select(this).transition()
			            .style("fill-opacity", 0)
			            .style("stroke-opacity", 0);
			        tooltip.transition().style("opacity", 0);
			    })
			    .on("mousemove", function() {
			        tooltip.style("left", (d3.event.pageX + 100) + "px")
			             	.style("top", (d3.event.pageY - 100) + "px");
			    })

	    }
	};
	drawCircles();
	
	//console.log('Intersection4:', s1ns2ns3.intersection(s4).array());
	
}

module.exports = listOperation;



