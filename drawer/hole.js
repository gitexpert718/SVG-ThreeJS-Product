
    function Hole() {

        this.Handle = "Hole";
  
        this.draw = function(context) {
  
          var simpleParameter = [];
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'Hole';
         })
  
         this.parameter = simpleParameter[0].value[0];


       for(var i = 0; i < this.parameter.length; i ++) {


          this.diameter = this.parameter[i][0]?strTofraction(this.parameter[i][0]):0;
  
          this.set_direct = this.parameter[i][1];

          this.setback = this.parameter[i][2]?strTofraction(this.parameter[i][2]):0;

          this.dis_direction = this.parameter[i][3];

          this.distance = this.parameter[i][4]?strTofraction(this.parameter[i][4]):0;
       

          this.distanceB = this.parameter[i][5]?strTofraction(this.parameter[i][5]):0;
          // if(Math.abs(this.distanceB-0)>0.00001) {
          //   this.distanceB=(this.distanceB>10)?this.distanceB:10;}


          this.distanceC = this.parameter[i][6]?strTofraction(this.parameter[i][6]):0;
     
            var b = new initDraw(context);
            var ele = new definitionObject();

         // single

       
         var singleCircle= makeSVG('ellipse', { id : 'singleCircle'+(i)+'' , cx:-12003, cy:321, rx:10, ry:10, fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(singleCircle);
     
     
     
         var S_UL_Line= makeSVG('path', { id :'S_UL_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_UL_Line);
     
         var S_UL_P= makeSVG('path', { id :'S_UL_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_UL_P);
         
     
         var S_UL_LTip= makeSVG('path', { id :'S_UL_LTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_UL_LTip);
     
         var S_UL_RTip= makeSVG('path', { id :'S_UL_RTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_UL_RTip);
     
     
     
     
         var S_LU_Line= makeSVG('path', { id :'S_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_LU_Line);
     
         var S_LU_P= makeSVG('path', { id :'S_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_LU_P);
     
         var S_LD_P= makeSVG('path', { id :'S_LD_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_LD_P);
     
         var S_LU_DTip= makeSVG('path', { id :'S_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_LU_DTip);
     
         var S_LU_UTip= makeSVG('path', { id :'S_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(S_LU_UTip);
     
     
         if(!$('#circleDiameterG'+i).length) {
          var circleDiameterG= makeSVG('g', { id :'circleDiameterG'+i+'',transform :"translate(-5000000, 145)" });
          document.getElementById('editor').appendChild(circleDiameterG);
      
          // var diameter_rect= makeSVG('rect', { id :'diameter_rect'+i+'',  width:"50", height:"40", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"none",'pointer-events':"all" });
          // document.getElementById('circleDiameterG'+i).appendChild(diameter_rect);
      
          var circleDiameter= makeSVG('text', { id :'circleDiameter'+i+'', width : "100", x:"26", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style :"font-size: 15px;"});
          document.getElementById('circleDiameterG'+i).appendChild(circleDiameter);
         }
       
     
     
         if(!$('#SH_group'+i).length) {
          var SH_group= makeSVG('g', { id :'SH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
          document.getElementById('editor').appendChild(SH_group);
      
          var SH_letter= makeSVG('text', { id :'SH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
          document.getElementById('SH_group'+i).appendChild(SH_letter);
        }
       

        if(!$('#SW_group'+i).length) {
          var SW_group= makeSVG('g', { id :'SW_group'+i+'', transform :"translate(-135000, 145) " });
          document.getElementById('editor').appendChild(SW_group);
      
          var SW_letter= makeSVG('text', { id :'SW_letter'+i+'',x:"26", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
          document.getElementById('SW_group'+i).appendChild(SW_letter);
        }
     
     
     
         // double
     
         var doubleCircle= makeSVG('ellipse', { id : 'doubleCircle'+(i)+'' , cx:-12003, cy:321, rx:10, ry:10, fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(doubleCircle);
     
     
         var SD_UL_Line= makeSVG('path', { id :'SD_UL_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_UL_Line);
     
         var SD_UL_P= makeSVG('path', { id :'SD_UL_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_UL_P);
     
         var SD_UL_LTip= makeSVG('path', { id :'SD_UL_LTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_UL_LTip);
     
         var SD_UL_RTip= makeSVG('path', { id :'SD_UL_RTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_UL_RTip);
     
     
     
         var SD_LU_Line= makeSVG('path', { id :'SD_LU_Line'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_LU_Line);
     
         var SD_LU_P= makeSVG('path', { id :'SD_LU_P'+i+'', d:"M 90 20 L 90 20", fill:"none", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_LU_P);
     
         var SD_LU_DTip= makeSVG('path', { id :'SD_LU_DTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_LU_DTip);
     
         var SD_LU_UTip= makeSVG('path', { id :'SD_LU_UTip'+i+'', d:"M -10000 0 L -10000 0 L -10000 0 L -10000 0 Z", fill:"#000000", stroke:"#000000"});
         document.getElementById('editor').appendChild(SD_LU_UTip);
     
     
         if(!$('#SDH_group'+i).length) {
          var SDH_group= makeSVG('g', { id :'SDH_group'+i+'', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
          document.getElementById('editor').appendChild(SDH_group);
      
          var SDH_letter= makeSVG('text', { id :'SDH_letter'+i+'',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
          document.getElementById('SDH_group'+i).appendChild(SDH_letter);
      
         }
     
         
         if(!$('#SDW_group'+i).length) {
          var SDW_group= makeSVG('g', { id :'SDW_group'+i+'', transform :"translate(-135000, 145) " });
          document.getElementById('editor').appendChild(SDW_group);
      
          var SDW_letter= makeSVG('text', { id :'SDW_letter'+i+'',x:"26", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
          document.getElementById('SDW_group'+i).appendChild(SDW_letter);
         }
     
       
     

         
        var singleCircle = new circle('singleCircle'+i+'');
        
        var SU_lArrowline = new Pathline('S_LU_Line'+i+'');
        var SU_lfupArrowP = new Pathline('S_LU_P'+i+'');
        var SU_lfdownArrowP = new Pathline('S_LD_P'+i+'');
        var SU_lfupTip = new Arrow('S_LU_UTip'+i+'','up');
        var SU_lfdownTip = new Arrow('S_LU_DTip'+i+'','down');
        var SH_group = new Group('SH_group'+i+'', 'vertical')


        var SL_upArrowline = new Pathline('S_UL_Line'+i+'');
        var SL_ulArrowP = new Pathline('S_UL_P'+i+'');
        var SL_ulTip = new Arrow('S_UL_LTip'+i+'','left');
        var SL_urTip = new Arrow('S_UL_RTip'+i+'','right');
        var SW_group = new Group('SW_group'+i+'','horizon')

    

        var SH_letter = new letter('SH_letter'+i+'');
        var SW_letter = new letter('SW_letter'+i+'');


        var circleDiameterG = new Group('circleDiameterG'+i+'',"horizon");
        var circleDiameter = new letter('circleDiameter'+i+'');


        // double
        var doubleCircle = new circle('doubleCircle'+i+'');

        var SDL_upArrowline = new Pathline('SD_UL_Line'+i+'');
        var SDL_ulArrowP = new Pathline('SD_UL_P'+i+'');
        var SDL_ulTip = new Arrow('SD_UL_LTip'+i+'',"left");
        var SDL_urTip = new Arrow('SD_UL_RTip'+i+'',"right");
        var SDW_group = new Group('SDW_group'+i+'',"horizon")

        var SDU_lArrowline = new Pathline('SD_LU_Line'+i+'');
        var SDU_lfupArrowP = new Pathline('SD_LU_P'+i+'');
        var SDU_lfupTip = new Arrow('SD_LU_UTip'+i+'',"up");
        var SDU_lfdownTip = new Arrow('SD_LU_DTip'+i+'',"down");
        var SDH_group = new Group('SDH_group'+i+'',"vertical")

        var SDH_letter = new letter('SDH_letter'+i+'');
        var SDW_letter = new letter('SDW_letter'+i+'');

        singleCircle.setSize(this.diameter/2*b.rate*10)
        doubleCircle.setSize(this.diameter/2*b.rate*10)

        if(this.set_direct == 'Left') {
  
          if(this.dis_direction == 'Top') {
          
            this.sing_position = {x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate}
            singleCircle.moveCircle(this.sing_position)

            this.SU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.upLine.getPosition()[0].y+this.distance*10*b.rate}]
            this.SU_lfupArrowP = [{x:ele.leftLine.getPosition()[0].x-60,y:ele.upLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-40,y:ele.upLine.getPosition()[0].y}]
            this.SU_lfupTip = this.SU_lArrowline[0]
            this.SU_lfdownTip = this.SU_lArrowline[1]
            this.SU_lfdownArrowP =  [{x:this.SU_lArrowline[0].x-10,y: this.SU_lArrowline[1].y},{x: this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y}]

            SU_lArrowline.drawPath(this.SU_lArrowline)
            SU_lfupArrowP.drawPath(this.SU_lfupArrowP)
            SU_lfupTip.drawArrow(this.SU_lfupTip)
            SU_lfdownTip.drawArrow(this.SU_lfdownTip)
            SU_lfdownArrowP.drawPath(this.SU_lfdownArrowP)

            this.SL_upArrowline = [{x:ele.leftLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate + 50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate+50}]
            this.SL_ulArrowP =[{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-10+50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate+10+50}]
            this.SL_ulTip = this.SL_upArrowline[0]
            this.SL_urTip = this.SL_upArrowline[1]

            SL_upArrowline.drawPath(this.SL_upArrowline)
            SL_ulArrowP.drawPath(this.SL_ulArrowP)
            SL_ulTip.drawArrow(this.SL_ulTip)
            SL_urTip.drawArrow(this.SL_urTip)

           
            // sizeLetter handle
            this.sizeCircle = "Ø " + this.diameter + "˝"

            circleDiameter.changeletter(this.sizeCircle)
            this.circleLetter = {x:135+this.setback*10*b.rate + 2*this.diameter*10*b.rate+20,y:175+this.distance*10*b.rate}
            circleDiameterG.moveGroup(this.circleLetter)

            // dimensions handle
            this.SH_group = {x:75 , y:20 + 10 *b.rate*this.distance/2}
            SH_group.moveGroup(this.SH_group)
            this.SW_group =  {x:135 + 10 * b.rate/2 * this.setback , y:175 + 30 + 10 *b.rate*this.distance}
            SW_group.moveGroup(this.SW_group)

            if(this.setback.n%this.setback.d == 0) {
              SW_letter.changeletter('' + parseInt(this.setback.n/this.setback.d));
              } else {
              SW_letter.changeletter(''+parseInt(this.setback.n/this.setback.d)+ '-'+this.setback.n%this.setback.d + '/' + this.setback.d);
            }
  
            if(this.distance.n%this.distance.d == 0) {
              SH_letter.changeletter('' + parseInt(this.distance.n/this.distance.d));
              } else {
              SH_letter.changeletter(''+parseInt(this.distance.n/this.distance.d)+ '-'+this.distance.n%this.distance.d + '/' + this.distance.d);
            }


            if(this.distanceC){

              this.doubleCircle_position = {x:this.sing_position.x +  this.distanceB*10*b.rate,y:this.sing_position.y + this.distanceC*10*b.rate}
              doubleCircle.moveCircle(this.doubleCircle_position)

              this.SL_upArrowline = [{x:ele.leftLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate - 50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-50}]
              this.SL_ulArrowP =[{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-10-50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate+10-50}]
              this.SL_ulTip = this.SL_upArrowline[0]
              this.SL_urTip = this.SL_upArrowline[1]

              SL_upArrowline.drawPath(this.SL_upArrowline)
              SL_ulArrowP.drawPath(this.SL_ulArrowP)
              SL_ulTip.drawArrow(this.SL_ulTip)
              SL_urTip.drawArrow(this.SL_urTip)

              this.SDU_lArrowline = [{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y},{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate}]
              this.SDU_lfupArrowP = [{x:this.SU_lArrowline[1].x-10,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate},{x:this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate}]
              this.SDU_lfupTip = this.SDU_lArrowline[0]
              this.SDU_lfdownTip = this.SDU_lArrowline[1]

              SDU_lArrowline.drawPath(this.SDU_lArrowline)
              SDU_lfupArrowP.drawPath(this.SDU_lfupArrowP)
              SDU_lfupTip.drawArrow(this.SDU_lfupTip)
              SDU_lfdownTip.drawArrow(this.SDU_lfdownTip)

              if(Math.abs(this.distanceB-0)>0.00001) {
                this.SDL_upArrowline = [{x:this.SL_upArrowline[1].x,y:this.SL_upArrowline[1].y},{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y}]
                this.SDL_ulArrowP = [{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y-10},{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y+10}]
                this.SDL_ulTip = this.SDL_upArrowline[0]
                this.SDL_urTip = this.SDL_upArrowline[1]
               this.SDW_group =  {x:135 + 10 * b.rate * (this.setback)  + 10 * b.rate *this.distanceB/2 , y:225 + 10 *b.rate*this.distance-120}

               SDL_upArrowline.drawPath(this.SDL_upArrowline)
               SDL_ulArrowP.drawPath(this.SDL_ulArrowP)
               SDL_ulTip.drawArrow(this.SDL_ulTip)
               SDL_urTip.drawArrow(this.SDL_urTip)
               SDW_group.moveGroup(this.SDW_group)
              }
             
              this.SW_group =  {x:135 + 10 * b.rate/2 * this.setback , y:225 + 10 *b.rate*this.distance-120}
              SW_group.moveGroup(this.SW_group)

              this.SDH_group = {x:75 , y:20 + 10 *b.rate*(this.distance)  +this.distanceC/2*10 *b.rate}
              SDH_group.moveGroup(this.SDH_group)

              if(this.distanceB.n%this.distanceB.d == 0) {
                SDW_letter.changeletter('' + parseInt(this.distanceB.n/this.distanceB.d));
                } else {
                SDW_letter.changeletter(''+parseInt(this.distanceB.n/this.distanceB.d)+ '-'+this.distanceB.n%this.distanceB.d + '/' + this.distanceB.d);
              }
    
              if(this.distanceC.n%this.distanceC.d == 0) {
                SDH_letter.changeletter('' + parseInt(this.distanceC.n/this.distanceC.d));
                } else {
                SDH_letter.changeletter(''+parseInt(this.distanceC.n/this.distanceC.d)+ '-'+this.distanceC.n%this.distanceC.d + '/' + this.distanceC.d);
              }

            }
         
          } else if (this.dis_direction == 'Down') {
          
            this.sing_position = {x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y: ele.downLine.getPosition()[0].y - this.distance*10*b.rate};
            singleCircle.moveCircle(this.sing_position)

            this.SU_lArrowline = [{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y},{x:ele.leftLine.getPosition()[0].x-50,y:ele.downLine.getPosition()[0].y-this.distance*10*b.rate}]
            this.SU_lfupArrowP = [{x:this.SU_lArrowline[0].x-10,y:this.SU_lArrowline[0].y},{x:this.SU_lArrowline[0].x+10,y:this.SU_lArrowline[0].y}]
            this.SU_lfupTip = this.SU_lArrowline[1]
            this.SU_lfdownTip = this.SU_lArrowline[0]
            this.SU_lfdownArrowP =  [{x:this.SU_lArrowline[0].x-10,y: this.SU_lArrowline[1].y},{x: this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y}]


            SU_lArrowline.drawPath(this.SU_lArrowline)
            SU_lfupArrowP.drawPath(this.SU_lfupArrowP)
            SU_lfupTip.drawArrow(this.SU_lfupTip)
            SU_lfdownTip.drawArrow(this.SU_lfdownTip)
            SU_lfdownArrowP.drawPath(this.SU_lfdownArrowP)

            this.SL_upArrowline = [{x:ele.leftLine.getPosition()[0].x,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate + 50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate+50}]
            this.SL_ulArrowP =[{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate-10+50},{x:ele.leftLine.getPosition()[0].x + this.setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate+10+50}]
            this.SL_ulTip = this.SL_upArrowline[0]
            this.SL_urTip = this.SL_upArrowline[1]

            SL_upArrowline.drawPath(this.SL_upArrowline)
            SL_ulArrowP.drawPath(this.SL_ulArrowP)
            SL_ulTip.drawArrow(this.SL_ulTip)
            SL_urTip.drawArrow(this.SL_urTip)

            // sizeLetter handle
            this.sizeCircle = "Ø " + this.diameter + "˝"

            circleDiameter.changeletter(this.sizeCircle)
            this.circleLetter = {x:135+this.setback*10*b.rate + 2*this.diameter*10*b.rate+20,y:175+710-this.distance*10*b.rate}
            circleDiameterG.moveGroup(this.circleLetter)


            // dimensions handle
            this.SH_group = {x:75 , y:20 + 710 - 10 *b.rate*this.distance/2}
            this.SW_group =  {x:135 + 10 * b.rate/2 * this.setback , y:175 + 710 +30 - 10 *b.rate*this.distance}
            SH_group.moveGroup(this.SH_group)
            SW_group.moveGroup(this.SW_group)
           
            if(this.setback.n%this.setback.d == 0) {
              SW_letter.changeletter('' + parseInt(this.setback.n/this.setback.d));
              } else {
              SW_letter.changeletter(''+parseInt(this.setback.n/this.setback.d)+ '-'+this.setback.n%this.setback.d + '/' + this.setback.d);
            }
  
            if(this.distance.n%this.distance.d == 0) {
              SH_letter.changeletter('' + parseInt(this.distance.n/this.distance.d));
              } else {
              SH_letter.changeletter(''+parseInt(this.distance.n/this.distance.d)+ '-'+this.distance.n%this.distance.d + '/' + this.distance.d);
            }


            if(this.distanceC){

              this.doubleCircle_position = {x:this.sing_position.x +  this.distanceB*10*b.rate,y:this.sing_position.y - this.distanceC*10*b.rate}
              doubleCircle.moveCircle(this.doubleCircle_position)

              this.SDU_lArrowline = [{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y},{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate}]
              this.SDU_lfupArrowP = [{x:this.SU_lArrowline[1].x-10,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate},{x:this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate}]
              this.SDU_lfupTip = this.SDU_lArrowline[1]
              this.SDU_lfdownTip = this.SDU_lArrowline[0]

              SDU_lArrowline.drawPath(this.SDU_lArrowline)
              SDU_lfupArrowP.drawPath(this.SDU_lfupArrowP)
              SDU_lfupTip.drawArrow(this.SDU_lfupTip)
              SDU_lfdownTip.drawArrow(this.SDU_lfdownTip)

              if(Math.abs(this.distanceB-0)>0.00001) {
                this.SDL_upArrowline = [{x:this.SL_upArrowline[1].x,y:this.SL_upArrowline[1].y},{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y}]
                this.SDL_ulArrowP = [{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y-10},{x:this.SL_upArrowline[1].x+this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y+10}]
                this.SDL_ulTip = this.SDL_upArrowline[0]
                this.SDL_urTip = this.SDL_upArrowline[1]

               SDL_upArrowline.drawPath(this.SDL_upArrowline)
               SDL_ulArrowP.drawPath(this.SDL_ulArrowP)
               SDL_ulTip.drawArrow(this.SDL_ulTip)
               SDL_urTip.drawArrow(this.SDL_urTip)

               this.SDW_group =  {x:135 + 10 * b.rate * (this.setback)  + 10 * b.rate *this.distanceB/2 , y:225 + 710 -20 - 10 *b.rate*this.distance}
               SDW_group.moveGroup(this.SDW_group)
              }
            
              this.SW_group =  {x:135 + 10 * b.rate/2 * this.setback , y:175 + 710 +30 - 10 *b.rate*this.distance}
              SW_group.moveGroup(this.SW_group)

              this.SDH_group = {x:75 , y:20 +710 - 10 *b.rate*(this.distance)  -this.distanceC/2*10 *b.rate}
              SDH_group.moveGroup(this.SDH_group)

              if(this.distanceB.n%this.distanceB.d == 0) {
                SDW_letter.changeletter('' + parseInt(this.distanceB.n/this.distanceB.d));
                } else {
                SDW_letter.changeletter(''+parseInt(this.distanceB.n/this.distanceB.d)+ '-'+this.distanceB.n%this.distanceB.d + '/' + this.distanceB.d);
              }
    
              if(this.distanceC.n%this.distanceC.d == 0) {
                SDH_letter.changeletter('' + parseInt(this.distanceC.n/this.distanceC.d));
                } else {
                SDH_letter.changeletter(''+parseInt(this.distanceC.n/this.distanceC.d)+ '-'+this.distanceC.n%this.distanceC.d + '/' + this.distanceC.d);
              }

            }



          }




        } else if(this.set_direct == 'Right') {

          if(this.dis_direction == 'Top') {
          
            this.sing_position ={x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y: ele.upLine.getPosition()[1].y + this.distance*10*b.rate};
            singleCircle.moveCircle(this.sing_position)
         
            this.SU_lArrowline = [{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.upLine.getPosition()[1].y+this.distance*10*b.rate}]
            this.SU_lfupArrowP = [{x:ele.rightLine.getPosition()[1].x+60,y:ele.upLine.getPosition()[1].y},{x:ele.rightLine.getPosition()[1].x+40,y:ele.upLine.getPosition()[1].y}]
            this.SU_lfupTip = this.SU_lArrowline[0]
            this.SU_lfdownTip = this.SU_lArrowline[1]
            this.SU_lfdownArrowP =  [{x:this.SU_lArrowline[0].x-10,y: this.SU_lArrowline[1].y},{x: this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y}]


            SU_lArrowline.drawPath(this.SU_lArrowline)
            SU_lfupArrowP.drawPath(this.SU_lfupArrowP)
            SU_lfupTip.drawArrow(this.SU_lfupTip)
            SU_lfdownTip.drawArrow(this.SU_lfdownTip)
            SU_lfdownArrowP.drawPath(this.SU_lfdownArrowP)


            this.SL_upArrowline = [{x:ele.rightLine.getPosition()[0].x,y:ele.upLine.getPosition()[1].y + this.distance*10*b.rate + 50},{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[1].y + this.distance*10*b.rate+50}]
            this.SL_ulArrowP =[{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-10+50},{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate+10+50}]
            this.SL_ulTip = this.SL_upArrowline[1]
            this.SL_urTip = this.SL_upArrowline[0]

            SL_upArrowline.drawPath(this.SL_upArrowline)
            SL_ulArrowP.drawPath(this.SL_ulArrowP)
            SL_ulTip.drawArrow(this.SL_ulTip)
            SL_urTip.drawArrow(this.SL_urTip)           

            // sizeLetter handle
            this.sizeCircle = "Ø " + this.diameter + "˝"

            circleDiameter.changeletter(this.sizeCircle)
            this.circleLetter = {x:135+280 + b.widthDifference-this.setback*10*b.rate + 2*this.diameter*10*b.rate+20,y:175+this.distance*10*b.rate}
            circleDiameterG.moveGroup(this.circleLetter)
            

            // dimensions handle
            this.SH_group = {x:75 + 380+ b.widthDifference , y:20 + 10 *b.rate*this.distance/2}
            SH_group.moveGroup(this.SH_group)
           
            this.SW_group =  {x:415 + b.widthDifference - 10 * b.rate/2 * this.setback , y:225 -20 + 10 *b.rate*this.distance}
            SW_group.moveGroup(this.SW_group)
           
            if(this.setback.n%this.setback.d == 0) {
              SW_letter.changeletter('' + parseInt(this.setback.n/this.setback.d));
              } else {
              SW_letter.changeletter(''+parseInt(this.setback.n/this.setback.d)+ '-'+this.setback.n%this.setback.d + '/' + this.setback.d);
            }
  
            if(this.distance.n%this.distance.d == 0) {
              SH_letter.changeletter('' + parseInt(this.distance.n/this.distance.d));
              } else {
              SH_letter.changeletter(''+parseInt(this.distance.n/this.distance.d)+ '-'+this.distance.n%this.distance.d + '/' + this.distance.d);
            }

            if(this.distanceC){

              this.doubleCircle_position = {x:this.sing_position.x -  this.distanceB*10*b.rate,y:this.sing_position.y + this.distanceC*10*b.rate}
              doubleCircle.moveCircle(this.doubleCircle_position)


              this.SL_upArrowline = [{x:ele.rightLine.getPosition()[0].x,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate - 50},{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-50}]
              this.SL_ulArrowP =[{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate-10-50},{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.upLine.getPosition()[0].y + this.distance*10*b.rate+10-50}]
              this.SL_ulTip = this.SL_upArrowline[1]
              this.SL_urTip = this.SL_upArrowline[0]

              SL_upArrowline.drawPath(this.SL_upArrowline)
              SL_ulArrowP.drawPath(this.SL_ulArrowP)
              SL_ulTip.drawArrow(this.SL_ulTip)
              SL_urTip.drawArrow(this.SL_urTip)

              this.SDU_lArrowline = [{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y},{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate}]
              this.SDU_lfupArrowP = [{x:this.SU_lArrowline[1].x-10,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate},{x:this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y + this.distanceC*10*b.rate}]
              this.SDU_lfupTip = this.SDU_lArrowline[0]
              this.SDU_lfdownTip = this.SDU_lArrowline[1]

              SDU_lArrowline.drawPath(this.SDU_lArrowline)
              SDU_lfupArrowP.drawPath(this.SDU_lfupArrowP)
              SDU_lfupTip.drawArrow(this.SDU_lfupTip)
              SDU_lfdownTip.drawArrow(this.SDU_lfdownTip)

              if(Math.abs(this.distanceB-0)>0.00001) {
                this.SDL_upArrowline = [{x:this.SL_upArrowline[1].x,y:this.SL_upArrowline[1].y},{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y}]
                this.SDL_ulArrowP = [{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y-10},{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y+10}]
                this.SDL_ulTip = this.SDL_upArrowline[1]
                this.SDL_urTip = this.SDL_upArrowline[0]

               this.SDW_group =  {x:135 + 280 + b.widthDifference - 10 * b.rate * (this.setback)  - 10 * b.rate *this.distanceB/2 , y:225 -20 + 10 *b.rate*this.distance-100}

               SDL_upArrowline.drawPath(this.SDL_upArrowline)
               SDL_ulArrowP.drawPath(this.SDL_ulArrowP)
               SDL_ulTip.drawArrow(this.SDL_ulTip)
               SDL_urTip.drawArrow(this.SDL_urTip)
               SDW_group.moveGroup(this.SDW_group)
              }
             
              this.SW_group =  {x:135 + 280 + b.widthDifference - 10 * b.rate/2 * this.setback , y:225 -20+ 10 *b.rate*this.distance-100}
              SW_group.moveGroup(this.SW_group)

              this.SDH_group = {x:75 + 380 + b.widthDifference, y:20 + 10 *b.rate*(this.distance)  +this.distanceC/2*10 *b.rate}
              SDH_group.moveGroup(this.SDH_group)

              if(this.distanceB.n%this.distanceB.d == 0) {
                SDW_letter.changeletter('' + parseInt(this.distanceB.n/this.distanceB.d));
                } else {
                SDW_letter.changeletter(''+parseInt(this.distanceB.n/this.distanceB.d)+ '-'+this.distanceB.n%this.distanceB.d + '/' + this.distanceB.d);
              }
    
              if(this.distanceC.n%this.distanceC.d == 0) {
                SDH_letter.changeletter('' + parseInt(this.distanceC.n/this.distanceC.d));
                } else {
                SDH_letter.changeletter(''+parseInt(this.distanceC.n/this.distanceC.d)+ '-'+this.distanceC.n%this.distanceC.d + '/' + this.distanceC.d);
              }

            }


         
          } else if (this.dis_direction == 'Down') {
          
            this.sing_position = {x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y: ele.downLine.getPosition()[0].y - this.distance*10*b.rate};
            singleCircle.moveCircle(this.sing_position)


            this.SU_lArrowline = [{x:ele.rightLine.getPosition()[1].x + 50,y:ele.downLine.getPosition()[0].y},{x:ele.rightLine.getPosition()[1].x+50,y:ele.downLine.getPosition()[1].y-this.distance*10*b.rate}]
            this.SU_lfupArrowP = [{x:this.SU_lArrowline[0].x-10,y:this.SU_lArrowline[0].y},{x:this.SU_lArrowline[0].x+10,y:this.SU_lArrowline[0].y}]
            this.SU_lfupTip = this.SU_lArrowline[1]
            this.SU_lfdownTip = this.SU_lArrowline[0]
            this.SU_lfdownArrowP =  [{x:this.SU_lArrowline[0].x-10,y: this.SU_lArrowline[1].y},{x: this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y}]

            SU_lArrowline.drawPath(this.SU_lArrowline)
            SU_lfupArrowP.drawPath(this.SU_lfupArrowP)
            SU_lfupTip.drawArrow(this.SU_lfupTip)
            SU_lfdownTip.drawArrow(this.SU_lfdownTip)
            SU_lfdownArrowP.drawPath(this.SU_lfdownArrowP)

            this.SL_upArrowline = [{x:ele.rightLine.getPosition()[0].x,y:ele.downLine.getPosition()[1].y - this.distance*10*b.rate + 50},{x:ele.rightLine.getPosition()[1].x - this.setback*10*b.rate,y:ele.downLine.getPosition()[1].y - this.distance*10*b.rate + 50}]
            this.SL_ulArrowP =[{x:ele.rightLine.getPosition()[0].x - this.setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate-10 + 50},{x:ele.rightLine.getPosition()[1].x - this.setback*10*b.rate,y:ele.downLine.getPosition()[0].y - this.distance*10*b.rate+10 + 50}]
            this.SL_ulTip = this.SL_upArrowline[1]
            this.SL_urTip = this.SL_upArrowline[0]

            SL_upArrowline.drawPath(this.SL_upArrowline)
            SL_ulArrowP.drawPath(this.SL_ulArrowP)
            SL_ulTip.drawArrow(this.SL_ulTip)
            SL_urTip.drawArrow(this.SL_urTip)

            // sizeLetter handle
            this.sizeCircle = "Ø " + this.diameter + "˝"
            circleDiameter.changeletter(this.sizeCircle)
            this.circleLetter = {x:135+280+b.widthDifference-this.setback*10*b.rate + 2*this.diameter*10*b.rate+20,y:175+710-this.distance*10*b.rate}
            circleDiameterG.moveGroup(this.circleLetter)


            // dimensions handle
            this.SH_group = {x:75 + 380+ + b.widthDifference , y:20 + 710 - 10 *b.rate*this.distance/2}
            this.SW_group =  {x:415 + b.widthDifference - 10 * b.rate/2 * this.setback , y:175 + 710 +30 -10 *b.rate*this.distance}
           
            SH_group.moveGroup(this.SH_group)
            SW_group.moveGroup(this.SW_group)

            if(this.setback.n%this.setback.d == 0) {
              SW_letter.changeletter('' + parseInt(this.setback.n/this.setback.d));
              } else {
              SW_letter.changeletter(''+parseInt(this.setback.n/this.setback.d)+ '-'+this.setback.n%this.setback.d + '/' + this.setback.d);
            }
  
            if(this.distance.n%this.distance.d == 0) {
              SH_letter.changeletter('' + parseInt(this.distance.n/this.distance.d));
              } else {
              SH_letter.changeletter(''+parseInt(this.distance.n/this.distance.d)+ '-'+this.distance.n%this.distance.d + '/' + this.distance.d);
            }


            if(this.distanceC){

              this.doubleCircle_position = {x:this.sing_position.x -  this.distanceB*10*b.rate,y:this.sing_position.y - this.distanceC*10*b.rate}
              doubleCircle.moveCircle(this.doubleCircle_position)


              this.SDU_lArrowline = [{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y},{x:this.SU_lArrowline[1].x,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate}]
              this.SDU_lfupArrowP = [{x:this.SU_lArrowline[1].x-10,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate},{x:this.SU_lArrowline[1].x+10,y: this.SU_lArrowline[1].y - this.distanceC*10*b.rate}]
              this.SDU_lfupTip = this.SDU_lArrowline[1]
              this.SDU_lfdownTip = this.SDU_lArrowline[0]

              SDU_lArrowline.drawPath(this.SDU_lArrowline)
              SDU_lfupArrowP.drawPath(this.SDU_lfupArrowP)
              SDU_lfupTip.drawArrow(this.SDU_lfupTip)
              SDU_lfdownTip.drawArrow(this.SDU_lfdownTip)



              if(Math.abs(this.distanceB-0)>0.00001) {

                this.SDL_upArrowline = [{x:this.SL_upArrowline[1].x,y:this.SL_upArrowline[1].y},{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y}]
                this.SDL_ulArrowP = [{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y-10},{x:this.SL_upArrowline[1].x-this.distanceB*10*b.rate,y:this.SL_upArrowline[1].y+10}]
                this.SDL_ulTip = this.SDL_upArrowline[1]
                this.SDL_urTip = this.SDL_upArrowline[0]

               this.SDW_group =  {x:135 + 280 + b.widthDifference - 10 * b.rate * (this.setback)  - 10 * b.rate *this.distanceB/2 , y:175 + 710 +30 - 10 *b.rate*this.distance}

               SDL_upArrowline.drawPath(this.SDL_upArrowline)
               SDL_ulArrowP.drawPath(this.SDL_ulArrowP)
               SDL_ulTip.drawArrow(this.SDL_ulTip)
               SDL_urTip.drawArrow(this.SDL_urTip)
               SDW_group.moveGroup(this.SDW_group)
              }
             
              this.SW_group =  {x:135 + 280 + b.widthDifference - 10 * b.rate/2 * this.setback , y:175 + 710 +30 - 10 *b.rate*this.distance}
              SW_group.moveGroup(this.SW_group)
             
              this.SDH_group = {x:75 + 380 + b.widthDifference, y:20 +710 - 10 *b.rate*(this.distance) - this.distanceC/2*10 *b.rate}
              SDH_group.moveGroup(this.SDH_group)

              if(this.distanceB.n%this.distanceB.d == 0) {
                SDW_letter.changeletter('' + parseInt(this.distanceB.n/this.distanceB.d));
                } else {
                SDW_letter.changeletter(''+parseInt(this.distanceB.n/this.distanceB.d)+ '-'+this.distanceB.n%this.distanceB.d + '/' + this.distanceB.d);
              }
    
              if(this.distanceC.n%this.distanceC.d == 0) {
                SDH_letter.changeletter('' + parseInt(this.distanceC.n/this.distanceC.d));
                } else {
                SDH_letter.changeletter(''+parseInt(this.distanceC.n/this.distanceC.d)+ '-'+this.distanceC.n%this.distanceC.d + '/' + this.distanceC.d);
              }

            }


          }

        }

        b.dis_upWidth = ele.up_Widthletter.returnValue();
        b.dis_downWidth = ele.down_Widthletter.returnValue();
        b.dis_leftHeight = ele.left_Heightletter.returnValue();
        b.dis_rightHeight = ele.right_Heightletter.returnValue()
        b.draw();


         }
       
  
         
  
  
    
  
  
        }
      }
  