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

//upload file
d3.select("#files").on("change" ,function() {
	var files = this.files;
	if (!files.length) { return; }

	var file = files[0];
	var reader = new FileReader();

	reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
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
	    var json = JSON.parse(evt.target.result);
	        	
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

	/* ------------------------
		--- Intersection Area -----
		---------------------------*/
	var pathDe1ne2 = "M 108.71875 84.5625 C 107.34724 84.57099 106.00295 84.598122 104.65625 84.65625 C 102.55551 133.32572 132.99357 198.55607 188.21875 253.78125 C 243.44393 309.00643 308.67428 339.44449 357.34375 337.34375 C 359.44449 288.67428 329.00643 223.44393 273.78125 168.21875 C 220.08416 114.52166 156.91347 84.264162 108.71875 84.5625 z ";
	var pathDe1ne3 = "M 223.15625 126.03125 C 164.5005 198.3081 146.60678 279.41928 184.59375 317.40625 C 218.44986 351.26236 286.56961 340.74639 352.15625 296.53125 C 341.67212 255.35002 314.37017 208.80767 273.34375 167.78125 C 257.25499 151.69249 240.28786 137.71887 223.15625 126.03125 z ";
	var pathDe1ne4 = "m 295.96875,192.59375 c -60.89864,73.12532 -79.96517,156.22233 -41.375,194.8125 10.32866,10.32866 23.83657,16.53518 39.5,18.90625 17.09565,-1.95916 31.81321,-8.28196 42.875,-19.34375 38.51101,-38.51101 19.60242,-121.35897 -41,-194.375 z";
	
	var pathDe2ne3 = "m 296,58.09375 c -16.32053,11.349067 -32.43696,24.78071 -47.78125,40.125 -42.71359,42.71359 -70.59597,91.41704 -80.0625,133.8125 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 35.56066,-13.34424 73.58952,-38.02702 107.78125,-72.21875 7.10194,-7.10194 13.79737,-14.3733 20.0625,-21.75 -9.46653,-42.39546 -37.34891,-91.09891 -80.0625,-133.8125 C 328.43696,82.87446 312.32053,69.442817 296,58.09375 z";
	var pathDe2ne4 = "m 368.90625,126.09375 c -17.31379,11.76091 -34.43138,25.86888 -50.6875,42.125 -40.81438,40.81438 -68.05307,87.10165 -78.65625,128.125 65.6727,44.37416 133.93943,54.96682 167.84375,21.0625 37.97502,-37.97502 20.11164,-119.05282 -38.5,-191.3125 z";
	var pathDe3ne4 = "m 483.28125,84.5625 c -48.19472,-0.298338 -111.36541,29.95916 -165.0625,83.65625 -55.22518,55.22518 -85.66324,120.45553 -83.5625,169.125 48.66947,2.10074 113.89982,-28.33732 169.125,-83.5625 55.22518,-55.22518 85.66324,-120.45553 83.5625,-169.125 -1.3467,-0.05813 -2.69099,-0.08526 -4.0625,-0.09375 z";
	var pathDe1ne5 = "M 173.78125 95.96875 C 160.69978 128.87328 153 169.29664 153 213 C 153 251.36358 158.94978 287.21364 169.25 317.65625 C 172.13997 318.67585 175.05361 319.66766 178 320.625 C 245.5468 342.57229 311.17434 342.47067 354.40625 324.25 C 366.14092 292.4396 373 254.18066 373 213 C 373 204.34912 372.71104 195.8301 372.125 187.46875 C 343.92041 156.66087 299.53481 128.76952 246 111.375 C 221.34548 103.36426 196.92663 98.29775 173.78125 95.96875 z ";
	var pathDe2ne5 = "M 315.0625 142.3125 C 292.85634 144.7735 269.54113 149.72602 246 157.375 C 167.05458 183.02592 107.94539 231.48131 91.40625 278.5 C 115.74851 295.32019 145.15536 309.95313 178 320.625 C 283.0508 354.75807 383.44556 335.59044 402.21875 277.8125 C 416.46787 233.95823 379.59094 180.47311 315.0625 142.3125 z ";
	var pathDe3ne5 = "M 164.21875 117.71875 C 148.85203 117.81567 134.95676 121.81827 123.4375 130.1875 C 85.70671 157.60052 84.473136 223.73422 115.3125 293.40625 C 134.20361 303.98596 155.28331 313.2439 178 320.625 C 257.68009 346.51463 334.67298 341.71627 375.40625 312.6875 C 365.60409 284.6612 350.38704 255.4041 330 227.34375 C 280.29182 158.92631 214.4167 117.40214 164.21875 117.71875 z ";
	var pathDe4ne5 = "M 222.1875 104.53125 C 183.92576 121.72044 143.32957 155.46953 110 201.34375 C 94.880388 222.15411 82.59092 243.61646 73.25 264.75 C 100.48824 287.32005 136.4935 307.13872 178 320.625 C 214.6108 332.52057 250.65549 337.93007 282.875 337.5 C 284.59248 335.24741 286.31826 332.97097 288 330.65625 C 329.95922 272.90434 350.11262 210.13608 345.875 163.3125 C 319.27317 142.38115 285.07734 124.072 246 111.375 C 238.0253 108.78386 230.0747 106.51449 222.1875 104.53125 z";
	var pathDe1ne2ne3 = "m 223.15625,126.03125 c -28.59951,35.24092 -47.53647,72.57486 -55,106 6.26513,7.3767 12.96056,14.64806 20.0625,21.75 C 222.41048,287.97298 260.43934,312.65576 296,326 c 18.34983,-6.88583 37.3577,-16.79573 56.15625,-29.46875 -10.48413,-41.18123 -37.78608,-87.72358 -78.8125,-128.75 -16.08876,-16.08876 -33.05589,-30.06238 -50.1875,-41.75 z";
	
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
		d3.select("#pathDe1ne5").remove();
		d3.select("#pathDe2ne5").remove();
		d3.select("#pathDe3ne5").remove();
		d3.select("#pathDe4ne5").remove();
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA1").remove();
		d3.select("#e5thA2").remove();
		d3.select("#e5thA3").remove();
		d3.select("#e5thA4").remove();
		d3.select("#e5thA5").remove();

		//draw seven elipse
		//Seven
		//drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY)
		drawEllipseBase(220,288,200, 110, 0, "#00bf00", "List 1: ", s1.array().join("\n"), "e7th1", "e7thTl1", "#e7th1", "#e7thTl1", s1.array().length, 40, 294); //1st Ellipse
		drawEllipseBase(216,246,200, 110, 51, "#007fff", "List 2: ", s2.array().join("\n"), "e7th2", "e7thTl2", "#e7th2", "#e7thTl2", s2.array().length, 96, 117); //2st Ellipse
		drawEllipseBase(246,217,200, 110, 102, "#ff3433", "List 3: ", s3.array().join("\n"), "e7th3", "e7thTl3", "#e7th3", "#e7thTl3", s3.array().length, 273, 49); //3st Ellipse
		drawEllipseBase(289,222,200, 110, 154, "#E6E600", "List 4: ", s4.array().join("\n"), "e7th4", "e7thTl4", "#e7th4", "#e7thTl4", s4.array().length, 434, 152); //4st Ellipse
		drawEllipseBase(310,258,200, 110, 25, "#FF9900", "List 5: ", s5.array().join("\n"), "e7th5", "e7thTl5", "#e7th5", "#e7thTl5", s5.array().length, 458, 341); //5st Ellipse
		drawEllipseBase(296,298,200, 110, 77, "#00FFFF", "List 6: ", s6.array().join("\n"), "e7th6", "e7thTl6", "#e7th6", "#e7thTl6", s6.array().length, 330, 472); //6st Ellipse
		drawEllipseBase(256,311,200, 110, 135, "#ff00ff", "List 7: ", s7.array().join("\n"), "e7th7", "e7thTl7", "#e7th7", "#e7thTl7", s7.array().length, 132, 440); //7th Ellipse
		
		drawSevenSetIntersectionArea();

	} else if (s6.array().length > 0  && s6.array()[0] != ""){
		//draw triangle

		//drawTriangle(d, fillColor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove);
		drawTriangle("M -69.277 -32.868 L 135.580 121.186 L  70.900 199.427 Z", "#00bf00", 95,115, "List 1: ", s1.array().join("\n"), "tr1", "trx1", s1.array().length, "#tr1", "#trx1"); //1
		drawTriangle("M  81.988 -44.426 L  38.444 206.222 L 121.044 165.111 Z", "#007fff", 288,88, "List 2: ", s2.array().join("\n"), "tr2", "trx2", s2.array().length, "#tr2", "#trx2"); //2
		drawTriangle("M 203.271   9.619 L  39.604  82.683 L  84.652 206.669 Z", "#ff3433", 460,145, "List 3: ", s3.array().join("\n"), "tr3", "trx3", s3.array().length, "#tr3", "#trx3"); //3
		drawTriangle("M 333.561 225.349 L  61.764  76.805 L  38.980 182.461 Z", "#E6E600", 532,430, "List 4: ", s4.array().join("\n"), "tr4", "trx4", s4.array().length, "#tr4", "#trx4"); //4
		drawTriangle("M 131.886 385.785 L  38.136 111.491 L  94.208  24.690 Z", "#FF9900", 328,548, "List 5: ", s5.array().join("\n"), "tr5", "trx5", s5.array().length, "#tr5", "#trx5"); //5
		drawTriangle("M -60.184 274.046 L 142.476  39.903 L 103.276 183.962 Z", "#00FFFF", 127,500, "List 6: ", s6.array().join("\n"), "tr6", "trx6", s6.array().length, "#tr6", "#trx6"); //6

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
		drawEllipseBase(199,266,200, 110, 126, "#E6E600", "List 4: ", s4.array().join("\n"), "e5th4", "e5thTl4", "#e5th4", "#e5thTl4", s4.array().length, 93, 409); //4st Ellipse
		drawEllipseBase(212,216,200, 110, 18, "#FF9900", "List 5: ", s5.array().join("\n"), "e5th5", "e5thTl5", "#e5th5", "#e5thTl5", s5.array().length, 42, 166); //5th Ellipse
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
		d3.select("#pathDe1ne5").remove();
		d3.select("#pathDe2ne5").remove();
		d3.select("#pathDe3ne5").remove();
		d3.select("#pathDe4ne5").remove();
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA1").remove();
		d3.select("#e5thA2").remove();
		d3.select("#e5thA3").remove();
		d3.select("#e5thA4").remove();
		d3.select("#e5thA5").remove();
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
		drawEllipseBase(396,246,200, 110, 135, "#E6E600", "List 4: ", s4.array().join("\n"), "e4th4", "e4thTl4", "#e4th4", "#e4thTl4", s4.array().length, 508, 135); //1st Ellipse

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
		d3.select("#pathDe1ne5").remove();
		d3.select("#pathDe2ne5").remove();
		d3.select("#pathDe3ne5").remove();
		d3.select("#pathDe4ne5").remove();
		d3.select("#pathDe1ne2ne3ne4ne5").remove();
		d3.select("#e5thA1").remove();
		d3.select("#e5thA2").remove();
		d3.select("#e5thA3").remove();
		d3.select("#e5thA4").remove();
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
			    		d3.select("#description").node().value = "Gene list elements in List 1: " + "\n" + s1.array().join("\n");
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
			    		d3.select("#description").node().value = "Gene list elements in List 2: " + "\n" + s2.array().join("\n");
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
	    		d3.select("#description").node().value = "Gene list elements in List 3: " + "\n" + s3.array().join("\n");
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
			    	d3.select("#description").node().value = "Common elements in List 1 and List 2 : " + "\n" + s1.intersection(s2).array().join("\n");
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
				    .on("click", function() {
			    		d3.select("#description").node().value = "Common elements in List 1 and List 3 : " + "\n" + s1.intersection(s3).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 2 and List 3 : " + "\n" + s2.intersection(s3).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2 and List 3 : " + "\n" + s1ns2.intersection(s3).array().join("\n");
				})

	    }
	};
	
	function drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY) {

		d3.select(eRemove).remove();
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
			    		d3.select("#description").node().value = "Gene list elements in " + listName + "\n" + listContent;
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1 and List 2 : " + "\n" + s1.intersection(s2).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1 and List 3 : " + "\n" + s1.intersection(s3).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1 and List 4 : " + "\n" + s1.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 2 and List 3 : " + "\n" + s2.intersection(s3).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 2 and List 4 : " + "\n" + s2.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 3 and List 4 : " + "\n" + s3.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2 and List 3 : " + "\n" + s1ns2.intersection(s3).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2 and List 4 : " + "\n" + s1ns2.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 3 and List 4 : " + "\n" + s1ns3.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 2, List 3 and List 4 : " + "\n" + s2ns3.intersection(s4).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, List 3 and List 4 : " + "\n" + s1ns2ns3.intersection(s4).array().join("\n");
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
			        tooltip.text("L1∩L5: \n" + s1.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1 and List 5 : " + "\n" + s1.intersection(s5).array().join("\n");
				})
		//L1nL5 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e5thA1")
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
			        tooltip.text("L2∩L5: \n" + s2.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2 and List 5 : " + "\n" + s2.intersection(s5).array().join("\n");
				})
		//L2nL5 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e5thA2")
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
			        tooltip.text("L3∩L5: \n" + s3.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3 and List 5 : " + "\n" + s3.intersection(s5).array().join("\n");
				})
		//L3nL5 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e5thA3")
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
			        tooltip.text("L4∩L5: \n" + s4.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 4 and List 5 : " + "\n" + s4.intersection(s5).array().join("\n");
				})
		//L4nL5 intersection area list count text
	    gvennStage.append("text")
				.attr("id", "e5thA4")
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
			        tooltip.text("L1∩L2∩L5: \n" + s1ns2.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 2 and List 5 : " + "\n" + s1ns2.intersection(s5).array().join("\n");
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
			        tooltip.text("L1∩L3∩L5: \n" + s1ns3.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 3 and List 5 : " + "\n" + s1ns3.intersection(s5).array().join("\n");
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
			        tooltip.text("L2∩L3∩L5: \n" + s2ns3.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2, List 3 and List 5 : " + "\n" + s2ns3.intersection(s5).array().join("\n");
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
			        tooltip.text("L3∩L4∩L5: \n" + s3ns4.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3, List 4 and List 5 : " + "\n" + s3ns4.intersection(s5).array().join("\n");
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
			        tooltip.text("L1nL2nL3nL5: \n" + s1ns2ns3.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, List 3 and List 5 : " + "\n" + s1ns2ns3.intersection(s5).array().join("\n");
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
			        tooltip.text("L2nL3nL4nL5: \n" + s2ns3ns4.intersection(s5).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2, List 3, List 4 and List 5 : " + "\n" + s2ns3ns4.intersection(s5).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, List 3, List 4 and List 5 : " + "\n" + s1ns2ns3ns4.intersection(s5).array().join("\n");
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
		d3.select("#e7thA7").remove();


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
			        tooltip.text("L1∩L7: \n" + s1.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, and List 7 : " + "\n" + s1.intersection(s7).array().join("\n");
				})

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
			        tooltip.text("L2∩L7: \n" + s2.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2, and List 7 : " + "\n" + s2.intersection(s7).array().join("\n");
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
			        tooltip.text("L3∩L7: \n" + s3.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3, and List 7 : " + "\n" + s3.intersection(s7).array().join("\n");
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
			        tooltip.text("L4∩L7: \n" + s4.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 4, and List 7 : " + "\n" + s4.intersection(s7).array().join("\n");
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
			        tooltip.text("L5∩L7: \n" + s5.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 5, and List 7 : " + "\n" + s5.intersection(s7).array().join("\n");
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
			        tooltip.text("L6∩L7: \n" + s6.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 6 and List 7 : " + "\n" + s6.intersection(s7).array().join("\n");
				})

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
			        tooltip.text("L1∩L2∩L7: \n" + s1ns2.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, and List 7 : " + "\n" + s1ns2.intersection(s7).array().join("\n");
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
			        tooltip.text("L1∩L3∩L7: \n" + s1ns3.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 3, and List 7 : " + "\n" + s1ns3.intersection(s7).array().join("\n");
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
			        tooltip.text("L2∩L3∩L7: \n" + s2ns3.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2, List 3, and List 7 : " + "\n" + s2ns3.intersection(s7).array().join("\n");
				})
		
		//L3nL3nL7 intersection area
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
			        tooltip.text("L3∩L4∩L7: \n" + s3ns4.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3, List 4, and List 7 : " + "\n" + s3ns4.intersection(s7).array().join("\n");
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
			        tooltip.text("L3∩L4∩L7: \n" + s4ns5.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 4, List 5, and List 7 : " + "\n" + s4ns5.intersection(s7).array().join("\n");
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
			        tooltip.text("L5∩L6∩L7: \n" + s5ns6.intersection(s7).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 5, List 6, and List 7 : " + "\n" + s5ns6.intersection(s7).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, List 3, List 4, List 5, List 6 and List 7 : " + "\n" + s1ns2ns3ns4ns5ns6.intersection(s7).array().join("\n");
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

			d3.select("#pathDe1ne5").remove();
			d3.select("#pathDe2ne5").remove();
			d3.select("#pathDe3ne5").remove();
			d3.select("#pathDe4ne5").remove();
			d3.select("#pathDe1ne2ne3ne4ne5").remove();
			d3.select("#e5thA1").remove();
			d3.select("#e5thA2").remove();
			d3.select("#e5thA3").remove();
			d3.select("#e5thA4").remove();
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
			        tooltip.text("L1∩L6: \n" + s1.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1 and List 6 : " + "\n" + s1.intersection(s6).array().join("\n");
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
			        tooltip.text("L2∩L6: \n" + s2.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2 and List 6 : " + "\n" + s2.intersection(s6).array().join("\n");
				})
		// //L2nL6 intersection area list count text
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
			        tooltip.text("L3∩L6: \n" + s3.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3 and List 6 : " + "\n" + s3.intersection(s6).array().join("\n");
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
			        tooltip.text("L4∩L6: \n" + s4.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 4 and List 6 : " + "\n" + s4.intersection(s6).array().join("\n");
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
			        tooltip.text("L5∩L6: \n" + s5.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 5 and List 6 : " + "\n" + s5.intersection(s6).array().join("\n");
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
			        tooltip.text("L1∩L2∩L6: \n" + s1ns2.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 2 and List 6 : " + "\n" + s1ns2.intersection(s6).array().join("\n");
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
			        tooltip.text("L1∩L3∩L6: \n" + s1ns3.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 1, List 3 and List 6 : " + "\n" + s1ns3.intersection(s6).array().join("\n");
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
			        tooltip.text("L2∩L3∩L6: \n" + s2ns3.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 2, List 3 and List 6 : " + "\n" + s2ns3.intersection(s6).array().join("\n");
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
			        tooltip.text("L3∩L4∩L6: \n" + s3ns4.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 3, List 4 and List 6 : " + "\n" + s3ns4.intersection(s6).array().join("\n");
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
			        tooltip.text("L4∩L5∩L6: \n" + s4ns5.intersection(s6).array().join("\n"));
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
			    	d3.select("#description").node().value = "Common elements in List 4, List 5 and List 6 : " + "\n" + s4ns5.intersection(s6).array().join("\n");
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
			    .on("click", function() {
			    	d3.select("#description").node().value = "Common elements in List 1, List 2, List 3, List 4, List 5, and List 6 : " + "\n" + s1ns2ns3ns4ns5.intersection(s6).array().join("\n");
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
