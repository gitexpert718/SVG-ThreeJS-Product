
    function Unotch() {
     
        this.Handle = "Unotch";
        this.draw = function(context) {
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'Unotch';
         })
  
            this.parameter = simpleParameter[0].value[0];
  
            for(var i = 0; i < this.parameter.length; i ++) {
  
              this.UN_diameter = this.parameter[i][0]?strTofraction(this.parameter[i][0]):0;
  
              this.UN_set_direct = this.parameter[i][1];
  
              this.UN_setback = this.parameter[i][2]?strTofraction(this.parameter[i][2]):0;
            
              this.UN_dis_direction = this.parameter[i][3];
            
              this.UN_distance = this.parameter[i][4]?strTofraction(this.parameter[i][4]):0;
    
              this.UN_distanceB = this.parameter[i][5]?strTofraction(this.parameter[i][5]):0;
            
              var b = new initDraw(context);
              var ele = new definitionObject();
    
               // svg add
            
              var UNcircle= makeSVG('ellipse', { id : 'UNcircle'+(i)+'' , cx:-12300000, cy:321000, rx:10, ry:10, fill:"none", stroke:"#000000"});
              document.getElementById('editor').appendChild(UNcircle);

              var UNrect= makeSVG('rect', { id :'UNrect'+i+'', x:"-900000", y:"-200000000000", width:"30", height:"20", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)" ,stroke:"#ffffff" });
              document.getElementById('editor').appendChild(UNrect);

              var UNrect_mask= makeSVG('rect', { id :'UNrect_mask'+i+'', x:"-900000", y:"-200000000000", width:"30", height:"20", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)" ,stroke:"#ffffff" });
              document.getElementById('editor').appendChild(UNrect_mask);

              var UN_upline= makeSVG('path', { id :'UN_upline'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
              document.getElementById('editor').appendChild(UN_upline);

              var UN_downline= makeSVG('path', { id:'UN_downline'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
              document.getElementById('editor').appendChild(UN_downline);


              var UNcircle = new circle('UNcircle'+(i)+'')
              var UNrect = new Rect('UNrect'+(i)+'')
              var UNrect_mask = new Rect('UNrect_mask'+(i)+'')
              
              var UN_upline = new Pathline('UN_upline'+(i)+'')
              var UN_downline = new Pathline('UN_downline'+(i)+'')

     
            var UN_LU_Line= makeSVG('path', { id :'UN_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(UN_LU_Line);

            var UN_LU_P= makeSVG('path', { id :'UN_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(UN_LU_P);

            var UN_LD_P= makeSVG('path', { id :'UN_LD_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(UN_LD_P);

            var UN_LU_DTip= makeSVG('path', { id :'UN_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(UN_LU_DTip);

            var UN_LU_UTip= makeSVG('path', { id :'UN_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(UN_LU_UTip);

            if(!$('#UNH_group'+i).length) {
              var UNH_group= makeSVG('g', { id :'UNH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
              document.getElementById('editor').appendChild(UNH_group);
          
              var UNH_letter= makeSVG('text', { id :'UNH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
              document.getElementById('UNH_group'+i).appendChild(UNH_letter);
            }
           
           
           

              var UNU_lArrowline = new Pathline('UN_LU_Line'+i+'');
              var UNU_lfupArrowP = new Pathline('UN_LU_P'+i+'');
              var UNU_lfdownArrowP = new Pathline('UN_LD_P'+i+'');
              var UNU_lfupTip = new Arrow('UN_LU_UTip'+i+'','up');
              var UNU_lfdownTip = new Arrow('UN_LU_DTip'+i+'','down');
              var UNH_group = new Group('UNH_group'+i+'', 'vertical')
              var UNH_letter = new letter('UNH_letter'+i+'');


              this.UN_diameter = this.UN_diameter*10*b.rate
              UNcircle.setSize(this.UN_diameter/2)
             
              if(this.UN_set_direct == 'Left'){
  
                if(this.UN_dis_direction == 'Top'){
  
                  this.UNcirclePosition = {x:ele.leftLine.getPosition()[0].x + this.UN_setback*10*b.rate,y: ele.upLine.getPosition()[0].y + this.UN_distance*10*b.rate}
  
                  UNcircle.moveCircle(this.UNcirclePosition)
  


                  this.UNrectPosition = {x : ele.leftLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_diameter/2}

                  UNrect.moveRect(this.UNrectPosition)

                  this.setSize = {width:this.UN_setback*10*b.rate+5,height:this.UN_diameter}
                  UNrect.setSize(this.setSize)


                  this.UNrect_maskPosition = {x : ele.leftLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_distanceB*10*b.rate/2}

                  UNrect_mask.moveRect(this.UNrect_maskPosition)

                  this.UNrect_maskSize = {width:6,height:this.UN_distanceB*10*b.rate}
                  UNrect_mask.setSize(this.UNrect_maskSize)
  
  
  
                  this.upline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y-this.UN_diameter/2},{x:ele.leftLine.getPosition()[0].x,y:this.UNcirclePosition.y-this.UN_distanceB*10*b.rate/2}]
                  UN_upline.drawPath(this.upline)
  
                  this.UN_downline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y+this.UN_diameter/2},{x:ele.leftLine.getPosition()[0].x,y:this.UNcirclePosition.y+this.UN_distanceB*10*b.rate/2}]
                  UN_downline.drawPath(this.UN_downline)
  
  
  
                  this.UNU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y+this.UN_distance*10*b.rate}]
                  this.UNU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.upLine.getPosition()[0].y}]
                  this.UNU_lfdownArrowP =  [{x:this.UNU_lArrowline[0].x-10,y: this.UNU_lArrowline[1].y},{x: this.UNU_lArrowline[1].x+10,y: this.UNU_lArrowline[1].y}]
                  
                  this.UNU_lfupTip = this.UNU_lArrowline[0]
                  this.UNU_lfdownTip = this.UNU_lArrowline[1]

                  UNU_lArrowline.drawPath(this.UNU_lArrowline)
                  UNU_lfupArrowP.drawPath(this.UNU_lfupArrowP)
                  UNU_lfdownArrowP.drawPath(this.UNU_lfdownArrowP)
                  UNU_lfupTip.drawArrow(this.UNU_lfupTip)
                  UNU_lfdownTip.drawArrow(this.UNU_lfdownTip)
  
                  this.UNH_group = {x:80 , y:20 + 10 *b.rate*this.UN_distance/2}
                  UNH_group.moveGroup(this.UNH_group)
            
                  if(this.UN_distance.n%this.UN_distance.d == 0) {
                    UNH_letter.changeletter('' + parseInt(this.UN_distance.n/this.UN_distance.d));
                    } else {
                    UNH_letter.changeletter(''+parseInt(this.UN_distance.n/this.UN_distance.d)+ '-'+this.UN_distance.n%this.UN_distance.d + '/' + this.UN_distance.d);
                  }
  
                } else if (this.UN_dis_direction == 'Down') {
  
                 
                  this.UNcirclePosition = {x:ele.leftLine.getPosition()[0].x + this.UN_setback*10*b.rate,y:  ele.downLine.getPosition()[0].y - this.UN_distance*10*b.rate}
                  UNcircle.moveCircle(this.UNcirclePosition)

                  this.UNrectPosition = {x : ele.leftLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_diameter/2}
                  UNrect.moveRect(this.UNrectPosition)
  
                  this.setSize = {width:this.UN_setback*10*b.rate+5,height:this.UN_diameter}
                  UNrect.setSize(this.setSize)
  
                  this.upline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y-this.UN_diameter/2},{x:ele.leftLine.getPosition()[0].x,y:this.UNcirclePosition.y-this.UN_distanceB*10*b.rate/2}]
                  UN_upline.drawPath(this.upline)
  
                  this.UN_downline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y+this.UN_diameter/2},{x:ele.leftLine.getPosition()[0].x,y:this.UNcirclePosition.y+this.UN_distanceB*10*b.rate/2}]
                  UN_downline.drawPath(this.UN_downline)
  

                  this.UNrect_maskPosition = {x : ele.leftLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_distanceB*10*b.rate/2}

                  UNrect_mask.moveRect(this.UNrect_maskPosition)

                  this.UNrect_maskSize = {width:6,height:this.UN_distanceB*10*b.rate}
                  UNrect_mask.setSize(this.UNrect_maskSize)




  
                  this.UNU_lArrowline = [{x: ele.leftLine.getPosition()[0].x-50,y: ele.downLine.getPosition()[0].y},{x: ele.leftLine.getPosition()[0].x-50,y: ele.downLine.getPosition()[0].y-this.UN_distance*10*b.rate}]
                  this.UNU_lfupArrowP = [{x: ele.leftLine.getPosition()[0].x-60,y: ele.downLine.getPosition()[0].y},{x: ele.leftLine.getPosition()[0].x-40,y: ele.downLine.getPosition()[0].y}]
                  this.UNU_lfdownArrowP =  [{x:this.UNU_lArrowline[0].x-10,y: this.UNU_lArrowline[1].y},{x: this.UNU_lArrowline[1].x+10,y: this.UNU_lArrowline[1].y}]
                  
                  this.UNU_lfupTip = this.UNU_lArrowline[1]
                  this.UNU_lfdownTip = this.UNU_lArrowline[0]

                  UNU_lArrowline.drawPath(this.UNU_lArrowline)
                  UNU_lfupArrowP.drawPath(this.UNU_lfupArrowP)
                  UNU_lfdownArrowP.drawPath(this.UNU_lfdownArrowP)
                  UNU_lfupTip.drawArrow(this.UNU_lfupTip)
                  UNU_lfdownTip.drawArrow(this.UNU_lfdownTip)
  
                  this.UNH_group = {x:80 , y:20 +710 - 10 *b.rate*this.UN_distance/2}
                  UNH_group.moveGroup(this.UNH_group)
            
                  if(this.UN_distance.n%this.UN_distance.d == 0) {
                    UNH_letter.changeletter('' + parseInt(this.UN_distance.n/this.UN_distance.d));
                    } else {
                    UNH_letter.changeletter(''+parseInt(this.UN_distance.n/this.UN_distance.d)+ '-'+this.UN_distance.n%this.UN_distance.d + '/' + this.UN_distance.d);
                  }

           
  
                }
  
              } else if(this.UN_set_direct == 'Right') {
  
                if(this.UN_dis_direction == 'Top'){
  
                  this.UNcirclePosition = {x:ele.rightLine.getPosition()[0].x - this.UN_setback*10*b.rate,y: ele.upLine.getPosition()[0].y + this.UN_distance*10*b.rate}
  
                  UNcircle.moveCircle(this.UNcirclePosition)

                  
                  this.UNrectPosition = {x:this.UNcirclePosition.x,y:this.UNcirclePosition.y -this.UN_diameter/2}
                  UNrect.moveRect(this.UNrectPosition)

                  this.setSize = {width:this.UN_setback*10*b.rate+5,height:this.UN_diameter}
  
                  UNrect.setSize(this.setSize)
            


                  this.UNrect_maskPosition = {x : ele.rightLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_distanceB*10*b.rate/2}

                  UNrect_mask.moveRect(this.UNrect_maskPosition)

                  this.UNrect_maskSize = {width:6,height:this.UN_distanceB*10*b.rate}
                  UNrect_mask.setSize(this.UNrect_maskSize)




                  this.upline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y-this.UN_diameter/2},{x:ele.rightLine.getPosition()[0].x,y:this.UNcirclePosition.y-this.UN_distanceB*10*b.rate/2}]
                  UN_upline.drawPath(this.upline)
                  this.UN_downline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y+this.UN_diameter/2},{x:ele.rightLine.getPosition()[0].x,y:this.UNcirclePosition.y+this.UN_distanceB*10*b.rate/2}]
  
                  UN_downline.drawPath(this.UN_downline)
  
  
                  this.UNU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y+this.UN_distance*10*b.rate}]
                  this.UNU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.upLine.getPosition()[1].y}]
                  this.UNU_lfdownArrowP =  [{x:this.UNU_lArrowline[0].x-10,y: this.UNU_lArrowline[1].y},{x: this.UNU_lArrowline[1].x+10,y: this.UNU_lArrowline[1].y}]
                  
                  this.UNU_lfupTip = this.UNU_lArrowline[0]
                  this.UNU_lfdownTip = this.UNU_lArrowline[1]
  
                  UNU_lArrowline.drawPath(this.UNU_lArrowline)
                  UNU_lfupArrowP.drawPath(this.UNU_lfupArrowP)
                  UNU_lfdownArrowP.drawPath(this.UNU_lfdownArrowP)
                  UNU_lfupTip.drawArrow(this.UNU_lfupTip)
                  UNU_lfdownTip.drawArrow(this.UNU_lfdownTip)
  
                  this.UNH_group = {x:80+380+b.widthDifference , y:20 + 10 *b.rate*this.UN_distance/2}
                  UNH_group.moveGroup(this.UNH_group)
            
                  if(this.UN_distance.n%this.UN_distance.d == 0) {
                    UNH_letter.changeletter('' + parseInt(this.UN_distance.n/this.UN_distance.d));
                    } else {
                    UNH_letter.changeletter(''+parseInt(this.UN_distance.n/this.UN_distance.d)+ '-'+this.UN_distance.n%this.UN_distance.d + '/' + this.UN_distance.d);
                  }
  
                } else if (this.UN_dis_direction == 'Down') {
  
                  this.UNcirclePosition = {x:ele.rightLine.getPosition()[0].x - this.UN_setback*10*b.rate,y:  ele.downLine.getPosition()[0].y - this.UN_distance*10*b.rate}
                  UNcircle.moveCircle(this.UNcirclePosition)
  
                  this.UNrectPosition = {x:this.UNcirclePosition.x,y:this.UNcirclePosition.y -this.UN_diameter/2}
                  UNrect.moveRect(this.UNrectPosition)

                  this.setSize = {width:this.UN_setback*10*b.rate+5,height:this.UN_diameter}
                  UNrect.setSize(this.setSize)
  

                  this.UNrect_maskPosition = {x : ele.rightLine.getPosition()[0].x-5,y:this.UNcirclePosition.y -this.UN_distanceB*10*b.rate/2}

                  UNrect_mask.moveRect(this.UNrect_maskPosition)

                  this.UNrect_maskSize = {width:6,height:this.UN_distanceB*10*b.rate}
                  UNrect_mask.setSize(this.UNrect_maskSize)



                  this.upline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y-this.UN_diameter/2},{x:ele.rightLine.getPosition()[0].x,y:this.UNcirclePosition.y-this.UN_distanceB*10*b.rate/2}]
                  UN_upline.drawPath(this.upline)
                 
                  this.UN_downline = [{x:this.UNcirclePosition.x,y:this.UNcirclePosition.y+this.UN_diameter/2},{x:ele.rightLine.getPosition()[0].x,y:this.UNcirclePosition.y+this.UN_distanceB*10*b.rate/2}]
                  UN_downline.drawPath(this.UN_downline)
  

                  this.UNU_lArrowline = [{x: ele.rightLine.getPosition()[1].x+50,y: ele.downLine.getPosition()[1].y},{x: ele.rightLine.getPosition()[1].x+50,y: ele.downLine.getPosition()[1].y-this.UN_distance*10*b.rate}]
                  this.UNU_lfupArrowP = [{x: ele.rightLine.getPosition()[1].x+60,y: ele.downLine.getPosition()[1].y},{x: ele.rightLine.getPosition()[1].x+40,y: ele.downLine.getPosition()[1].y}]
                  this.UNU_lfdownArrowP =  [{x:this.UNU_lArrowline[1].x-10,y: this.UNU_lArrowline[1].y},{x: this.UNU_lArrowline[1].x+10,y: this.UNU_lArrowline[1].y}]
                  
                  this.UNU_lfupTip = this.UNU_lArrowline[1]
                  this.UNU_lfdownTip = this.UNU_lArrowline[0]

                  UNU_lArrowline.drawPath(this.UNU_lArrowline)
                  UNU_lfupArrowP.drawPath(this.UNU_lfupArrowP)
                  UNU_lfdownArrowP.drawPath(this.UNU_lfdownArrowP)
                  UNU_lfupTip.drawArrow(this.UNU_lfupTip)
                  UNU_lfdownTip.drawArrow(this.UNU_lfdownTip)
  
                  this.UNH_group = {x:80+380+b.widthDifference , y:20 +710 - 10 *b.rate*this.UN_distance/2}
                  UNH_group.moveGroup(this.UNH_group)
            
                  if(this.UN_distance.n%this.UN_distance.d == 0) {
                    UNH_letter.changeletter('' + parseInt(this.UN_distance.n/this.UN_distance.d));
                    } else {
                    UNH_letter.changeletter(''+parseInt(this.UN_distance.n/this.UN_distance.d)+ '-'+this.UN_distance.n%this.UN_distance.d + '/' + this.UN_distance.d);
                  }
  
                }
  
              }
  
              b.dis_upWidth = ele.up_Widthletter.returnValue();
              b.dis_downWidth = ele.down_Widthletter.returnValue();
              b.dis_leftHeight = ele.left_Heightletter.returnValue();
              b.dis_rightHeight = ele.right_Heightletter.returnValue()
  
              b.draw()
  
            }
  
        }
      }
      