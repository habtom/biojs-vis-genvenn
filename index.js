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
d3.select("#s4").on("change" ,function() { 
  update4(this.value.split("\n"));
});

function update4 (listvalue){
	s4 = new sets.Set(listvalue);
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
// var s1ns2_arr;
// var s1ns2;
// var s1ns2ns3_arr;
// var s1ns2ns3;
// var s1ns3_arr;
// var	s1ns3;
// var s2ns3_arr;
// var s2ns3;
// console.log('S1:', s1.array());
// console.log('S2:', s2.array());
// console.log('S3:', s3.array());
// console.log('S1:', s1.array().length);
// console.log('S2:', s2.array().length);
// console.log('S3:', s3.array().length);



function listOperation(){

	s1ns2_arr =  s1.intersection(s2).array();
	s1ns2 = new sets.Set(s1ns2_arr);
	//console.log('Intersection1n2:', s1.intersection(s2).array());
	//console.log('Intersection1n2n3:', s1ns2.intersection(s3).array());
	s1ns2ns3_arr = s1ns2.intersection(s3).array();
	s1ns2ns3 = new sets.Set(s1ns2ns3_arr);
	//console.log('Intersection4:', s1ns2ns3.intersection(s4).array());
	s1ns3_arr =  s1.intersection(s3).array();
	s1ns3 = new sets.Set(s1ns3_arr);

	s2ns3_arr =  s2.intersection(s3).array();
	s2ns3 = new sets.Set(s2ns3_arr);

	/* ------------------------
		--- Intersection Area -----
		---------------------------*/
	var pathDe1ne2 = "m 302.5,170.75 c -80.40208,70.57595 -111.99981,165.95598 -70.375,215.5625 13.81514,16.46425 34.02431,25.86037 57.875,28.625 34.37114,1.98355 63.82591,-7.44199 82.125,-29.25 C 413.62731,336.22697 382.37864,241.26321 302.5,170.75 z";
	var pathDe1ne3 = "m 138.625,99.09375 c -10.96988,0.02969 -21.33596,1.30497 -30.90625,3.84375 -4.18165,52.45044 30.78827,121.03161 94.0625,174.125 63.50104,53.2837 137.42873,75.81225 188.375,62.28125 C 394.33773,286.89336 359.3366,218.31202 296.0625,165.21875 244.50028,121.95291 186.05082,98.965385 138.625,99.09375 z";
	var pathDe1ne4 = "M 219.09375,117.28125 C 154.79807,184.874 132.4219,267.37969 170.125,312.3125 c 39.81947,47.45499 132.52648,36.21548 213.5625,-23.4375 -12.80212,-41.56499 -43.25187,-86.42278 -87.625,-123.65625 -24.73134,-20.75206 -51.04787,-36.82799 -76.96875,-47.9375 z";
	var pathDe2ne3 = "m 383.21875,118.71875 c -25.28545,11.07392 -50.89214,26.86485 -75,47.09375 -45.03024,37.78485 -75.75891,83.42079 -88.21875,125.5 80.69459,58.73812 172.53907,69.55167 212.125,22.375 37.69716,-44.92573 15.36609,-127.38196 -48.90625,-194.96875 z";
	var pathDe2ne4 = "m 465.625,99.6875 c -47.42582,-0.128365 -105.84403,22.85916 -157.40625,66.125 -62.6681,52.58478 -97.58652,120.37362 -94.1875,172.625 50.87181,12.47429 123.72876,-10.16237 186.4375,-62.78125 62.66279,-52.58032 97.61098,-120.34417 94.21875,-172.59375 -9.04812,-2.22058 -18.80263,-3.34723 -29.0625,-3.375 z";
	var pathDe3ne4 = "m 299.8125,55.1875 c -18.19018,9.849175 -36.27686,22.094408 -53.59375,36.625 -49.1807,41.2675 -81.29053,91.895 -91.1875,137.03125 13.15257,16.83827 28.79558,33.15321 46.75,48.21875 31.1951,26.17579 64.9205,44.92127 97.1875,55.625 33.57471,-10.42689 68.90121,-29.67762 101.5,-57.03125 17.72332,-14.87163 33.23383,-30.95441 46.28125,-47.5625 C 436.31645,183.5073 404.46073,133.82968 356.0625,93.21875 337.90221,77.980458 318.89693,65.27149 299.8125,55.1875 z";
	var pathDe1ne2ne3 = "m 302.5,170.75 c -41.90684,36.7853 -70.57624,80.29372 -82.5,120.5625 59.0257,42.96519 124.01341,60.28649 170.15625,48.03125 C 394.19361,288.70104 361.6994,223.00853 302.5,170.75 z";
	var pathDe1ne2ne4 = "M 302.5,170.75 C 243.44073,222.5915 210.73731,287.80149 214.03125,338.4375 260.42236,349.81308 325.09621,332.00576 383.6875,288.875 371.51454,249.35272 343.38439,206.84087 302.5,170.75 z";
	var pathDe1ne3ne4 = "m 219.09375,117.28125 c -33.87334,35.61036 -56.12295,75.35326 -64.0625,111.5625 13.15257,16.83827 28.79558,33.15321 46.75,48.21875 31.1951,26.17579 64.9205,44.92127 97.1875,55.625 27.88608,-8.66024 56.97762,-23.39144 84.71875,-43.8125 -12.80212,-41.56499 -43.25187,-86.42278 -87.625,-123.65625 -24.73134,-20.75206 -51.04787,-36.82799 -76.96875,-47.9375 z";
	var pathDe2ne3ne4 = "m 383.21875,118.71875 c -25.28545,11.07392 -50.89214,26.86485 -75,47.09375 -45.03024,37.78485 -75.75891,83.42079 -88.21875,125.5 25.87056,18.83135 52.89462,32.7256 78.96875,41.375 33.57471,-10.42689 68.90121,-29.67762 101.5,-57.03125 17.72332,-14.87163 33.23383,-30.95441 46.28125,-47.5625 -8.3341,-35.61475 -30.34665,-74.47911 -63.53125,-109.375 z";
	var pathDe1ne2ne3ne4 = "m 302.5,170.75 c -41.90684,36.7853 -70.57624,80.29372 -82.5,120.5625 25.87056,18.83135 52.89462,32.7256 78.96875,41.375 27.88608,-8.66024 56.97762,-23.39144 84.71875,-43.8125 C 371.51454,249.35272 343.38439,206.84087 302.5,170.75 z";



	function drawCircles() {

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
			        tooltip.text("L1∩L2: \n" + s1.intersection(s2).array().join("\n"));
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
				        tooltip.text("L1∩L3: \n" + s1.intersection(s3).array().join("\n"));
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
			        tooltip.text("L2∩L3: \n" + s2.intersection(s3).array().join("\n"));
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
			        tooltip.text("L1∩L2∩L3: \n" + s1ns2.intersection(s3).array().join("\n"));
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
	// if((s4.array().length == 0  && s4.array()[0] == "")) {
	drawCircles();
	// }
	
	

	function drawEllipse(tX, tY, rA, fillColor, textX, textY, listName, listContent, eID, tID, listCount, eRemove, tRemove) {

		d3.select(eRemove).remove();
		d3.select(tRemove).remove();

    	if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "") && (s4.array().length > 0  && s4.array()[0] != "")) {
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
    	
    	//Draw the Ellipse

		gvennStage.append("ellipse")
    			  .attr("cx", 200)
    			  .attr("cy", 50)
    			  .attr("rx", 200)
    			  .attr("ry", 120)
    			  .attr("id", eID)
				  .attr("transform", function(d) { return "translate(" + tX + "," + tY + ") rotate(" + rA + ")" ; })
				  .style("fill-opacity", 0.3)
				  .style("stroke-opacity", 0)
			      .style("stroke", "#259286")
			      .style("stroke-width", "0")
				  .style("fill", fillColor)
				  .on("mouseover", function(){ 
			        d3.select(this).transition()
			        	.style("fill-opacity", 0.5)
			        	.style("stroke", "#259286")
			        	.style("stroke-width", "1")
			        	.style("stroke-opacity", 1);

					//Update the tooltip position and value
					d3.select("#tooltip")
							.style("left", (d3.event.pageX - 100) + "px")
							.style("top", (d3.event.pageY - 100) + "px")
							.select("#v")
							.text(listName);
					d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")						
						.select("#value")
						.text(listContent);

					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
		     	})
		    	.on("mouseout", function(){ 
			       d3.select(this)
			         .style("fill-opacity", 0.2)
		             .style("stroke-opacity", 0);
			       //Hide the tooltip
					d3.select("#tooltip").classed("hidden", true);      
			     })
		    	 .on("mousemove", function() {
				        d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")	
				    })
				gvennStage.append("g")
		    		.append("text")
		    		.attr("id", tID)
			        .attr("class", "text")
			        .text(listCount)
			        .attr("x", textX)
			        .attr("y", textY)
			        .attr("fill",  "black")	

		}
	};
	//drawEllipse(tX, tY, rA, fillColor, textX, textY, listName, listContent, eID, tID, listCount, eRemove, tRemove);
	drawEllipse(340,424,-140,"#D11C24",115,235, "List 1: ", s1.array().join("\n"), "e1", "t1", s1.array().length, "#e1", "#t1"); //red
	drawEllipse(200,348,-40,"#738A05",470,235, "List 2: ", s2.array().join("\n"), "e2", "t2", s2.array().length, "#e2", "#t2"); //green
	drawEllipse(400,352,-140,"#2176C7",210,80, "List 3: ", s3.array().join("\n"), "e3", "t3", s3.array().length, "#e3", "#t3"); //blue
	drawEllipse(138,274,-40,"#0A2933",380,80, "List 4: ", s4.array().join("\n"), "e4", "t4", s4.array().length, "#e4", "#t4"); //dark blue

	
		
	function drawIntersectionArea() {
		d3.select("#tA1").remove();
		d3.select("#tA2").remove();
		d3.select("#tA3").remove();
		d3.select("#tA4").remove();
		d3.select("#tA5").remove();
		d3.select("#tA6").remove();
		d3.select("#tA7").remove();
		d3.select("#tA8").remove();
		d3.select("#tA9").remove();
		d3.select("#tA10").remove();
		d3.select("#tA11").remove();

		if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "") && (s4.array().length > 0  && s4.array()[0] != "")) {
				//L1nL2 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne2)
			    		.attr("id", "pathDe1ne2")
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
					        tooltip.text("L1∩L2: \n" + s1.intersection(s2).array().join("\n"));
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
				//L1nL2 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA1")
				        .attr("class", "text")
				        .text(s1.intersection(s2).array().length)
				        .attr("x", 290)
				        .attr("y", 370)
				        .attr("fill",  "black")	


				//L1nL3 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne3)
			    		.attr("id", "pathDe1ne3")
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
					        tooltip.text("L1∩L3: \n" + s1.intersection(s3).array().join("\n"));
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
				//L1nL3 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA2")
				        .attr("class", "text")
				        .text(s1.intersection(s3).array().length)
				        .attr("x", 145)
				        .attr("y", 145)
				        .attr("fill",  "black")


				//L1nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne4)
			    		.attr("id", "pathDe1ne4")
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
					        tooltip.text("L1∩L4: \n" + s1.intersection(s4).array().join("\n"));
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
				//L1nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA3")
				        .attr("class", "text")
				        .text(s1.intersection(s4).array().length)
				        .attr("x", 180)
				        .attr("y", 305)
				        .attr("fill",  "black")


				//L2nL3 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe2ne3)
			    		.attr("id", "pathDe2ne3")
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
					        tooltip.text("L2∩L3: \n" + s2.intersection(s3).array().join("\n"));
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
				//L2nL3 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA4")
				        .attr("class", "text")
				        .text(s2.intersection(s3).array().length)
				        .attr("x", 405)
				        .attr("y", 305)
				        .attr("fill",  "black")



				//L2nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe2ne4)
			    		.attr("id", "pathDe2ne3")
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
					        tooltip.text("L2∩L4: \n" + s2.intersection(s4).array().join("\n"));
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
				//L2nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA5")
				        .attr("class", "text")
				        .text(s2.intersection(s4).array().length)
				        .attr("x", 440)
				        .attr("y", 145)
				        .attr("fill",  "black")


				//L3nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe3ne4)
			    		.attr("id", "pathDe3ne4")
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
					        tooltip.text("L3∩L4: \n" + s3.intersection(s4).array().join("\n"));
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
				//L3nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA6")
				        .attr("class", "text")
				        .text(s3.intersection(s4).array().length)
				        .attr("x", 290)
				        .attr("y", 140)
				        .attr("fill",  "black")



				//L1nL2nL3 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne2ne3)
			    		.attr("id", "pathDe1ne2ne3")
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
					        tooltip.text("L1∩L2∩L3: \n" + s1ns2.intersection(s3).array().join("\n"));
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
				//L1nL2nL3 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA7")
				        .attr("class", "text")
				        .text(s1ns2.intersection(s3).array().length)
				        .attr("x", 360)
				        .attr("y", 330)
				        .attr("fill",  "black")


				//L1nL2nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne2ne4)
			    		.attr("id", "pathDe1ne2ne4")
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
					        tooltip.text("L1∩L2∩L4: \n" + s1ns2.intersection(s4).array().join("\n"));
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
				//L1nL2nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA8")
				        .attr("class", "text")
				        .text(s1ns2.intersection(s4).array().length)
				        .attr("x", 230)
				        .attr("y", 330)
				        .attr("fill",  "black")



				//L1nL3nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne3ne4)
			    		.attr("id", "pathDe1ne3ne4")
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
					        tooltip.text("L1∩L3∩L4: \n" + s1ns3.intersection(s4).array().join("\n"));
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
				//L1nL3nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA9")
				        .attr("class", "text")
				        .text(s1ns3.intersection(s4).array().length)
				        .attr("x", 210)
				        .attr("y", 205)
				        .attr("fill",  "black")


				//L2nL3nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe2ne3ne4)
			    		.attr("id", "pathDe2ne3ne4")
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
					        tooltip.text("L2∩L3∩L4: \n" + s2ns3.intersection(s4).array().join("\n"));
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
				//L2nL3nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA10")
				        .attr("class", "text")
				        .text(s2ns3.intersection(s4).array().length)
				        .attr("x", 380)
				        .attr("y", 205)
				        .attr("fill",  "black")



				//L1nL2nL3nL4 intersection area
		        gvennStage.append("g")
			    		.append("path")
			    		.attr("d", pathDe1ne2ne3ne4)
			    		.attr("id", "pathDe1ne2ne3ne4")
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
					        tooltip.text("L1∩L2∩L3∩L4: \n" + s1ns2ns3.intersection(s4).array().join("\n"));
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
				//L1nL2nL3nL4 intersection area list count text
			    gvennStage.append("g")
						.append("text")
						.attr("id", "tA11")
				        .attr("class", "text")
				        .text(s1ns2ns3.intersection(s4).array().length)
				        .attr("x", 290)
				        .attr("y", 270)
				        .attr("fill",  "black")
		}
	};
	drawIntersectionArea();
}

module.exports = listOperation;



