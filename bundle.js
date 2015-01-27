(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("d3");

var sets = require('simplesets');

var s1 = new sets.Set([]);
var s2 = new sets.Set([]);
var s3 = new sets.Set([]);
var s4 = new sets.Set([]);
var s5 = new sets.Set([]);
var s6 = new sets.Set([]);
var s7 = new sets.Set([]);


//upload file
d3.select("#files").on("change" ,function() {
	var files = this.files;
	if (!files.length) { return; }

	var file = files[0];
	var reader = new FileReader();

	reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { 
       // try{	
	    var listvalue;
		s1 = new sets.Set([]);
		s2 = new sets.Set([]);
		s3 = new sets.Set([]);
		s4 = new sets.Set([]);
		s5 = new sets.Set([]);
		s6 = new sets.Set([]);
		s7 = new sets.Set([]);
		d3.select('#s1').node().value = ""; 
		d3.select('#s2').node().value = ""; 
		d3.select('#s3').node().value = ""; 
		d3.select('#s4').node().value = ""; 
		d3.select('#s5').node().value = ""; 
		d3.select('#s6').node().value = ""; 
		d3.select('#s7').node().value = ""; 
		d3.select('#s1_title').node().value = "List 1"; 
		d3.select('#s2_title').node().value = "List 2"; 
		d3.select('#s3_title').node().value = "List 3"; 
		d3.select('#s4_title').node().value = "List 4"; 
		d3.select('#s5_title').node().value = "List 5"; 
		d3.select('#s6_title').node().value = "List 6"; 
		d3.select('#s7_title').node().value = "List 7"; 
	    var json = JSON.parse(evt.target.result);
	    var counter = 0 ;
      for (key in json) {
      	counter++;
      	if(counter === 8){break;}
	    d3.select("#s"+counter+"_title").node().value = key ;
	    for (subKey in json[key]) {
	            d3.select('#s'+counter).node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	 d3.select('#s'+counter).node().value += "\n";
	            }
	    }
				//console.log(s1);
	    /*for (subKey in json[key]) {
	        if(key == 's1'){

	            d3.select('#s1').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	 d3.select('#s1').node().value += "\n";
					 //document.getElementById('label1').innerHTML = "hgjhgjg";
	            	 
	            }
	            d3.select("#s1_title").node().value = key ;
	            listvalue = json[key];
				s1 = new sets.Set(listvalue);
	        }
	        if(key == 's2'){
	            d3.select('#s2').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s2').node().value += "\n";
	            } 
	            d3.select("#s2_title").node().value = key ;
	            listvalue = json[key];
				s2 = new sets.Set(listvalue);  
	        }
	        if(key == 's3'){
	            d3.select('#s3').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s3').node().value += "\n";
	            }
	            d3.select("#s3_title").node().value = key ;
	            
	            listvalue = json[key];
				s3 = new sets.Set(listvalue);
	        }
	        if(key == 's4'){
	            d3.select('#s4').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s4').node().value += "\n";
	            }   
	            	d3.select("#s4_title").node().value = key ;
	            listvalue = json[key];
				s4 = new sets.Set(listvalue);
	        }
	        if(key == 's5'){
	            d3.select('#s5').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s5').node().value += "\n";
	            }   
	            	d3.select("#s5_title").node().value = key ;
	            listvalue = json[key];
				s5 = new sets.Set(listvalue);
	        }
	        if(key == 's6'){
	            d3.select('#s6').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s6').node().value += "\n";
	            }   
	            	d3.select("#s6_title").node().value = key ;
	            listvalue = json[key];
				s6 = new sets.Set(listvalue);
	        }
	        if(key == 's7'){
	            d3.select('#s7').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s7').node().value += "\n";
	            }   
	            	d3.select("#s7_title").node().value = key ;
	            listvalue = json[key];
				s7 = new sets.Set(listvalue);
	        }
	    }*/
	}

		s1 = new sets.Set(d3.select("#s1").node().value.split("\n"));
		s2 = new sets.Set(d3.select("#s2").node().value.split("\n"));
		s3 = new sets.Set(d3.select("#s3").node().value.split("\n"));
		s4 = new sets.Set(d3.select("#s4").node().value.split("\n"));
		s5 = new sets.Set(d3.select("#s5").node().value.split("\n"));
		s6 = new sets.Set(d3.select("#s6").node().value.split("\n"));
		s7 = new sets.Set(d3.select("#s7").node().value.split("\n"));
    listOperation();

      }
    };

    var blob = file.slice( 0, file.size);
    reader.readAsBinaryString(blob);
    d3.select('#files').node().value="";

});


//load sample json file
d3.select("#clear1").on("click" ,function(){
	d3.select("#s1").node().value = "";
	s1 = new sets.Set([]);
	listOperation();
});
d3.select("#clear2").on("click" ,function(){
	d3.select("#s2").node().value = "";
	s2 = new sets.Set([]);
	listOperation();
});
d3.select("#clear3").on("click" ,function(){
	d3.select("#s3").node().value = "";
	s3 = new sets.Set([]);
	listOperation();
});
d3.select("#clear4").on("click" ,function(){
	d3.select("#s4").node().value = "";
	s4 = new sets.Set([]);
	listOperation();
});
d3.select("#clear5").on("click" ,function(){
	d3.select("#s5").node().value = "";
	s5 = new sets.Set([]);
	listOperation();
});
d3.select("#clear6").on("click" ,function(){
	d3.select("#s6").node().value = "";
	s6 = new sets.Set([]);
	listOperation();
});
d3.select("#clear7").on("click" ,function(){
	d3.select("#s7").node().value = "";
	s7 = new sets.Set([]);
	listOperation();
});
d3.select("#button").on("click" ,function() { 

	var json = require('./sample.json');
	//var json = require(path);
	//console.log(json);
	var listvalue;
	var counter = 0;
	s1 = new sets.Set([]);
	s2 = new sets.Set([]);
	s3 = new sets.Set([]);
	s4 = new sets.Set([]);
	s5 = new sets.Set([]);
	s6 = new sets.Set([]);
	s7 = new sets.Set([]);
	d3.select('#s1').node().value = ""; 
	d3.select('#s2').node().value = ""; 
	d3.select('#s3').node().value = ""; 
	d3.select('#s4').node().value = ""; 
	d3.select('#s5').node().value = ""; 
	d3.select('#s6').node().value = ""; 
	d3.select('#s7').node().value = "";
	d3.select('#s1_title').node().value = "List 1"; 
	d3.select('#s2_title').node().value = "List 2"; 
	d3.select('#s3_title').node().value = "List 3"; 
	d3.select('#s4_title').node().value = "List 4"; 
	d3.select('#s5_title').node().value = "List 5"; 
	d3.select('#s6_title').node().value = "List 6"; 
	d3.select('#s7_title').node().value = "List 7";  

	for (key in json) {
		counter++;
		if (counter === 8) {break;};
		d3.select("#s"+counter+"_title").node().value = key ;
	    for (subKey in json[key]) {
	    /*    if(key == 's1'){

	            d3.select('#s1').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	 d3.select('#s1').node().value += "\n";
	            }
	            listvalue = json[key];
				s1 = new sets.Set(listvalue);
	        }
	        if(key == 's2'){
	            d3.select('#s2').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s2').node().value += "\n";
	            } 
	            listvalue = json[key];
				s2 = new sets.Set(listvalue);  
	        }
	        if(key == 's3'){
	            d3.select('#s3').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s3').node().value += "\n";
	            }
	            listvalue = json[key];
				s3 = new sets.Set(listvalue);
	        }
	        if(key == 's4'){
	            d3.select('#s4').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s4').node().value += "\n";
	            }   
	            listvalue = json[key];
				s4 = new sets.Set(listvalue);
	        }
	        if(key == 's5'){
	            d3.select('#s5').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s5').node().value += "\n";
	            }   
	            listvalue = json[key];
				s5 = new sets.Set(listvalue);
	        }
	        if(key == 's6'){
	            d3.select('#s6').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s6').node().value += "\n";
	            }   
	            listvalue = json[key];
				s6 = new sets.Set(listvalue);
	        }
	        if(key == 's7'){
	            d3.select('#s7').node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	d3.select('#s7').node().value += "\n";
	            }   
	            listvalue = json[key];
				s7 = new sets.Set(listvalue);
	        }*/
	    	    d3.select('#s'+counter).node().value += json[key][subKey]; 
	            if(subKey != Object.keys(json[key]).sort().reverse()[0]){
	            	 d3.select('#s'+counter).node().value += "\n";
	            	 
	            }
	    }
	}
		s1 = new sets.Set(d3.select("#s1").node().value.split("\n"));
		s2 = new sets.Set(d3.select("#s2").node().value.split("\n"));
		s3 = new sets.Set(d3.select("#s3").node().value.split("\n"));
		s4 = new sets.Set(d3.select("#s4").node().value.split("\n"));
		s5 = new sets.Set(d3.select("#s5").node().value.split("\n"));
		s6 = new sets.Set(d3.select("#s6").node().value.split("\n"));
		s7 = new sets.Set(d3.select("#s7").node().value.split("\n"));
		//console.log(s1);
	listOperation();
});

d3.select("#DownloadButton").on("click" ,function() {       
// grab the content of the form field and place it into a variable
    var textToWrite = "";

    if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
    }
    if(d3.select("#circle1").empty() != true && d3.select("#circle3").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
    }
    if(d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
    }
    if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
    }
    if(d3.select("#e4th1").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
    }
    if(d3.select("#e5th1").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
        
        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";

 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";

    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";

    
    }
    if(d3.select("#tr1").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3.intersection(s6).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4.intersection(s6).array().join("  ") + "\n";
       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s5.intersection(s6).array().join("  ") + "\n";
       
        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns5.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns5.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4ns5.intersection(s6).array().join("  ") + "\n";

 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns5.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns5.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4ns5.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4ns5.intersection(s6).array().join("  ") + "\n";

    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";

		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
    
    }
    if(d3.select("#e7th1").empty() != true){
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s2_title").node().value + ": " + s1.intersection(s2).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s2.intersection(s3).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s3.intersection(s4).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3.intersection(s5).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3.intersection(s6).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3.intersection(s7).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s4.intersection(s5).array().join("  ") + "\n";
        textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4.intersection(s6).array().join("  ") + "\n";
       	textToWrite += "Common elements in " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4.intersection(s7).array().join("  ") + "\n";
       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s5.intersection(s6).array().join("  ") + "\n";
       	textToWrite += "Common elements in " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s5.intersection(s7).array().join("  ") + "\n";
       	textToWrite += "Common elements in " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s6.intersection(s7).array().join("  ") + "\n";
       
        textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s3_title").node().value + ": " + s1ns2.intersection(s3).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns5.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns5.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns6.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s2ns3.intersection(s4).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns4.intersection(s5).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns5.intersection(s6).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns5.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns6.intersection(s7).array().join("  ") + "\n";
 		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s5ns6.intersection(s7).array().join("  ") + "\n";

 		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s4_title").node().value + ": " + s1ns2ns3.intersection(s4).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns6.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns3ns4.intersection(s5).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns5.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns5.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns6.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns4ns5.intersection(s6).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4ns5.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns5ns6.intersection(s7).array().join("  ") + "\n";
    	textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s2ns3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s3ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s4ns5ns6.intersection(s7).array().join("  ") + "\n";

    	textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s5_title").node().value + ": " + s1ns2ns3ns4.intersection(s5).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";

		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s6_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s6).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns5.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
		textToWrite += "Common elements in " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s2ns3ns4ns5ns6.intersection(s7).array().join("  ") + "\n";
    

		textToWrite += "Common elements in " + d3.select("#s1_title").node().value + ", " + d3.select("#s2_title").node().value + ", " + d3.select("#s3_title").node().value + ", " + d3.select("#s4_title").node().value + ", " + d3.select("#s5_title").node().value + ", " + d3.select("#s6_title").node().value + " and " + d3.select("#s7_title").node().value + ": " + s1ns2ns3ns4ns5ns7.intersection(s7).array().join("  ") + "\n";
    }
    //  create a new Blob (html5 magic) that conatins the data from your form feild
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
// Specify the name of the file to be saved
    var fileNameToSaveAs = "Lists Intersections.txt";
    
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


//take user input from textarea
//once the value changed it calls fucntion update to update the list
//---
d3.select("#s1").on("change" ,function() { 
  update(this.value.split("\n"));
});

function update (listvalue){
	if(listvalue == ""){s1 = new sets.Set([]);}
	else{s1 = new sets.Set(listvalue);}
	
	listOperation();
}
//---
d3.select("#s2").on("change" ,function() { 
  update2(this.value.split("\n"));
});

function update2 (listvalue){
	if(listvalue == ""){s2 = new sets.Set([]);}
	else{s2 = new sets.Set(listvalue);}
	listOperation();
}
//---
d3.select("#s3").on("change" ,function() { 
  update3(this.value.split("\n"));
});

function update3 (listvalue){
	if(listvalue == ""){s3 = new sets.Set([]);}
	else{s3 = new sets.Set(listvalue);}
	listOperation();
}
// 
d3.select("#s4").on("change" ,function() { 
  update4(this.value.split("\n"));
});

function update4 (listvalue){
	if(listvalue == ""){s4 = new sets.Set([]);}
	else{s4 = new sets.Set(listvalue);}
	listOperation();
}
//---
d3.select("#s5").on("change" ,function() { 
  update5(this.value.split("\n"));
});

function update5 (listvalue){
	if(listvalue == ""){s5 = new sets.Set([]);}
	else{s5 = new sets.Set(listvalue);}
	listOperation();
}
//---
d3.select("#s6").on("change" ,function() { 
  update6(this.value.split("\n"));
});

function update6 (listvalue){
	if(listvalue == ""){s6 = new sets.Set([]);}
	else{s6 = new sets.Set(listvalue);}
	listOperation();
}
//---
d3.select("#s7").on("change" ,function() { 
  update7(this.value.split("\n"));
});

function update7 (listvalue){
	if(listvalue == ""){s7 = new sets.Set([]);}
	else{s7 = new sets.Set(listvalue);}
	listOperation();
}
/*----------------------------------------------*/
d3.select("#s1_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s2_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s3_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s4_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s5_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s6_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);
d3.select("#s7_title").on("change" ,function() { 
  listOperation();
}).on("keydown",Key);

function Key() { 	
	if(d3.event.keyCode === 13){
		  d3.event.preventDefault();
		  listOperation();
	}
}

/*----------------------------------------------*/


function update7 (listvalue){
	if(listvalue == ""){s7 = new sets.Set([]);}
	else{s7 = new sets.Set(listvalue);}
	listOperation();
}

//define drawing canvas/
var w = 746,
	h = 900;

var gvennStage = d3.select("#first")
		.append("svg")
		.attr("width", w)
		.attr("height", h)

//add tooltip for showing list values
var tooltip = d3.select("body").append("div")
    .attr("class", "genvenntooltip");


//export svg into image
function exportImage () {

  //d3.select("a").remove();		


  d3.select("#exportImage").on("click", function(){
  var html = d3.select("svg")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
  var img = '<img src="'+imgsrc+'">'; 


  var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d");

  var image = new Image;
  image.src = imgsrc;
  image.onload = function() {
    context.drawImage(image, 0, 0);

    var canvasdata = canvas.toDataURL("image/png");

    var pngimg = '<img src="'+canvasdata+'">'; 

    var a = document.createElement("a");
    a.download = "exportedImage.png";

    a.href = canvasdata;
          document.body.appendChild(a);
    a.click();
	//html.exit();
	 //d3.select("a").remove();		

  };

});
}
exportImage();



function listOperation(){


	s1ns2_arr =  s1.intersection(s2).array();
	s1ns2 = new sets.Set(s1ns2_arr);
	//console.log('Intersection1n2:', s1.intersection(s2).array());
	//console.log('Intersection1n2n3:', s1ns2.intersection(s3).array());
	s1ns2ns3_arr = s1ns2.intersection(s3).array();
	s1ns2ns3 = new sets.Set(s1ns2ns3_arr);
	//console.log('Intersection4:', s1ns2ns3.intersection(s4).array());

	s2ns3_arr =  s2.intersection(s3).array();
	s2ns3 = new sets.Set(s2ns3_arr);
	
	s2ns3ns4_arr = s2ns3.intersection(s4).array();
	s2ns3ns4 = new sets.Set(s2ns3ns4_arr);

	s1ns3_arr =  s1.intersection(s3).array();
	s1ns3 = new sets.Set(s1ns3_arr);



	s3ns4_arr =  s3.intersection(s4).array();
	s3ns4 = new sets.Set(s3ns4_arr);

	s4ns5_arr =  s4.intersection(s5).array();
	s4ns5 = new sets.Set(s4ns5_arr);

	s5ns6_arr =  s5.intersection(s6).array();
	s5ns6 = new sets.Set(s5ns6_arr);

	s1ns2ns3ns4_arr = s1ns2ns3.intersection(s4).array();
	s1ns2ns3ns4 = new sets.Set(s1ns2ns3ns4_arr);



	s1ns2ns3ns4ns5_arr = s1ns2ns3ns4.intersection(s5).array();
	s1ns2ns3ns4ns5 = new sets.Set(s1ns2ns3ns4ns5_arr);

	s1ns2ns3ns4ns5ns6_arr = s1ns2ns3ns4ns5.intersection(s6).array();
	s1ns2ns3ns4ns5ns6 = new sets.Set(s1ns2ns3ns4ns5ns6_arr);

	s1ns2ns3ns4ns5ns6ns7_arr = s1ns2ns3ns4ns5ns6.intersection(s7).array();
	s1ns2ns3ns4ns5ns6ns7 = new sets.Set(s1ns2ns3ns4ns5ns6ns7_arr);


	/*--------------------------------------------------------------------------------------*/
	s1ns4_arr =  s1.intersection(s4).array();
	s1ns4 = new sets.Set(s1ns4_arr);

	s2ns4_arr =  s2.intersection(s4).array();
	s2ns4 = new sets.Set(s2ns4_arr);

	s1ns2ns4_arr = s1ns2.intersection(s4).array();
	s1ns2ns4 = new sets.Set(s1ns2ns4_arr);

	s1ns3ns4_arr = s1ns3.intersection(s4).array();
	s1ns3ns4 = new sets.Set(s1ns3ns4_arr);

	s1ns5_arr =  s1.intersection(s5).array();
	s1ns5 = new sets.Set(s1ns5_arr);

	s1ns2ns5_arr = s1ns2.intersection(s5).array();
	s1ns2ns5 = new sets.Set(s1ns2ns5_arr);

	s1ns4ns5_arr = s1ns4.intersection(s5).array();
	s1ns4ns5 = new sets.Set(s1ns4ns5_arr);

	s2ns3ns5_arr = s2ns3.intersection(s5).array();
	s2ns3ns5 = new sets.Set(s2ns3ns5_arr);

	s2ns4ns5_arr = s2ns4.intersection(s5).array();
	s2ns4ns5 = new sets.Set(s2ns4ns5_arr);

	s3ns4ns5_arr = s3ns4.intersection(s5).array();
	s3ns4ns5 = new sets.Set(s3ns4ns5_arr);

	s1ns2ns3ns5_arr = s1ns2ns3.intersection(s5).array();
	s1ns2ns3ns5 = new sets.Set(s1ns2ns3ns5_arr);

	s1ns2ns4ns5_arr = s1ns2ns4.intersection(s5).array();
	s1ns2ns4ns5 = new sets.Set(s1ns2ns4ns5_arr);

	s1ns3ns4ns5_arr = s1ns3ns4.intersection(s5).array();
	s1ns3ns4ns5 = new sets.Set(s1ns3ns4ns5_arr);

	s2ns3ns4ns5_arr = s2ns3ns4.intersection(s5).array();
	s2ns3ns4ns5 = new sets.Set(s2ns3ns4ns5_arr);

	s2ns5_arr =  s2.intersection(s5).array();
	s2ns5 = new sets.Set(s2ns5_arr);

	s3ns5_arr =  s3.intersection(s5).array();
	s3ns5 = new sets.Set(s3ns5_arr);

	s1ns3ns5_arr = s1ns3.intersection(s5).array();
	s1ns3ns5 = new sets.Set(s1ns3ns5_arr);

	s1ns6_arr =  s1.intersection(s6).array();
	s1ns6 = new sets.Set(s1ns6_arr);

	s2ns6_arr =  s2.intersection(s6).array();
	s2ns6 = new sets.Set(s2ns6_arr);

	s4ns6_arr =  s4.intersection(s6).array();
	s4ns6 = new sets.Set(s4ns6_arr);

	s1ns2ns6_arr = s1ns2.intersection(s6).array();
	s1ns2ns6 = new sets.Set(s1ns2ns6_arr);

	s1ns3ns6_arr = s1ns3.intersection(s6).array();
	s1ns3ns6 = new sets.Set(s1ns3ns6_arr);

	s1ns5ns6_arr = s1ns5.intersection(s6).array();
	s1ns5ns6 = new sets.Set(s1ns5ns6_arr);

	s2ns3ns6_arr = s2ns3.intersection(s6).array();
	s2ns3ns6 = new sets.Set(s2ns3ns6_arr);

	s2ns4ns6_arr = s2ns4.intersection(s6).array();
	s2ns4ns6 = new sets.Set(s2ns4ns6_arr);

	s3ns4ns6_arr = s3ns4.intersection(s6).array();
	s3ns4ns6 = new sets.Set(s3ns4ns6_arr);

	s3ns5ns6_arr = s3ns5.intersection(s6).array();
	s3ns5ns6 = new sets.Set(s3ns5ns6_arr);

	s4ns5ns6_arr = s4ns5.intersection(s6).array();
	s4ns5ns6 = new sets.Set(s4ns5ns6_arr);

	s1ns4ns5ns6_arr = s1ns4ns5.intersection(s6).array();
	s1ns4ns5ns6 = new sets.Set(s1ns4ns5ns6_arr);

	s2ns3ns4ns6_arr = s2ns3ns4.intersection(s6).array();
	s2ns3ns4ns6 = new sets.Set(s2ns3ns4ns6_arr);

	s2ns3ns5ns6_arr = s2ns3ns5.intersection(s6).array();
	s2ns3ns5ns6 = new sets.Set(s2ns3ns5ns6_arr);

	s2ns4ns5ns6_arr = s2ns4ns5.intersection(s6).array();
	s2ns4ns5ns6 = new sets.Set(s2ns4ns5ns6_arr);

	s3ns4ns5ns6_arr = s3ns4ns5.intersection(s6).array();
	s3ns4ns5ns6 = new sets.Set(s3ns4ns5ns6_arr);

	s1ns2ns3ns4ns6_arr = s1ns2ns3ns4.intersection(s6).array();
	s1ns2ns3ns4ns6 = new sets.Set(s1ns2ns3ns4ns6_arr);

	s1ns2ns3ns5ns6_arr = s1ns2ns3ns5.intersection(s6).array();
	s1ns2ns3ns5ns6 = new sets.Set(s1ns2ns3ns5ns6_arr);

	s1ns2ns4ns5ns6_arr = s1ns2ns4ns5.intersection(s6).array();
	s1ns2ns4ns5ns6 = new sets.Set(s1ns2ns4ns5ns6_arr);

	s1ns3ns4ns5ns6_arr = s1ns3ns4ns5.intersection(s6).array();
	s1ns3ns4ns5ns6 = new sets.Set(s1ns3ns4ns5ns6_arr);

	s2ns3ns4ns5ns6_arr = s2ns3ns4ns5.intersection(s6).array();
	s2ns3ns4ns5ns6 = new sets.Set(s2ns3ns4ns5ns6_arr);

	s1ns2ns3ns4ns5ns7_arr = s1ns2ns3ns4ns5.intersection(s7).array();
	s1ns2ns3ns4ns5ns7 = new sets.Set(s1ns2ns3ns4ns5ns7_arr);
	/*-------------------------------------------------------------------------------------*/
	/* ------------------------
		--- Intersection Area -----
		---------------------------*/
	var pathDe1ne2 = "M 108.71875 84.5625 C 107.34724 84.57099 106.00295 84.598122 104.65625 84.65625 C 102.55551 133.32572 132.99357 198.55607 188.21875 253.78125 C 243.44393 309.00643 308.67428 339.44449 357.34375 337.34375 C 359.44449 288.67428 329.00643 223.44393 273.78125 168.21875 C 220.08416 114.52166 156.91347 84.264162 108.71875 84.5625 z ";
	var pathDe1ne3 = "M 223.15625 126.03125 C 164.5005 198.3081 146.60678 279.41928 184.59375 317.40625 C 218.44986 351.26236 286.56961 340.74639 352.15625 296.53125 C 341.67212 255.35002 314.37017 208.80767 273.34375 167.78125 C 257.25499 151.69249 240.28786 137.71887 223.15625 126.03125 z ";
	var pathDe1ne4 = "m 295.96875,192.59375 c -60.89864,73.12532 -79.96517,156.22233 -41.375,194.8125 10.32866,10.32866 23.83657,16.53518 39.5,18.90625 17.09565,-1.95916 31.81321,-8.28196 42.875,-19.34375 38.51101,-38.51101 19.60242,-121.35897 -41,-194.375 z";
	var pathDe2ne3 = "m 296,58.09375 c -16.32053,11.349067 -32.43696,24.78071 -47.78125,40.125 -42.71359,42.71359 -70.59597,91.41704 -80.0625,133.8125 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 35.56066,-13.34424 73.58952,-38.02702 107.78125,-72.21875 7.10194,-7.10194 13.79737,-14.3733 20.0625,-21.75 -9.46653,-42.39546 -37.34891,-91.09891 -80.0625,-133.8125 C 328.43696,82.87446 312.32053,69.442817 296,58.09375 z";
	var pathDe2ne4 = "m 368.90625,126.09375 c -17.31379,11.76091 -34.43138,25.86888 -50.6875,42.125 -40.81438,40.81438 -68.05307,87.10165 -78.65625,128.125 65.6727,44.37416 133.93943,54.96682 167.84375,21.0625 37.97502,-37.97502 20.11164,-119.05282 -38.5,-191.3125 z";
	var pathDe3ne4 = "m 483.28125,84.5625 c -48.19472,-0.298338 -111.36541,29.95916 -165.0625,83.65625 -55.22518,55.22518 -85.66324,120.45553 -83.5625,169.125 48.66947,2.10074 113.89982,-28.33732 169.125,-83.5625 55.22518,-55.22518 85.66324,-120.45553 83.5625,-169.125 -1.3467,-0.05813 -2.69099,-0.08526 -4.0625,-0.09375 z";
	//--
	var pathDe1ne5 = "M 173.78125 95.96875 C 160.69978 128.87328 153 169.29664 153 213 C 153 251.36358 158.94978 287.21364 169.25 317.65625 C 172.13997 318.67585 175.05361 319.66766 178 320.625 C 245.5468 342.57229 311.17434 342.47067 354.40625 324.25 C 366.14092 292.4396 373 254.18066 373 213 C 373 204.34912 372.71104 195.8301 372.125 187.46875 C 343.92041 156.66087 299.53481 128.76952 246 111.375 C 221.34548 103.36426 196.92663 98.29775 173.78125 95.96875 z ";
	var pathDe2ne5 = "M 315.0625 142.3125 C 292.85634 144.7735 269.54113 149.72602 246 157.375 C 167.05458 183.02592 107.94539 231.48131 91.40625 278.5 C 115.74851 295.32019 145.15536 309.95313 178 320.625 C 283.0508 354.75807 383.44556 335.59044 402.21875 277.8125 C 416.46787 233.95823 379.59094 180.47311 315.0625 142.3125 z ";
	var pathDe3ne5 = "M 164.21875 117.71875 C 148.85203 117.81567 134.95676 121.81827 123.4375 130.1875 C 85.70671 157.60052 84.473136 223.73422 115.3125 293.40625 C 134.20361 303.98596 155.28331 313.2439 178 320.625 C 257.68009 346.51463 334.67298 341.71627 375.40625 312.6875 C 365.60409 284.6612 350.38704 255.4041 330 227.34375 C 280.29182 158.92631 214.4167 117.40214 164.21875 117.71875 z ";
	var pathDe4ne5 = "M 222.1875 104.53125 C 183.92576 121.72044 143.32957 155.46953 110 201.34375 C 94.880388 222.15411 82.59092 243.61646 73.25 264.75 C 100.48824 287.32005 136.4935 307.13872 178 320.625 C 214.6108 332.52057 250.65549 337.93007 282.875 337.5 C 284.59248 335.24741 286.31826 332.97097 288 330.65625 C 329.95922 272.90434 350.11262 210.13608 345.875 163.3125 C 319.27317 142.38115 285.07734 124.072 246 111.375 C 238.0253 108.78386 230.0747 106.51449 222.1875 104.53125 z";
	var pathDe1ne2ne3 = "m 223.15625,126.03125 c -28.59951,35.24092 -47.53647,72.57486 -55,106 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 18.34983,-6.88583 37.3577,-16.79573 56.15625,-29.46875 -10.48413,-41.18123 -37.78608,-87.72358 -78.8125,-128.75 -16.08876,-16.08876 -33.05589,-30.06238 -50.1875,-41.75 z";
	
	var pathD5e1ne2 = "m 345.1875,140.46875 c -30.74591,0.2415 -64.71771,5.70633 -99.1875,16.90625 -35.73263,11.61023 -67.3762,27.88807 -92.875,46.59375 -0.0734,2.99791 -0.125,6.00043 -0.125,9.03125 0,72.06946 20.9904,135.20606 52.4375,170.40625 33.1466,0.9122 70.54616,-4.42899 108.5625,-16.78125 8.61647,-2.79966 16.97926,-5.87609 25.09375,-9.1875 C 359.99345,321.03245 373,269.77933 373,213 c 0,-25.33195 -2.58725,-49.57083 -7.3125,-71.875 -6.64688,-0.4821 -13.48556,-0.71135 -20.5,-0.65625 z";
	var pathD5e2ne3 = "M 257.59375 153.84375 C 253.74209 154.95679 249.86817 156.11816 246 157.375 C 179.17372 179.08817 126.58096 217.15376 101.96875 256.84375 C 111.24304 289.15524 128.072 323.72219 152 356.65625 C 157.88904 364.76181 164.02302 372.48656 170.3125 379.8125 C 210.76374 387.36643 261.80713 383.58349 314 366.625 C 339.04817 358.48635 362.07686 348.01796 382.40625 336.0625 C 373.80897 301.25501 356.14095 263.32368 330 227.34375 C 308.09338 197.19188 283.0508 172.27121 257.59375 153.84375 z ";
	var pathD5e3ne4 = "M 191.84375 121.3125 C 163.18023 140.18893 134.60724 167.47478 110 201.34375 C 104.63712 208.72512 99.645912 216.18579 95 223.6875 C 100.24046 264.58407 119.63687 312.11222 152 356.65625 C 167.66343 378.21511 184.93728 397.09228 202.8125 412.84375 C 232.5932 393.91511 262.43531 365.84303 288 330.65625 C 310.56233 299.60187 326.81652 267.10449 336.375 236.40625 C 334.30743 233.37294 332.18617 230.35275 330 227.34375 C 288.98489 170.8913 236.97959 132.75075 191.84375 121.3125 z ";
	var pathD5e1ne3 = "M 166.25 117.75 C 157.8005 146.06643 153 178.52042 153 213 C 153 323.45695 202.24868 413 263 413 C 309.32105 413 348.94123 360.94233 365.15625 287.25 C 356.02365 267.25243 344.28435 247.00447 330 227.34375 C 280.95791 159.84311 216.18372 118.54146 166.25 117.75 z ";
	var pathD5e1ne4 = "m 275.78125,91.71875 c -34.84607,-0.219784 -77.26473,19.70619 -116.5625,54.8125 C 155.19078,167.32469 153,189.70159 153,213 c 0,84.44256 28.768,156.66603 69.46875,186 C 245.53958,381.17751 268.07093,358.08626 288,330.65625 352.92497,241.2947 365.71135,139.89623 316.5625,104.1875 305.04324,95.818266 291.14797,91.815672 275.78125,91.71875 z";
	var pathD5e2ne4 = "M 340.78125,140.5625 C 311.21315,141.26706 278.82838,146.70841 246,157.375 140.9492,191.50807 71.00806,266.03456 89.78125,323.8125 c 14.42056,44.38192 76.99017,65.96528 152.84375,58.125 15.93016,-14.71465 31.31012,-31.92261 45.375,-51.28125 49.21858,-67.74357 68.44467,-142.38039 53.46875,-190.09375 -0.23023,0.005 -0.45693,-0.005 -0.6875,0 z";

	var pathDe1ne2ne5 = "M 315.0625 142.3125 C 292.85634 144.7735 269.54113 149.72602 246 157.375 C 210.26737 168.98523 178.6238 185.26307 153.125 203.96875 C 153.05162 206.96666 153 209.96918 153 213 C 153 251.36358 158.94978 287.21364 169.25 317.65625 C 172.13997 318.67585 175.05361 319.66766 178 320.625 C 245.5468 342.57229 311.17434 342.47067 354.40625 324.25 C 366.14092 292.4396 373 254.18066 373 213 C 373 204.34912 372.71104 195.8301 372.125 187.46875 C 357.25792 171.22943 337.89978 155.81793 315.0625 142.3125 z ";
	var pathDe1ne3ne5 = "M 315.0625 142.3125 C 292.85634 144.7735 269.54113 149.72602 246 157.375 C 210.26737 168.98523 178.6238 185.26307 153.125 203.96875 C 153.05162 206.96666 153 209.96918 153 213 C 153 251.36358 158.94978 287.21364 169.25 317.65625 C 172.13997 318.67585 175.05361 319.66766 178 320.625 C 245.5468 342.57229 311.17434 342.47067 354.40625 324.25 C 366.14092 292.4396 373 254.18066 373 213 C 373 204.34912 372.71104 195.8301 372.125 187.46875 C 357.25792 171.22943 337.89978 155.81793 315.0625 142.3125 z ";
	var pathDe2ne3ne5 = "m 257.59375,153.84375 c -3.85166,1.11304 -7.72558,2.27441 -11.59375,3.53125 -66.82628,21.71317 -119.41904,59.77876 -144.03125,99.46875 3.42821,11.94382 7.87102,24.19856 13.34375,36.5625 18.89111,10.57971 39.97081,19.83765 62.6875,27.21875 79.68009,25.88963 156.67298,21.09127 197.40625,-7.9375 C 365.60409,284.6612 350.38704,255.4041 330,227.34375 c -21.90662,-30.15187 -46.9492,-55.07254 -72.40625,-73.5 z";
	var pathDe3ne4ne5 = "M 191.84375 121.3125 C 163.18023 140.18893 134.60724 167.47478 110 201.34375 C 104.63712 208.72512 99.645912 216.18579 95 223.6875 C 97.798102 245.52389 104.62058 269.25116 115.3125 293.40625 C 134.20361 303.98596 155.28331 313.2439 178 320.625 C 214.6108 332.52057 250.65549 337.93007 282.875 337.5 C 284.59248 335.24741 286.31826 332.97097 288 330.65625 C 310.56233 299.60187 326.81652 267.10449 336.375 236.40625 C 334.30743 233.37294 332.18617 230.35275 330 227.34375 C 288.98489 170.8913 236.97959 132.75075 191.84375 121.3125 z ";
	var pathDe1ne2ne3ne5 = "m 258.09375,153.6875 c -4.01844,1.15501 -8.05715,2.37593 -12.09375,3.6875 -35.73263,11.61023 -67.3762,27.88807 -92.875,46.59375 -0.0734,2.99791 -0.125,6.00043 -0.125,9.03125 0,38.36358 5.94978,74.21364 16.25,104.65625 2.88997,1.0196 5.80361,2.01141 8.75,2.96875 67.5468,21.94729 133.17434,21.84567 176.40625,3.625 4.29625,-11.6463 7.95423,-24.13927 10.84375,-37.34375 -9.14468,-20.05863 -20.92093,-40.37148 -35.25,-60.09375 -21.76132,-29.95188 -46.62363,-54.73413 -71.90625,-73.125 z";
	var pathDe2ne3ne4ne5 = "m 258.09375,153.6875 c -4.01844,1.15501 -8.05715,2.37593 -12.09375,3.6875 -66.74006,21.68516 -119.2849,59.67797 -143.9375,99.3125 3.47768,12.04975 8.00673,24.40375 13.5625,36.875 18.81325,10.50913 39.77986,19.7209 62.375,27.0625 36.6108,11.89557 72.65549,17.30507 104.875,16.875 1.71748,-2.25259 3.44326,-4.52903 5.125,-6.84375 22.64539,-31.1687 38.92466,-63.7959 48.46875,-94.59375 -2.09987,-3.08401 -4.2463,-6.19106 -6.46875,-9.25 -21.76132,-29.95188 -46.62363,-54.73413 -71.90625,-73.125 z";

	var pathDe1ne2ne4 = "m 295.96875,192.59375 c -28.53245,34.26094 -47.86605,70.70822 -56.40625,103.75 41.09655,27.76839 83.20591,42.31202 117.28125,41 1.96733,-41.60522 -19.93106,-95.41923 -60.875,-144.75 z";
	var pathDe1ne3ne4 = "m 295.96875,192.59375 c -41.04028,49.27998 -63.11117,103.07879 -61.3125,144.75 34.08561,1.47125 76.29095,-13.03148 117.5,-40.8125 -8.41809,-33.06589 -27.67651,-69.58641 -56.1875,-103.9375 z";
	var pathDe2ne3ne4 = "m 368.90625,126.09375 c -17.31379,11.76091 -34.43138,25.86888 -50.6875,42.125 -40.81438,40.81438 -68.05307,87.10165 -78.65625,128.125 C 258.45233,309.10736 277.55901,319.07996 296,326 c 35.56066,-13.34424 73.58952,-38.02702 107.78125,-72.21875 7.10194,-7.10194 13.79737,-14.3733 20.0625,-21.75 -7.45872,-33.40357 -26.36895,-70.71661 -54.9375,-105.9375 z";
	var pathDe1ne2ne3ne4 = "M 295.96875,192.59375 C 267.4363,226.85469 248.1027,263.30197 239.5625,296.34375 258.45233,309.10736 277.55901,319.07996 296,326 c 18.34983,-6.88583 37.3577,-16.79573 56.15625,-29.46875 -8.41809,-33.06589 -27.67651,-69.58641 -56.1875,-103.9375 z";
	var pathDe1ne2ne3ne4ne5 = "m 257.59375,153.84375 c -3.85166,1.11304 -7.72558,2.27441 -11.59375,3.53125 -35.73263,11.61023 -67.3762,27.88807 -92.875,46.59375 -0.0734,2.99791 -0.125,6.00043 -0.125,9.03125 0,38.36358 5.94978,74.21364 16.25,104.65625 2.88997,1.0196 5.80361,2.01141 8.75,2.96875 36.6108,11.89557 72.65549,17.30507 104.875,16.875 1.71748,-2.25259 3.44326,-4.52903 5.125,-6.84375 22.56233,-31.05438 38.81652,-63.55176 48.375,-94.25 -2.06757,-3.03331 -4.18883,-6.0535 -6.375,-9.0625 -21.90662,-30.15187 -46.9492,-55.07254 -72.40625,-73.5 z";
	var pathDe1ne2ne3ne4ne5ne6ne7 = "m 248.03125,179.09375 c -23.08761,13.31233 -46.26595,30.91 -67.96875,52.3125 -1.13426,23.92403 0.63363,49.85026 5.65625,76.5625 17.87702,15.45005 39.00987,29.86219 62.75,42.28125 23.66458,-4.14265 48.65082,-11.61034 73.71875,-22.46875 11.27377,-21.16659 20.73114,-45.42933 27.59375,-71.8125 -9.27893,-21.777 -21.99035,-44.05427 -37.90625,-65.6875 -19.60733,-5.58677 -41.11599,-9.43415 -63.84375,-11.1875 z";

	var path7De1ne2 = "m 220,178 c -57.79777,0 -109.86222,13.47037 -146.375,35.03125 10.667894,33.27405 29.87346,68.84337 56.875,102.1875 30.17012,37.257 65.0797,65.61784 98.78125,82.65625 53.26928,-1.34008 101.12481,-14.1163 135.5625,-34 C 376.47771,318.76315 357.17531,251.85439 311.875,190.28125 284.36524,182.44282 253.12083,178 220,178 z";
	var path7De2ne3 = "m 182.28125,85.125 c -19.28291,29.29791 -34.90784,66.81285 -43.875,109 -9.89022,46.52982 -10.03224,91.15514 -2.25,127.90625 34.81407,40.94651 75.23135,70.2948 112.625,84.5 42.20233,-19.7049 81.81254,-76.79666 101,-150.5625 C 338.55915,229.63125 322.36506,202.54745 301.5,176.78125 265.1709,131.91855 221.97565,99.955754 182.28125,85.125 z"; 
	var path7De3ne4 = "m 350.28125,90.9375 c -34.08407,3.248211 -71.99509,13.89514 -109.5,32.1875 -43.83458,21.37955 -79.79752,49.60241 -104,79.15625 -9.78334,51.7239 -7.56677,100.64771 4.1875,138.40625 41.465,21.35004 111.05546,17.48564 181.21875,-12.90625 13.53366,-25.40953 24.46546,-55.25241 31.40625,-87.90625 11.86297,-55.81086 9.73093,-108.91401 -3.3125,-148.9375 z";
	var path7De4ne5 = "M 232.4375,127.34375 C 184.60108,152.19166 146.9086,185.1364 124.78125,218.5 c 9.88969,45.40708 56.43782,96.57 123.6875,131.75 28.39722,-4.97113 58.69379,-14.7156 88.75,-29.375 51.65057,-25.19166 92.3811,-59.88566 115.8125,-95.0625 -24.22841,-25.46366 -57.32787,-49.21916 -96.53125,-67.5 -43.08081,-20.08891 -86.52162,-30.27089 -124.0625,-30.96875 z";
	var path7De5ne6 = "m 226.53125,127.3125 c -4.62332,0.0383 -9.14652,0.22783 -13.5625,0.5625 -29.81414,36.05476 -41.38703,104.90763 -27.25,180.09375 21.57147,18.64296 47.88391,35.77739 77.78125,49.71875 51.90235,24.20246 104.30234,34.0384 146.3125,30.21875 4.62654,-34.10653 2.82909,-73.7061 -6.625,-114.65625 C 392.40165,226.53135 373.4509,185.74528 350.625,155.65625 307.19397,136.31472 263.71577,127.0046 226.53125,127.3125 z";
	var pathDe1ne7 = "m 248.03125,179.09375 c -23.7393,13.6881 -47.58488,31.89738 -69.8125,54.125 -45.27344,45.27344 -73.88104,97.28728 -81.5625,141.375 C 130.63753,389.25692 173.45907,398 220,398 c 49.54754,0 94.87565,-9.90035 129.8125,-26.3125 32.48902,-36.94552 54.21917,-76.96105 63.09375,-112.8125 -20.81152,-41.80626 -85.33518,-73.64508 -164.875,-79.78125 z";
	var pathDe2ne7 = "m 287.46875,160.46875 c -35.97857,13.21155 -74.58921,38.08921 -109.25,72.75 -22.93825,22.93825 -41.61066,47.60464 -55.4375,72.09375 2.50679,3.32111 5.06078,6.62393 7.71875,9.90625 53.79729,66.43412 122.6451,104.56158 172.90625,100.6875 10.33854,-8.22938 20.52307,-17.27307 30.375,-27.125 12.48687,-12.48687 23.701,-25.48379 33.5625,-38.6875 5.51616,-47.93279 -17.91614,-114.12683 -65.84375,-173.3125 -4.57319,-5.64742 -9.26133,-11.08249 -14.03125,-16.3125 z";
	var pathDe3ne7 = "m 343.28125,149.5625 c -48.19472,-0.29834 -111.36541,29.95916 -165.0625,83.65625 -18.3723,18.3723 -33.99592,37.85824 -46.59375,57.46875 5.36715,64.57462 32.04615,113.27899 72.78125,121.9375 59.42376,12.63091 126.22221,-64.7068 149.1875,-172.75 6.58858,-30.99684 8.83473,-61.14309 7.3125,-88.6875 -5.60172,-1.04354 -11.48709,-1.587 -17.625,-1.625 z";
	var pathDe4ne7 = "m 343.28125,149.5625 c -48.19472,-0.29834 -111.36541,29.95916 -165.0625,83.65625 -27.40937,27.40937 -48.69166,57.28153 -62.9375,86.375 33.68835,45.11824 129.03703,46.59184 221.9375,1.28125 26.90508,-13.12248 50.83195,-28.84005 70.90625,-45.84375 14.81679,-43.30818 12.37703,-82.34172 -10.71875,-105.4375 -13.42427,-13.42427 -32.21831,-19.89564 -54.125,-20.03125 z";
	var pathDe5ne7 = "m 336.53125,149.71875 c -47.24073,2.38628 -107.08964,32.27714 -158.3125,83.5 -11.07303,11.07303 -21.13978,22.55466 -30.15625,34.21875 24.2933,33.78709 64.74604,66.61219 115.4375,90.25 25.59295,11.93419 51.31364,20.37494 75.84375,25.40625 63.67496,-66.4739 91.86554,-145.81892 71.59375,-193.3125 -16.34987,-11.56484 -34.60726,-22.22176 -54.4375,-31.46875 -6.6532,-3.10244 -13.32207,-5.96216 -19.96875,-8.59375 z";
	var pathDe6ne7 = "m 343.28125,149.5625 c -47.64706,-0.29495 -109.92219,29.28465 -163.21875,81.84375 -1.34246,28.31552 1.3815,59.42727 8.75,91.34375 12.06433,52.25635 34.3493,97.10112 60.84375,127.84375 28.37826,-14.2322 57.42463,-35.11213 84.125,-61.8125 33.57978,-33.57978 57.96527,-70.86593 71.46875,-105.875 -0.65082,-3.20809 -1.31753,-6.42941 -2.0625,-9.65625 -11.52575,-49.9235 -32.37273,-93.06497 -57.3125,-123.625 -0.86424,-0.0256 -1.71951,-0.0571 -2.59375,-0.0625 z";
	var pathDe1ne2ne7 = "m 248.03125,179.09375 c -23.7393,13.6881 -47.58488,31.89738 -69.8125,54.125 -22.93825,22.93825 -41.61066,47.60464 -55.4375,72.09375 2.50679,3.32111 5.06078,6.62393 7.71875,9.90625 30.17012,37.257 65.0797,65.61784 98.78125,82.65625 45.91377,-1.15504 87.79082,-10.80715 120.53125,-26.1875 6.24451,-7.10106 12.09633,-14.31686 17.53125,-21.59375 5.10034,-44.31949 -14.58641,-104.24436 -55.46875,-159.8125 -19.60733,-5.58677 -41.11599,-9.43415 -63.84375,-11.1875 z";
	var pathDe1ne3ne7 = "m 248.03125,179.09375 c -23.7393,13.6881 -47.58488,31.89738 -69.8125,54.125 -18.3723,18.3723 -33.99592,37.85824 -46.59375,57.46875 3.76419,45.28866 18.01723,82.7608 40.25,104.09375 C 187.29545,396.87719 203.40225,398 220,398 c 16.57574,0 32.66063,-1.12819 48.0625,-3.21875 37.59371,-28.20622 70.70168,-85.1386 85.53125,-154.90625 2.22571,-10.47115 3.95905,-20.85154 5.21875,-31.0625 -29.62089,-15.71019 -68.03462,-26.42103 -110.78125,-29.71875 z";
	var pathDe2ne3ne7 = "m 287.46875,160.46875 c -35.97857,13.21155 -74.58921,38.08921 -109.25,72.75 -18.3723,18.3723 -33.99592,37.85824 -46.59375,57.46875 0.90949,10.94245 2.43216,21.43091 4.53125,31.34375 34.81407,40.94651 75.23135,70.2948 112.625,84.5 42.20233,-19.7049 81.81254,-76.79666 101,-150.5625 -11.2221,-26.3375 -27.41619,-53.4213 -48.28125,-79.1875 -4.57319,-5.64742 -9.26133,-11.08249 -14.03125,-16.3125 z";
	var pathDe3ne4ne7 = "m 343.28125,149.5625 c -48.19472,-0.29834 -111.36541,29.95916 -165.0625,83.65625 -18.3723,18.3723 -33.99592,37.85824 -46.59375,57.46875 1.50308,18.08428 4.65476,34.93744 9.34375,50 41.465,21.35004 111.05546,17.48564 181.21875,-12.90625 13.53366,-25.40953 24.46546,-55.25241 31.40625,-87.90625 6.58858,-30.99684 8.83473,-61.14309 7.3125,-88.6875 -5.60172,-1.04354 -11.48709,-1.587 -17.625,-1.625 z";
	var pathDe4ne5ne7 = "m 336.53125,149.71875 c -47.24073,2.38628 -107.08964,32.27714 -158.3125,83.5 -11.07303,11.07303 -21.13978,22.55466 -30.15625,34.21875 21.83941,30.37422 56.74216,59.97072 100.40625,82.8125 28.39722,-4.97113 58.69379,-14.7156 88.75,-29.375 26.90508,-13.12248 50.83195,-28.84005 70.90625,-45.84375 11.10356,-32.45473 12.52247,-62.50108 2.8125,-85.25 -16.34987,-11.56484 -34.60726,-22.22176 -54.4375,-31.46875 -6.6532,-3.10244 -13.32207,-5.96216 -19.96875,-8.59375 z";
	var pathDe5ne6ne7 = "M 336.53125 149.71875 C 289.85328 152.0766 230.87506 181.29678 180.0625 231.40625 C 178.92824 255.33028 180.69613 281.25651 185.71875 307.96875 C 207.29022 326.61171 233.60266 343.74614 263.5 357.6875 C 289.09295 369.62169 314.81364 378.06244 339.34375 383.09375 C 370.06433 351.0228 392.5038 315.952 405.25 282.90625 C 404.59918 279.69816 403.93247 276.47684 403.1875 273.25 C 392.40165 226.53135 373.4509 185.74528 350.625 155.65625 C 345.91873 153.56037 341.2309 151.57946 336.53125 149.71875 z ";
	
	var pathDt1nt2nt6 = "M 318.84375 247.09375 L 231.25 348.3125 L 227.90625 367.5 L 263.8125 427 L 295.3125 411.3125 L 347.21875 348.5 L 352.625 328.625 L 340.46875 263.375 L 318.84375 247.09375 z ";
	var pathDt1nt3nt6 = "M 318.84375 247.09375 L 250.3125 326.28125 L 285.53125 423.15625 L 347.21875 348.5 L 365.3125 282.03125 L 318.84375 247.09375 z ";
	var pathDt2nt3nt6 = "M 334.15625 229.4375 L 250.3125 326.28125 L 283.375 417.25 L 332.65625 392.71875 L 337.28125 385.03125 L 352.625 328.59375 L 334.15625 229.4375 z ";
	var pathDt3nt4nt6 = "M 314.78125 251.8125 L 250.3125 326.28125 L 284.25 419.65625 L 309.59375 423.3125 L 316.5625 419.46875 L 337.25 385.09375 L 365.90625 279.78125 L 314.78125 251.8125 z ";
	var pathDt4nt5nt6 = "M 314.78125 251.8125 L 234.25 344.84375 L 258.53125 415.90625 L 309.59375 423.3125 L 329.90625 412.125 L 339.71875 376.0625 L 327.46875 258.75 L 314.78125 251.8125 z ";
	var pathDt5nt6 = "m 325.46875,239.46875 -91.21875,105.375 34.5,100.96875 61.15625,-33.6875 9.8125,-36.0625 -14.25,-136.59375 z";
	var pathDt4nt6 = "m 314.78125,251.8125 -88.75,102.5 -11.875,55.125 95.40625,13.875 20.34375,-11.1875 36,-132.34375 -51.125,-27.96875 z";
	var pathDt3nt6 = "M 400.46875 152.8125 L 250.3125 326.28125 L 289.59375 434.34375 L 316.5625 419.5 L 337.28125 385.0625 L 400.46875 152.8125 z ";
	var pathDt2nt6 = "M 334.15625,229.4375 231.25,348.3125 213.1875,452.1875 335.59375,391.28125 352.625,328.59375 334.15625,229.4375 z ";
	var pathDt1nt6 = "M 318.84375 247.09375 L 222.4375 358.46875 L 271.625 439.96875 L 347.21875 348.5 L 365.3125 282.03125 L 318.84375 247.09375 z ";
	var pathDt1nt2nt3nt4nt5nt6 = "M 314.75,251.8125 250.3125,326.28125 283.375,417.25 295.3125,411.3125 338,359.65625 327.46875,258.78125 314.75,251.8125 z";



	//drawing logic
	if (s7.array().length > 0  && s7.array()[0] != ""){
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

		//remove five ellipse drawing
		d3.select("#pathDe1ne2").remove();
		d3.select("#pathDe2ne3").remove();
		d3.select("#pathDe3ne4").remove();
		d3.select("#pathDe1ne3").remove();
		d3.select("#pathDe2ne4").remove();
		d3.select("#pathDe1ne4").remove();
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

		//draw seven elipse
		//Seven
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(220,288,200, 110, 0, "#00bf00", d3.select("#s1_title").node().value , s1.array().join("\n") , "e7th1", "e7thTl1", "#e7th1", "#e7thTl1", s1.array().length, 40, 294, 00, 240); //1st Ellipse
		drawEllipseBase(216,246,200, 110, 51, "#007fff", d3.select("#s2_title").node().value, s2.array().join("\n"), "e7th2", "e7thTl2", "#e7th2", "#e7thTl2", s2.array().length, 96, 117, 45, 80); //2st Ellipse
		drawEllipseBase(246,217,200, 110, 102, "#ff3433", d3.select("#s3_title").node().value, s3.array().join("\n"), "e7th3", "e7thTl3", "#e7th3", "#e7thTl3", s3.array().length, 273, 49, 270, 10); //3st Ellipse
		drawEllipseBase(289,222,200, 110, 154, "#E6E600", d3.select("#s4_title").node().value, s4.array().join("\n"), "e7th4", "e7thTl4", "#e7th4", "#e7thTl4", s4.array().length, 434, 152, 490, 152); //4st Ellipse
		drawEllipseBase(310,258,200, 110, 25, "#FF9900", d3.select("#s5_title").node().value, s5.array().join("\n"), "e7th5", "e7thTl5", "#e7th5", "#e7thTl5", s5.array().length, 458, 341, 510, 341); //5st Ellipse
		drawEllipseBase(296,298,200, 110, 77, "#00FFFF", d3.select("#s6_title").node().value, s6.array().join("\n"), "e7th6", "e7thTl6", "#e7th6", "#e7thTl6", s6.array().length, 330, 472, 330, 520); //6st Ellipse
		drawEllipseBase(256,311,200, 110, 135, "#ff00ff", d3.select("#s7_title").node().value, s7.array().join("\n"), "e7th7", "e7thTl7", "#e7th7", "#e7thTl7", s7.array().length, 132, 440, 60, 470); //7th Ellipse
		
		drawSevenSetIntersectionArea();

	} else if (s6.array().length > 0  && s6.array()[0] != ""){
		//draw triangle

		//drawTriangle(d, fillColor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove);
		drawTriangle("M -69.277 -32.868 L 135.580 121.186 L  70.900 199.427 Z", "#00bf00", 95,115, d3.select("#s1_title").node().value, s1.array().join("\n"), "tr1", "trx1", s1.array().length, "#tr1", "#trx1"); //1
		drawTriangle("M  81.988 -44.426 L  38.444 206.222 L 121.044 165.111 Z", "#007fff", 288,88, d3.select("#s2_title").node().value, s2.array().join("\n"), "tr2", "trx2", s2.array().length, "#tr2", "#trx2"); //2
		drawTriangle("M 203.271   9.619 L  39.604  82.683 L  84.652 206.669 Z", "#ff3433", 460,145, d3.select("#s3_title").node().value, s3.array().join("\n"), "tr3", "trx3", s3.array().length, "#tr3", "#trx3"); //3
		drawTriangle("M 333.561 225.349 L  61.764  76.805 L  38.980 182.461 Z", "#E6E600", 532,430, d3.select("#s4_title").node().value, s4.array().join("\n"), "tr4", "trx4", s4.array().length, "#tr4", "#trx4"); //4
		drawTriangle("M 131.886 385.785 L  38.136 111.491 L  94.208  24.690 Z", "#FF9900", 328,548, d3.select("#s5_title").node().value, s5.array().join("\n"), "tr5", "trx5", s5.array().length, "#tr5", "#trx5"); //5
		drawTriangle("M -60.184 274.046 L 142.476  39.903 L 103.276 183.962 Z", "#00FFFF", 127,500, d3.select("#s6_title").node().value, s6.array().join("\n"), "tr6", "trx6", s6.array().length, "#tr6", "#trx6"); //6

		drawTriangleIntersectionArea();
	} else if (s5.array().length > 0  && s5.array()[0] != "") {
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

		//draw elipse
		//draw area intersect
		//Five
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(263,213,200, 110, 90, "#00bf00", d3.select("#s1_title").node().value, s1.array().join("\n"), "e5th1", "e5thTl1", "#e5th1", "#e5thTl1", s1.array().length, 258, 50); //1st Ellipse
		drawEllipseBase(280,262,200, 110, 162, "#007fff", d3.select("#s2_title").node().value, s2.array().join("\n"), "e5th2", "e5thTl2", "#e5th2", "#e5thTl2", s2.array().length, 438, 216); //2st Ellipse
		drawEllipseBase(241,292,200, 110, 54, "#ff3433", d3.select("#s3_title").node().value, s3.array().join("\n"), "e5th3", "e5thTl3", "#e5th3", "#e5thTl3", s3.array().length, 330, 433); //3st Ellipse
		drawEllipseBase(199,266,200, 110, 126, "#E6E600", d3.select("#s4_title").node().value, s4.array().join("\n"), "e5th4", "e5thTl4", "#e5th4", "#e5thTl4", s4.array().length, 93, 409); //4st Ellipse
		drawEllipseBase(212,216,200, 110, 18, "#FF9900", d3.select("#s5_title").node().value, s5.array().join("\n"), "e5th5", "e5thTl5", "#e5th5", "#e5thTl5", s5.array().length, 42, 166); //5th Ellipse
		drawFiveSetIntersectionArea();
	} else if (s4.array().length > 0  && s4.array()[0] != "") {
		
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


		//remove five ellipse drawing
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

		//draw elipse
		//draw area intersect
		//Four 
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(196,246,200, 110, 45, "#00bf00", d3.select("#s1_title").node().value, s1.array().join("\n"), "e4th1", "e4thTl1", "#e4th1", "#e4thTl1", s1.array().length, 70, 135); //1st Ellipse
		drawEllipseBase(266,176,200, 110, 45, "#007fff", d3.select("#s2_title").node().value, s2.array().join("\n"), "e4th2", "e4thTl2", "#e4th2", "#e4thTl2", s2.array().length, 138, 55); //1st Ellipse
		drawEllipseBase(326,176,200, 110, 135, "#ff3433", d3.select("#s3_title").node().value, s3.array().join("\n"), "e4th3", "e4thTl3", "#e4th3", "#e4thTl3", s3.array().length, 435, 58); //1st Ellipse
		drawEllipseBase(396,246,200, 110, 135, "#E6E600", d3.select("#s4_title").node().value, s4.array().join("\n"), "e4th4", "e4thTl4", "#e4th4", "#e4thTl4", s4.array().length, 508, 135); //1st Ellipse

		drawFourSetIntersectionArea();

	} else {
		//draw circle
		drawCircles();
	}

	function drawCircles() {
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
	};
	
	function drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY, textXl, textYl) {

		d3.select(eRemove).remove();
		d3.select(tRemove).remove();

		d3.select(listName).remove();


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
	
	};

	function drawFourSetIntersectionArea () {

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
	};

	function drawFiveSetIntersectionArea () {

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
	};

	function drawSevenSetIntersectionArea () {

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
	};
		
	function drawTriangle(d, fillcolor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove) {
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

	}

	function drawTriangleIntersectionArea() {

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
		        .attr("x", 215)
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
	
	};

}

module.exports = listOperation;

},{"./sample.json":4,"d3":2,"simplesets":3}],2:[function(require,module,exports){
!function() {
  var d3 = {
    version: "3.5.3"
  };
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
  try {
    d3_array(d3_documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = function(list) {
      var i = list.length, array = new Array(i);
      while (i--) array[i] = list[i];
      return array;
    };
  }
  try {
    d3_document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (error) {
    var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_element_prototype.setAttribute = function(name, value) {
      d3_element_setAttribute.call(this, name, value + "");
    };
    d3_element_prototype.setAttributeNS = function(space, local, value) {
      d3_element_setAttributeNS.call(this, space, local, value + "");
    };
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.zip = function() {
    if (!(n = arguments.length)) return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  function d3_zipLength(d) {
    return d.length;
  }
  d3.transpose = function(matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatcher = d3_documentElement.matches || d3_documentElement[d3_vendorSymbol(d3_documentElement, "matchesSelector")], d3_selectMatches = function(n, s) {
    return d3_selectMatcher.call(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3_selectionRoot;
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0) {
        prefix = name.slice(0, i);
        name = name.slice(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    } : function() {
      return this.ownerDocument.createElementNS(this.namespaceURI, name);
    };
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.has(keyValue = key.call(node = group[i], node.__data__, i))) {
            exitNodes[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues[i] = keyValue;
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group = [ typeof node === "string" ? d3_select(node, d3_document) : node ];
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group = d3_array(typeof nodes === "string" ? d3_selectAll(nodes, d3_document) : nodes);
    group.parentNode = d3_documentElement;
    return d3_selection([ group ]);
  };
  var d3_selectionRoot = d3.select(d3_documentElement);
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  d3_selection_onFilters.forEach(function(k) {
    if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
  });
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect = "onselectstart" in d3_document ? null : d3_vendorSymbol(d3_documentElement.style, "userSelect"), d3_event_dragId = 0;
  function d3_event_dragSuppress() {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect) {
      var style = d3_documentElement.style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
        svg = d3.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject()).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged && d3.event.target === target);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  function d3_behavior_dragTouchSubject() {
    return d3.event.target;
  }
  function d3_behavior_dragMouseSubject() {
    return d3_window;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
    var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S = (dr || Math.log(w1 / w0)) / ρ;
    function interpolate(t) {
      var s = t * S;
      if (dr) {
        var coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      }
      return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s) ];
    }
    interpolate.duration = S * 1e3;
    return interpolate;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: +_
      };
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      });
      center0 = null;
    }
    function mousedowned() {
      var that = this, target = d3.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress();
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged && d3.event.target === target);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress();
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else translate0 = location(center0 = center || d3.mouse(this)), 
      d3_selection_interrupt.call(this), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ];
  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
    return d3.event.wheelDelta;
  }, "mousewheel") : (d3_behavior_zoomDelta = function() {
    return -d3.event.detail;
  }, "MozMousePixelScroll");
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) return rgb(color.r, color.g, color.b);
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  function d3_identity(d) {
    return d;
  }
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (d3_window.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      f: false,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now();
    d3_timer_active = d3_timer_queueHead;
    while (d3_timer_active) {
      if (now >= d3_timer_active.t) d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
      d3_timer_active = d3_timer_active.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.f) {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      } else {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("w" in d && ("W" in d || "U" in d)) {
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - point[0], dy = y - point[1], distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransform(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push("translate(", null, ",", null, ")");
      q.push({
        i: 1,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    } else {
      s.push("");
    }
    if (ra != rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(s.pop() + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + "rotate(" + rb + ")");
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + "skewX(" + wb + ")");
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + "scale(", null, ",", null, ")");
      q.push({
        i: n - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + "scale(" + kb + ")");
    }
    n = q.length;
    return function(t) {
      var i = -1, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) alpha = x; else alpha = 0;
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, m = candidates.length, x;
        while (++j < m) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), k = (da - n * pa) / d3.sum(values), index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, 
      Math.floor), e;
      return function(d) {
        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if ((rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
        if (x1 != null) {
          var rc1 = Math.min(rc, (r1 - lc) / (kc + 1)), t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var rc0 = Math.min(rc, (r0 - lc) / (kc - 1)), t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(r * r * d2 - D * D), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.join("L");
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, active;
      if ((lock = this[ns]) && (active = lock[lock.active])) {
        if (--lock.count) delete lock[lock.active]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3_selectionRoot.transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id];
    if (!transition) {
      var time = inherit.time;
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
      d3.timer(function(elapsed) {
        var delay = transition.delay, duration, ease, timer = d3_timer_active, tweened = [];
        timer.t = delay + time;
        if (delay <= elapsed) return start(elapsed - delay);
        timer.c = start;
        function start(elapsed) {
          if (lock.active > id) return stop();
          var active = lock[lock.active];
          if (active) {
            --lock.count;
            delete lock[lock.active];
            active.event && active.event.interrupt.call(node, node.__data__, active.index);
          }
          lock.active = id;
          transition.event && transition.event.start.call(node, node.__data__, i);
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, node.__data__, i)) {
              tweened.push(value);
            }
          });
          ease = transition.ease;
          duration = transition.duration;
          d3.timer(function() {
            timer.c = tick(elapsed || 1) ? d3_true : tick;
            return 1;
          }, 0, time);
        }
        function tick(elapsed) {
          if (lock.active !== id) return 1;
          var t = elapsed / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            transition.event && transition.event.end.call(node, node.__data__, i);
            return stop();
          }
        }
        function stop() {
          if (--lock.count) delete lock[id]; else delete node[ns];
          return 1;
        }
      }, 0, time);
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (typeof define === "function" && define.amd) define(d3); else if (typeof module === "object" && module.exports) module.exports = d3;
  this.d3 = d3;
}();
},{}],3:[function(require,module,exports){
// Set code for Node.js, which stores objects in arrays. All sets are
// mutable, and set update operations happen destructively. However,
// operations like set intersection and difference create a new set.

var SetPrototype = {
    // Does this set contain an element x? Returns true or false.
    has: function(x) {
	return this._items.indexOf(x) >= 0;
    },

    // Add an element x to this set, and return this set.
    add: function(x) {
	if (!this.has(x)) this._items.push(x);
	return this;
    },

    // Remove an element x from this set, if it is part of the set. If
    // it is not part of the set, do nothing. Returns this set.
    remove: function(x) {
	var pos = this._items.indexOf(x);
	if (pos >= 0) {
	    this._items.splice(pos, 1);
	}
	return this;
    },

    // Return a new set containing the items found in either this set,
    // the other set, or both.
    union: function(other) {
	var result = new exports.Set();
	result._items = this._items.concat(); // Make a copy
	for (var i = 0; i < other._items.length; i++)
	    result.add(other._items[i]);
	return result;
    },

    // Return a new set containing the items found in both this set
    // and the other set.
    intersection: function(other) {
	var result = new exports.Set();
	for (var i = 0; i < other._items.length; i++)
	    if (this.has(other._items[i]))
		result._items.push(other._items[i]);
	return result;
    },

    // Return a new set containing the items in this set that are not
    // in the other set.
    difference: function(other) {
	var result = new exports.Set();
	for (var i = 0; i < this._items.length; i++)
	    if (!other.has(this._items[i]))
		result._items.push(this._items[i]);
	return result;
    },

    // Return a new set containing the items in either this set or the
    // other set, but not both.
    symmetric_difference: function(other) {
	// Hideously inefficient -- but who uses this function, anyway?
	return this.union(other).difference(this.intersection(other));
    },

    // Return true if every element of this set is in the other set.
    issubset: function(other) {
	for (var i = 0; i < this._items.length; i++)
	    if (!other.has(this._items[i]))
		return false;
	return true;
    },

    // Return true if every element of the other is in this set.
    issuperset: function(other) {
	return other.issubset(this);
    },

    // Return a copy of the items in the set, as an array.
    array: function() {
	return this._items.concat();
    },

    // Return the size of the set.
    size: function() {
	return this._items.length;
    },

    // Return a shallow copy of the set.
    copy: function() {
	var result = new exports.Set();
	result._items = this._items.concat();
	return result;
    },

    // Return a random element of the set, or null if the set is
    // empty. Unlike pop, does not remove the element from the set.
    pick: function() {
	if (this._items.length === 0) return null;

	var i = Math.floor(Math.random() * this._items.length);
	return this._items[i];
    },

    // Remove and return a random element of the set, or null if the
    // set is empty.
    pop: function() {
	if (this._items.length === 0) return null;

	var i = Math.floor(Math.random() * this._items.length);
	return this._items.splice(i, 1)[0];
    },

    // Return true if this set equals another set, i.e. if every
    // element in each set is equal to an element in the other set.
    equals: function(other) {
	// Common case: sets are different size.
	if (this.size() !== other.size()) return false;

	
	// If sets are the same size, we can just check to see that
	// every element in this set corresponds to an element in the
	// other set.
	for (var i = 0; i < this._items.length; i++)
	    if (!other.has(this._items[i]))
		return false;
	return true;
    },

    // Call a callback function on each element of the set. If the set
    // is changed by the callback, the results are undefined.
    // Callback takes the same parameters as the forEach method of
    // arrays:  value, index, set
    // Takes an optional parameter that sets what this is bound to.
    each: function(callback, thisArg) {
	// If there's no callback, don't bother.
	if (!callback) return;
	
	if (thisArg) {
	    callback = callback.bind(thisArg);
	}

	for (var i = 0; i < this._items.length; i++)
	    callback(this._items[i], i, this);
    }
};

exports.Set = function(items) {
    // All items are stored in this list, in no particular order.
    this._items = [];

    // If initial items were given, add them to the set.
    if (typeof items !== "undefined")
	for (var i = 0; i < items.length; i++)
	    this.add(items[i]);
};

exports.Set.prototype = SetPrototype;


var StringSetPrototype = {
    // Does this set contain an element x? Returns true or false.
    has: function(x) {
	return this._items.hasOwnProperty(x);
    },

    // Add an element x to this set, and return this set.
    add: function(x) {
	if (!this.has(x)) {
	    this._items[x] = x;
	    this._size++;
	}
	return this;
    },

    // Remove an element x from this set, if it is part of the set. If
    // it is not part of the set, do nothing. Returns this set.
    remove: function(x) {
	if (this.has(x)) {
	    delete this._items[x];
	    this._size--;
	}
	return this;
    },

    // Return a new set containing the items found in either this set,
    // the other set, or both.
    union: function(other) {
	var result = new exports.StringSet();
	for (var x in this._items) result.add(this._items[x]);
	for (x in other._items) result.add(other._items[x]);
	return result;
    },

    // Return a new set containing the items found in both this set
    // and the other set.
    intersection: function(other) {
	var result = new exports.StringSet();
	for (var x in other._items)
	    if (this._items.hasOwnProperty(x))
		result.add(this._items[x]);
	return result;
    },

    // Return a new set containing the items in this set that are not
    // in the other set.
    difference: function(other) {
	var result = new exports.StringSet();
	for (var x in this._items)
	    if (!other._items.hasOwnProperty(x))
		result.add(this._items[x]);
	return result;
    },

    // Return a new set containing the items in either this set or the
    // other set, but not both.
    symmetric_difference: function(other) {
	// Hideously inefficient -- but who uses this function, anyway?
	return this.union(other).difference(this.intersection(other));
    },

    // Return true if every element of this set is in the other set.
    issubset: function(other) {
	for (var x in this._items)
	    if (!other._items.hasOwnProperty(x))
		return false;
	return true;
    },

    // Return true if every element of the other is in this set.
    issuperset: function(other) {
	return other.issubset(this);
    },

    // Return a copy of the items in the set, as an array.
    array: function() {
	var arr = [];
	for (var x in this._items)
	    arr.push(this._items[x]);
	return arr;
    },

    // Return the size of the set.
    size: function() {
	return this._size;
    },

    // Return a shallow copy of the set.
    copy: function() {
	var result = new exports.StringSet();
	for (var x in this._items) result.add(this._items[x]);
	return result;
    },

    // Return a random element of the set, or null if the set is
    // empty. Unlike pop, does not remove the element from the set.
    pick: function() {
	if (this._size === 0) return null;

	var i = Math.floor(Math.random() * this._size);
	for (var x in this._items) {
	    if (i === 0) return this._items[x];
	    i--;
	}
	// This should never happen
	return null;
    },

    // Remove and return a random element of the set, or null if the
    // set is empty.
    pop: function() {
	if (this._size === 0) return null;

	var i = Math.floor(Math.random() * this._size);
	for (var x in this._items) {
	    if (i === 0) {
		var ret = this._items[x];
		this.remove(this._items[x]);
		return ret;
	    }
	    i--;
	}
	// This should never happen
	return null;
    },
    
    // Return true if this set equals another set, i.e. if every
    // element in each set is equal to an element in the other set.
    equals: function(other) {
	// Common case: sets are different size.
	if (this.size() !== other.size()) return false;
	
	// If sets are the same size, we can just check to see that
	// every element in this set corresponds to an element in the
	// other set.
	for (var x in this._items)
	    if (!other.has(this._items[x]))
		return false;
	return true;
    },

    // Call a callback function on each element of the set. If the set
    // is changed by the callback, the results are undefined.
    // Callback takes the same parameters as the forEach method of
    // arrays:  value, index, set
    // Takes an optional parameter that sets what this is bound to.
    each: function(callback, thisArg) {
	// If there's no callback, don't bother.
	if (!callback) return;
        
        if (thisArg) callback = callback.bind(thisArg);

	for (var x in this._items)
	    callback(this._items[x], x, this);
    }
}

// A special type of set, where all keys have unique string
// representations. This works fine with a set containing only
// strings, or only numbers. However, if you want to have the number
// 42 and the string "42" in the same set, you should use the Set data
// type, not StringSet.
exports.StringSet = function(items) {
    // All items are stored in an object. 
    this._items = {};
    // We maintain a size variable for the cardinality of the set.
    this._size = 0;

    // If initial items were given, add them to the set.
    if (typeof items !== "undefined")
	for (var i = 0; i < items.length; i++)
	    this.add(items[i]);
};

exports.StringSet.prototype = StringSetPrototype;
},{}],4:[function(require,module,exports){
module.exports={
    "Green": ["G000001", "G000002", "G000003", "G000004", "G000005"],
    "Blue": ["G000001", "G000002", "G000003", "G000007", "G000008"],
    "Red": ["G000001", "G000002", "G000003", "G000004", "G000012"],
    "Yellow": ["G000001", "G000002", "G000003", "G000006", "G000004"],
    "Orange": ["G000001", "G000002", "G000003", "G000007", "G000008"],
    "Cyan": ["G000001", "G000002", "G000003", "G000005", "G000004"],
    "Purple": ["G000001", "G000002", "G000003", "G000006", "G000008"]
}

},{}]},{},[1]);
