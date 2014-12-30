var w = 600,
	h = 420;

var gvennStage = d3.select("#first")
		.append("svg")
		.attr("width", w)
		.attr("height", h)
		//.style("background", "yellow")

var tooltip = d3.select("body").append("div")
    .attr("class", "genvenntooltip");	



function drawEllipse(tx, ty, ra, fillcolor, text_x, text_y ) {

    //Draw the Ellipse
	var e1 = gvennStage.append("ellipse")
    			  .attr("cx", 200)
    			  .attr("cy", 50)
    			  .attr("rx", 200)
    			  .attr("ry", 120)
				  .attr("transform", function(d) { return "translate(" + tx + "," + ty + ") rotate(" + ra + ")" ; })
				  .style("fill-opacity", 0.3)
				  .style("stroke-opacity", 0)
			      .style("stroke", "#259286")
			      .style("stroke-width", "0")
				  .style("fill", fillcolor)
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
						.select("#value")
						.text("G000001,G000002");

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
		    		.attr("id", "text1")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", text_x)
			        .attr("y", text_y)
			        .attr("fill",  "black")		  

}

//drawEllipse(tx, ty,  ra,fillcolor, text_x, text_y);
drawEllipse(200,348,-40,"#738A05",470,235); //green
drawEllipse(340,424,-140,"#D11C24",115,235); //red
drawEllipse(138,274,-40,"#0A2933",380,80); //dark blue
drawEllipse(400,352,-140,"#2176C7",210,80);	//blue

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


function drawIntersectionArea() {
			//E1nE2 intersection area
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
				        tooltip.text("E1nE2:");
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
			//E1nE2 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 290)
			        .attr("y", 370)
			        .attr("fill",  "black")	


			//E1nE3 intersection area
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
				        tooltip.text("E1nE3:");
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
			//E1nE3 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 145)
			        .attr("y", 145)
			        .attr("fill",  "black")


			//E1nE4 intersection area
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
				        tooltip.text("E1nE4:");
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
			//E1nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 180)
			        .attr("y", 305)
			        .attr("fill",  "black")


			//E2nE3 intersection area
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
				        tooltip.text("E2nE3:");
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
			//E2nE3 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 405)
			        .attr("y", 305)
			        .attr("fill",  "black")



			//E2nE4 intersection area
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
				        tooltip.text("E2nE4:");
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
			//E2nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 440)
			        .attr("y", 145)
			        .attr("fill",  "black")


			//E3nE4 intersection area
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
				        tooltip.text("E3nE4:");
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
			//E3nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 290)
			        .attr("y", 140)
			        .attr("fill",  "black")



			//E1nE2nE3 intersection area
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
				        tooltip.text("E1nE2nE3:");
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
			//E1nE2nE3 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 360)
			        .attr("y", 330)
			        .attr("fill",  "black")


			//E1nE2nE4 intersection area
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
				        tooltip.text("E1nE2nE4:");
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
			//E1nE2nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 230)
			        .attr("y", 330)
			        .attr("fill",  "black")



			//E1nE3nE4 intersection area
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
				        tooltip.text("E1nE3nE4:");
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
			//E1nE3nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 210)
			        .attr("y", 205)
			        .attr("fill",  "black")


			//E2nE3nE4 intersection area
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
				        tooltip.text("E2nE3nE4:");
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
			//E2nE3nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 380)
			        .attr("y", 205)
			        .attr("fill",  "black")



			//E1nE2nE3nE4 intersection area
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
				        tooltip.text("E1nE2nE3nE4:");
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
			//E1nE2nE3nE4 intersection area list count text
		    gvennStage.append("g")
					.append("text")
					.attr("id", "text7")
			        .attr("class", "text")
			        .text("1")
			        .attr("x", 290)
			        .attr("y", 270)
			        .attr("fill",  "black")


}
drawIntersectionArea();