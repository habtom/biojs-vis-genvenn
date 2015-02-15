
var drawGenven = {};


drawGenven.drawCircles = function() {

	//remove seven ellipse drawing
	d3.select("#e7th1").remove();		
	d3.select("#e7th2").remove();	
	d3.select("#e7th3").remove();	
	d3.select("#e7th4").remove();
	d3.select("#e7th5").remove();	
	d3.select("#e7th6").remove();	
	d3.select("#e7th7").remove();
	d3.select("#e7thTl1").remove();
	d3.select("#e7thTl2").remove();
	d3.select("#e7thTl3").remove();
	d3.select("#e7thTl4").remove();
	d3.select("#e7thTl5").remove();
	d3.select("#e7thTl6").remove();
	d3.select("#e7thTl7").remove();

	//remove seven set intersection
	d3.select("#path7De1ne2").remove();
	d3.select("#path7De2ne3").remove();
	d3.select("#path7De3ne4").remove();
	d3.select("#path7De4ne5").remove();
	d3.select("#path7De5ne6").remove();
	d3.select("#pathDe1ne7").remove();
	d3.select("#pathDe2ne7").remove();
	d3.select("#pathDe3ne7").remove();
	d3.select("#pathDe4ne7").remove();
	d3.select("#pathDe5ne7").remove();
	d3.select("#pathDe6ne7").remove();
	d3.select("#pathDe1ne2ne7").remove();
	d3.select("#pathDe1ne3ne7").remove();
	d3.select("#pathDe2ne3ne7").remove();
	d3.select("#pathDe3ne4ne7").remove();
	d3.select("#pathDe4ne5ne7").remove();
	d3.select("#pathDe5ne6ne7").remove();
	d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
	d3.select("#e7thA1").remove();
	d3.select("#e7thA2").remove();
	d3.select("#e7thA3").remove();
	d3.select("#e7thA4").remove();
	d3.select("#e7thA5").remove();
	d3.select("#e7thA6").remove();
	d3.select("#e7thA7").remove();
	d3.select("#e7thA8").remove();

	//remove five ellipse drawing
	d3.select("#e5th1").remove();		
	d3.select("#e5th2").remove();	
	d3.select("#e5th3").remove();	
	d3.select("#e5th4").remove();
	d3.select("#e5th5").remove();
	d3.select("#e5thTl1").remove();
	d3.select("#e5thTl2").remove();
	d3.select("#e5thTl3").remove();
	d3.select("#e5thTl4").remove();
	d3.select("#e5thTl5").remove();

	//remove five ellipse intersection drawing
	d3.select("#path5De1ne2").remove();
	d3.select("#path5De2ne3").remove();
	d3.select("#path5De3ne4").remove();
	d3.select("#path5De1ne3").remove();
	d3.select("#path5De2ne4").remove();
	d3.select("#path5De1ne4").remove();
	d3.select("#pathDe1ne5").remove();
	d3.select("#pathDe2ne5").remove();
	d3.select("#pathDe3ne5").remove();
	d3.select("#pathDe4ne5").remove();
	d3.select("#pathDe4ne5").remove();
	d3.select("#pathDe1ne2ne5").remove();
	d3.select("#pathDe1ne3ne5").remove();
	d3.select("#pathDe2ne3ne5").remove();
	d3.select("#pathDe3ne4ne5").remove();
	d3.select("#pathDe1ne2ne3ne5").remove();
	d3.select("#pathDe2ne3ne4ne5").remove();
	d3.select("#pathDe1ne2ne3ne4ne5").remove();
	d3.select("#e5thA1").remove();
	d3.select("#e5thA2").remove();
	d3.select("#e5thA3").remove();
	d3.select("#e5thA4").remove();
	d3.select("#e5thA5").remove();
	d3.select("#e5thA6").remove();
	d3.select("#e5thA7").remove();
	d3.select("#e5thA8").remove();
	d3.select("#e5thA9").remove();
	d3.select("#e5thA10").remove();
	d3.select("#e5thA11").remove();

	//remove four ellipse drawing
	d3.select("#e4th1").remove();		
	d3.select("#e4th2").remove();	
	d3.select("#e4th3").remove();	
	d3.select("#e4th4").remove();
	d3.select("#e4thTl1").remove();
	d3.select("#e4thTl2").remove();
	d3.select("#e4thTl3").remove();
	d3.select("#e4thTl4").remove();
	d3.select("#pathDe1ne2").remove();
	d3.select("#pathDe1ne3").remove();
	d3.select("#pathDe1ne4").remove();
	d3.select("#pathDe2ne3").remove();
	d3.select("#pathDe2ne4").remove();
	d3.select("#pathDe3ne4").remove();
	d3.select("#pathDe1ne2ne3").remove();
	d3.select("#pathDe1ne2ne4").remove();
	d3.select("#pathDe1ne3ne4").remove();
	d3.select("#pathDe2ne3ne4").remove();
	d3.select("#pathDe1ne2ne3ne4").remove();
	d3.select("#e4thA1").remove();
	d3.select("#e4thA2").remove();
	d3.select("#e4thA3").remove();
	d3.select("#e4thA4").remove();
	d3.select("#e4thA5").remove();
	d3.select("#e4thA6").remove();
	d3.select("#e4thA7").remove();
	d3.select("#e4thA8").remove();
	d3.select("#e4thA9").remove();
	d3.select("#e4thA10").remove();
	d3.select("#e4thA11").remove();

	//remove circle drawing
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
	d3.select("#paths1ns2").remove();	
	d3.select("#paths1ns3").remove();
	d3.select("#paths2ns3").remove();	
	d3.select("#paths1ns2ns3").remove();	

	//remove triangle drawing
	d3.select("#tr1").remove();	
	d3.select("#tr2").remove();
	d3.select("#tr3").remove();
	d3.select("#tr4").remove();
	d3.select("#tr5").remove();
	d3.select("#tr6").remove();
	d3.select("#trx1").remove();
	d3.select("#trx2").remove();
	d3.select("#trx3").remove();
	d3.select("#trx4").remove();
	d3.select("#trx5").remove();
	d3.select("#trx6").remove();
	d3.select("#pathDt1nt6").remove();
	d3.select("#pathDt2nt6").remove();
	d3.select("#pathDt3nt6").remove();
	d3.select("#pathDt4nt6").remove();
	d3.select("#pathDt5nt6").remove();
	d3.select("#pathDt1nt2nt6").remove();
	d3.select("#pathDt1nt3nt6").remove();
	d3.select("#pathDt2nt3nt6").remove();
	d3.select("#pathDt3nt4nt6").remove();
	d3.select("#pathDt4nt5nt6").remove();
	d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
	d3.select("#tA1").remove();
	d3.select("#tA2").remove();
	d3.select("#tA3").remove();
	d3.select("#tA4").remove();
	d3.select("#tA5").remove();
	d3.select("#tA15").remove();
	
	//three circles with intersection
	//
	if (s1.array().length > 0 && s1.array()[0] != "") {
		//circle one
		gvennStage.append("circle")
				.style("fill", "#00bf00")
				.style("fill-opacity", 0.4)
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

					//Update the tooltip position and value
					d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")
						.select("#v")
						.text(d3.select("#s1_title").node().value);

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
			         .style("fill-opacity", 0.4)
		             .style("stroke-opacity", 0);
			       //Hide the tooltip
					d3.select("#tooltip").classed("hidden", true);      
			     })
		    	.on("mousemove", function() {
			        d3.select("#tooltip")
					.style("left", (d3.event.pageX - 160) + "px")
					.style("top", (d3.event.pageY - 100) + "px")	
		    	})
		    	.on("click", function() {
		    		d3.select("#description").node().value = "Elements in " + d3.select("#s1_title").node().value + ":" + "\n" + s1.array().join("\n");
				})
	    gvennStage.append("text")
	    		.attr("id", "text1")
		        .attr("class", "text")
		        .text(s1.array().length)
		        .attr("x", 215)
		        .attr("y", 310)
		        .attr("fill",  "black")
		gvennStage.append("text")
	    		.attr("id", "c1label")
		        .attr("class", "text")
		        .text(d3.select("#s1_title").node().value)
		        .attr("x", 70)
		        .attr("y", 310)
		        .attr("fill",  "black")		
	}

	if (s2.array().length > 0  && s2.array()[0] != "") {
			//circle two
			gvennStage.append("circle")
				.style("fill", "#007fff")
				.style("fill-opacity", 0.4)
				.attr("r", 110)
				.attr("cx", 370)
				.attr("cy", 306)
				.attr("id", "circle2")
				//circle visual behaviour
				.on("mouseover", function(){ 
			        d3.select(this).transition()
			        	.attr("r", 113)
			        	.style("fill-opacity", 0.6)
			        	.style("stroke", "#259286")
	        			.style("stroke-width", "2")
			        	.style("stroke-opacity", 1);

					//Update the tooltip position and value
					d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")
						.select("#v")
						.text(d3.select("#s2_title").node().value);

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
			         .style("fill-opacity", 0.4)
		             .style("stroke-opacity", 0);
			       //Hide the tooltip
					d3.select("#tooltip").classed("hidden", true);      
			     })
		    	.on("mousemove", function() {
			        d3.select("#tooltip")
					.style("left", (d3.event.pageX + 100) + "px")
					.style("top", (d3.event.pageY - 100) + "px")	
		    	})
		    	.on("click", function() {
		    		d3.select("#description").node().value = "Elements in " + d3.select("#s2_title").node().value + ":" + "\n" + s2.array().join("\n");
				})
		    gvennStage.append("text")
			        .attr("id", "text2")
			        .attr("class", "text")
			        .text(s2.array().length)
			        .attr("x", 365)
			        .attr("y", 310)
				    .attr("fill",  "black")
			gvennStage.append("text")
		    		.attr("id", "c2label")
			        .attr("class", "text")
			        .text(d3.select("#s2_title").node().value)
			        .attr("x", 495)
			        .attr("y", 310)
			        .attr("fill",  "black")		

	}
	if (s3.array().length > 0  && s3.array()[0] != "") {
	//circle three
	gvennStage.append("circle")
		.style("fill", "#ff3433")
		.style("fill-opacity", 0.4)
		.attr("r", 110)
		.attr("cx", 300)
		.attr("cy", 185)
		.attr("id", "circle3")
		//circle visual behaviour
		.on("mouseover", function(){ 
	        d3.select(this).transition()
	        	.attr("r", 113)
	        	.style("fill-opacity", 0.6)
	        	.style("stroke", "#259286")
	        	.style("stroke-width", "2")
	        	.style("stroke-opacity", 1);
	        	

			//Update the tooltip position and value
			d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")
						.select("#v")
						.text(d3.select("#s3_title").node().value);
						
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
	         .style("fill-opacity", 0.4)
             .style("stroke-opacity", 0);

	       //Hide the tooltip
			d3.select("#tooltip").classed("hidden", false);      
	     })
    	.on("mousemove", function() {
	      d3.select("#tooltip")
			.style("left", (d3.event.pageX + 100) + "px")
			.style("top", (d3.event.pageY - 100) + "px")	
    	})
    	.on("click", function() {
    		d3.select("#description").node().value = "Elements in " + d3.select("#s3_title").node().value + ": " + "\n" + s3.array().join("\n");
		})

		    gvennStage.append("text")
			        .attr("class", "text")
			        .attr("id", "text4")
			        .text(s3.array().length)
			        .attr("x", 290)
			        .attr("y", 180)
			        .attr("fill",  "black")
			gvennStage.append("text")
		    		.attr("id", "c3label")
			        .attr("class", "text")
			        .text(d3.select("#s3_title").node().value)
			        .attr("x", 290)
			        .attr("y", 60)
			        .attr("fill",  "black")		

    
    }
    // Intersection texts and areas
	if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "")) {
		//s1ns2
		gvennStage.append("text")
    		.attr("id", "text3")
	        .attr("class", "text")
	        .text(s1.intersection(s2).array().length)
	        .attr("x", 290)
	        .attr("y", 330)
	        .attr("fill",  "black")	
	    //s1ns2 intersection area
		gvennStage.append("path")
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
		        tooltip.text("L1 n L2:\n" + s1.intersection(s2).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + "\n" + s1.intersection(s2).array().join("\n");
			})

	  	}

	if ((s1.array().length > 0  && s1.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
	  		//s1ns3
		    gvennStage.append("text")
	    		.attr("id", "text5")
		        .attr("class", "text")
		        .text(s1.intersection(s3).array().length)
		        .attr("x", 240)
		        .attr("y", 240)
		        .attr("fill",  "black")
			//s1ns3 intersection area
			gvennStage.append("path")
	    		.attr("d", "M 229 197 C 215.85017 197 203.25169 199.33049 191.5625 203.5625 C 200.3863 255.4727 245.57637 295 300 295 C 313.14983 295 325.74831 292.66951 337.4375 288.4375 C 328.6137 236.5273 283.42363 197 229 197 z ")
	    		.attr("id", "paths1ns3")
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
			        tooltip.text("L1 n L3:\n" + s1.intersection(s3).array().join("\n"));
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
			    .on("click", function() {
		    		d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + s1.intersection(s3).array().join("\n");
				})

		}
	if ((s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
		//s2ns3
	   	 gvennStage.append("text")
	        .attr("class", "text")
	        .attr("id", "text6")
	        .text(s2.intersection(s3).array().length)
	        .attr("x", 340)
	        .attr("y", 240)
	        .attr("fill",  "black")
	    //s2ns3 intersection area
		gvennStage.append("path")
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
		        tooltip.text("L2 n L3:\n" + s2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n" + s2.intersection(s3).array().join("\n");
			})

    }
    if ((s1.array().length > 0  && s1.array()[0] != "") && (s2.array().length > 0  && s2.array()[0] != "") && (s3.array().length > 0  && s3.array()[0] != "")) {
    	  //s1ns2ns3
	      gvennStage.append("text")
			.attr("id", "text7")
	        .attr("class", "text")
	        .text(s1ns2.intersection(s3).array().length)
	        .attr("x", 290)
	        .attr("y", 270)
	        .attr("fill",  "black")	
	    //s1ns2ns3 intersection area
		gvennStage.append("path")
    		.attr("d", "M 298.90625 222.0625 C 279.42799 238.5759 265.78574 261.74788 261.46875 288.0625 C 273.46059 292.54799 286.44309 295 300 295 C 313.14983 295 325.74831 292.66951 337.4375 288.4375 C 332.91784 261.84846 318.86249 238.50525 298.90625 222.0625 z ")
    		.attr("id", "paths1ns2ns3")
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
		        tooltip.text("L1 ∩ L2 ∩ L3: \n" + s1ns2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ":\n" + s1ns2.intersection(s3).array().join("\n");
			})

    }

}

drawGenven.drawEllipseBase = function(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY, textXl, textYl) {

	d3.select(eRemove).remove();
	d3.select(tRemove).remove();
	d3.select(tRemove).remove();

	d3.select("#pathDe1ne2").remove();
	d3.select("#pathDe1ne3").remove();
	d3.select("#pathDe1ne4").remove();
	d3.select("#pathDe2ne3").remove();
	d3.select("#pathDe2ne4").remove();
	d3.select("#pathDe3ne4").remove();
	d3.select("#pathDe1ne5").remove();
	d3.select("#pathDe2ne5").remove();
	d3.select("#pathDe3ne5").remove();
	d3.select("#pathDe4ne5").remove();
	d3.select("#pathDe1ne2ne3").remove();
	d3.select("#pathDe1ne2ne4").remove();
	d3.select("#pathDe1ne3ne4").remove();
	d3.select("#pathDe2ne3ne4").remove();
	d3.select("#pathDe1ne2ne3ne4").remove();

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
	d3.select("#text1").remove();	
	d3.select("#text2").remove();	
	d3.select("#text3").remove();	
	d3.select("#text4").remove();	
	d3.select("#text5").remove();	
	d3.select("#text6").remove();	
	d3.select("#text7").remove();
	d3.select("#paths1ns2").remove();	
	d3.select("#paths1ns3").remove();	
	d3.select("#paths1ns2ns3").remove();

	d3.select("#tr1").remove();
	d3.select("#tr2").remove();
	d3.select("#tr3").remove();
	d3.select("#tr4").remove();
	d3.select("#tr5").remove();
	d3.select("#tr6").remove();
	d3.select("#trx1").remove();
	d3.select("#trx2").remove();
	d3.select("#trx3").remove();
	d3.select("#trx4").remove();
	d3.select("#trx5").remove();
	d3.select("#trx6").remove();

	d3.select("#pathDt1nt6").remove();
	d3.select("#pathDt2nt6").remove();
	d3.select("#pathDt3nt6").remove();
	d3.select("#pathDt4nt6").remove();
	d3.select("#pathDt5nt6").remove();
	d3.select("#pathDt1nt2nt6").remove();
	d3.select("#pathDt1nt3nt6").remove();
	d3.select("#pathDt2nt3nt6").remove();
	d3.select("#pathDt3nt4nt6").remove();
	d3.select("#pathDt4nt5nt6").remove();
	d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
	d3.select("#tA1").remove();
	d3.select("#tA2").remove();
	d3.select("#tA3").remove();
	d3.select("#tA4").remove();
	d3.select("#tA5").remove();
	d3.select("#tA15").remove();


	gvennStage.append("ellipse")
			  .attr("cx", cX)
			  .attr("cy", cY)
			  .attr("rx", rX)
			  .attr("ry", rY)
			  .attr("id", eID)
			  .attr("transform", "rotate(" + rotationAng + " " + cX + " " + cY + ")")
			  .style("fill-opacity", 0.4)
			  .style("stroke-opacity", 0)
		      .style("stroke", "#259286")
		      .style("stroke-width", "0")
			  .style("fill", fillColor)
			  .on("mouseover", function(){ 
		        d3.select(this).transition()
		        	.style("fill-opacity", 0.7)
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
		         .style("fill-opacity", 0.4)
	             .style("stroke-opacity", 0);
		       //Hide the tooltip
				d3.select("#tooltip").classed("hidden", true);      
		     })
	    	 .on("mousemove", function() {
			        d3.select("#tooltip")
					.style("left", (d3.event.pageX - 100) + "px")
					.style("top", (d3.event.pageY - 100) + "px")	
			})
	    	.on("click", function() {
		    		d3.select("#description").node().value = "Common list elements in " + listName + "\n" + listContent;
			})
			gvennStage.append("text")
	    		.attr("id", tID)
		        .attr("class", "text")
		        .text(listCount)
		        .attr("x", textX)
		        .attr("y", textY)
		        .attr("fill",  "black")
		    gvennStage.append("text")
	    		.attr("id", tID)
		        .attr("class", "text")
		        .text(listName)
		        .attr("x", textXl)
		        .attr("y", textYl)
		        .attr("fill",  "black")	

}

drawGenven.drawFourSetIntersectionArea = function() {

	d3.select("#pathDe1ne2").remove();
	d3.select("#pathDe1ne3").remove();
	d3.select("#pathDe1ne4").remove();
	d3.select("#pathDe2ne3").remove();
	d3.select("#pathDe2ne4").remove();
	d3.select("#pathDe3ne4").remove();
	d3.select("#pathDe1ne2ne3").remove();
	d3.select("#pathDe1ne2ne4").remove();
	d3.select("#pathDe1ne3ne4").remove();
	d3.select("#pathDe2ne3ne4").remove();
	d3.select("#pathDe1ne2ne3ne4").remove();
	d3.select("#e4thA1").remove();
	d3.select("#e4thA2").remove();
	d3.select("#e4thA3").remove();
	d3.select("#e4thA4").remove();
	d3.select("#e4thA5").remove();
	d3.select("#e4thA6").remove();
	d3.select("#e4thA7").remove();
	d3.select("#e4thA8").remove();
	d3.select("#e4thA9").remove();
	d3.select("#e4thA10").remove();
	d3.select("#e4thA11").remove();

	//L1nL2 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1" + " ∩ " + "L2" + ": \n"  + s1.intersection(s2).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": \n"  + s1.intersection(s2).array().join("\n");
			})

	//L1nL2 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA1")
	        .attr("class", "text")
	        .text(s1.intersection(s2).array().length)
	        .attr("x", 146)
	        .attr("y", 127)
	        .attr("fill",  "black")

	//L1nL3 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1" + " ∩ " + "L3" + ": \n"  + s1.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + s1.intersection(s3).array().join("\n");
			})
	//L1nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA2")
	        .attr("class", "text")
	        .text(s1.intersection(s3).array().length)
	        .attr("x", 194)
	        .attr("y", 311)
	        .attr("fill",  "black")

	//L1nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1" + " ∩ " + "L4" + ": \n"  + s1.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n" + s1.intersection(s4).array().join("\n");
			})
	//L1nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA3")
	        .attr("class", "text")
	        .text(s1.intersection(s4).array().length)
	        .attr("x", 294)
	        .attr("y", 368)
	        .attr("fill",  "black")


	//L2nL3 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L2" + " ∩ " + "L3" + ": \n"  + s2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + "\n" + s2.intersection(s3).array().join("\n");
			})
	//L2nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA4")
	        .attr("class", "text")
	        .text(s2.intersection(s3).array().length)
	        .attr("x", 291)
	        .attr("y", 118)
	        .attr("fill",  "black")

	//L2nL4 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne4)
    		.attr("id", "pathDe2ne4")
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
		        tooltip.text("L2" + " ∩ " + "L4" + ": \n"  + s2.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s2.intersection(s4).array().join("\n");
			})
	//L2nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA5")
	        .attr("class", "text")
	        .text(s2.intersection(s4).array().length)
	        .attr("x", 389)
	        .attr("y", 309)
	        .attr("fill",  "black")


	//L3nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L3" + " ∩ " + "L4" + ": \n"  + s3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s3.intersection(s4).array().join("\n");
			})
	//L3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA6")
	        .attr("class", "text")
	        .text(s3.intersection(s4).array().length)
	        .attr("x", 433)
	        .attr("y", 141)
	        .attr("fill",  "black")

	//L1nL2nL3 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1 ∩ L2 ∩ L3: \n" + s1ns2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value  + ":\n" + s1ns2.intersection(s3).array().join("\n");
			})
	//L1nL2nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA7")
	        .attr("class", "text")
	        .text(s1ns2.intersection(s3).array().length)
	        .attr("x", 223)
	        .attr("y", 201)
	        .attr("fill",  "black")


	//L1nL2nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1 ∩ L2 ∩ L4: \n" + s1ns2.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n" + s1ns2.intersection(s4).array().join("\n");
			})
	//L1nL2nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA8")
	        .attr("class", "text")
	        .text(s1ns2.intersection(s4).array().length)
	        .attr("x", 341)
	        .attr("y", 328)
	        .attr("fill",  "black")



	//L1nL3nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1 n L3 n L4: \n" + s1ns3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n" + s1ns3.intersection(s4).array().join("\n");
			})
	//L1nL3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA9")
	        .attr("class", "text")
	        .text(s1ns3.intersection(s4).array().length)
	        .attr("x", 246)
	        .attr("y", 329)
	        .attr("fill",  "black")


	//L2nL3nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L2 ∩ L3 ∩ L4: \n" + s2ns3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n" + s2ns3.intersection(s4).array().join("\n");
			})
	//L2nL3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA10")
	        .attr("class", "text")
	        .text(s2ns3.intersection(s4).array().length)
	        .attr("x", 366)
	        .attr("y", 208)
	        .attr("fill",  "black")


	//L1nL2nL3nL4 intersection area
    gvennStage.append("path")
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
		        tooltip.text("L1 ∩ L2 ∩ L3 ∩ L4: \n" + s1ns2ns3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value  + ":\n" + s1ns2ns3.intersection(s4).array().join("\n");
			})
	//L1nL2nL3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e4thA11")
	        .attr("class", "text")
	        .text(s1ns2ns3.intersection(s4).array().length)
	        .attr("x", 290)
	        .attr("y", 278)
	        .attr("fill",  "black")
}

drawGenven.drawFiveSetIntersectionArea = function() {
	d3.select("#pathD5e1ne2").remove();
	d3.select("#pathD5e2ne3").remove();
	d3.select("#pathD5e3ne4").remove();
	d3.select("#pathD5e1ne3").remove();
	d3.select("#pathD5e2ne4").remove();
	d3.select("#pathD5e1ne4").remove();
	d3.select("#pathDe1ne5").remove();
	d3.select("#pathDe2ne5").remove();
	d3.select("#pathDe3ne5").remove();
	d3.select("#pathDe4ne5").remove();
	d3.select("#pathDe4ne5").remove();
	d3.select("#pathDe1ne2ne5").remove();
	d3.select("#pathDe1ne3ne5").remove();
	d3.select("#pathDe2ne3ne5").remove();
	d3.select("#pathDe3ne4ne5").remove();
	d3.select("#pathDe1ne2ne3ne5").remove();
	d3.select("#pathDe2ne3ne4ne5").remove();
	d3.select("#pathDe1ne2ne3ne4ne5").remove();
	d3.select("#e5thA1").remove();
	d3.select("#e5thA2").remove();
	d3.select("#e5thA3").remove();
	d3.select("#e5thA4").remove();
	d3.select("#e5thA5").remove();
	d3.select("#e5thA6").remove();
	d3.select("#e5thA7").remove();
	d3.select("#e5thA8").remove();
	d3.select("#e5thA9").remove();
	d3.select("#e5thA10").remove();
	d3.select("#e5thA11").remove();


	//L1nL2 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e1ne2)
    		.attr("id", "pathD5e1ne2")
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
		        tooltip.text("L1 n L2" + ": \n"  + s1.intersection(s2).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": \n"  + s1.intersection(s2).array().join("\n");
			})
	//L1nL2 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA1")
	        .attr("class", "text")
	        .text(s1.intersection(s2).array().length)
	        .attr("x", 351)
	        .attr("y", 157)
	        .attr("fill",  "black")

	//L2nL3 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e2ne3)
    		.attr("id", "pathD5e2ne3")
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
		        tooltip.text("L2 n L3" + ": \n" + s2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + s2.intersection(s3).array().join("\n");
			})
	//L2nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA2")
	        .attr("class", "text")
	        .text(s2.intersection(s3).array().length)
	        .attr("x", 358)
	        .attr("y", 339)
	        .attr("fill",  "black")

	//L3nL4 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e3ne4)
    		.attr("id", "pathD5e3ne4")
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
		        tooltip.text("L3 n L4" + ": \n"  + s3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s3.intersection(s4).array().join("\n");
			})
	//L3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA3")
	        .attr("class", "text")
	        .text(s3.intersection(s4).array().length)
	        .attr("x", 193)
	        .attr("y", 403)
	        .attr("fill",  "black")

	//L1nL4 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e1ne4)
    		.attr("id", "pathD5e1ne4")
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
		        tooltip.text("L1 n L4" + ": \n" + s1.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s1.intersection(s4).array().join("\n");
			})
	//L1nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA4")
	        .attr("class", "text")
	        .text(s1.intersection(s4).array().length)
	        .attr("x", 294)
	        .attr("y", 126)
	        .attr("fill",  "black")

	//L2nL4 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e2ne4)
    		.attr("id", "pathD5e2ne4")
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
		        tooltip.text("L2 n L4: \n" + s2.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s2.intersection(s4).array().join("\n");
			})
	//L2nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA5")
	        .attr("class", "text")
	        .text(s2.intersection(s4).array().length)
	        .attr("x", 103)
	        .attr("y", 336)
	        .attr("fill",  "black")

	//L1nL3 intersection area
    gvennStage.append("path")
    		.attr("d", pathD5e1ne3)
    		.attr("id", "pathD5e1ne3")
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
		        tooltip.text("L1 n L3: \n" + s1.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + s1.intersection(s3).array().join("\n");
			})
	//L1nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA6")
	        .attr("class", "text")
	        .text(s1.intersection(s3).array().length)
	        .attr("x", 265)
	        .attr("y", 401)
	        .attr("fill",  "black")


	//L1nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne5)
    		.attr("id", "pathDe1ne5")
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
		        tooltip.text("L1 n L5: \n" + s1.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s1.intersection(s5).array().join("\n");
			})
	//L1nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA7")
	        .attr("class", "text")
	        .text(s1.intersection(s5).array().length)
	        .attr("x", 180)
	        .attr("y", 112)
	        .attr("fill",  "black")
	
	//L2nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne5)
    		.attr("id", "pathDe2ne5")
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
		        tooltip.text("L2 n L5: \n" + s2.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s2.intersection(s5).array().join("\n");
			})
	//L2nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA8")
	        .attr("class", "text")
	        .text(s2.intersection(s5).array().length)
	        .attr("x", 372)
	        .attr("y", 269)
	        .attr("fill",  "black")

	//L3nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe3ne5)
    		.attr("id", "pathDe3ne5")
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
		        tooltip.text("L3 n L5: \n" + s3.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s3.intersection(s5).array().join("\n");
			})
	//L3nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA9")
	        .attr("class", "text")
	        .text(s3.intersection(s5).array().length)
	        .attr("x", 120)
	        .attr("y", 165)
	        .attr("fill",  "black")

	//L4nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe4ne5)
    		.attr("id", "pathDe4ne5")
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
		        tooltip.text("L4 n L5: \n" + s4.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s4.intersection(s5).array().join("\n");
			})
	//L4nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA10")
	        .attr("class", "text")
	        .text(s4.intersection(s5).array().length)
	        .attr("x", 78)
	        .attr("y", 266)
	        .attr("fill",  "black")
	
	//L1nL2nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne2ne5)
    		.attr("id", "pathDe1ne2ne5")
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
		        tooltip.text("L1 ∩ L2 ∩ L5: \n" + s1ns2.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n" + s1ns2.intersection(s5).array().join("\n");
			})

	//L1nL3nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne3ne5)
    		.attr("id", "pathDe1ne3ne5")
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
		        tooltip.text("L1 ∩ L3 ∩ L5: \n" + s1ns3.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n" + s1ns3.intersection(s5).array().join("\n");
			})

	//L2nL3nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne3ne5)
    		.attr("id", "pathDe2ne3ne5")
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
		        tooltip.text("L2 ∩ L3 ∩ L5: \n" + s2ns3.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n" + s2ns3.intersection(s5).array().join("\n");
			})

	//L3nL4nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe3ne4ne5)
    		.attr("id", "pathDe3ne4ne5")
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
		        tooltip.text("L3 ∩ L4 ∩ L5: \n" + s3ns4.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n" + s3ns4.intersection(s5).array().join("\n");
			})
	//L1nL2nL3nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne2ne3ne5)
    		.attr("id", "pathDe1ne2ne3ne5")
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
		        tooltip.text("L1 n L2 n L3 n L5: \n" + s1ns2ns3.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " +  d3.select("#s2_title").node().value + ", " +  d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s1ns2ns3.intersection(s5).array().join("\n");
			})

	//L2nL3nL4nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne3ne4ne5)
    		.attr("id", "pathDe2ne3ne4ne5")
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
		        tooltip.text("L2 n L3 n L4 n L5: \n" + s2ns3ns4.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in "  +  d3.select("#s2_title").node().value + ", " +  d3.select("#s3_title").node().value + ", " +  d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s2ns3ns4.intersection(s5).array().join("\n");
			})

	//L1nL2nL3nL4nL5 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne2ne3ne4ne5)
    		.attr("id", "pathDe1ne2ne3ne4ne5")
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
		        tooltip.text("L1 ∩ L2 ∩ L3 ∩ L4 ∩ L5: \n" + s1ns2ns3ns4.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " +  d3.select("#s2_title").node().value + ", " +  d3.select("#s3_title").node().value + ", " +  d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n"  + s1ns2ns3ns4.intersection(s5).array().join("\n");
			})

	//L1nL2nL3nL4nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e5thA11")
	        .attr("class", "text")
	        .text(s1ns2ns3ns4.intersection(s5).array().length)
	        .attr("x", 236)
	        .attr("y", 250)
	        .attr("fill",  "black")
	
}
drawGenven.drawSevenSetIntersectionArea = function() {
	//remove seven set intersection
	d3.select("#path7De1ne2").remove();
	d3.select("#path7De2ne3").remove();
	d3.select("#path7De3ne4").remove();
	d3.select("#path7De4ne5").remove();
	d3.select("#path7De5ne6").remove();
	d3.select("#pathDe1ne7").remove();
	d3.select("#pathDe2ne7").remove();
	d3.select("#pathDe3ne7").remove();
	d3.select("#pathDe4ne7").remove();
	d3.select("#pathDe5ne7").remove();
	d3.select("#pathDe6ne7").remove();
	d3.select("#pathDe1ne2ne7").remove();
	d3.select("#pathDe1ne3ne7").remove();
	d3.select("#pathDe2ne3ne7").remove();
	d3.select("#pathDe3ne4ne7").remove();
	d3.select("#pathDe4ne5ne7").remove();
	d3.select("#pathDe5ne6ne7").remove();
	d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
	d3.select("#e7thA1").remove();
	d3.select("#e7thA2").remove();
	d3.select("#e7thA3").remove();
	d3.select("#e7thA4").remove();
	d3.select("#e7thA5").remove();
	d3.select("#e7thA6").remove();
	d3.select("#e7thA7").remove();
	d3.select("#e7thA8").remove();


	//L1nL2 intersection area
    gvennStage.append("path")
    		.attr("d", path7De1ne2)
    		.attr("id", "path7De1ne2")
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
		        tooltip.text("L1 n L2:\n" + s1.intersection(s2).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": \n"  + s1.intersection(s2).array().join("\n");
			})
	//L1nL2 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA1")
	        .attr("class", "text")
	        .text(s1.intersection(s2).array().length)
	        .attr("x", 90)
	        .attr("y", 225)
	        .attr("fill",  "black")

	//L2nL3 intersection area
    gvennStage.append("path")
    		.attr("d", path7De2ne3)
    		.attr("id", "path7De2ne3")
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
		        tooltip.text("L2 n L3:\n" + s2.intersection(s3).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": \n"  + s1.intersection(s2).array().join("\n");
			})
	//L2nL3 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA2")
	        .attr("class", "text")
	        .text(s2.intersection(s3).array().length)
	        .attr("x", 180)
	        .attr("y", 110)
	        .attr("fill",  "black")

	//L3nL4 intersection area
    gvennStage.append("path")
    		.attr("d", path7De3ne4)
    		.attr("id", "path7De3ne4")
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
		        tooltip.text("L3 n L4:\n" + s3.intersection(s4).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": \n"  + s3.intersection(s4).array().join("\n");
			})
	//L3nL4 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA3")
	        .attr("class", "text")
	        .text(s3.intersection(s4).array().length)
	        .attr("x", 333)
	        .attr("y", 112)
	        .attr("fill",  "black")

	//L4nL5 intersection area
    gvennStage.append("path")
    		.attr("d", path7De4ne5)
    		.attr("id", "path7De4ne5")
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
		        tooltip.text("L4 n L5:\n" + s4.intersection(s5).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": \n" + s4.intersection(s5).array().join("\n");
			})
	//L4nL5 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA4")
	        .attr("class", "text")
	        .text(s4.intersection(s5).array().length)
	        .attr("x", 427)
	        .attr("y", 236)
	        .attr("fill",  "black")

	//L5nL6 intersection area
    gvennStage.append("path")
    		.attr("d", path7De5ne6)
    		.attr("id", "path7De5ne6")
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
		        tooltip.text("L5 n L6:\n" + s5.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s5.intersection(s6).array().join("\n");
			})
	//L5nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA5")
	        .attr("class", "text")
	        .text(s5.intersection(s6).array().length)
	        .attr("x", 391)
	        .attr("y", 381)
	        .attr("fill",  "black")

	//L1nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne7)
    		.attr("id", "pathDe1ne7")
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
		        tooltip.text("L1 n L7:\n" + s1.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s1.intersection(s7).array().join("\n");
			})
    //L1nL7 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA6")
	        .attr("class", "text")
	        .text(s1.intersection(s7).array().length)
	        .attr("x", 112)
	        .attr("y", 374)
	        .attr("fill",  "black")

	//L2nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne7)
    		.attr("id", "pathDe2ne7")
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
		        tooltip.text("L2 n L7:\n" + s2.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s2.intersection(s7).array().join("\n");
			})

	//L3nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe3ne7)
    		.attr("id", "pathDe3ne7")
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
		        tooltip.text("L3 n L7:\n" + s3.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s3.intersection(s7).array().join("\n");
			})

	//L4nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe4ne7)
    		.attr("id", "pathDe4ne7")
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
		        tooltip.text("L4 ∩ L7: \n" + s4.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s4.intersection(s7).array().join("\n");
			})

	//L5nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe5ne7)
    		.attr("id", "pathDe5ne7")
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
		        tooltip.text("L5 n L7:\n" + s5.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s5.intersection(s7).array().join("\n");
			})

	//L6nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe6ne7)
    		.attr("id", "pathDe6ne7")
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
		        tooltip.text("L6 n L7:\n" + s6.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s6.intersection(s7).array().join("\n");
			})
	//L6nL7 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA7")
	        .attr("class", "text")
	        .text(s6.intersection(s7).array().length)
	        .attr("x", 248)
	        .attr("y", 441)
	        .attr("fill",  "black")

	//L1nL2nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne2ne7)
    		.attr("id", "pathDe1ne2ne7")
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
		        tooltip.text("L1 ∩ L2 ∩ L7: \n" + s1ns2.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s1ns2.intersection(s7).array().join("\n");
			})

	//L1nL3nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne3ne7)
    		.attr("id", "pathDe1ne3ne7")
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
		        tooltip.text("L1 ∩ L3 ∩ L7: \n" + s1ns3.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s1ns3.intersection(s7).array().join("\n");
			})

	//L2nL3nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe2ne3ne7)
    		.attr("id", "pathDe2ne3ne7")
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
		        tooltip.text("L2 ∩ L3 ∩ L7: \n" + s2ns3.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s2ns3.intersection(s7).array().join("\n");
			})
	
	//L3nL4nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe3ne4ne7)
    		.attr("id", "pathDe3ne4ne7")
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
		        tooltip.text("L3 ∩ L4 ∩ L7: \n" + s3ns4.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s3ns4.intersection(s7).array().join("\n");
			})

	//L4nL5nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe4ne5ne7)
    		.attr("id", "pathDe4ne5ne7")
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
		        tooltip.text("L4 ∩ L5 ∩ L7: \n" + s4ns5.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s4ns5.intersection(s7).array().join("\n");
			})

	//L5nL6nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe5ne6ne7)
    		.attr("id", "pathDe5ne6ne7")
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
		        tooltip.text("L5 ∩ L6 ∩ L7: \n" + s5ns6.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n" + s5ns6.intersection(s7).array().join("\n");
			})

	//L1nL2nL3nL4nL5nL6nL7 intersection area
    gvennStage.append("path")
    		.attr("d", pathDe1ne2ne3ne4ne5ne6ne7)
    		.attr("id", "pathDe1ne2ne3ne4ne5ne6ne7")
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
		        tooltip.text("L1 ∩ L2 ∩ L3 ∩ L4 ∩ L5 ∩ L6 ∩ L7: \n" + s1ns2ns3ns4ns5ns6.intersection(s7).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " +  d3.select("#s2_title").node().value + ", " +  d3.select("#s3_title").node().value + ", " +  d3.select("#s4_title").node().value + ", " +  d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": \n"  + s1ns2ns3ns4ns5ns6.intersection(s7).array().join("\n");
			})
	//L1nL2nL3nL4nL5nL6nL7 intersection area list count text
    gvennStage.append("text")
			.attr("id", "e7thA8")
	        .attr("class", "text")
	        .text(s1ns2ns3ns4ns5ns6.intersection(s7).array().length)
	        .attr("x", 256)
	        .attr("y", 270)
	        .attr("fill",  "black")
	
}
drawGenven.drawTriangle = function(d, fillcolor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove, textXl, textYl) {
		d3.select(trRemove).remove();
		d3.select(tRemove).remove();

		//remove seven ellipse drawing
		d3.select("#e7th1").remove();		
		d3.select("#e7th2").remove();	
		d3.select("#e7th3").remove();	
		d3.select("#e7th4").remove();
		d3.select("#e7th5").remove();	
		d3.select("#e7th6").remove();	
		d3.select("#e7th7").remove();
		d3.select("#e7thTl1").remove();
		d3.select("#e7thTl2").remove();
		d3.select("#e7thTl3").remove();
		d3.select("#e7thTl4").remove();
		d3.select("#e7thTl5").remove();
		d3.select("#e7thTl6").remove();
		d3.select("#e7thTl7").remove();

		//remove seven set intersection
		d3.select("#path7De1ne2").remove();
		d3.select("#path7De2ne3").remove();
		d3.select("#path7De3ne4").remove();
		d3.select("#path7De4ne5").remove();
		d3.select("#path7De5ne6").remove();
		d3.select("#pathDe1ne7").remove();
		d3.select("#pathDe2ne7").remove();
		d3.select("#pathDe3ne7").remove();
		d3.select("#pathDe4ne7").remove();
		d3.select("#pathDe5ne7").remove();
		d3.select("#pathDe6ne7").remove();
		d3.select("#pathDe1ne2ne7").remove();
		d3.select("#pathDe1ne3ne7").remove();
		d3.select("#pathDe2ne3ne7").remove();
		d3.select("#pathDe3ne4ne7").remove();
		d3.select("#pathDe4ne5ne7").remove();
		d3.select("#pathDe5ne6ne7").remove();
		d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
		d3.select("#e7thA1").remove();
		d3.select("#e7thA2").remove();
		d3.select("#e7thA3").remove();
		d3.select("#e7thA4").remove();
		d3.select("#e7thA5").remove();
		d3.select("#e7thA6").remove();
		d3.select("#e7thA7").remove();
		d3.select("#e7thA8").remove();

		//remove five ellipse drawing
		d3.select("#e5th1").remove();		
		d3.select("#e5th2").remove();	
		d3.select("#e5th3").remove();	
		d3.select("#e5th4").remove();
		d3.select("#e5th5").remove();
		d3.select("#e5thTl1").remove();
		d3.select("#e5thTl2").remove();
		d3.select("#e5thTl3").remove();
		d3.select("#e5thTl4").remove();
		d3.select("#e5thTl5").remove();

		//remove five ellipse intersection drawing
		d3.select("#pathD5e1ne2").remove();
		d3.select("#pathD5e2ne3").remove();
		d3.select("#pathD5e3ne4").remove();
		d3.select("#pathD5e1ne3").remove();
		d3.select("#pathD5e2ne4").remove();
		d3.select("#pathD5e1ne4").remove();
		d3.select("#pathDe1ne5").remove();
		d3.select("#pathDe2ne5").remove();
		d3.select("#pathDe3ne5").remove();
		d3.select("#pathDe4ne5").remove();
		d3.select("#pathDe4ne5").remove();
		d3.select("#pathDe1ne2ne5").remove();
		d3.select("#pathDe1ne3ne5").remove();
		d3.select("#pathDe2ne3ne5").remove();
		d3.select("#pathDe3ne4ne5").remove();
		d3.select("#pathDe1ne2ne3ne5").remove();
		d3.select("#pathDe2ne3ne4ne5").remove();
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA1").remove();
		d3.select("#e5thA2").remove();
		d3.select("#e5thA3").remove();
		d3.select("#e5thA4").remove();
		d3.select("#e5thA5").remove();
		d3.select("#e5thA6").remove();
		d3.select("#e5thA7").remove();
		d3.select("#e5thA8").remove();
		d3.select("#e5thA9").remove();
		d3.select("#e5thA10").remove();
		d3.select("#e5thA11").remove();

		//remove four ellipse drawing
		d3.select("#e4th1").remove();		
		d3.select("#e4th2").remove();	
		d3.select("#e4th3").remove();	
		d3.select("#e4th4").remove();
		d3.select("#t1").remove();		
		d3.select("#t2").remove();	
		d3.select("#t3").remove();	
		d3.select("#t4").remove();
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

		d3.select("#pathDe1ne2").remove();
		d3.select("#pathDe1ne3").remove();
		d3.select("#pathDe1ne4").remove();
		d3.select("#pathDe2ne3").remove();
		d3.select("#pathDe2ne4").remove();
		d3.select("#pathDe3ne4").remove();
		d3.select("#pathDe1ne2ne3").remove();
		d3.select("#pathDe1ne2ne4").remove();
		d3.select("#pathDe1ne3ne4").remove();
		d3.select("#pathDe2ne3ne4").remove();
		d3.select("#pathDe1ne2ne3ne4").remove();

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
		d3.select("#paths1ns2").remove();	
		d3.select("#paths1ns3").remove();	
		d3.select("#paths1ns2ns3").remove();	

    	//draw a Triangle
		gvennStage.append("path")
    			  .attr("d", d)
    			  .attr("transform", "scale(1.8) translate(80,45)")
    			  .attr("id", trID)
    			  //.attr("transform", "scale(2)")
				  .style("fill-opacity", 0.4)
				  .style("stroke-opacity", 0)
			      .style("stroke", "#259286")
			      .style("stroke-width", "0")
				  .style("fill", fillcolor) // #BD3613
				  .on("mouseover", function(){ 
			        d3.select(this).transition()
			        	.style("fill-opacity", 0.6)
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
			         .style("fill-opacity", 0.4)
		             .style("stroke-opacity", 0);
			       //Hide the tooltip
					d3.select("#tooltip").classed("hidden", true);      
			     })
		    	 .on("mousemove", function() {
				        d3.select("#tooltip")
						.style("left", (d3.event.pageX - 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")	
				})
		    	.on("click", function() {
		    		d3.select("#description").node().value = "Gene list elements in " + listName + "\n" + listContent;
				})
		gvennStage.append("text")
	    		.attr("id", tID)
		        .attr("class", "text")
		        .text(listCount)
		        .attr("x", textX)
		        .attr("y", textY)
		        .attr("fill",  "black")
		    gvennStage.append("text")
	    		.attr("id", tID)
		        .attr("class", "text")
		        .text(listName)
		        .attr("x", textXl)
		        .attr("y", textYl)
		        .attr("fill",  "black")			  
	
}
drawGenven.drawTriangleIntersectionArea = function() {


	d3.select("#pathDt1nt6").remove();
	d3.select("#pathDt2nt6").remove();
	d3.select("#pathDt3nt6").remove();
	d3.select("#pathDt4nt6").remove();
	d3.select("#pathDt5nt6").remove();
	d3.select("#pathDt1nt2nt6").remove();
	d3.select("#pathDt1nt3nt6").remove();
	d3.select("#pathDt2nt3nt6").remove();
	d3.select("#pathDt3nt4nt6").remove();
	d3.select("#pathDt4nt5nt6").remove();
	d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
	d3.select("#tA1").remove();
	d3.select("#tA2").remove();
	d3.select("#tA3").remove();
	d3.select("#tA4").remove();
	d3.select("#tA5").remove();
	d3.select("#tA15").remove();


	//L1nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt1nt6)
    		.attr("id", "pathDt1nt6")
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
		        tooltip.text("L1 n L6:\n" + s1.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s1.intersection(s6).array().join("\n");
			})
	//L1nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA1")
	        .attr("class", "text")
	        //.attr("transform", "translate(140,160)")// update later
	        .text(s1.intersection(s6).array().length)
	        .attr("x", 227)
	        .attr("y", 365)
	        .attr("fill",  "black")
	
	//L2nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt2nt6)
    		.attr("id", "pathDt2nt6")
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
		        tooltip.text("L2 n L6:\n" + s2.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s2.intersection(s6).array().join("\n");
			})
	//L2nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA2")
	        .attr("class", "text")
	        .text(s2.intersection(s6).array().length)
	        .attr("x", 225)
	        .attr("y", 435)
	        .attr("fill",  "black")

	//L3nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt3nt6)
    		.attr("id", "pathDt3nt6")
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
		        tooltip.text("L3 n L6:\n" + s3.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s3.intersection(s6).array().join("\n");
			})
	//L3nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA3")
	        .attr("class", "text")
	        .text(s3.intersection(s6).array().length)
	        .attr("x", 341)
	        .attr("y", 235)
	        .attr("fill",  "black")

	//L4nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt4nt6)
    		.attr("id", "pathDt4nt6")
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
		        tooltip.text("L4 n L6:\n" + s4.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s4.intersection(s6).array().join("\n");
			})
	//L4nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA4")
	        .attr("class", "text")
	        .text(s4.intersection(s6).array().length)
	        .attr("x", 315)
	        .attr("y", 410)
	        .attr("fill",  "black")

	//L5nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt5nt6)
    		.attr("id", "pathDt5nt6")
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
		        tooltip.text("L5 n L6:\n" + s5.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n"+ s5.intersection(s6).array().join("\n");
			})
	//L5nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA5")
	        .attr("class", "text")
	        .text(s5.intersection(s6).array().length)
	        .attr("x", 272)
	        .attr("y", 447)
	        .attr("fill",  "black")


	//L1nL2nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt1nt2nt6)
    		.attr("id", "pathDt1nt2nt6")
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
		        tooltip.text("L1 ∩ L2 ∩ L6: \n" + s1ns2.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n"  + s1ns2.intersection(s6).array().join("\n");
			})

	//L1nL3nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt1nt3nt6)
    		.attr("id", "pathDt1nt3nt6")
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
		        tooltip.text("L1 ∩ L3 ∩ L6: \n" + s1ns3.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s1ns3.intersection(s6).array().join("\n");
			})

	//L2nL3nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt2nt3nt6)
    		.attr("id", "pathDt2nt3nt6")
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
		        tooltip.text("L2 ∩ L3 ∩ L6: \n" + s2ns3.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s2ns3.intersection(s6).array().join("\n");
			})

	//L3nL4nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt3nt4nt6)
    		.attr("id", "pathDt3nt4nt6")
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
		        tooltip.text("L3 ∩ L4 ∩ L6: \n" + s3ns4.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n"+ s3ns4.intersection(s6).array().join("\n");
			})

	//L4nL5nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt4nt5nt6)
    		.attr("id", "pathDt4nt5nt6")
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
		        tooltip.text("L4 ∩ L5 ∩ L6: \n" + s4ns5.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n" + s4ns5.intersection(s6).array().join("\n");
			})


	//L1nL2nL3nL4nL5nL6 intersection area
    gvennStage.append("path")
    		.attr("d", pathDt1nt2nt3nt4nt5nt6)
    		.attr("id", "pathDt1nt2nt3nt4nt5nt6")
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
		        tooltip.text("L1 ∩ L2 ∩ L3 ∩ L4 ∩ L5 ∩ L6: \n" + s1ns2ns3ns4ns5.intersection(s6).array().join("\n"));
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
		    .on("click", function() {
		    	d3.select("#description").node().value = "Common elements in " +  d3.select("#s1_title").node().value + ", " +  d3.select("#s2_title").node().value + ", " +  d3.select("#s3_title").node().value + ", " +  d3.select("#s4_title").node().value + ", " +  d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": \n"  + s1ns2ns3ns4ns5.intersection(s6).array().join("\n");
			})
	//L1nL2nL3nL4nL5nL6 intersection area list count text
    gvennStage.append("text")
			.attr("id", "tA15")
	        .attr("class", "text")
	        .attr("transform", "translate(140,160)")// update later
	        .text(s1ns2ns3ns4ns5.intersection(s6).array().length)
	        .attr("x", 150.66335)
	        .attr("y", 187.0728)
	        .attr("fill",  "black")

}


module.exports = drawGenven;


	
	

	

	

	
		
	
