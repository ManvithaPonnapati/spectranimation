var animationCanvas=document.getElementById('AnimationCanvas')

var processingInstance1 = new Processing(animationCanvas, sketchProc);

function sketchProc(processing) {
			    var CanvasWidth=animationCanvas.width;
			    var CanvasHeight=animationCanvas.height;	
			    var marginLeft=0.01*CanvasWidth;
			    var widthofletter=0.1*CanvasWidth;
			    var spaceLetters=0.04*CanvasWidth;
			    var sx=marginLeft;
			    var sy=0.11*CanvasHeight;
			    var ellipseWidth=5
			    var ellipseHeight=5
			    var pAlpha=100
                 var Line_Alpha=0
				
				var xPos =[];
var yPos =[];
var xVel =[];
var yVel =[];
var s =[];
 
var a = 0;
var b = 0;
var c = 100;
var p = 10;

				processing.size(CanvasWidth,CanvasHeight)
			 	processing.background(0,1)
			 	for ( var i=0; i < 250; i++) {
    xPos[i] = getRandom(1, CanvasWidth);
  }
 
  for ( var i=0; i < 250; i++) {
    yPos[i] = getRandom(1, CanvasHeight);
  }
 
  for ( var i=0; i < 250; i++) {
    xVel[i] = getRandom(-10, 10);
  }
 
  for ( var i=0; i < 250; i++) {
    yVel[i] = getRandom(-10, 10);
  }
  for ( var i=0; i < 250; i++) {
    s[i] = getRandom(1, 6);
}
			 	processing.setup=function()
			 	{
			 		
			 	    processing.frameRate(30)
			 	    
			 		
			 	}
			 	processing.draw=function()
			 	{
			 		
			 		processing.background(0,1)
			 		sx=marginLeft;
			 		pAlpha=parseInt(pAlpha)
			 		processing.noStroke()
			 		processing.fill(255,255,255,pAlpha)
			 		
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		
			 		
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
			 		//Visible Points for 'P'
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		
			 		
			 		
					
					sx=sx+widthofletter+spaceLetters;
					
					processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
					processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 	    
			 	
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		//Visible Points -'C'
			 		processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		//Visible Points for 'T'
			 		processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter/2,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		
			 	
			 	    sx=sx+widthofletter+spaceLetters;
			 	    
			 	    //Visible Points for 'R'
			 	    processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 	    
			 	    //Visible Points for 'A'
			 	    processing.fill(255,255,255,pAlpha)
			 		//processing.stroke(255)
			 	    processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter,ellipseWidth,ellipseHeight)
			 	   
			 		
			 	    //Lines for s
			 	    sx=marginLeft
			 	    processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx,sy,sx+widthofletter,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter,sy+widthofletter/2,sx+widthofletter/2,sy+widthofletter)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter,sx,sy+widthofletter/2)
			 	    sx=sx+widthofletter+spaceLetters;
			 	    //P
			 	       processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter/2,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter/2,sx,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter)
			 	     sx=sx+widthofletter+spaceLetters;
			 	    //E
			 	       processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter/2,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter/2,sx,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter/2)
			 	    processing.line(sx,sy+widthofletter/2,sx+widthofletter/2,sy+widthofletter)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter,sx+widthofletter,sy+widthofletter/2)
			 		 sx=sx+widthofletter+spaceLetters;
			 		//C
			 		processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter,sy+widthofletter/2,sx+widthofletter/2,sy+widthofletter)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter,sx,sy+widthofletter/2)
			 	    sx=sx+widthofletter+spaceLetters;
			 	     
			 		//T
			 		processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter/2,sy+widthofletter)
			 	    
			 	    sx=sx+widthofletter+spaceLetters;
			 	    
			 	    //R
			 	    processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx,sy+widthofletter)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    sx=sx+widthofletter+spaceLetters;
			 	    
			 	    
			 	    //A
			 	       processing.stroke(255,Line_Alpha)
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter/2,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter/2,sx,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter,sy+widthofletter)
			 	   pAlpha=pAlpha-1
					Line_Alpha=Line_Alpha+2
					console.log(xPos)
					 for (k=0; k< 250; k++) {
    processing.noStroke ();
    processing.fill(255)
    processing.ellipse(xPos[k], yPos[k], s[k], s[k]);
  }
   processing.smooth ();
//  stroke(255);
    processing.noStroke ();
  processing.line (a, b, c, a);
  a = a + 3;
  if (a == 600) {
    a = 0;
    c = c +100;
    b = b +100;
  }
  processing.stroke (255);
 
  for (var i=0; i < 250; i++) {
 
   processing.line (xPos[i]+p, yPos[i], xPos[i], yPos[i]);
    processing.line (xPos[i], yPos[i]+p, xPos[i], yPos[i]);
    processing.line (xPos[i], yPos[i], xPos[i]-p, yPos[i]);
    processing.line (xPos[i], yPos[i], xPos[i], yPos[i]-p);
    if (a > yPos[i]-25) {
      p = 5;
    }
    if (a < yPos[i]+25) {
      p = 5;
    }
    if (a < yPos[i]-25) {
      p = 0;
    }
    if (a > yPos[i]+25) {
      p = 0;
    }
    i = i + 1;
  }


					if(Line_Alpha>980)
					{
						
						Line_Alpha=255
						
						processing.fill(255)
						processing.textFont("Arial",32)
						
						processing.text("Spectra",10,10)
						pAlpha=0;
						
					}
					

			 	 
			 	    
			 	}
			 
			 	
			 }
			 function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}