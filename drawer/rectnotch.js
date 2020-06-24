
    function RectNotch() {

        this.Handle = "RectNotch";
       
        this.draw = function(context){
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'RectNotch';
         })
  
           this.parameter = simpleParameter[0].value[0];

           for(var i = 0; i < this.parameter.length; i ++) {

            this.RN_width = this.parameter[i][0]?strTofraction(this.parameter[i][0]):0;
  
            this.RN_height = this.parameter[i][1]?strTofraction(this.parameter[i][1]):0;
  
            this.RN_set_direct = this.parameter[i][2];

            this.RN_dis_direction = this.parameter[i][3];

            this.RN_distance = this.parameter[i][4]?strTofraction(this.parameter[i][4]):0;
          
            this.RN_radius =  this.parameter[i][5]?strTofraction(this.parameter[i][5]):0;

            var b = new initDraw(context);
            var ele = new definitionObject();
					

            var RNrect= makeSVG('rect', { id :'RNrect'+i+'',x:"-900000", y:"-200000000000",width:"30", height:"20",fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"#ffffff", 'pointer-events':"all" });
            document.getElementById('editor').appendChild(RNrect);

            var RN_upline= makeSVG('path', { id :'RN_upline'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_upline);


            var RN_downline= makeSVG('path', { id :'RN_downline'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_downline);

            var RN_sideline= makeSVG('path', { id :'RN_sideline'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_sideline);

            var Up_curve= makeSVG('path', { id :'Up_curve'+i+'',d:"M 0 0 Q 0 0 0 0",fill:"none", stroke:"#000000", 'stroke-miterlimit':"10", 'pointer-events':"stroke"});
            document.getElementById('editor').appendChild(Up_curve);

            var Down_curve= makeSVG('path', { id :'Down_curve'+i+'',d:"M 0 0 Q 0 0 0 0",fill:"none", stroke:"#000000", 'stroke-miterlimit':"10", 'pointer-events':"stroke"});
            document.getElementById('editor').appendChild(Down_curve);


            var RNrect = new Rect('RNrect'+(i)+'')
            var RN_upline = new Pathline('RN_upline'+(i)+'')
            var RN_downline = new Pathline('RN_downline'+(i)+'')
            var RN_sideline = new Pathline('RN_sideline'+(i)+'') 
            var Up_curve = new curve('Up_curve'+(i)+'')
            var Down_curve = new curve('Down_curve'+(i)+'')


            var RN_LU_Line= makeSVG('path', { id :'RN_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_LU_Line);

            var RN_LU_P= makeSVG('path', { id :'RN_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_LU_P);

            var RN_LD_P= makeSVG('path', { id :'RN_LD_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_LD_P);

            var RN_LU_DTip= makeSVG('path', { id :'RN_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_LU_DTip);

            var RN_LU_UTip= makeSVG('path', { id :'RN_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(RN_LU_UTip);
           
            if(!$('#RNH_group'+i).length) {
              var RNH_group= makeSVG('g', { id :'RNH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
              document.getElementById('editor').appendChild(RNH_group);
          
              var RNH_letter= makeSVG('text', { id :'RNH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
              document.getElementById('RNH_group'+i).appendChild(RNH_letter);
            }
          


            var RNU_lArrowline = new Pathline('RN_LU_Line'+i+'');
            var RNU_lfupArrowP = new Pathline('RN_LU_P'+i+'');
            var RNU_lfdownArrowP = new Pathline('RN_LD_P'+i+'');
            var RNU_lfupTip = new Arrow('RN_LU_UTip'+i+'','up');
            var RNU_lfdownTip = new Arrow('RN_LU_DTip'+i+'','down');
            var RNH_group = new Group('RNH_group'+i+'', 'vertical')

            var RNH_letter = new letter('RNH_letter'+i+'');


            if(this.RN_set_direct == 'Left') {
              
              if(this.RN_dis_direction == 'Top') {

                this.RNrect = {x: ele.leftLine.getPosition()[0].x-20,y:ele.upLine.getPosition()[0].y +( this.RN_distance-this.RN_height/2)*10*b.rate}

             
                this.setSize = {width:30,height:this.RN_height*10*b.rate}
  
                RNrect.moveRect(this.RNrect);
                RNrect.setSize(this.setSize)
    
                this.RN_upline = [{x:ele.leftLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2)*10*b.rate},{x:ele.leftLine.getPosition()[0].x+(this.RN_width-this.RN_radius)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2)*10*b.rate}]
    
                this.RN_downline = [{x:ele.leftLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2)*10*b.rate},{x:ele.leftLine.getPosition()[0].x+(this.RN_width-this.RN_radius)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2)*10*b.rate}]
               
                this.RN_sideline = [{x:ele.leftLine.getPosition()[0].x+(this.RN_width)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2+this.RN_radius)*10*b.rate},{x:ele.leftLine.getPosition()[0].x+(this.RN_width)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2-this.RN_radius)*10*b.rate}]
          
          
                this.Up_curve = [{x:this.RN_sideline[0].x,y:this.RN_sideline[0].y},{x:this.RN_upline[1].x,y:this.RN_upline[1].y},]
               
                this.Down_curve = [{x:this.RN_sideline[1].x,y:this.RN_sideline[1].y},{x:this.RN_downline[1].x,y:this.RN_downline[1].y},]
                
                
                
                RN_upline.drawPath(this.RN_upline)
  
    
                RN_downline.drawPath(this.RN_downline)
    
                RN_sideline.drawPath(this.RN_sideline)
  
                Up_curve.drawCurve(this.Up_curve)
    
                Down_curve.drawCurve(this.Down_curve)
  
  
                this.RNU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y+this.RN_distance*10*b.rate}]
                this.RNU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.upLine.getPosition()[0].y}]
                this.RNU_lfdownArrowP =  [{x:this.RNU_lArrowline[0].x-10,y: this.RNU_lArrowline[1].y},{x: this.RNU_lArrowline[1].x+10,y: this.RNU_lArrowline[1].y}]
               
                this.RNU_lfupTip = this.RNU_lArrowline[0]
                this.RNU_lfdownTip = this.RNU_lArrowline[1]
    
                RNU_lArrowline.drawPath(this.RNU_lArrowline)
                RNU_lfupArrowP.drawPath(this.RNU_lfupArrowP)
                RNU_lfdownArrowP.drawPath(this.RNU_lfdownArrowP)
                RNU_lfupTip.drawArrow(this.RNU_lfupTip)
                RNU_lfdownTip.drawArrow(this.RNU_lfdownTip)


                this.RNH_group = {x:80 , y:20 + 10 *b.rate*this.RN_distance/2}
                RNH_group.moveGroup(this.RNH_group)
    
                if(this.RN_distance.n%this.RN_distance.d == 0) {
                  RNH_letter.changeletter('' + parseInt(this.RN_distance.n/this.RN_distance.d));
                  } else {
                  RNH_letter.changeletter(''+parseInt(this.RN_distance.n/this.RN_distance.d)+ '-'+this.RN_distance.n%this.RN_distance.d + '/' + this.RN_distance.d);
                }
    
  



              } else if (this.RN_dis_direction == 'Down') {


                this.RNrect = {x: ele.leftLine.getPosition()[0].x-20,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate}

             
                this.setSize = {width:30,height:this.RN_height*10*b.rate}
  
                RNrect.moveRect(this.RNrect);
                RNrect.setSize(this.setSize)
    
                this.RN_upline = [{x:ele.leftLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate},
                {x:ele.leftLine.getPosition()[0].x+(this.RN_width-this.RN_radius)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate}]
    
                this.RN_downline = [{x:ele.leftLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2)*10*b.rate},{x:ele.leftLine.getPosition()[0].x+(this.RN_width-this.RN_radius)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2)*10*b.rate}]
               
                this.RN_sideline = [{x:ele.leftLine.getPosition()[0].x+(this.RN_width)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2-this.RN_radius)*10*b.rate},{x:ele.leftLine.getPosition()[0].x+(this.RN_width)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2+this.RN_radius)*10*b.rate}]
          
                this.Up_curve = [{x:this.RN_sideline[0].x,y:this.RN_sideline[0].y},{x:this.RN_upline[1].x,y:this.RN_upline[1].y},]
               
                this.Down_curve = [{x:this.RN_sideline[1].x,y:this.RN_sideline[1].y},{x:this.RN_downline[1].x,y:this.RN_downline[1].y},]
                
                
                
                RN_upline.drawPath(this.RN_upline)
  
    
                RN_downline.drawPath(this.RN_downline)
    
                RN_sideline.drawPath(this.RN_sideline)
  
                Up_curve.drawCurve(this.Up_curve)
    
                Down_curve.drawCurve(this.Down_curve)
  
  
                this.RNU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y},
                {x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y-this.RN_distance*10*b.rate}]

                this.RNU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.downLine.getPosition()[0].y},
                {x:ele.leftLine.getPosition()[0].x-40,y:ele.downLine.getPosition()[0].y}]
                
                this.RNU_lfdownArrowP =  [{x:this.RNU_lArrowline[0].x-10,y: this.RNU_lArrowline[1].y},{x: this.RNU_lArrowline[1].x+10,y: this.RNU_lArrowline[1].y}]
               
                this.RNU_lfupTip = this.RNU_lArrowline[1]
                this.RNU_lfdownTip = this.RNU_lArrowline[0]
    
                RNU_lArrowline.drawPath(this.RNU_lArrowline)
                RNU_lfupArrowP.drawPath(this.RNU_lfupArrowP)
                RNU_lfdownArrowP.drawPath(this.RNU_lfdownArrowP)
                RNU_lfupTip.drawArrow(this.RNU_lfupTip)
                RNU_lfdownTip.drawArrow(this.RNU_lfdownTip)


                this.RNH_group = {x:80 , y:20 +710 - 10 *b.rate*this.RN_distance/2}
                RNH_group.moveGroup(this.RNH_group)
    
                if(this.RN_distance.n%this.RN_distance.d == 0) {
                  RNH_letter.changeletter('' + parseInt(this.RN_distance.n/this.RN_distance.d));
                  } else {
                  RNH_letter.changeletter(''+parseInt(this.RN_distance.n/this.RN_distance.d)+ '-'+this.RN_distance.n%this.RN_distance.d + '/' + this.RN_distance.d);
                }
    

              }

            } else if(this.RN_set_direct == 'Right') {

              if(this.RN_dis_direction == 'Top') {

                this.RNrect = {x:ele.rightLine.getPosition()[0].x-5,y:ele.upLine.getPosition()[0].y +( this.RN_distance-this.RN_height/2)*10*b.rate}

             
                this.setSize = {width:30,height:this.RN_height*10*b.rate}
  
                RNrect.moveRect(this.RNrect);
                RNrect.setSize(this.setSize)
    
                this.RN_upline = [{x:ele.rightLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2)*10*b.rate},{x:ele.rightLine.getPosition()[0].x-(this.RN_width-this.RN_radius)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2)*10*b.rate}]
    
                this.RN_downline = [{x:ele.rightLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2)*10*b.rate},{x:ele.rightLine.getPosition()[0].x-(this.RN_width-this.RN_radius)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2)*10*b.rate}]
               
                this.RN_sideline = [{x:ele.rightLine.getPosition()[0].x-(this.RN_width)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance-this.RN_height/2+this.RN_radius)*10*b.rate},
                {x:ele.rightLine.getPosition()[0].x-(this.RN_width)*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.RN_distance+this.RN_height/2-this.RN_radius)*10*b.rate}]
          
          
                this.Up_curve = [{x:this.RN_sideline[0].x,y:this.RN_sideline[0].y},{x:this.RN_upline[1].x,y:this.RN_upline[1].y},]
               

                this.Down_curve = [{x:this.RN_sideline[1].x,y:this.RN_sideline[1].y},{x:this.RN_downline[1].x,y:this.RN_downline[1].y},]
                
                
                
                RN_upline.drawPath(this.RN_upline)
  
    
                RN_downline.drawPath(this.RN_downline)
    
                RN_sideline.drawPath(this.RN_sideline)
  
                Up_curve.drawCurve(this.Up_curve)
    
                Down_curve.drawCurve(this.Down_curve)
  
  
                this.RNU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[0].y+this.RN_distance*10*b.rate}]
                this.RNU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.upLine.getPosition()[0].y}]
                this.RNU_lfdownArrowP =  [{x:this.RNU_lArrowline[0].x-10,y: this.RNU_lArrowline[1].y},{x: this.RNU_lArrowline[1].x+10,y: this.RNU_lArrowline[1].y}]
               
                this.RNU_lfupTip = this.RNU_lArrowline[0]
                this.RNU_lfdownTip = this.RNU_lArrowline[1]
    
                RNU_lArrowline.drawPath(this.RNU_lArrowline)
                RNU_lfupArrowP.drawPath(this.RNU_lfupArrowP)
                RNU_lfdownArrowP.drawPath(this.RNU_lfdownArrowP)
                RNU_lfupTip.drawArrow(this.RNU_lfupTip)
                RNU_lfdownTip.drawArrow(this.RNU_lfdownTip)


                this.RNH_group = {x:80 + 380 + b.widthDifference , y:20 + 10 *b.rate*this.RN_distance/2}
                RNH_group.moveGroup(this.RNH_group)
    
                if(this.RN_distance.n%this.RN_distance.d == 0) {
                  RNH_letter.changeletter('' + parseInt(this.RN_distance.n/this.RN_distance.d));
                  } else {
                  RNH_letter.changeletter(''+parseInt(this.RN_distance.n/this.RN_distance.d)+ '-'+this.RN_distance.n%this.RN_distance.d + '/' + this.RN_distance.d);
                }
    

              } else if (this.RN_dis_direction == 'Down') {
              
                this.RNrect = {x:ele.rightLine.getPosition()[0].x-5,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate}

             
                this.setSize = {width:30,height:this.RN_height*10*b.rate}
  
                RNrect.moveRect(this.RNrect);
                RNrect.setSize(this.setSize)
    
                this.RN_upline = [{x:ele.rightLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate},
                {x:ele.rightLine.getPosition()[0].x-(this.RN_width-this.RN_radius)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2)*10*b.rate}]


                this.RN_downline = [{x:ele.rightLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2)*10*b.rate},
                {x:ele.rightLine.getPosition()[0].x-(this.RN_width-this.RN_radius)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2)*10*b.rate}]
               

                this.RN_sideline = [{x:ele.rightLine.getPosition()[0].x-(this.RN_width)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance+this.RN_height/2-this.RN_radius)*10*b.rate},
              
                {x:ele.rightLine.getPosition()[0].x-(this.RN_width)*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.RN_distance-this.RN_height/2+this.RN_radius)*10*b.rate}]
          
          
                this.Up_curve = [{x:this.RN_sideline[0].x,y:this.RN_sideline[0].y},{x:this.RN_upline[1].x,y:this.RN_upline[1].y},]
               
                this.Down_curve = [{x:this.RN_sideline[1].x,y:this.RN_sideline[1].y},{x:this.RN_downline[1].x,y:this.RN_downline[1].y},]
                

                RN_upline.drawPath(this.RN_upline)
    
                RN_downline.drawPath(this.RN_downline)
    
                RN_sideline.drawPath(this.RN_sideline)
  
                Up_curve.drawCurve(this.Up_curve)
    
                Down_curve.drawCurve(this.Down_curve)
  
  
                this.RNU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[0].y},
                {x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[0].y-this.RN_distance*10*b.rate}]
              
                this.RNU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.downLine.getPosition()[0].y},
                {x:ele.rightLine.getPosition()[1].x+40,y:ele.downLine.getPosition()[0].y}]
              
                this.RNU_lfdownArrowP =  [{x:this.RNU_lArrowline[0].x-10,y: this.RNU_lArrowline[1].y},{x: this.RNU_lArrowline[1].x+10,y: this.RNU_lArrowline[1].y}]
               
                this.RNU_lfupTip = this.RNU_lArrowline[1]
                this.RNU_lfdownTip = this.RNU_lArrowline[0]
    
                RNU_lArrowline.drawPath(this.RNU_lArrowline)
                RNU_lfupArrowP.drawPath(this.RNU_lfupArrowP)
                RNU_lfdownArrowP.drawPath(this.RNU_lfdownArrowP)
                RNU_lfupTip.drawArrow(this.RNU_lfupTip)
                RNU_lfdownTip.drawArrow(this.RNU_lfdownTip)


                this.RNH_group = {x:80 + 380 + b.widthDifference , y:20 +710- 10 *b.rate*this.RN_distance/2}
                RNH_group.moveGroup(this.RNH_group)
    
                if(this.RN_distance.n%this.RN_distance.d == 0) {
                  RNH_letter.changeletter('' + parseInt(this.RN_distance.n/this.RN_distance.d));
                  } else {
                  RNH_letter.changeletter(''+parseInt(this.RN_distance.n/this.RN_distance.d)+ '-'+this.RN_distance.n%this.RN_distance.d + '/' + this.RN_distance.d);
                }
              }

            }

           }
           
           
          //  b.dis_upWidth = ele.up_Widthletter.returnValue();
          //  b.dis_downWidth = ele.down_Widthletter.returnValue();
          //  b.dis_leftHeight = ele.left_Heightletter.returnValue();
          //  b.dis_rightHeight = ele.right_Heightletter.returnValue()

          //  b.draw()

        }
      }
  