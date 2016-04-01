var animationCanvas=document.getElementById('AnimationCanvas')
var processingInstance1 = new Processing(animationCanvas, sketchProc);
var pAlpha=255
var Line_Alpha=0
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
			    
			 	processing.setup=function()
			 	{
			 		processing.size(CanvasWidth,CanvasHeight)
			 		processing.background(0,1)
			 	    processing.frameRate(3)
			 	    
			 		
			 	}
			 	processing.draw=function()
			 	{
			 		processing.noStroke()
			 		sx=marginLeft;
			 		(pAlpha)=(pAlpha)-30;
			 		Line_Alpha=Line_Alpha+1
			 		if(Line_Alpha>255)
			 		{
			 			Line_Alpha=0;
			 			pAlpha=255
			 		}
			 		console.log(pAlpha)
			 		processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 		//Visible Points -'S'
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.fill(255,0)
			 		processing.noStroke()
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 		//Visible Points for 'P'
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		
			 		processing.fill(255,0)
			 		processing.noStroke()
			 		
					
					sx=sx+widthofletter+spaceLetters;
					
					processing.fill(255,pAlpha)
			 		//processing.stroke(255)
					processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 	    
			 		processing.fill(255,0)
			 		processing.noStroke()
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		//Visible Points -'C'
			 		processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter/2,ellipseWidth,ellipseHeight)
			 		processing.fill(255,0)
			 		processing.noStroke()
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 		
			 		//Visible Points for 'T'
			 		processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter/2,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		processing.fill(255,0)
			 		processing.noStroke()
			 	
			 	    sx=sx+widthofletter+spaceLetters;
			 	    
			 	    //Visible Points for 'R'
			 	    processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 		processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		
			 		sx=sx+widthofletter+spaceLetters;
			 	    
			 	    //Visible Points for 'A'
			 	    processing.fill(255,pAlpha)
			 		//processing.stroke(255)
			 	    processing.ellipse(sx,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx,sy+widthofletter,ellipseWidth,ellipseHeight)
			 		processing.ellipse(sx+widthofletter,sy+widthofletter,ellipseWidth,ellipseHeight)
			 	    processing.fill(255,0)
			 		processing.noStroke()
			 		
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
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter/2,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter/2,sx,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter)
			 	     sx=sx+widthofletter+spaceLetters;
			 	    //E
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
			 	    processing.line(sx,sy,sx+widthofletter/2,sy-widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy-widthofletter/2,sx+widthofletter,sy)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter/2,sy+widthofletter/2)
			 	    processing.line(sx+widthofletter/2,sy+widthofletter/2,sx,sy)
			 	    processing.line(sx,sy,sx,sy+widthofletter)
			 	    processing.line(sx+widthofletter,sy,sx+widthofletter,sy+widthofletter)
			 	    
			 	    
			 	}
			 	
			 }