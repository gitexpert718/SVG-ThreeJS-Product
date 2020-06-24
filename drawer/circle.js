 

    function CircleNotch() {
     
        this.Handle = "CircleNotch";
  
        this.draw = function(context) {
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'CircleNotch';
         })
  
         this.parameter = simpleParameter[0].value[0];


         for(var i = 0; i < this.parameter.length; i ++) {

          this.CN_diameter = this.parameter[i][0]?strTofraction(this.parameter[i][0]):0;

          this.CN_set_direct = this.parameter[i][1]
  
          this.CN_setback = this.parameter[i][2]?strTofraction(this.parameter[i][2]):0;
  
          this.CN_dis_direction = this.parameter[i][3]

          this.CN_distance = this.parameter[i][4]?strTofraction(this.parameter[i][4]):0;
         
  
            var b = new initDraw(context);
            var ele = new definitionObject();

               // svg add
            var CNcircle= makeSVG('ellipse', { id : 'CNcircle'+(i)+'' , cx:-12300000, cy:321000, rx:10, ry:10, fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(CNcircle);
             
            var CNrect= makeSVG('rect', { id :'CNrect'+i+'', x:"-900000", y:"-200000000000", width:"30", height:"20", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)" ,stroke:"#ffffff" });
            document.getElementById('editor').appendChild(CNrect);

            var CNcircle = new circle('CNcircle'+(i)+'')
            var CNrect = new Rect('CNrect'+(i)+'')


            var CN_LU_Line= makeSVG('path', { id :'CN_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(CN_LU_Line);

            var CN_LU_P= makeSVG('path', { id :'CN_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(CN_LU_P);

            var CN_LD_P= makeSVG('path', { id :'CN_LD_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
            document.getElementById('editor').appendChild(CN_LD_P);

            var CN_LU_DTip= makeSVG('path', { id :'CN_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(CN_LU_DTip);

            var CN_LU_UTip= makeSVG('path', { id :'CN_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
            document.getElementById('editor').appendChild(CN_LU_UTip);

            if(!$('#CNH_group'+i).length) {
              var CNH_group= makeSVG('g', { id :'CNH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
              document.getElementById('editor').appendChild(CNH_group);
          
              var CNH_letter= makeSVG('text', { id :'CNH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
              document.getElementById('CNH_group'+i).appendChild(CNH_letter);
  
            }
           

            
            var CNU_lArrowline = new Pathline('CN_LU_Line'+i+'');
            var CNU_lfupArrowP = new Pathline('CN_LU_P'+i+'');
            var CNU_lfdownArrowP = new Pathline('CN_LD_P'+i+'');
            var CNU_lfupTip = new Arrow('CN_LU_UTip'+i+'','up');
            var CNU_lfdownTip = new Arrow('CN_LU_DTip'+i+'','down');
            var CNH_group = new Group('CNH_group'+i+'', 'vertical')

            var CNH_letter = new letter('CNH_letter'+i+'');

            this.CN_diameter = this.CN_diameter*10*b.rate
            CNcircle.setSize(this.CN_diameter/2)




            if(this.CN_set_direct == 'Left'){
  
              if(this.CN_dis_direction == 'Top'){

                this.rect_height = Math.pow((Math.pow(this.CN_diameter/2,2)- Math.pow(this.CN_setback*10*b.rate,2)),1/2)
                
                this.CNcirclePosition = {x:ele.leftLine.getPosition()[0].x + this.CN_setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.CN_distance*10*b.rate}
                CNcircle.moveCircle(this.CNcirclePosition)

                this.CNrectPosition = {x:ele.leftLine.getPosition()[0].x - 20,y:this.CNcirclePosition.y - this.rect_height}
                CNrect.moveRect(this.CNrectPosition)
                
                this.setSize = {width:20.5,height:this.rect_height*2}

                CNrect.setSize(this.setSize)

                this.CNU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y+this.CN_distance*10*b.rate}]
                this.CNU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.upLine.getPosition()[0].y}]
                this.CNU_lfdownArrowP =  [{x:this.CNU_lArrowline[0].x-10,y: this.CNU_lArrowline[1].y},{x: this.CNU_lArrowline[1].x+10,y: this.CNU_lArrowline[1].y}]
                
                this.CNU_lfupTip = this.CNU_lArrowline[0]
                this.CNU_lfdownTip = this.CNU_lArrowline[1]

                CNU_lArrowline.drawPath(this.CNU_lArrowline)
                CNU_lfupArrowP.drawPath(this.CNU_lfupArrowP)
                CNU_lfdownArrowP.drawPath(this.CNU_lfdownArrowP)
                CNU_lfupTip.drawArrow(this.CNU_lfupTip)
                CNU_lfdownTip.drawArrow(this.CNU_lfdownTip)

                this.CNH_group = {x:80 , y:20 + 10 *b.rate*this.CN_distance/2}
                CNH_group.moveGroup(this.CNH_group)

                if(this.CN_distance.n%this.CN_distance.d == 0) {
                  CNH_letter.changeletter('' + parseInt(this.CN_distance.n/this.CN_distance.d));
                  } else {
                  CNH_letter.changeletter(''+parseInt(this.CN_distance.n/this.CN_distance.d)+ '-'+this.CN_distance.n%this.CN_distance.d + '/' + this.CN_distance.d);
                }

              } else if (this.CN_dis_direction == 'Down') {

                this.rect_height = Math.pow((Math.pow(this.CN_diameter/2,2)- Math.pow(this.CN_setback*10*b.rate,2)),1/2)
                
                this.CNcirclePosition = {x:ele.leftLine.getPosition()[0].x + this.CN_setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.CN_distance*10*b.rate}
                CNcircle.moveCircle(this.CNcirclePosition)

                this.CNrectPosition = {x:ele.leftLine.getPosition()[0].x - 20,y:this.CNcirclePosition.y - this.rect_height}
                CNrect.moveRect(this.CNrectPosition)
                
                this.setSize = {width:20.5,height:this.rect_height*2}

                CNrect.setSize(this.setSize)

                this.CNU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y-this.CN_distance*10*b.rate}]
                this.CNU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.downLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.downLine.getPosition()[0].y}]
                this.CNU_lfdownArrowP =  [{x:this.CNU_lArrowline[0].x-10,y: this.CNU_lArrowline[1].y},{x: this.CNU_lArrowline[1].x+10,y: this.CNU_lArrowline[1].y}]
                
                this.CNU_lfupTip = this.CNU_lArrowline[1]
                this.CNU_lfdownTip = this.CNU_lArrowline[0]

                CNU_lArrowline.drawPath(this.CNU_lArrowline)
                CNU_lfupArrowP.drawPath(this.CNU_lfupArrowP)
                CNU_lfdownArrowP.drawPath(this.CNU_lfdownArrowP)
                CNU_lfupTip.drawArrow(this.CNU_lfupTip)
                CNU_lfdownTip.drawArrow(this.CNU_lfdownTip)

                this.CNH_group = {x:80 , y:20+710 - 10 *b.rate*this.CN_distance/2}
                CNH_group.moveGroup(this.CNH_group)

                if(this.CN_distance.n%this.CN_distance.d == 0) {
                  CNH_letter.changeletter('' + parseInt(this.CN_distance.n/this.CN_distance.d));
                  } else {
                  CNH_letter.changeletter(''+parseInt(this.CN_distance.n/this.CN_distance.d)+ '-'+this.CN_distance.n%this.CN_distance.d + '/' + this.CN_distance.d);
                }

              }

            } else if(this.CN_set_direct == 'Right') {
              if(this.CN_dis_direction == 'Top'){

                this.rect_height = Math.pow((Math.pow(this.CN_diameter/2,2)- Math.pow(this.CN_setback*10*b.rate,2)),1/2)
              
                this.CNcirclePosition = {x:ele.rightLine.getPosition()[0].x - this.CN_setback*10*b.rate,y:ele.upLine.getPosition()[1].y + this.CN_distance*10*b.rate}
                CNcircle.moveCircle(this.CNcirclePosition)

                this.CNrectPosition = {x:ele.rightLine.getPosition()[0].x - 0.5,y:this.CNcirclePosition.y - this.rect_height}
                CNrect.moveRect(this.CNrectPosition)
                
                this.setSize = {width:21,height:this.rect_height*2}

                CNrect.setSize(this.setSize)

                this.CNU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y+this.CN_distance*10*b.rate}]
                this.CNU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.upLine.getPosition()[1].y}]
                this.CNU_lfdownArrowP =  [{x:this.CNU_lArrowline[0].x-10,y: this.CNU_lArrowline[1].y},{x: this.CNU_lArrowline[1].x+10,y: this.CNU_lArrowline[1].y}]
                
                this.CNU_lfupTip = this.CNU_lArrowline[0]
                this.CNU_lfdownTip = this.CNU_lArrowline[1]

                CNU_lArrowline.drawPath(this.CNU_lArrowline)
                CNU_lfupArrowP.drawPath(this.CNU_lfupArrowP)
                CNU_lfdownArrowP.drawPath(this.CNU_lfdownArrowP)
                CNU_lfupTip.drawArrow(this.CNU_lfupTip)
                CNU_lfdownTip.drawArrow(this.CNU_lfdownTip)

                this.CNH_group = {x:80 + 380 + b.widthDifference , y:20 + 10 *b.rate*this.CN_distance/2}
                CNH_group.moveGroup(this.CNH_group)

                if(this.CN_distance.n%this.CN_distance.d == 0) {
                  CNH_letter.changeletter('' + parseInt(this.CN_distance.n/this.CN_distance.d));
                  } else {
                  CNH_letter.changeletter(''+parseInt(this.CN_distance.n/this.CN_distance.d)+ '-'+this.CN_distance.n%this.CN_distance.d + '/' + this.CN_distance.d);
                }

              } else if (this.CN_dis_direction == 'Down') {

                this.rect_height = Math.pow((Math.pow(this.CN_diameter/2,2)- Math.pow(this.CN_setback*10*b.rate,2)),1/2)
              
                this.CNcirclePosition = {x:ele.rightLine.getPosition()[0].x - this.CN_setback*10*b.rate,y:ele.downLine.getPosition()[1].y - this.CN_distance*10*b.rate}
                CNcircle.moveCircle(this.CNcirclePosition)

                this.CNrectPosition = {x:ele.rightLine.getPosition()[0].x-0.5 ,y:this.CNcirclePosition.y - this.rect_height}
                CNrect.moveRect(this.CNrectPosition)
                
                this.setSize = {width:20.5,height:this.rect_height*2}

                CNrect.setSize(this.setSize)

                this.CNU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[1].y-this.CN_distance*10*b.rate}]
                this.CNU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.downLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.downLine.getPosition()[1].y}]
                this.CNU_lfdownArrowP =  [{x:this.CNU_lArrowline[0].x-10,y: this.CNU_lArrowline[1].y},{x: this.CNU_lArrowline[1].x+10,y: this.CNU_lArrowline[1].y}]
                
                this.CNU_lfupTip = this.CNU_lArrowline[1]
                this.CNU_lfdownTip = this.CNU_lArrowline[0]

                CNU_lArrowline.drawPath(this.CNU_lArrowline)
                CNU_lfupArrowP.drawPath(this.CNU_lfupArrowP)
                CNU_lfdownArrowP.drawPath(this.CNU_lfdownArrowP)
                CNU_lfupTip.drawArrow(this.CNU_lfupTip)
                CNU_lfdownTip.drawArrow(this.CNU_lfdownTip)

                this.CNH_group = {x:80 + 380 + b.widthDifference , y:20 + 710 - 10 *b.rate*this.CN_distance/2}
                CNH_group.moveGroup(this.CNH_group)

                if(this.CN_distance.n%this.CN_distance.d == 0) {
                  CNH_letter.changeletter('' + parseInt(this.CN_distance.n/this.CN_distance.d));
                  } else {
                  CNH_letter.changeletter(''+parseInt(this.CN_distance.n/this.CN_distance.d)+ '-'+this.CN_distance.n%this.CN_distance.d + '/' + this.CN_distance.d);
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
  