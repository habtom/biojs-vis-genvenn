
require("d3");
//--- include simple sets
var sets = require('simplesets');
var s1 = new sets.Set([]);
var s2 = new sets.Set([]);
var s3 = new sets.Set([]);
var s4 = new sets.Set([]);
var s5 = new sets.Set([]);
var s6 = new sets.Set([]);
var s7 = new sets.Set([]);
//define drawing canvas
	var w = 746,
		h = 900;

	var gvennStage = d3.select("#first")
			.append("svg")
			.attr("width", w)
			.attr("height", h)
//-----
//add tooltip for showing list values
var tooltip = d3.select("body").append("div")
    .attr("class", "genvenntooltip");
//--- include exportImage, fileManager, ... 
// var imgExport = require("./exportImage");
// var exportImage = imgExport.exportImage;
var fileManager = require("./fileManager");
//var uploadFile = fileManager.uploadFile;
//var exportFile = fileManager.exportFile;
var exportFile2 = fileManager.exportFile2;
//var loadSampleData = fileManager.loadSampleData;
//var updateInputData = fileManager.updateInputData;
//var listOperation = fileManager.listOperation;
// var drawGenven = require("./drawGenven");
// var drawCircles = drawGenven.drawCircles;
// var drawEllipseBase = drawGenven.drawEllipseBase;
// var drawFourSetIntersectionArea = drawGenven.drawFourSetIntersectionArea;
// var drawFiveSetIntersectionArea = drawGenven.drawFiveSetIntersectionArea;
// var drawSevenSetIntersectionArea = drawGenven.drawSevenSetIntersectionArea;
// var drawTriangle = drawGenven.drawTriangle;
// var drawTriangleIntersectionArea = drawGenven.drawTriangleIntersectionArea;
// var listOpConf = require("./listOpConf");
// var setListConf = listOpConf.setListConf;
// var pathListConf = listOpConf.pathListConf;
loadSampleData = function() {
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

		var json = require('../data/sample.json');
		var listvalue;
		var counter = 0;
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
		listOperation();
	});	
	
}
updateInputData = function() {
	//take user input from textarea
	//once the value changed it calls fucntion update to update the list
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
}
//export svg into image
exportImage = function() {
	d3.select("img").remove();
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
  var groupOfTexts = [];
      

  if(d3.select("#e7th1").empty() != true){
      var length = 0;
      groupOfTexts = [];
      //add back llist length
      for ( var i = 1; i <= 7; i++ ) {
        if (i == 1){length = s1.array().length}
        if (i == 2){length = s2.array().length}
        if (i == 3){length = s3.array().length}
        if (i == 4){length = s4.array().length}
        if (i == 5){length = s5.array().length}
        if (i == 6){length = s6.array().length}
        if (i == 7){length = s7.array().length}
        var text = d3.select( "#e7thTl" + i )
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: length } );
      }

      //add intersections
      //groupOfTexts = [];
      groupOfTexts.push( { x: 90, y: 225, text: s1.intersection(s2).array().length } );
      groupOfTexts.push( { x: 180, y: 110, text: s2.intersection(s3).array().length } );
      groupOfTexts.push( { x: 333, y: 112, text: s3.intersection(s4).array().length } );
      groupOfTexts.push( { x: 427, y: 236, text: s4.intersection(s5).array().length } );
      groupOfTexts.push( { x: 391, y: 381, text: s5.intersection(s6).array().length } );
      groupOfTexts.push( { x: 248, y: 441, text: s6.intersection(s7).array().length } );
      groupOfTexts.push( { x: 112, y: 374, text: s1.intersection(s7).array().length } );
      groupOfTexts.push( { x: 256, y: 270, text: s1ns2ns3ns4ns5ns6.intersection(s7).array().length } );
      


      //add labels
      //groupOfTexts = [];
      groupOfTexts.push( { x: 00, y: 240, text: d3.select("#s1_title").node().value } );
      groupOfTexts.push( { x: 45, y: 80 , text: d3.select("#s2_title").node().value } );
      groupOfTexts.push( { x: 270, y: 10, text: d3.select("#s3_title").node().value } );
      groupOfTexts.push( { x: 490, y: 152, text: d3.select("#s4_title").node().value } );
      groupOfTexts.push( { x: 510, y: 341, text: d3.select("#s5_title").node().value } );
      groupOfTexts.push( { x: 330, y: 520, text: d3.select("#s6_title").node().value } );
      groupOfTexts.push( { x: 60, y: 470, text: d3.select("#s7_title").node().value } );
  
      
      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
      }
  if(d3.select("#tr1").empty() != true){
      var length = 0;
      groupOfTexts = [];
      //add back llist length
      for ( var i = 1; i <= 6; i++ ) {
        if (i == 1){length = s1.array().length}
        if (i == 2){length = s2.array().length}
        if (i == 3){length = s3.array().length}
        if (i == 4){length = s4.array().length}
        if (i == 5){length = s5.array().length}
        if (i == 6){length = s6.array().length}
        var text = d3.select( "#trx" + i )
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: length } );
      }


      groupOfTexts.push( { x: 227, y: 365, text: s1.intersection(s6).array().length } );
      groupOfTexts.push( { x: 225, y: 435, text: s2.intersection(s6).array().length } );
      groupOfTexts.push( { x: 341, y: 235, text: s3.intersection(s6).array().length } );
      groupOfTexts.push( { x: 315, y: 410, text: s4.intersection(s6).array().length } );
      groupOfTexts.push( { x: 272, y: 447, text: s5.intersection(s6).array().length } );
      groupOfTexts.push( { x: 290.66335, y: 347.0728, text: s1ns2ns3ns4ns5.intersection(s6).array().length } );
      

      groupOfTexts.push( { x: 00, y: 85, text: d3.select("#s1_title").node().value } );
      groupOfTexts.push( { x: 318, y: 88 , text: d3.select("#s2_title").node().value } );
      groupOfTexts.push( { x: 500, y: 145, text: d3.select("#s3_title").node().value } );
      groupOfTexts.push( { x: 532, y: 480, text: d3.select("#s4_title").node().value } );
      groupOfTexts.push( { x: 368, y: 538, text: d3.select("#s5_title").node().value } );
      groupOfTexts.push( { x: 00, y: 520, text: d3.select("#s6_title").node().value } );

      
      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
      }
  if(d3.select("#e5th1").empty() != true){
      var length = 0;
      groupOfTexts = [];
      //add back llist length
      for ( var i = 1; i <= 5; i++ ) {
        if (i == 1){length = s1.array().length}
        if (i == 2){length = s2.array().length}
        if (i == 3){length = s3.array().length}
        if (i == 4){length = s4.array().length}
        if (i == 5){length = s5.array().length}
        var text = d3.select( "#e5thTl" + i )
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: length } );
      }


      groupOfTexts.push( { x: 351, y: 157, text: s1.intersection(s2).array().length } );
      groupOfTexts.push( { x: 358, y: 339, text: s2.intersection(s3).array().length } );
      groupOfTexts.push( { x: 193, y: 403, text: s3.intersection(s4).array().length } );
      groupOfTexts.push( { x: 294, y: 126, text: s1.intersection(s4).array().length } );
      groupOfTexts.push( { x: 103, y: 336, text: s2.intersection(s4).array().length } );
      groupOfTexts.push( { x: 265, y: 401, text: s1.intersection(s3).array().length } );
      groupOfTexts.push( { x: 180, y: 112, text: s1.intersection(s5).array().length } );
      groupOfTexts.push( { x: 372, y: 269, text: s2.intersection(s5).array().length } );
      groupOfTexts.push( { x: 120, y: 165, text: s3.intersection(s5).array().length } );
      groupOfTexts.push( { x: 78, y: 266, text: s4.intersection(s5).array().length } );
      groupOfTexts.push( { x: 236, y: 250, text: s1ns2ns3ns4.intersection(s5).array().length } );
      

      groupOfTexts.push( { x: 243, y: 10, text: d3.select("#s1_title").node().value } );
      groupOfTexts.push( { x: 488, y: 216 , text: d3.select("#s2_title").node().value } );
      groupOfTexts.push( { x: 370, y: 483, text: d3.select("#s3_title").node().value } );
      groupOfTexts.push( { x: 33, y: 459, text: d3.select("#s4_title").node().value } );
      groupOfTexts.push( { x: 0, y: 106, text: d3.select("#s5_title").node().value } );

      
      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
      }
  if(d3.select("#e4th1").empty() != true){
      var length = 0;
      groupOfTexts = [];
      //add back llist length
      for ( var i = 1; i <= 4; i++ ) {
        if (i == 1){length = s1.array().length}
        if (i == 2){length = s2.array().length}
        if (i == 3){length = s3.array().length}
        if (i == 4){length = s4.array().length}
        var text = d3.select( "#e4thTl" + i )
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: length } );
      }


      groupOfTexts.push( { x: 146, y: 127, text: s1.intersection(s2).array().length } );
      groupOfTexts.push( { x: 194, y: 311, text: s1.intersection(s3).array().length } );
      groupOfTexts.push( { x: 294, y: 368, text: s1.intersection(s4).array().length } );
      groupOfTexts.push( { x: 291, y: 118, text: s2.intersection(s3).array().length } );
      groupOfTexts.push( { x: 389, y: 309, text: s2.intersection(s4).array().length } );
      groupOfTexts.push( { x: 433, y: 141, text: s3.intersection(s4).array().length } );
      groupOfTexts.push( { x: 223, y: 201, text: s1ns2.intersection(s3).array().length } );
      groupOfTexts.push( { x: 341, y: 328, text: s1ns2.intersection(s4).array().length } );
      groupOfTexts.push( { x: 246, y: 329, text: s1ns3.intersection(s4).array().length } );
      groupOfTexts.push( { x: 366, y: 208, text: s2ns3.intersection(s4).array().length } );
      groupOfTexts.push( { x: 290, y: 278, text: s1ns2ns3.intersection(s4).array().length } );
      

      groupOfTexts.push( { x: 20, y: 85, text: d3.select("#s1_title").node().value } );
      groupOfTexts.push( { x: 88, y: 15 , text: d3.select("#s2_title").node().value } );
      groupOfTexts.push( { x: 475, y: 18, text: d3.select("#s3_title").node().value } );
      groupOfTexts.push( { x: 548, y: 85, text: d3.select("#s4_title").node().value } );

      
      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
      }
  if(d3.select("#circle1").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text1")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.array().length } );
        var text = d3.select( "#c1label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s1_title").node().value } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }
  if(d3.select("#circle2").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text2")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.array().length } );
        var text = d3.select( "#c2label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s2_title").node().value } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }
  if(d3.select("#circle3").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text4")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s3.array().length } );
        var text = d3.select( "#c3label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s3_title").node().value } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }
  
  
  if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text1")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.array().length } );
        var text = d3.select( "#c1label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s1_title").node().value } );
        var text = d3.select( "#text2")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.array().length } );
        var text = d3.select( "#c2label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s2_title").node().value } );
      //intersection
        var text = d3.select( "#text3")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.intersection(s2).array().length } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }

  }

  if(d3.select("#circle1").empty() != true && d3.select("#circle3").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text1")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.array().length } );
        var text = d3.select( "#c1label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s1_title").node().value } );
        var text = d3.select( "#text4")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s3.array().length } );
        var text = d3.select( "#c3label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s3_title").node().value } );
        //intersection
        var text = d3.select( "#text5")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.intersection(s3).array().length } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }

  if(d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text2")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.array().length } );
        var text = d3.select( "#c2label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s2_title").node().value } );
        var text = d3.select( "#text4")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s3.array().length } );
        var text = d3.select( "#c3label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s3_title").node().value } );
    
      var text = d3.select( "#text6")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.intersection(s3).array().length } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }
  if(d3.select("#circle1").empty() != true && d3.select("#circle2").empty() != true && d3.select("#circle3").empty() != true){
      groupOfTexts = [];

        var text = d3.select( "#text1")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.array().length } );
        var text = d3.select( "#c1label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s1_title").node().value } );
        var text = d3.select( "#text2")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.array().length } );
        var text = d3.select( "#c2label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s2_title").node().value } );
        var text = d3.select( "#text4")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s3.array().length } );
        var text = d3.select( "#c3label")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: d3.select("#s3_title").node().value } );
    
      //intersection
        var text = d3.select( "#text3")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.intersection(s2).array().length } );
      
        var text = d3.select( "#text5")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1.intersection(s3).array().length } );
      var text = d3.select( "#text6")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s2.intersection(s3).array().length } );
      var text = d3.select( "#text7")
        if ( text.node() )
          groupOfTexts.push( { x: text.attr( "x" ), y: text.attr( "y" ), text: s1ns2.intersection(s3).array().length } );

      if ( groupOfTexts.length > 0 ){
        context.font = "18px serif";
        for ( i = 0; i < groupOfTexts.length; i++ ){
          context.fillStyle = "black";
          var obj = groupOfTexts[i];
          context.fillText(obj.text, obj.x, obj.y);
        }
      }
  }
    var canvasdata = canvas.toDataURL("image/png");

    var pngimg = '<img src="'+canvasdata+'">'; 

    var a = document.createElement("a");
    a.download = "exportedImage.png";

    a.href = canvasdata;
          document.body.appendChild(a);
    a.click();
    context.clearRect ( 0 , 0 , canvas.width, canvas.height );

  };

 });
}

exportFile = function() {
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
	    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		    var fileNameToSaveAs = "Lists Intersections.txt";

		    var downloadLink = document.createElement("a");
		
		    downloadLink.download = fileNameToSaveAs;

		    downloadLink.innerHTML = "My Hidden Link";
		    

		    window.URL = window.URL || window.webkitURL;

		    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

		    downloadLink.style.display = "none";

		    document.body.appendChild(downloadLink);
		    
		    downloadLink.click();
		});
	
}
uploadFile = function() {
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
}

loadSampleData();	
uploadFile ();
exportFile ();
exportFile2 ();
exportImage();
updateInputData();

listOperation = function () {

	/*--------------------------------------------------------------------------------------*/
		s1ns2_arr =  s1.intersection(s2).array();
		s1ns2 = new sets.Set(s1ns2_arr);
		s1ns2ns3_arr = s1ns2.intersection(s3).array();
		s1ns2ns3 = new sets.Set(s1ns2ns3_arr);
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
		//---
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
	/* --------------------------- Intersection Area -------------------------------------*/
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
	/*---------------------------------------------*/
	
	d3.select("#e7thTl1").remove();
	d3.select("#e7thTl2").remove();
	d3.select("#e7thTl3").remove();
	d3.select("#e7thTl4").remove();
	d3.select("#e7thTl5").remove();
	d3.select("#e7thTl6").remove();
	d3.select("#e7thTl7").remove();

	d3.select("#trx1").remove();
	d3.select("#trx2").remove();
	d3.select("#trx3").remove();
	d3.select("#trx4").remove();
	d3.select("#trx5").remove();
	d3.select("#trx6").remove();

	d3.select("#e5thTl1").remove();
	d3.select("#e5thTl2").remove();
	d3.select("#e5thTl3").remove();
	d3.select("#e5thTl4").remove();
	d3.select("#e5thTl5").remove();

	d3.select("#e4thTl1").remove();
	d3.select("#e4thTl2").remove();
	d3.select("#e4thTl3").remove();
	d3.select("#e4thTl4").remove();

	d3.select("#c1label").remove();
	d3.select("#c2label").remove();
	d3.select("#c3label").remove();

	/*---------------------------------------------*/

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
		drawTriangle("M -69.277 -32.868 L 135.580 121.186 L  70.900 199.427 Z", "#00bf00", 95,115, d3.select("#s1_title").node().value, s1.array().join("\n"), "tr1", "trx1", s1.array().length, "#tr1", "#trx1", 00,85); //1
		drawTriangle("M  81.988 -44.426 L  38.444 206.222 L 121.044 165.111 Z", "#007fff", 288,88, d3.select("#s2_title").node().value, s2.array().join("\n"), "tr2", "trx2", s2.array().length, "#tr2", "#trx2", 318,88); //2
		drawTriangle("M 203.271   9.619 L  39.604  82.683 L  84.652 206.669 Z", "#ff3433", 460,145, d3.select("#s3_title").node().value, s3.array().join("\n"), "tr3", "trx3", s3.array().length, "#tr3", "#trx3", 500,145); //3
		drawTriangle("M 333.561 225.349 L  61.764  76.805 L  38.980 182.461 Z", "#E6E600", 532,430, d3.select("#s4_title").node().value, s4.array().join("\n"), "tr4", "trx4", s4.array().length, "#tr4", "#trx4", 532,480); //4
		drawTriangle("M 131.886 385.785 L  38.136 111.491 L  94.208  24.690 Z", "#FF9900", 328,548, d3.select("#s5_title").node().value, s5.array().join("\n"), "tr5", "trx5", s5.array().length, "#tr5", "#trx5", 368,538); //5
		drawTriangle("M -60.184 274.046 L 142.476  39.903 L 103.276 183.962 Z", "#00FFFF", 127,500, d3.select("#s6_title").node().value, s6.array().join("\n"), "tr6", "trx6", s6.array().length, "#tr6", "#trx6", 00,520); //6

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
		drawEllipseBase(263,213,200, 110, 90, "#00bf00", d3.select("#s1_title").node().value, s1.array().join("\n"), "e5th1", "e5thTl1", "#e5th1", "#e5thTl1", s1.array().length, 258, 50 , 243,10); //1st Ellipse , 243,10
		drawEllipseBase(280,262,200, 110, 162, "#007fff", d3.select("#s2_title").node().value, s2.array().join("\n"), "e5th2", "e5thTl2", "#e5th2", "#e5thTl2", s2.array().length, 438, 216, 488, 216); //2st Ellipse
		drawEllipseBase(241,292,200, 110, 54, "#ff3433", d3.select("#s3_title").node().value, s3.array().join("\n"), "e5th3", "e5thTl3", "#e5th3", "#e5thTl3", s3.array().length, 330, 433, 370, 483); //3st Ellipse
		drawEllipseBase(199,266,200, 110, 126, "#E6E600", d3.select("#s4_title").node().value, s4.array().join("\n"), "e5th4", "e5thTl4", "#e5th4", "#e5thTl4", s4.array().length, 93, 409, 33, 459); //4st Ellipse
		drawEllipseBase(212,216,200, 110, 18, "#FF9900", d3.select("#s5_title").node().value, s5.array().join("\n"), "e5th5", "e5thTl5", "#e5th5", "#e5thTl5", s5.array().length, 42, 166, 0, 106); //5th Ellipse
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
		drawEllipseBase(196,246,200, 110, 45, "#00bf00", d3.select("#s1_title").node().value, s1.array().join("\n"), "e4th1", "e4thTl1", "#e4th1", "#e4thTl1", s1.array().length, 70, 135, 20, 85); //1st Ellipse
		drawEllipseBase(266,176,200, 110, 45, "#007fff", d3.select("#s2_title").node().value, s2.array().join("\n"), "e4th2", "e4thTl2", "#e4th2", "#e4thTl2", s2.array().length, 138, 55, 88, 15); //1st Ellipse
		drawEllipseBase(326,176,200, 110, 135, "#ff3433", d3.select("#s3_title").node().value, s3.array().join("\n"), "e4th3", "e4thTl3", "#e4th3", "#e4thTl3", s3.array().length, 435, 58, 475, 18); //1st Ellipse
		drawEllipseBase(396,246,200, 110, 135, "#E6E600", d3.select("#s4_title").node().value, s4.array().join("\n"), "e4th4", "e4thTl4", "#e4th4", "#e4thTl4", s4.array().length, 508, 135, 548, 85); //1st Ellipse

		drawFourSetIntersectionArea();

	} else {
		//draw circle
		drawCircles();
	}

	function drawCircles() {
			//remove seven ellipse drawing
			d3.select("#e7th1").remove();d3.select("#e7th2").remove();d3.select("#e7th3").remove();d3.select("#e7th4").remove();d3.select("#e7th5").remove();d3.select("#e7th6").remove();d3.select("#e7th7").remove();d3.select("#e7thTl1").remove();d3.select("#e7thTl2").remove();d3.select("#e7thTl3").remove();d3.select("#e7thTl4").remove();d3.select("#e7thTl5").remove();d3.select("#e7thTl6").remove();d3.select("#e7thTl7").remove();
			//remove seven set intersection
			d3.select("#path7De1ne2").remove();d3.select("#path7De2ne3").remove();d3.select("#path7De3ne4").remove();d3.select("#path7De4ne5").remove();d3.select("#path7De5ne6").remove();d3.select("#pathDe1ne7").remove();d3.select("#pathDe2ne7").remove();d3.select("#pathDe3ne7").remove();d3.select("#pathDe4ne7").remove();d3.select("#pathDe5ne7").remove();d3.select("#pathDe6ne7").remove();d3.select("#pathDe1ne2ne7").remove();d3.select("#pathDe1ne3ne7").remove();d3.select("#pathDe2ne3ne7").remove();d3.select("#pathDe3ne4ne7").remove();d3.select("#pathDe4ne5ne7").remove();d3.select("#pathDe5ne6ne7").remove();d3.select("#pathDe1ne2ne3ne4ne5ne6ne7").remove();
			d3.select("#e7thA1").remove();d3.select("#e7thA2").remove();d3.select("#e7thA3").remove();d3.select("#e7thA4").remove();d3.select("#e7thA5").remove();d3.select("#e7thA6").remove();d3.select("#e7thA7").remove();d3.select("#e7thA8").remove();
			//remove five ellipse drawing
			d3.select("#e5th1").remove();d3.select("#e5th2").remove();d3.select("#e5th3").remove();d3.select("#e5th4").remove();d3.select("#e5th5").remove();
			d3.select("#e5thTl1").remove();d3.select("#e5thTl2").remove();d3.select("#e5thTl3").remove();d3.select("#e5thTl4").remove();d3.select("#e5thTl5").remove();

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
	};

	function drawEllipseBase(cX, cY, rX, rY, rotationAng, fillColor, listName, listContent, eID, tID, eRemove, tRemove, listCount, textX, textY, textXl, textYl) {

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
			
	function drawTriangle(d, fillcolor, textX, textY, listName, listContent, trID, tID, listCount, trRemove, tRemove, textXl, textYl) {
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
	
}
