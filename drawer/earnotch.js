
    function EarNotch() {

        this.Handle = "EarNotch";
        this.draw = function(context) {
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'EarNotch';
         })
  

          this.parameter = simpleParameter[0].value[0];

          for(var i = 0; i < this.parameter.length; i ++) {

            this.EN_width = this.parameter[i][0]?strTofraction(this.parameter[i][0]):0;
           
            this.EN_height = this.parameter[i][2]?strTofraction(this.parameter[i][2]):0;

            this.EN_widthB = this.parameter[i][1]?strTofraction(this.parameter[i][1]):0;

            this.EN_heightD = this.parameter[i][3]?strTofraction(this.parameter[i][3]):0;

            this.EN_set_direct = this.parameter[i][4];

            this.EN_dis_direction = this.parameter[i][5];

            this.EN_size = this.parameter[i][6]?strTofraction(this.parameter[i][6]):0;

            this.EN_distance = this.parameter[i][7]?strTofraction(this.parameter[i][7]):0;

    
              var b = new initDraw(context);
              var ele = new definitionObject();


            var ENrect= makeSVG('rect', { id :'ENrect'+i+'',x:"-16300000", y:"-3000000", width:"30", height:"40", fill:"#ffffff", stroke:"#000000" ,'pointer-events':"all" });
            document.getElementById('editor').appendChild(ENrect);

            var ENcircle_up= makeSVG('ellipse', { id :'ENcircle_up'+i+'',cx:"-193000", cy:"-30000000", rx:"5", ry:"5", fill:"#ffffff", stroke:"#000000", 'pointer-events':"all" });
            document.getElementById('editor').appendChild(ENcircle_up);

            var ENcircle_down= makeSVG('ellipse', { id :'ENcircle_down'+i+'',cx:"-193000", cy:"-30000000", rx:"5", ry:"5", fill:"#ffffff", stroke:"#000000", 'pointer-events':"all" });
            document.getElementById('editor').appendChild(ENcircle_down);

            var maskrect= makeSVG('rect', { id :'maskrect'+i+'', x:"-123", y:"321", width:"40", height:"40", fill:"#ffffff", stroke:"none", 'pointer-events':"all"});
            document.getElementById('editor').appendChild(maskrect);
         
            var ENrect = new Rect('ENrect'+(i)+'')
            var ENcircle_up = new circle('ENcircle_up'+(i)+'')
            var ENcircle_down = new circle('ENcircle_down'+(i)+'')
            var maskrect = new Rect('maskrect'+(i)+'')


            var EN_LU_Line= makeSVG('path', { id :'EN_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(EN_LU_Line);

            var EN_LU_P= makeSVG('path', { id :'EN_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(EN_LU_P);

            var EN_LD_P= makeSVG('path', { id :'EN_LD_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(EN_LD_P);

            var EN_LU_DTip= makeSVG('path', { id :'EN_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(EN_LU_DTip);

            var EN_LU_UTip= makeSVG('path', { id :'EN_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(EN_LU_UTip);

            if(!$('#ENH_group'+i).length)  {
              var ENH_group= makeSVG('g', { id :'ENH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
              document.getElementById('editor').appendChild(ENH_group);
          
              var ENH_letter= makeSVG('text', { id :'ENH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
              document.getElementById('ENH_group'+i).appendChild(ENH_letter);
            }
         

            var ENU_lArrowline = new Pathline('EN_LU_Line'+i+'');
            var ENU_lfupArrowP = new Pathline('EN_LU_P'+i+'');
            var ENU_lfdownArrowP = new Pathline('EN_LD_P'+i+'');
            var ENU_lfupTip = new Arrow('EN_LU_UTip'+i+'','up');
            var ENU_lfdownTip = new Arrow('EN_LU_DTip'+i+'','down');
            var ENH_group = new Group('ENH_group'+i+'', 'vertical')

            var ENH_letter = new letter('ENH_letter'+i+'');

            if(this.EN_set_direct == 'Left') {

              if(this.EN_dis_direction == "Top") {

                this.rectPosition = {x:ele.leftLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y+(this.EN_distance-this.EN_height/2)*10*b.rate}
                this.maskPosition = {x:ele.leftLine.getPosition()[0].x-10,y:this.rectPosition.y}
                this.upCircle = {x:ele.leftLine.getPosition()[0].x+(this.EN_widthB)*10*b.rate,y:this.rectPosition.y + (this.EN_height-this.EN_heightD)/2*10*b.rate}
                this.downCircle = {x:ele.leftLine.getPosition()[0].x+this.EN_widthB*10*b.rate,y:this.rectPosition.y+(this.EN_height-(this.EN_height-this.EN_heightD)/2)*10*b.rate}
        
                this.sizeRect = {width:this.EN_width*10*b.rate,height:this.EN_height*10*b.rate}
                this.sizeMaskrect = {width:this.EN_width*10*b.rate+10,height:this.EN_height*10*b.rate}
        
               
                ENrect.moveRect(this.rectPosition)
                maskrect.moveRect(this.maskPosition)
                ENcircle_up.moveCircle(this.upCircle)
                ENcircle_down.moveCircle(this.downCircle)
        
        
                ENrect.setSize(this.sizeRect)
                maskrect.setSize(this.sizeMaskrect)
                ENcircle_up.setSize(this.EN_size*10*b.rate/2)
                ENcircle_down.setSize(this.EN_size*10*b.rate/2)
        
        
                this.ENU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y+this.EN_distance*10*b.rate}]
                this.ENU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.upLine.getPosition()[0].y}]
                this.ENU_lfdownArrowP =  [{x:this.ENU_lArrowline[0].x-10,y: this.ENU_lArrowline[1].y},{x: this.ENU_lArrowline[1].x+10,y: this.ENU_lArrowline[1].y}]
              
                this.ENU_lfupTip = this.ENU_lArrowline[0]
                this.ENU_lfdownTip = this.ENU_lArrowline[1]
        
                ENU_lArrowline.drawPath(this.ENU_lArrowline)
                ENU_lfupArrowP.drawPath(this.ENU_lfupArrowP)
                ENU_lfdownArrowP.drawPath(this.ENU_lfdownArrowP)
                ENU_lfupTip.drawArrow(this.ENU_lfupTip)
                ENU_lfdownTip.drawArrow(this.ENU_lfdownTip)


                this.ENH_group = {x:80 , y:20 + 10 *b.rate*this.EN_distance/2}
                ENH_group.moveGroup(this.ENH_group)
        
                if(this.EN_distance.n%this.EN_distance.d == 0) {
                  ENH_letter.changeletter('' + parseInt(this.EN_distance.n/this.EN_distance.d));
                  } else {
                  ENH_letter.changeletter(''+parseInt(this.EN_distance.n/this.EN_distance.d)+ '-'+this.EN_distance.n%this.EN_distance.d + '/' + this.EN_distance.d);
                }
              } else if(this.EN_dis_direction == "Down") {
             
                this.rectPosition = {x:ele.leftLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y-(this.EN_distance+this.EN_height/2)*10*b.rate}
                this.maskPosition = {x:ele.leftLine.getPosition()[0].x-10,y:this.rectPosition.y}
                this.upCircle = {x:ele.leftLine.getPosition()[0].x+(this.EN_widthB)*10*b.rate,y:this.rectPosition.y + (this.EN_height-this.EN_heightD)/2*10*b.rate}
                this.downCircle = {x:ele.leftLine.getPosition()[0].x+this.EN_widthB*10*b.rate,y:this.rectPosition.y+(this.EN_height-(this.EN_height-this.EN_heightD)/2)*10*b.rate}
        
                this.sizeRect = {width:this.EN_width*10*b.rate,height:this.EN_height*10*b.rate}
                this.sizeMaskrect = {width:this.EN_width*10*b.rate+10,height:this.EN_height*10*b.rate}
        
                ENrect.moveRect(this.rectPosition)
                maskrect.moveRect(this.maskPosition)
                ENcircle_up.moveCircle(this.upCircle)
                ENcircle_down.moveCircle(this.downCircle)
        
                ENrect.setSize(this.sizeRect)
                maskrect.setSize(this.sizeMaskrect)
                ENcircle_up.setSize(this.EN_size*10*b.rate/2)
                ENcircle_down.setSize(this.EN_size*10*b.rate/2)
        
                this.ENU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y-this.EN_distance*10*b.rate}]
                this.ENU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.downLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.downLine.getPosition()[0].y}]
                this.ENU_lfdownArrowP =  [{x:this.ENU_lArrowline[0].x-10,y: this.ENU_lArrowline[1].y},{x: this.ENU_lArrowline[1].x+10,y: this.ENU_lArrowline[1].y}]
              
                this.ENU_lfupTip = this.ENU_lArrowline[1]
                this.ENU_lfdownTip = this.ENU_lArrowline[0]

                ENU_lArrowline.drawPath(this.ENU_lArrowline)
                ENU_lfupArrowP.drawPath(this.ENU_lfupArrowP)
                ENU_lfdownArrowP.drawPath(this.ENU_lfdownArrowP)
                ENU_lfupTip.drawArrow(this.ENU_lfupTip)
                ENU_lfdownTip.drawArrow(this.ENU_lfdownTip)

                this.ENH_group = {x:80 , y:20 +710 - 10 *b.rate*this.EN_distance/2}
                ENH_group.moveGroup(this.ENH_group)
        
                if(this.EN_distance.n%this.EN_distance.d == 0) {
                  ENH_letter.changeletter('' + parseInt(this.EN_distance.n/this.EN_distance.d));
                  } else {
                  ENH_letter.changeletter(''+parseInt(this.EN_distance.n/this.EN_distance.d)+ '-'+this.EN_distance.n%this.EN_distance.d + '/' + this.EN_distance.d);
                }

              }

            } else if(this.EN_set_direct == 'Right') {

              if(this.EN_dis_direction == "Top") {

                this.rectPosition = {x:ele.rightLine.getPosition()[0].x-this.EN_width*10*b.rate,y:ele.upLine.getPosition()[0].y+(this.EN_distance-this.EN_height/2)*10*b.rate}
                this.maskPosition = {x:this.rectPosition.x,y:this.rectPosition.y}
                this.upCircle = {x:ele.rightLine.getPosition()[0].x-(this.EN_widthB)*10*b.rate,y:this.rectPosition.y + (this.EN_height-this.EN_heightD)/2*10*b.rate}
                this.downCircle = {x:ele.rightLine.getPosition()[0].x-this.EN_widthB*10*b.rate,y:this.rectPosition.y+(this.EN_height-(this.EN_height-this.EN_heightD)/2)*10*b.rate}
        
                this.sizeRect = {width:this.EN_width*10*b.rate,height:this.EN_height*10*b.rate}
                this.sizeMaskrect = {width:this.EN_width*10*b.rate+10,height:this.EN_height*10*b.rate}
               
                ENrect.moveRect(this.rectPosition)
                maskrect.moveRect(this.maskPosition)
                ENcircle_up.moveCircle(this.upCircle)
                ENcircle_down.moveCircle(this.downCircle)
        
                ENrect.setSize(this.sizeRect)
                maskrect.setSize(this.sizeMaskrect)
                ENcircle_up.setSize(this.EN_size*10*b.rate/2)
                ENcircle_down.setSize(this.EN_size*10*b.rate/2)
        
                this.ENU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[0].y+this.EN_distance*10*b.rate}]
                this.ENU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.upLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.upLine.getPosition()[0].y}]
                this.ENU_lfdownArrowP =  [{x:this.ENU_lArrowline[0].x-10,y: this.ENU_lArrowline[1].y},{x: this.ENU_lArrowline[1].x+10,y: this.ENU_lArrowline[1].y}]
              
                this.ENU_lfupTip = this.ENU_lArrowline[0]
                this.ENU_lfdownTip = this.ENU_lArrowline[1]

                ENU_lArrowline.drawPath(this.ENU_lArrowline)
                ENU_lfupArrowP.drawPath(this.ENU_lfupArrowP)
                ENU_lfdownArrowP.drawPath(this.ENU_lfdownArrowP)
                ENU_lfupTip.drawArrow(this.ENU_lfupTip)
                ENU_lfdownTip.drawArrow(this.ENU_lfdownTip)


                this.ENH_group = {x:80 + 380 + b.widthDifference , y:20 + 10 *b.rate*this.EN_distance/2}
                ENH_group.moveGroup(this.ENH_group)
        
                if(this.EN_distance.n%this.EN_distance.d == 0) {
                  ENH_letter.changeletter('' + parseInt(this.EN_distance.n/this.EN_distance.d));
                  } else {
                  ENH_letter.changeletter(''+parseInt(this.EN_distance.n/this.EN_distance.d)+ '-'+this.EN_distance.n%this.EN_distance.d + '/' + this.EN_distance.d);
                }
              } else if(this.EN_dis_direction == "Down") {

                this.rectPosition = {x:ele.rightLine.getPosition()[1].x -this.EN_width*10*b.rate,y:ele.downLine.getPosition()[0].y-(this.EN_distance+this.EN_height/2)*10*b.rate}
                this.maskPosition = {x:this.rectPosition.x,y:this.rectPosition.y}
                this.upCircle = {x:ele.rightLine.getPosition()[1].x-(this.EN_widthB)*10*b.rate,y:this.rectPosition.y + (this.EN_height-this.EN_heightD)/2*10*b.rate}
                this.downCircle = {x:ele.rightLine.getPosition()[1].x-this.EN_widthB*10*b.rate,y:this.rectPosition.y+(this.EN_height-(this.EN_height-this.EN_heightD)/2)*10*b.rate}
        
                this.sizeRect = {width:this.EN_width*10*b.rate,height:this.EN_height*10*b.rate}
                this.sizeMaskrect = {width:this.EN_width*10*b.rate+10,height:this.EN_height*10*b.rate}
        
                ENrect.moveRect(this.rectPosition)
                maskrect.moveRect(this.maskPosition)
                ENcircle_up.moveCircle(this.upCircle)
                ENcircle_down.moveCircle(this.downCircle)
        
                ENrect.setSize(this.sizeRect)
                maskrect.setSize(this.sizeMaskrect)
                ENcircle_up.setSize(this.EN_size*10*b.rate/2)
                ENcircle_down.setSize(this.EN_size*10*b.rate/2)
        
                this.ENU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[1].y-this.EN_distance*10*b.rate}]
                this.ENU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.downLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.downLine.getPosition()[1].y}]
                this.ENU_lfdownArrowP =  [{x:this.ENU_lArrowline[0].x-10,y: this.ENU_lArrowline[1].y},{x: this.ENU_lArrowline[1].x+10,y: this.ENU_lArrowline[1].y}]
              
                this.ENU_lfupTip = this.ENU_lArrowline[1]
                this.ENU_lfdownTip = this.ENU_lArrowline[0]
        
                ENU_lArrowline.drawPath(this.ENU_lArrowline)
                ENU_lfupArrowP.drawPath(this.ENU_lfupArrowP)
                ENU_lfdownArrowP.drawPath(this.ENU_lfdownArrowP)
                ENU_lfupTip.drawArrow(this.ENU_lfupTip)
                ENU_lfdownTip.drawArrow(this.ENU_lfdownTip)


                this.ENH_group = {x:80 + 380 + b.widthDifference , y:20 +710 - 10 *b.rate*this.EN_distance/2}
                ENH_group.moveGroup(this.ENH_group)
        
                if(this.EN_distance.n%this.EN_distance.d == 0) {
                  ENH_letter.changeletter('' + parseInt(this.EN_distance.n/this.EN_distance.d));
                  } else {
                  ENH_letter.changeletter(''+parseInt(this.EN_distance.n/this.EN_distance.d)+ '-'+this.EN_distance.n%this.EN_distance.d + '/' + this.EN_distance.d);
                }


              }

            }


          }
  
  
          // b.dis_upWidth = ele.up_Widthletter.returnValue();
          // b.dis_downWidth = ele.down_Widthletter.returnValue();
          // b.dis_leftHeight = ele.left_Heightletter.returnValue();
          // b.dis_rightHeight = ele.right_Heightletter.returnValue()
          // b.draw()
  
        }
      }
  