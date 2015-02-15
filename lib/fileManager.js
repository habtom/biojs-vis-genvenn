
var fileManager = {};



// fileManager.uploadFile = function() {
// 		//upload file
// 		d3.select("#files").on("change" ,function() {
// 			var files = this.files;
// 			if (!files.length) { return; }

// 			var file = files[0];
// 			var reader = new FileReader();

// 			reader.onloadend = function(evt) {
// 		      if (evt.target.readyState == FileReader.DONE) { 
// 		       // try{	
// 			    var listvalue;
// 				s1 = new sets.Set([]);
// 				s2 = new sets.Set([]);
// 				s3 = new sets.Set([]);
// 				s4 = new sets.Set([]);
// 				s5 = new sets.Set([]);
// 				s6 = new sets.Set([]);
// 				s7 = new sets.Set([]);
// 				d3.select('#s1').node().value = ""; 
// 				d3.select('#s2').node().value = ""; 
// 				d3.select('#s3').node().value = ""; 
// 				d3.select('#s4').node().value = ""; 
// 				d3.select('#s5').node().value = ""; 
// 				d3.select('#s6').node().value = ""; 
// 				d3.select('#s7').node().value = ""; 
// 				d3.select('#s1_title').node().value = "List 1"; 
// 				d3.select('#s2_title').node().value = "List 2"; 
// 				d3.select('#s3_title').node().value = "List 3"; 
// 				d3.select('#s4_title').node().value = "List 4"; 
// 				d3.select('#s5_title').node().value = "List 5"; 
// 				d3.select('#s6_title').node().value = "List 6"; 
// 				d3.select('#s7_title').node().value = "List 7"; 
// 			    var json = JSON.parse(evt.target.result);
// 			    var counter = 0 ;
// 		      for (key in json) {
// 		      	counter++;
// 		      	if(counter === 8){break;}
// 			    d3.select("#s"+counter+"_title").node().value = key ;
// 			    for (subKey in json[key]) {
// 			            d3.select('#s'+counter).node().value += json[key][subKey]; 
// 			            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
// 			            	 d3.select('#s'+counter).node().value += "\n";
// 			            }
// 			    }
				
// 			}

// 				s1 = new sets.Set(d3.select("#s1").node().value.split("\n"));
// 				s2 = new sets.Set(d3.select("#s2").node().value.split("\n"));
// 				s3 = new sets.Set(d3.select("#s3").node().value.split("\n"));
// 				s4 = new sets.Set(d3.select("#s4").node().value.split("\n"));
// 				s5 = new sets.Set(d3.select("#s5").node().value.split("\n"));
// 				s6 = new sets.Set(d3.select("#s6").node().value.split("\n"));
// 				s7 = new sets.Set(d3.select("#s7").node().value.split("\n"));
// 		    listOperation();

// 		      }
// 		    };

// 		    var blob = file.slice( 0, file.size);
// 		    reader.readAsBinaryString(blob);
// 		    d3.select('#files').node().value="";
// 		});
// }


// fileManager.exportFile = function() {
// 		d3.select("#DownloadButton").on("click" ,function() {       
// 		// grab the content of the form field and place it into a variable
// 	    var textToWrite = "";

// 	    if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
// 	    }
// 	    if(d3.select("#circle1").empty() != true && d3.select("#circle3").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
// 	    }
// 	    if(d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
// 	    }
// 	    if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
// 	    }
// 	    if(d3.select("#e4th1").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
// 	    }
// 	    if(d3.select("#e5th1").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
	        
// 	        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";

// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";

// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";

	    
// 	    }
// 	    if(d3.select("#tr1").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3.intersection(s6).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4.intersection(s6).array().join("  ") + "\n";
// 	       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s5.intersection(s6).array().join("  ") + "\n";
	       
// 	        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns5.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns5.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4ns5.intersection(s6).array().join("  ") + "\n";

// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns5.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns5.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4ns5.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4ns5.intersection(s6).array().join("  ") + "\n";

// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";

// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
	    
// 	    }
// 	    if(d3.select("#e7th1").empty() != true){
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3.intersection(s6).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3.intersection(s7).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
// 	        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4.intersection(s6).array().join("  ") + "\n";
// 	       	textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4.intersection(s7).array().join("  ") + "\n";
// 	       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s5.intersection(s6).array().join("  ") + "\n";
// 	       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s5.intersection(s7).array().join("  ") + "\n";
// 	       	textToWrite += "Common elements in " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s6.intersection(s7).array().join("  ") + "\n";
	       
// 	        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns5.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns5.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns6.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns5.intersection(s6).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns5.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns6.intersection(s7).array().join("  ") + "\n";
// 	 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s5ns6.intersection(s7).array().join("  ") + "\n";

// 	 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns6.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns5.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns5.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns6.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4ns5.intersection(s6).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4ns5.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns5ns6.intersection(s7).array().join("  ") + "\n";
// 	    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns5ns6.intersection(s7).array().join("  ") + "\n";

// 	    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";

// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
// 			textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
	    

// 			textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns5ns7.intersection(s7).array().join("  ") + "\n";
// 	    }
// 	    //  create a new Blob (html5 magic) that conatins the data from your form feild
// 	    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
// 		// Specify the name of the file to be saved
// 		    var fileNameToSaveAs = "Lists Intersections.txt";
		    
// 		// Optionally allow the user to choose a file name by providing 
// 		// an imput field in the HTML and using the collected data here
// 		// var fileNameToSaveAs = txtFileName.text;

// 		// create a link for our script to 'click'
// 		    var downloadLink = document.createElement("a");
// 		//  supply the name of the file (from the var above).
// 		// you could create the name here but using a var
// 		// allows more flexability later.
// 		    downloadLink.download = fileNameToSaveAs;
// 		// provide text for the link. This will be hidden so you
// 		// can actually use anything you want.
// 		    downloadLink.innerHTML = "My Hidden Link";
		    
// 		// allow our code to work in webkit & Gecko based browsers
// 		// without the need for a if / else block.
// 		    window.URL = window.URL || window.webkitURL;
		          
// 		// Create the link Object.
// 		    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
// 		// when link is clicked call a function to remove it from
// 		// the DOM in case user wants to save a second file.
// 		    //downloadLink.onclick = destroyClickedElement;
// 		// make sure the link is hidden.
// 		    downloadLink.style.display = "none";
// 		// add the link to the DOM
// 		    document.body.appendChild(downloadLink);
		    
// 		// click the new link
// 		    downloadLink.click();
// 		});
	
// }

fileManager.exportFile2 = function() {
		d3.select("#DownloadButton2").on("click" ,function() {       
		// grab the content of the form field and place it into a variable
	    var textToWrite = d3.select("#description").node().value;
	    //  create a new Blob (html5 magic) that conatins the data from your form feild
	    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		// Specify the name of the file to be saved
	    var fileNameToSaveAs = "Intersection of interest.txt";
	    
		// Optionally allow the user to choose a file name by providing 
		// an imput field in the HTML and using the collected data here
		// var fileNameToSaveAs = txtFileName.text;

		// create a link for our script to 'click'
	    var downloadLink = document.createElement("a");
		//  supply the name of the file (from the var above).
		// you could create the name here but using a var
		// allows more flexability later.
	    downloadLink.download = fileNameToSaveAs;
		// provide text for the link. This will be hidden so you
		// can actually use anything you want.
	    downloadLink.innerHTML = "My Hidden Link";
	    
		// allow our code to work in webkit & Gecko based browsers
		// without the need for a if / else block.
	    window.URL = window.URL || window.webkitURL;
	          
		// Create the link Object.
	    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		// when link is clicked call a function to remove it from
		// the DOM in case user wants to save a second file.
	    //downloadLink.onclick = destroyClickedElement;
		// make sure the link is hidden.
	    downloadLink.style.display = "none";
		// add the link to the DOM
	    document.body.appendChild(downloadLink);
	    
		// click the new link
	    downloadLink.click();
		});
	
}

// fileManager.loadSampleData = function() {
// 	d3.select("#clear1").on("click" ,function(){
// 		d3.select("#s1").node().value = "";
// 		s1 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear2").on("click" ,function(){
// 		d3.select("#s2").node().value = "";
// 		s2 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear3").on("click" ,function(){
// 		d3.select("#s3").node().value = "";
// 		s3 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear4").on("click" ,function(){
// 		d3.select("#s4").node().value = "";
// 		s4 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear5").on("click" ,function(){
// 		d3.select("#s5").node().value = "";
// 		s5 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear6").on("click" ,function(){
// 		d3.select("#s6").node().value = "";
// 		s6 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#clear7").on("click" ,function(){
// 		d3.select("#s7").node().value = "";
// 		s7 = new sets.Set([]);
// 		listOperation();
// 	});
// 	d3.select("#button").on("click" ,function() { 

// 		var json = require('./sample.json');
// 		//var json = require(path);
// 		//console.log(json);
// 		var listvalue;
// 		var counter = 0;
// 		s1 = new sets.Set([]);
// 		s2 = new sets.Set([]);
// 		s3 = new sets.Set([]);
// 		s4 = new sets.Set([]);
// 		s5 = new sets.Set([]);
// 		s6 = new sets.Set([]);
// 		s7 = new sets.Set([]);
// 		d3.select('#s1').node().value = ""; 
// 		d3.select('#s2').node().value = ""; 
// 		d3.select('#s3').node().value = ""; 
// 		d3.select('#s4').node().value = ""; 
// 		d3.select('#s5').node().value = ""; 
// 		d3.select('#s6').node().value = ""; 
// 		d3.select('#s7').node().value = "";
// 		d3.select('#s1_title').node().value = "List 1"; 
// 		d3.select('#s2_title').node().value = "List 2"; 
// 		d3.select('#s3_title').node().value = "List 3"; 
// 		d3.select('#s4_title').node().value = "List 4"; 
// 		d3.select('#s5_title').node().value = "List 5"; 
// 		d3.select('#s6_title').node().value = "List 6"; 
// 		d3.select('#s7_title').node().value = "List 7";  

// 		for (key in json) {
// 			counter++;
// 			if (counter === 8) {break;};
// 			d3.select("#s"+counter+"_title").node().value = key ;
// 		    for (subKey in json[key]) {
		    
// 		    	    d3.select('#s'+counter).node().value += json[key][subKey]; 
// 		            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
// 		            	 d3.select('#s'+counter).node().value += "\n";
		            	 
// 		            }
// 		    }
// 		}
// 			s1 = new sets.Set(d3.select("#s1").node().value.split("\n"));
// 			s2 = new sets.Set(d3.select("#s2").node().value.split("\n"));
// 			s3 = new sets.Set(d3.select("#s3").node().value.split("\n"));
// 			s4 = new sets.Set(d3.select("#s4").node().value.split("\n"));
// 			s5 = new sets.Set(d3.select("#s5").node().value.split("\n"));
// 			s6 = new sets.Set(d3.select("#s6").node().value.split("\n"));
// 			s7 = new sets.Set(d3.select("#s7").node().value.split("\n"));
// 			//console.log(s1);
// 		listOperation();
// 	});	
	
// }

// fileManager.updateInputData = function() {
// 	//take user input from textarea
// 	//once the value changed it calls fucntion update to update the list
// 	d3.select("#s1").on("change" ,function() { 
// 	  update(this.value.split("\n"));
// 	});

// 	function update (listvalue){
// 		if(listvalue == ""){s1 = new sets.Set([]);}
// 		else{s1 = new sets.Set(listvalue);}
		
// 		listOperation();
// 	}
// 	//---
// 	d3.select("#s2").on("change" ,function() { 
// 	  update2(this.value.split("\n"));
// 	});

// 	function update2 (listvalue){
// 		if(listvalue == ""){s2 = new sets.Set([]);}
// 		else{s2 = new sets.Set(listvalue);}
// 		listOperation();
// 	}
// 	//---
// 	d3.select("#s3").on("change" ,function() { 
// 	  update3(this.value.split("\n"));
// 	});

// 	function update3 (listvalue){
// 		if(listvalue == ""){s3 = new sets.Set([]);}
// 		else{s3 = new sets.Set(listvalue);}
// 		listOperation();
// 	}
// 	// 
// 	d3.select("#s4").on("change" ,function() { 
// 	  update4(this.value.split("\n"));
// 	});

// 	function update4 (listvalue){
// 		if(listvalue == ""){s4 = new sets.Set([]);}
// 		else{s4 = new sets.Set(listvalue);}
// 		listOperation();
// 	}
// 	//---
// 	d3.select("#s5").on("change" ,function() { 
// 	  update5(this.value.split("\n"));
// 	});

// 	function update5 (listvalue){
// 		if(listvalue == ""){s5 = new sets.Set([]);}
// 		else{s5 = new sets.Set(listvalue);}
// 		listOperation();
// 	}
// 	//---
// 	d3.select("#s6").on("change" ,function() { 
// 	  update6(this.value.split("\n"));
// 	});

// 	function update6 (listvalue){
// 		if(listvalue == ""){s6 = new sets.Set([]);}
// 		else{s6 = new sets.Set(listvalue);}
// 		listOperation();
// 	}
// 	//---
// 	d3.select("#s7").on("change" ,function() { 
// 	  update7(this.value.split("\n"));
// 	});

// 	function update7 (listvalue){
// 		if(listvalue == ""){s7 = new sets.Set([]);}
// 		else{s7 = new sets.Set(listvalue);}
// 		listOperation();
// 	}

// 	/*----------------------------------------------*/
// 	d3.select("#s1_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s2_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s3_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s4_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s5_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s6_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);
// 	d3.select("#s7_title").on("change" ,function() { 
// 	  listOperation();
// 	}).on("keydown",Key);

// 	function Key() { 	
// 		if(d3.event.keyCode === 13){
// 			  d3.event.preventDefault();
// 			  listOperation();
// 		}
// 	}
// 	/*----------------------------------------------*/
// }




module.exports = fileManager;
