require("d3");

var sets = require('simplesets');

var s1 = new sets.Set([]);
var s2 = new sets.Set([]);
var s3 = new sets.Set([]);
var s4 = new sets.Set([]);
var s5 = new sets.Set([]);
var s6 = new sets.Set([]);
var s7 = new sets.Set([]);

// Some data examples ...
//  var s1 = new sets.Set([
// 					'G000001',
// 					'G000002',
// 					'G000003',
// 					'G000004',
// 					'G000005',
// 					'G000006',
// 					'G000007',
// 					'G000008',
// 					'G000009',
// 					'G000010'
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

//load sample json file
/////////////////////////////////////////////////////////////////////////////////////////

/*var path = "";
 d3.select("#files").on("change" ,function(){
 	path = this.value;
 	path = path.replace(/^C:\\fakepath\\/, "")
 	console.log(path);

 });*/

d3.select("#button").on("click" ,function() { 

	var json = require('./sample.json');
	//var json = require(path);
	//console.log(json);
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

	for (key in json) {
	    for (subKey in json[key]) {
	        if(key == 's1'){

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
	        }
	    }
	}
	listOperation();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////


//take user input from textarea
//once the value changed it calls fucntion update to update the list
//---
d3.select("#s1").on("change" ,function() { 
  update(this.value.split("\n"));
});

function update (listvalue){
	s1 = new sets.Set(listvalue);
	listOperation();
}
//---
d3.select("#s2").on("change" ,function() { 
  update2(this.value.split("\n"));
});

function update2 (listvalue){
	s2 = new sets.Set(listvalue);
	listOperation();
}
//---
d3.select("#s3").on("change" ,function() { 
  update3(this.value.split("\n"));
});

function update3 (listvalue){
	s3 = new sets.Set(listvalue);
	listOperation();
}
// 
d3.select("#s4").on("change" ,function() { 
  update4(this.value.split("\n"));
});

function update4 (listvalue){
	s4 = new sets.Set(listvalue);
	listOperation();
}
//---
d3.select("#s5").on("change" ,function() { 
  update5(this.value.split("\n"));
});

function update5 (listvalue){
	s5 = new sets.Set(listvalue);
	listOperation();
}
//---
d3.select("#s6").on("change" ,function() { 
  update6(this.value.split("\n"));
});

function update6 (listvalue){
	s6 = new sets.Set(listvalue);
	listOperation();
}
//---
d3.select("#s7").on("change" ,function() { 
  update7(this.value.split("\n"));
});

function update7 (listvalue){
	s7 = new sets.Set(listvalue);
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

	s1ns2ns3ns4_arr = s1ns2ns3.intersection(s4).array();
	s1ns2ns3ns4 = new sets.Set(s1ns2ns3ns4_arr);

	s1ns2ns3ns4ns5_arr = s1ns2ns3ns4.intersection(s5).array();
	s1ns2ns3ns4ns5 = new sets.Set(s1ns2ns3ns4ns5_arr);

	s1ns2ns3ns4ns5ns6_arr = s1ns2ns3ns4ns5.intersection(s6).array();
	s1ns2ns3ns4ns5ns6 = new sets.Set(s1ns2ns3ns4ns5ns6_arr);

	s1ns2ns3ns4ns5ns6ns7_arr = s1ns2ns3ns4ns5ns6.intersection(s7).array();
	s1ns2ns3ns4ns5ns6ns7 = new sets.Set(s1ns2ns3ns4ns5ns6ns7_arr);

	/* ------------------------
		--- Intersection Area -----
		---------------------------*/
	var pathDe1ne2 = "M 108.71875 84.5625 C 107.34724 84.57099 106.00295 84.598122 104.65625 84.65625 C 102.55551 133.32572 132.99357 198.55607 188.21875 253.78125 C 243.44393 309.00643 308.67428 339.44449 357.34375 337.34375 C 359.44449 288.67428 329.00643 223.44393 273.78125 168.21875 C 220.08416 114.52166 156.91347 84.264162 108.71875 84.5625 z ";
	var pathDe1ne3 = "M 223.15625 126.03125 C 164.5005 198.3081 146.60678 279.41928 184.59375 317.40625 C 218.44986 351.26236 286.56961 340.74639 352.15625 296.53125 C 341.67212 255.35002 314.37017 208.80767 273.34375 167.78125 C 257.25499 151.69249 240.28786 137.71887 223.15625 126.03125 z ";
	var pathDe1ne4 = "m 295.96875,192.59375 c -60.89864,73.12532 -79.96517,156.22233 -41.375,194.8125 10.32866,10.32866 23.83657,16.53518 39.5,18.90625 17.09565,-1.95916 31.81321,-8.28196 42.875,-19.34375 38.51101,-38.51101 19.60242,-121.35897 -41,-194.375 z";
	var pathDe2ne3 = "m 296,58.09375 c -16.32053,11.349067 -32.43696,24.78071 -47.78125,40.125 -42.71359,42.71359 -70.59597,91.41704 -80.0625,133.8125 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 35.56066,-13.34424 73.58952,-38.02702 107.78125,-72.21875 7.10194,-7.10194 13.79737,-14.3733 20.0625,-21.75 -9.46653,-42.39546 -37.34891,-91.09891 -80.0625,-133.8125 C 328.43696,82.87446 312.32053,69.442817 296,58.09375 z";
	var pathDe2ne4 = "m 368.90625,126.09375 c -17.31379,11.76091 -34.43138,25.86888 -50.6875,42.125 -40.81438,40.81438 -68.05307,87.10165 -78.65625,128.125 65.6727,44.37416 133.93943,54.96682 167.84375,21.0625 37.97502,-37.97502 20.11164,-119.05282 -38.5,-191.3125 z";
	var pathDe3ne4 = "m 483.28125,84.5625 c -48.19472,-0.298338 -111.36541,29.95916 -165.0625,83.65625 -55.22518,55.22518 -85.66324,120.45553 -83.5625,169.125 48.66947,2.10074 113.89982,-28.33732 169.125,-83.5625 55.22518,-55.22518 85.66324,-120.45553 83.5625,-169.125 -1.3467,-0.05813 -2.69099,-0.08526 -4.0625,-0.09375 z";
	var pathDe1ne2ne3 = "m 223.15625,126.03125 c -28.59951,35.24092 -47.53647,72.57486 -55,106 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 18.34983,-6.88583 37.3577,-16.79573 56.15625,-29.46875 -10.48413,-41.18123 -37.78608,-87.72358 -78.8125,-128.75 -16.08876,-16.08876 -33.05589,-30.06238 -50.1875,-41.75 z";
	
	var pathDe1ne2ne4 = "m 295.96875,192.59375 c -28.53245,34.26094 -47.86605,70.70822 -56.40625,103.75 41.09655,27.76839 83.20591,42.31202 117.28125,41 1.96733,-41.60522 -19.93106,-95.41923 -60.875,-144.75 z";
	var pathDe1ne3ne4 = "m 295.96875,192.59375 c -41.04028,49.27998 -63.11117,103.07879 -61.3125,144.75 34.08561,1.47125 76.29095,-13.03148 117.5,-40.8125 -8.41809,-33.06589 -27.67651,-69.58641 -56.1875,-103.9375 z";
	var pathDe2ne3ne4 = "m 368.90625,126.09375 c -17.31379,11.76091 -34.43138,25.86888 -50.6875,42.125 -40.81438,40.81438 -68.05307,87.10165 -78.65625,128.125 C 258.45233,309.10736 277.55901,319.07996 296,326 c 35.56066,-13.34424 73.58952,-38.02702 107.78125,-72.21875 7.10194,-7.10194 13.79737,-14.3733 20.0625,-21.75 -7.45872,-33.40357 -26.36895,-70.71661 -54.9375,-105.9375 z";
	var pathDe1ne2ne3ne4 = "M 295.96875,192.59375 C 267.4363,226.85469 248.1027,263.30197 239.5625,296.34375 258.45233,309.10736 277.55901,319.07996 296,326 c 18.34983,-6.88583 37.3577,-16.79573 56.15625,-29.46875 -8.41809,-33.06589 -27.67651,-69.58641 -56.1875,-103.9375 z";
	var pathDe1ne2ne3ne4ne5 = "m 257.59375,153.84375 c -3.85166,1.11304 -7.72558,2.27441 -11.59375,3.53125 -35.73263,11.61023 -67.3762,27.88807 -92.875,46.59375 -0.0734,2.99791 -0.125,6.00043 -0.125,9.03125 0,38.36358 5.94978,74.21364 16.25,104.65625 2.88997,1.0196 5.80361,2.01141 8.75,2.96875 36.6108,11.89557 72.65549,17.30507 104.875,16.875 1.71748,-2.25259 3.44326,-4.52903 5.125,-6.84375 22.56233,-31.05438 38.81652,-63.55176 48.375,-94.25 -2.06757,-3.03331 -4.18883,-6.0535 -6.375,-9.0625 -21.90662,-30.15187 -46.9492,-55.07254 -72.40625,-73.5 z";
	var pathDe1ne2ne3ne4ne5ne6ne7 = "m 248.03125,179.09375 c -23.08761,13.31233 -46.26595,30.91 -67.96875,52.3125 -1.13426,23.92403 0.63363,49.85026 5.65625,76.5625 17.87702,15.45005 39.00987,29.86219 62.75,42.28125 23.66458,-4.14265 48.65082,-11.61034 73.71875,-22.46875 11.27377,-21.16659 20.73114,-45.42933 27.59375,-71.8125 -9.27893,-21.777 -21.99035,-44.05427 -37.90625,-65.6875 -19.60733,-5.58677 -41.11599,-9.43415 -63.84375,-11.1875 z";

	var pathDt1nt2nt3nt4nt5nt6 = "M 164.84375,134.90625 129.0625,176.25 l 18.375,50.5625 6.625,-3.3125 23.71875,-28.6875 -5.84375,-56.03125 -7.09375,-3.875 z";

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
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA5").remove();
		//draw seven elipse
		//Seven
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(220,288,200, 110, 0, "#00bf00", "List 1: ", s1.array().join("\n"), "e7th1", "e7thTl1", "#e7th1", "#e7thTl1", s1.array().length, 40, 294); //1st Ellipse
		drawEllipseBase(216,246,200, 110, 51, "#007fff", "List 2: ", s2.array().join("\n"), "e7th2", "e7thTl2", "#e7th2", "#e7thTl2", s2.array().length, 96, 117); //2st Ellipse
		drawEllipseBase(246,217,200, 110, 102, "#ff3433", "List 3: ", s3.array().join("\n"), "e7th3", "e7thTl3", "#e7th3", "#e7thTl3", s3.array().length, 273, 49); //3st Ellipse
		drawEllipseBase(289,222,200, 110, 154, "#A57706", "List 4: ", s4.array().join("\n"), "e7th4", "e7thTl4", "#e7th4", "#e7thTl4", s4.array().length, 434, 152); //4st Ellipse
		drawEllipseBase(310,258,200, 110, 25, "#A57706", "List 5: ", s5.array().join("\n"), "e7th5", "e7thTl5", "#e7th5", "#e7thTl5", s5.array().length, 458, 341); //5st Ellipse
		drawEllipseBase(296,298,200, 110, 77, "#A57706", "List 6: ", s6.array().join("\n"), "e7th6", "e7thTl6", "#e7th6", "#e7thTl6", s6.array().length, 330, 472); //6st Ellipse
		drawEllipseBase(256,311,200, 110, 135, "#ff00ff", "List 7: ", s7.array().join("\n"), "e7th7", "e7thTl7", "#e7th7", "#e7thTl7", s7.array().length, 132, 440); //7th Ellipse
		
		drawSevenSetIntersectionArea();

	} else if (s6.array().length > 0  && s6.array()[0] != ""){
		//draw triangle

		//drawTriangle(d, fillColor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove);
		drawTriangle("M -69.277 -32.868 L 135.580 121.186 L  70.900 199.427 Z", "#00bf00", 0,50, "List 1: ", s1.array().join("\n"), "tr1", "trx1", s1.array().length, "#tr1", "#trx1"); //1
		drawTriangle("M  81.988 -44.426 L  38.444 206.222 L 121.044 165.111 Z", "#007fff", 82,20, "List 2: ", s2.array().join("\n"), "tr2", "trx2", s2.array().length, "#tr2", "#trx2"); //2
		drawTriangle("M 203.271   9.619 L  39.604  82.683 L  84.652 206.669 Z", "#ff3433", 160,60, "List 3: ", s3.array().join("\n"), "tr3", "trx3", s3.array().length, "#tr3", "#trx3"); //3
		drawTriangle("M 333.561 225.349 L  61.764  76.805 L  38.980 182.461 Z", "#A57706", 180,180, "List 4: ", s4.array().join("\n"), "tr4", "trx4", s4.array().length, "#tr4", "#trx4"); //4
		drawTriangle("M 131.886 385.785 L  38.136 111.491 L  94.208  24.690 Z", "#BD3613", 100,250, "List 5: ", s5.array().join("\n"), "tr5", "trx5", s5.array().length, "#tr5", "#trx5"); //5
		drawTriangle("M -60.184 274.046 L 142.476  39.903 L 103.276 183.962 Z", "#c09853", 20,220, "List 6: ", s6.array().join("\n"), "tr6", "trx6", s6.array().length, "#tr6", "#trx6"); //6

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

		d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
		d3.select("#e7thA7").remove();

		//draw elipse
		//draw area intersect
		//Five
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(263,213,200, 110, 90, "#00bf00", "List 1: ", s1.array().join("\n"), "e5th1", "e5thTl1", "#e5th1", "#e5thTl1", s1.array().length, 258, 50); //1st Ellipse
		drawEllipseBase(280,262,200, 110, 162, "#007fff", "List 2: ", s2.array().join("\n"), "e5th2", "e5thTl2", "#e5th2", "#e5thTl2", s2.array().length, 438, 216); //2st Ellipse
		drawEllipseBase(241,292,200, 110, 54, "#ff3433", "List 3: ", s3.array().join("\n"), "e5th3", "e5thTl3", "#e5th3", "#e5thTl3", s3.array().length, 330, 433); //3st Ellipse
		drawEllipseBase(199,266,200, 110, 126, "#A57706", "List 4: ", s4.array().join("\n"), "e5th4", "e5thTl4", "#e5th4", "#e5thTl4", s4.array().length, 93, 409); //4st Ellipse
		drawEllipseBase(212,216,200, 110, 18, "#BD3613", "List 5: ", s5.array().join("\n"), "e5th5", "e5thTl5", "#e5th5", "#e5thTl5", s5.array().length, 42, 166); //5th Ellipse
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
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA5").remove();



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

		d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
		d3.select("#e7thA7").remove();

		//draw elipse
		//draw area intersect
		//Four 
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(196,246,200, 110, 45, "#00bf00", "List 1: ", s1.array().join("\n"), "e4th1", "e4thTl1", "#e4th1", "#e4thTl1", s1.array().length, 70, 135); //1st Ellipse
		drawEllipseBase(266,176,200, 110, 45, "#007fff", "List 2: ", s2.array().join("\n"), "e4th2", "e4thTl2", "#e4th2", "#e4thTl2", s2.array().length, 138, 55); //1st Ellipse
		drawEllipseBase(326,176,200, 110, 135, "#ff3433", "List 3: ", s3.array().join("\n"), "e4th3", "e4thTl3", "#e4th3", "#e4thTl3", s3.array().length, 435, 58); //1st Ellipse
		drawEllipseBase(396,246,200, 110, 135, "#A57706", "List 4: ", s4.array().join("\n"), "e4th4", "e4thTl4", "#e4th4", "#e4thTl4", s4.array().length, 508, 135); //1st Ellipse

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

		d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
		d3.select("#e7thA7").remove();

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
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA5").remove();

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
    	d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
		d3.select("#tA15").remove();
		
		//three circles with intersection
		//
		if (s1.array().length > 0 && s1.array()[0] != "") {
			//circle one
			gvennStage.append("circle")
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
				       //Hide the tooltip
						d3.select("#tooltip").classed("hidden", true);      
				     })
			    	.on("mousemove", function() {
				        d3.select("#tooltip")
						.style("left", (d3.event.pageX + 100) + "px")
						.style("top", (d3.event.pageY - 100) + "px")	
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
			    .on("click", function() {
			    	gvennStage.append("text")
				    		.attr("id", "text20")
					        .attr("class", "text")
					        .text(s1.intersection(s2).array().join("\n"))
					        .attr("x", 290)
					        .attr("y", 500)
					        .attr("fill",  "black")
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
	
	function drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY) {

		d3.select(eRemove).remove();
		d3.select(tRemove).remove();


		// //remove four ellipse drawing
		// d3.select("#e4th1").remove();		
		// d3.select("#e4th2").remove();	
		// d3.select("#e4th3").remove();	
		// d3.select("#e4th4").remove();
		// d3.select("#t1").remove();		
		// d3.select("#t2").remove();	
		// d3.select("#t3").remove();	
		// d3.select("#t4").remove();
		// d3.select("#tA1").remove();
		// d3.select("#tA2").remove();
		// d3.select("#tA3").remove();
		// d3.select("#tA4").remove();
		// d3.select("#tA5").remove();
		// d3.select("#tA6").remove();
		// d3.select("#tA7").remove();
		// d3.select("#tA8").remove();
		// d3.select("#tA9").remove();
		// d3.select("#tA10").remove();
		// d3.select("#tA11").remove();

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
    	d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
		d3.select("#tA15").remove();


		gvennStage.append("ellipse")
    			  .attr("cx", cX)
    			  .attr("cy", cY)
    			  .attr("rx", rX)
    			  .attr("ry", rY)
    			  .attr("id", eID)
				  .attr("transform", "rotate(" + rotationAng + " " + cX + " " + cY + ")")
				  .style("fill-opacity", 0.2)
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
				gvennStage.append("text")
		    		.attr("id", tID)
			        .attr("class", "text")
			        .text(listCount)
			        .attr("x", textX)
			        .attr("y", textY)
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
	    gvennStage.append("text")
				.attr("id", "e4thA1")
		        .attr("class", "text")
		        .text(s1.intersection(s3).array().length)
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
			        tooltip.text("L1∩L2∩L3∩L4∩L5: \n" + s1ns2ns3.intersection(s4).array().join("\n"));
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
	    gvennStage.append("text")
				.attr("id", "e4thA11")
		        .attr("class", "text")
		        .text(s1ns2ns3.intersection(s4).array().length)
		        .attr("x", 290)
		        .attr("y", 278)
		        .attr("fill",  "black")
	};

	function drawFiveSetIntersectionArea () {

		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA5").remove();



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
			        tooltip.text("L1∩L2∩L3∩L4∩L5: \n" + s1ns2ns3ns4.intersection(s5).array().join("\n"));
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
		//L1nL2nL3nL4nL5 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e5thA5")
		        .attr("class", "text")
		        .text(s1ns2ns3ns4.intersection(s5).array().length)
		        .attr("x", 236)
		        .attr("y", 250)
		        .attr("fill",  "black")
	};

	function drawSevenSetIntersectionArea () {

		d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
		d3.select("#e7thA7").remove();



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
			        tooltip.text("L1∩L2∩L3∩L4∩L5∩L6∩L7: \n" + s1ns2ns3ns4ns5ns6.intersection(s7).array().join("\n"));
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
		//L1nL2nL3nL4nL5nL6nL7 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e7thA7")
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

			d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
			d3.select("#e7thA7").remove();

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

			d3.select("#pathDe1ne2ne3ne4ne5").remove();
			d3.select("#e5thA5").remove();

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
	    			  .attr("transform", "translate(120,70)")
	    			  .attr("id", trID)
	    			  //.attr("transform", "scale(2)")
					  .style("fill-opacity", 0.3)
					  .style("stroke-opacity", 0)
				      .style("stroke", "#259286")
				      .style("stroke-width", "0")
					  .style("fill", fillcolor) // #BD3613
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
			gvennStage.append("text")
		    		.attr("id", tID)
			        .attr("class", "text")
			        .attr("transform", "translate(115,70)")
			        .text(listCount)
			        .attr("x", textX)
			        .attr("y", textY)
			        .attr("fill",  "black")		  

	}

	function drawTriangleIntersectionArea() {

		d3.select("#pathDt1nt2nt3nt4nt5nt6").remove();
		d3.select("#tA15").remove();
	
		//L1nL2nL3nL4nL5nL6 intersection area
        gvennStage.append("path")
	    		.attr("d", pathDt1nt2nt3nt4nt5nt6)
	    		.attr("id", "pathDt1nt2nt3nt4nt5nt6")
	    		.attr("transform", "translate(50,30)")// update later
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
			        tooltip.text("L1∩L2∩L3∩L4∩L5∩L6: \n" + s1ns2ns3ns4ns5.intersection(s6).array().join("\n"));
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
		//L1nL2nL3nL4nL5nL6 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "tA15")
		        .attr("class", "text")
		        .attr("transform", "translate(50,30)")// update later
		        .text(s1ns2ns3ns4ns5.intersection(s6).array().length)
		        .attr("x", 150.66335)
		        .attr("y", 187.0728)
		        .attr("fill",  "black")
	
	};

}

module.exports = listOperation;
