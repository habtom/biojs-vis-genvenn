var imgExport = {};

//export svg into image
imgExport.exportImage = function() {
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

module.exports = imgExport;


