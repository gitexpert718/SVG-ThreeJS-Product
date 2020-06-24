
    function rightOutage() {
        this.Handle = "rightOutage";
        this.draw = function(context) {
  
          var simpleParameter = [];
        
          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'rightOutage';
          })
          this.parameter = simpleParameter[0]
          this.RL_TopLeft = this.parameter.value[0].topLeft;
  
          this.RL_TopRight = this.parameter.value[0].topRight;
         
          this.RLL_inputE_Width_1 = this.parameter.value[1].width1;
          
          this.RLL_inputE_Width_2 = this.parameter.value[1].width2;
     
          this.RLL_inputE_Height = this.parameter.value[1].height;
     
          this.RLR_inputE_Width_1 =  this.parameter.value[2].width1;
         
          this.RLR_inputE_Width_2 = this.parameter.value[2].width2;
      
          this.RLR_inputE_Height = this.parameter.value[2].height;
        
          this.RRL_inputE_Width_1 =this.parameter.value[3].width1;
  
          this.RRL_inputE_Width_2 = this.parameter.value[3].width2;
  
          this.RRL_inputE_Height = this.parameter.value[3].height;
        
          this.RRR_inputE_Width_1 = this.parameter.value[4].width1;
  
          this.RRR_inputE_Width_2 = this.parameter.value[4].width2;
   
          this.RRR_inputE_Height =this.parameter.value[4].height;
          
          if(!$('#R_RUH_Group').length){

            var R_RUH_Group= makeSVG('g', { id :'R_RUH_Group', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
            document.getElementById('editor').appendChild(R_RUH_Group);
        
            var R_RUH_rect= makeSVG('rect', { width:"50", height:"40", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"none",'pointer-events':"all" });
            document.getElementById('R_RUH_Group').appendChild(R_RUH_rect);
        
            var R_RUH_letter= makeSVG('text', { id :'R_RUH_letter',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
            document.getElementById('R_RUH_Group').appendChild(R_RUH_letter);
      
          }
          if(!$('#R_RDH_Group').length){
    
            var R_RDH_Group= makeSVG('g', { id :'R_RDH_Group', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
            document.getElementById('editor').appendChild(R_RDH_Group);
        
            var R_RDH_rect= makeSVG('rect', { width:"50", height:"40", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"none",'pointer-events':"all" });
            document.getElementById('R_RDH_Group').appendChild(R_RDH_rect);
        
            var R_RDH_letter= makeSVG('text', { id :'R_RDH_letter',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
            document.getElementById('R_RDH_Group').appendChild(R_RDH_letter);
      
          }
     
          var R_RUH_Group = new Group('R_RUH_Group', 'vertical')
    
          var R_RUH_letter = new letter('R_RUH_letter');
    
          var R_RDH_Group = new Group('R_RDH_Group', 'vertical')
    
          var R_RDH_letter = new letter('R_RDH_letter');

          var UpGroup = new Group('upGroup');

          var b = new initDraw(context);
          var ele = new definitionObject();
  
          // signle
          if(this.RL_TopLeft) {
            // rect , leftLine,letter remove
            b.ruRectmove = b.initSignle_pos
            b.rbRectmove = b.initSignle_pos;
            b.rightline_pos = b.init2d_pos;
            b.rightnoteletter = b.initSignle_pos;
  
            b.downletter = {x:ele.downmainGroup.getPosition().x -this.RL_TopLeft*10*b.rate/2, y: ele.downmainGroup.getPosition().y}
            b.downnoteletter = {x:ele.downnote_Group.getPosition().x -this.RL_TopLeft*10*b.rate/2, y: ele.downnote_Group.getPosition().y}
          
            b.downline_pos =  [{x:ele.downLine.getPosition()[0].x, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * b.rate * this.RL_TopLeft, y:ele.downLine.getPosition()[1].y},]
  
            b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
            b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
            b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
            b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
            b.drTip_pos = {x:b.downline_pos[1].x, y:935};
      
             //  line
            this.cr_uline =  [{x:b.upline_pos[1].x, y:b.upline_pos[1].y},{x:b.downline_pos[1].x, y:b.downline_pos[1].y},]
            this.R_dot_Line = [{x:443 + b.widthDifference,y:195},{x:443+b.widthDifference,y:905}]
  
            ele.R_dot_Line.drawPath(this.R_dot_Line)
            ele.CR_uline.drawPath(this.cr_uline);
  
            //  arrow
            b.CR_downArrowline = [ {x:b.downline_pos[1].x, y:935}, {x:ele.downLine.getPosition()[1].x, y:935},]
            b.CR_dlArrowP = [{x:ele.downLine.getPosition()[1].x, y:945}, {x:ele.downLine.getPosition()[1].x, y:925},]
            b.CR_dlTip = {x:b.downline_pos[1].x, y:935}
            b.CR_drTip = {x:ele.downLine.getPosition()[1].x, y:935}
            b.CRBW_Group = {x:415 + b.widthDifference -10*this.RL_TopLeft/2*b.rate, y:933}
  
      
            if(this.RL_TopLeft.n%this.RL_TopLeft.d == 0) {
              ele.C_RBW_Letter.changeletter('' + parseInt(this.RL_TopLeft.n/this.RL_TopLeft.d));
              } else {
              ele.C_RBW_Letter.changeletter(''+parseInt(this.RL_TopLeft.n/this.RL_TopLeft.d)+ '-'+this.RL_TopLeft.n%this.RL_TopLeft.d + '/' + this.RL_TopLeft.d);
            }
  
  
          }  else if (this.RL_TopRight) {
            // rect , leftLine remove
            b.ruRectmove = b.initSignle_pos
            b.rbRectmove = b.initSignle_pos;
            b.rightline_pos = b.init2d_pos;
            b.rightnoteletter = b.initSignle_pos;
  
            b.upletter = {x:ele.upmainGroup.getPosition().x - this.RL_TopRight*10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
            b.topnoteletter = {x:ele.topnote_Group.getPosition().x - this.RL_TopRight*10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
          
            b.upline_pos =  [{x: ele.upLine.getPosition()[0].x , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x-10* this.RL_TopRight * b.rate , y:ele.upLine.getPosition()[1].y},]
    
            b.centernotletter.x = ele.centerGroup.getPosition().x-(443+b.widthDifference-b.upline_pos[1].x)/2 + 20
     

            b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
            b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
            b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
            b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
            b.urTip_pos = {x:b.upline_pos[1].x, y:165};
            //  line
            this.cr_uline =  [{x:b.upline_pos[1].x, y:b.upline_pos[1].y},{x:b.downline_pos[1].x, y:b.downline_pos[1].y},]
            this.R_dot_Line = [{x:443 + b.widthDifference,y:195},{x:443+b.widthDifference,y:905}]
            this.cr_dline = [{x:b.downline_pos[1].x,y:b.downline_pos[1].y},{x:b.upline_pos[1].x,y:b.upline_pos[1].y}]
            
            ele.R_dot_Line.drawPath(this.R_dot_Line)
            ele.CR_dline.drawPath(this.cr_dline);
            // letter
            b.CR_upArrowline = [{x:b.upline_pos[1].x, y:165}, {x:ele.upLine.getPosition()[1].x , y:165},]
            b.CR_ulArrowP = [{x:ele.upLine.getPosition()[1].x, y:175}, {x:ele.upLine.getPosition()[1].x, y:155},]
            b.CR_ulTip = {x:b.upline_pos[1].x, y:165}
            b.CR_urTip = {x:ele.upLine.getPosition()[1].x, y:165};
            b.CRUW_Group = {x:415 + b.widthDifference - 10 * this.RL_TopRight * b.rate/2 , y:130}
  
            if(this.RL_TopRight.n%this.RL_TopRight.d == 0) {
              ele.C_RUW_Letter.changeletter('' + parseInt(this.RL_TopRight.n/this.RL_TopRight.d));
              } else {
              ele.C_RUW_Letter.changeletter(''+parseInt(this.RL_TopRight.n/this.RL_TopRight.d)+ '-'+this.RL_TopRight.n%this.RL_TopRight.d + '/' + this.RL_TopRight.d);
            }
          }
  
          // elbow
          // *left-left elbow
  
          if(this.RLL_inputE_Width_1){
  
             // rect , rightline remove
             b.ruRectmove = b.initSignle_pos
             b.rbRectmove = b.initSignle_pos;
             b.rightline_pos = b.init2d_pos;
             b.rightnoteletter = b.initSignle_pos;
        
             // change
             b.upletter = {x:ele.upmainGroup.getPosition().x-(this.RLL_inputE_Width_1+this.RLL_inputE_Width_2)*10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
             b.topnoteletter = {x:ele.topnote_Group.getPosition().x-(this.RLL_inputE_Width_1+this.RLL_inputE_Width_2)*10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
         
         
            b.upline_pos =  [{x: ele.upLine.getPosition()[0].x , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x-10* (this.RLL_inputE_Width_1+this.RLL_inputE_Width_2) * b.rate , y:ele.upLine.getPosition()[1].y},]
            b.centernotletter.x = ele.centerGroup.getPosition().x-(443+b.widthDifference-b.upline_pos[1].x)/2 + 20
    
            
            b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
            b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
            b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
            b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
            b.urTip_pos = {x:b.upline_pos[1].x, y:165};
  
            // //first rightline
            b.CU_rArrowline =[{x:480+b.widthDifference, y:195}, {x:480+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10},]
            b.CU_rgupArrowP = [{x:470+b.widthDifference, y:195}, {x:490+b.widthDifference, y:195},]
            b.CU_rgupTip = {x:480+b.widthDifference, y:195}
            b.CU_rgdownTip = {x:480+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10}
            this.R_RUH_Group = {x:460 + b.widthDifference , y:23 + (710-this.RLL_inputE_Height*b.rate*10) / 2}
            R_RUH_Group.moveGroup(this.R_RUH_Group)
        
  
    
            this.tempHeight = math.subtract(ele.right_Heightletter.returnValue(),this.RLL_inputE_Height)
            if(this.tempHeight.n%this.tempHeight.d == 0) {
              R_RUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
              } else {
              R_RUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
            }
  
            // second rightline
            b.RU_rArrowline =[{x:480+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10}, {x:480+b.widthDifference, y:905},]
            b.RU_rgupArrowP = [{x:470+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10}, {x:490+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10},]
            b.RU_rgupTip = {x:480+b.widthDifference, y:905-this.RLL_inputE_Height*b.rate*10}
            b.RU_rgdownTip = {x:480+b.widthDifference, y:905}
        
            this.R_RDH_Group = {x:460 + b.widthDifference , y:23 + 710 - 10 * b.rate * this.RLL_inputE_Height / 2}
            R_RDH_Group.moveGroup(this.R_RDH_Group)
  
            if(this.RLL_inputE_Height.n%this.RLL_inputE_Height.d == 0) {
              R_RDH_letter.changeletter('' + parseInt(this.RLL_inputE_Height.n/this.RLL_inputE_Height.d));
              } else {
                R_RDH_letter.changeletter(''+parseInt(this.RLL_inputE_Height.n/this.RLL_inputE_Height.d)+ '-'+this.RLL_inputE_Height.n%this.RLL_inputE_Height.d + '/' + this.RLL_inputE_Height.d);
            }
  
  
            // horizon line
            b.CR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:165},]
            b.CR_ulArrowP = [{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:175}, {x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:155},]
            b.CR_ulTip = {x:b.upline_pos[1].x, y:165}
            b.CR_urTip = {x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10 , y:165}
  
            b.CRUW_Group = {x:415 + b.widthDifference - 10 *(this.RLL_inputE_Width_2+this.RLL_inputE_Width_1/2)* b.rate , y:130}
            if(this.RLL_inputE_Width_1.n%this.RLL_inputE_Width_1.d == 0) {
              ele.C_RUW_Letter.changeletter('' + parseInt(this.RLL_inputE_Width_1.n/this.RLL_inputE_Width_1.d));
              } else {
              ele.C_RUW_Letter.changeletter(''+parseInt(this.RLL_inputE_Width_1.n/this.RLL_inputE_Width_1.d)+ '-'+this.RLL_inputE_Width_1.n%this.RLL_inputE_Width_1.d + '/' + this.RLL_inputE_Width_1.d);
            }
  
            b.RR_upArrowline =  [{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:165}, {x:443 + b.widthDifference, y:165},]
            b.RR_ulArrowP = [{x:443 + b.widthDifference , y:175}, {x:443 + b.widthDifference , y:155},]
            // b.extra_p3 = [{x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:205}, {x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:185},]
            b.RR_ulTip = {x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:165}
            b.RR_urTip = {x:443 + b.widthDifference, y:165}
            b.RRUW_Group = {x:415 + b.widthDifference - 10 * this.RLL_inputE_Width_2 * b.rate/2 , y:130}
  
            if(this.RLL_inputE_Width_2.n%this.RLL_inputE_Width_2.d == 0) {
              ele.R_RUW_Letter.changeletter('' + parseInt(this.RLL_inputE_Width_2.n/this.RLL_inputE_Width_2.d));
              } else {
              ele.R_RUW_Letter.changeletter(''+parseInt(this.RLL_inputE_Width_2.n/this.RLL_inputE_Width_2.d)+ '-'+this.RLL_inputE_Width_2.n%this.RLL_inputE_Width_2.d + '/' + this.RLL_inputE_Width_2.d);
            }
            
        
  
  
            b.RLL_E_dot_Line_1 = [{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10,y:195},{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10, y:905-10*b.rate*this.RLL_inputE_Height }]  
            b.RLL_E_dot_Line_2 = [{x:443 + b.widthDifference,y:905 - this.RLL_inputE_Height*10*b.rate},{x:443 + b.widthDifference,y:905}]
            b.R_Elbow_1 = [{x:b.upline_pos[1].x, y:195},{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10,y:905-10*b.rate*this.RLL_inputE_Height}]
            b.R_Elbow_2 = [{x:443 + b.widthDifference-this.RLL_inputE_Width_2*b.rate*10,y:905-10*b.rate*this.RLL_inputE_Height},{x:443+b.widthDifference,y:905}]
  
          }
  
          if(this.RLR_inputE_Width_1){
  
            // rect , rightline remove
            b.ruRectmove = b.initSignle_pos
            b.rbRectmove = b.initSignle_pos;
            b.rightline_pos = b.init2d_pos;
            b.rightnoteletter = b.initSignle_pos;
            
           // change
           b.rightletter = {x:ele.rightmainGroup.getPosition().x+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2) , y:ele.rightmainGroup.getPosition().y}
           b.upletter = {x:ele.upmainGroup.getPosition().x + (this.RLR_inputE_Width_1-this.RLR_inputE_Width_2)/2*10*b.rate,y:ele.upmainGroup.getPosition().y-25}
           b.downletter = {x:ele.downmainGroup.getPosition().x,y:ele.downmainGroup.getPosition().y+30}
           b.downnoteletter = {x:ele.downnote_Group.getPosition().x,y:ele.downnote_Group.getPosition().y}
         
         
           b.centernotletter.x = ele.centerGroup.getPosition().x-(443+b.widthDifference-b.upline_pos[1].x)/2 + 20
          
           b.upline_pos =  [{x: ele.upLine.getPosition()[0].x , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x+(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2)*10*b.rate, y:ele.upLine.getPosition()[1].y},]
   
           b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:140},  {x:b.upline_pos[1].x, y:140},] 
           b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:150},{x:b.upline_pos[0].x, y:130}]
           b.urArrowP_pos = [{x:b.upline_pos[1].x, y:150},{x:b.upline_pos[1].x, y:130}]
           b.ulTip_pos = {x:b.upline_pos[0].x, y:140};
           b.urTip_pos = {x:b.upline_pos[1].x, y:140};
  
  
           b.downArrowline_pos =  [{x:ele.downArrowline.getPosition()[0].x, y:965},  {x:ele.downArrowline.getPosition()[1].x, y:965},]
           b.dlArrowP_pos = [{x:ele.downArrowline.getPosition()[0].x, y:975},{x:ele.downArrowline.getPosition()[0].x, y:955}]      
           b.drArrowP_pos = [{x:ele.downArrowline.getPosition()[1].x, y:975},{x:ele.downArrowline.getPosition()[1].x, y:955}]
           b.dlTip_pos = {x:ele.downArrowline.getPosition()[0].x, y:965};
           b.drTip_pos = {x:ele.downArrowline.getPosition()[1].x, y:965};
  
  
            b.rArrowline_pos =  [{x:ele.rArrowline.getPosition()[0].x+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:ele.rArrowline.getPosition()[0].y},  {x:ele.rArrowline.getPosition()[1].x+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:ele.rArrowline.getPosition()[1].y},]
            b.rgupArrowP_pos = [{x:b.rArrowline_pos[0].x-10,y:ele.rgupArrowP.getPosition()[0].y},{x:b.rArrowline_pos[0].x+10,y:ele.rgupArrowP.getPosition()[0].y}]
            b.rgdownArrowP_pos =  [{x:b.rArrowline_pos[0].x-10,y:ele.rgdownArrowP.getPosition()[1].y},{x:b.rArrowline_pos[0].x+10,y:ele.rgdownArrowP.getPosition()[1].y}]
            b.rgupTip_pos = {x:b.rArrowline_pos[0].x, y:b.rArrowline_pos[0].y};
            b.rgdownTip_pos ={x:b.rArrowline_pos[1].x, y:b.rArrowline_pos[1].y};
           
          
          
            // //first rightline
           b.CU_rArrowline =[{x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2),y:195},{x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10},]
           b.CU_rgupArrowP = [{x:470+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:195}, {x:490+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:195},]
           b.CU_rgupTip = {x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:195}
           b.CU_rgdownTip = {x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10}
           this.R_RUH_Group = {x:460 + b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:23 + (710-this.RLR_inputE_Height*b.rate*10) / 2}
           R_RUH_Group.moveGroup(this.R_RUH_Group)
       
  
   
           this.tempHeight = math.subtract(ele.right_Heightletter.returnValue(),this.RLR_inputE_Height)
           if(this.tempHeight.n%this.tempHeight.d == 0) {
            R_RUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
             } else {
              R_RUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
           }  
  
           // second rightline
           b.RU_rArrowline =[{x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10}, {x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905},]
           b.RU_rgupArrowP = [{x:470+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10}, {x:490+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10},]
           b.RU_rgupTip = {x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905-this.RLR_inputE_Height*b.rate*10}
           b.RU_rgdownTip = {x:480+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905}
           b.extra_p6=[{x:470+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905}, {x:490+b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2), y:905},]
          
           this.R_RDH_Group = {x:460 + b.widthDifference+10*b.rate*(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2) , y:23 + 710 - 10 * b.rate * this.RLR_inputE_Height / 2}
           R_RDH_Group.moveGroup(this.R_RDH_Group)
  


           if(this.RLR_inputE_Height.n%this.RLR_inputE_Height.d == 0) {
            R_RDH_letter.changeletter('' + parseInt(this.RLR_inputE_Height.n/this.RLR_inputE_Height.d));
             } else {
              R_RDH_letter.changeletter(''+parseInt(this.RLR_inputE_Height.n/this.RLR_inputE_Height.d)+ '-'+this.RLR_inputE_Height.n%this.RLR_inputE_Height.d + '/' + this.RLR_inputE_Height.d);
           }
  
  
           // horizon line
           b.CR_upArrowline =  [{x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:165},{x:b.upline_pos[1].x, y:165}]
           b.CR_ulArrowP = [{x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:175}, {x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:155},]
           b.CR_ulTip = {x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:165}
           b.CR_urTip = {x:b.upline_pos[1].x,y:165}
  
           b.CRUW_Group = {x:415 + b.widthDifference + 10*b.rate*(this.RLR_inputE_Width_1/2-this.RLR_inputE_Width_2)  , y:130}
           if(this.RLR_inputE_Width_1.n%this.RLR_inputE_Width_1.d == 0) {
             ele.C_RUW_Letter.changeletter('' + parseInt(this.RLR_inputE_Width_1.n/this.RLR_inputE_Width_1.d));
             } else {
             ele.C_RUW_Letter.changeletter(''+parseInt(this.RLR_inputE_Width_1.n/this.RLR_inputE_Width_1.d)+ '-'+this.RLR_inputE_Width_1.n%this.RLR_inputE_Width_1.d + '/' + this.RLR_inputE_Width_1.d);
           }
  
           b.RR_upArrowline =  [{x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:935}, {x:443 + b.widthDifference, y:935},]
            b.RR_ulArrowP = [{x:443 + b.widthDifference -this.RLR_inputE_Width_2*b.rate*10, y:945}, {x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10 , y:925},]
           // b.extra_p3 = [{x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:205}, {x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:185},]
           b.RR_ulTip = {x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10, y:935}
           b.RR_urTip = {x:443 + b.widthDifference, y:935}
           b.RRUW_Group = {x:415 + b.widthDifference - 10 * this.RLR_inputE_Width_2 * b.rate/2 , y:933}
  

           if(this.RLR_inputE_Width_2.n%this.RLR_inputE_Width_2.d == 0) {
             ele.R_RUW_Letter.changeletter('' + parseInt(this.RLR_inputE_Width_2.n/this.RLR_inputE_Width_2.d));
             } else {
             ele.R_RUW_Letter.changeletter(''+parseInt(this.RLR_inputE_Width_2.n/this.RLR_inputE_Width_2.d)+ '-'+this.RLR_inputE_Width_2.n%this.RLR_inputE_Width_2.d + '/' + this.RLR_inputE_Width_2.d);
           }
           
       
           b.RLL_E_dot_Line_1 = [{x:b.upline_pos[1].x,y:195},{x:b.upline_pos[1].x, y:905-10*b.rate*this.RLR_inputE_Height }]  
           b.RLL_E_dot_Line_2 = [{x:ele.downLine.getPosition()[1].x,y:905 - this.RLR_inputE_Height*10*b.rate},{x:ele.downLine.getPosition()[1].x,y:905}]
           b.R_Elbow_1 = [{x:b.upline_pos[1].x, y:195},{x:b.RR_upArrowline[0].x,y:905-10*b.rate*this.RLR_inputE_Height}]
           b.R_Elbow_2 = [{x:443 + b.widthDifference-this.RLR_inputE_Width_2*b.rate*10,y:905-10*b.rate*this.RLR_inputE_Height},{x:443+b.widthDifference,y:905}]
  
         }
  
         if(this.RRL_inputE_Width_1){
  
          // rect , rightline remove
          b.ruRectmove = b.initSignle_pos
          b.rbRectmove = b.initSignle_pos;
          b.rightline_pos = b.init2d_pos;
          b.rightnoteletter = b.initSignle_pos;
    
          // change
          b.upletter = {x:ele.upmainGroup.getPosition().x-this.RRL_inputE_Width_1*10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
          b.topnoteletter = {x:ele.topnote_Group.getPosition().x-this.RRL_inputE_Width_1*10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
      
          b.downletter = {x:ele.downmainGroup.getPosition().x-10 * b.rate *(this.RRL_inputE_Width_2)/2,y:ele.downmainGroup.getPosition().y}
          b.downnoteletter = {x:ele.downnote_Group.getPosition().x-10 * b.rate *(this.RRL_inputE_Width_2)/2,y:ele.downnote_Group.getPosition().y}


      
         b.upline_pos =  [{x: ele.upLine.getPosition()[0].x , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x-10* this.RRL_inputE_Width_1* b.rate , y:ele.upLine.getPosition()[1].y},]
         b.downline_pos =  [{x:ele.downLine.getPosition()[0].x, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * b.rate *this.RRL_inputE_Width_2, y:ele.downLine.getPosition()[1].y},]
         b.centernotletter.x = ele.centerGroup.getPosition().x-(443+b.widthDifference-b.upline_pos[1].x)/2 + 20
  
         b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
         b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
         b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
         b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
         b.urTip_pos = {x:b.upline_pos[1].x, y:165};
  
         b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
         b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
         b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
         b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
         b.drTip_pos = {x:b.downline_pos[1].x, y:935};
  
         // //first rightline
         b.CU_rArrowline =[{x:480+b.widthDifference, y:195}, {x:480+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10},]
         b.CU_rgupArrowP = [{x:470+b.widthDifference, y:195}, {x:490+b.widthDifference, y:195},]
         b.CU_rgupTip = {x:480+b.widthDifference, y:195}
         b.CU_rgdownTip = {x:480+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10}
         this.R_RUH_Group = {x:460 + b.widthDifference , y:23 + (710-this.RRL_inputE_Height*b.rate*10) / 2}
         R_RUH_Group.moveGroup(this.R_RUH_Group)
     
  
  
         this.tempHeight = math.subtract(ele.right_Heightletter.returnValue(),this.RRL_inputE_Height)
         if(this.tempHeight.n%this.tempHeight.d == 0) {
          R_RUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
           } else {
            R_RUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
         }
  
         // second rightline
         b.RU_rArrowline =[{x:480+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10}, {x:480+b.widthDifference, y:905},]
         b.RU_rgupArrowP = [{x:470+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10}, {x:490+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10},]
         b.RU_rgupTip = {x:480+b.widthDifference, y:905-this.RRL_inputE_Height*b.rate*10}
         b.RU_rgdownTip = {x:480+b.widthDifference, y:905}
     
         this.R_RDH_Group = {x:460 + b.widthDifference , y:23 + 710 - 10 * b.rate * this.RRL_inputE_Height / 2}
         R_RDH_Group.moveGroup(this.R_RDH_Group)
  
         if(this.RRL_inputE_Height.n%this.RRL_inputE_Height.d == 0) {
          R_RDH_letter.changeletter('' + parseInt(this.RRL_inputE_Height.n/this.RRL_inputE_Height.d));
           } else {
            R_RDH_letter.changeletter(''+parseInt(this.RRL_inputE_Height.n/this.RRL_inputE_Height.d)+ '-'+this.RRL_inputE_Height.n%this.RRL_inputE_Height.d + '/' + this.RRL_inputE_Height.d);
         }
  
  
         // horizon line
         b.CR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:ele.upLine.getPosition()[1].x, y:165},]
         b.CR_ulArrowP = [{x:ele.upLine.getPosition()[1].x, y:175}, {x:ele.upLine.getPosition()[1].x, y:155},]
         b.CR_ulTip = {x:b.upline_pos[1].x, y:165}
         b.CR_urTip = {x:ele.upLine.getPosition()[1].x , y:165}
  
         b.CRUW_Group = {x:415 + b.widthDifference - 10 *this.RRL_inputE_Width_1/2* b.rate , y:130}
         if(this.RRL_inputE_Width_1.n%this.RRL_inputE_Width_1.d == 0) {
           ele.C_RUW_Letter.changeletter('' + parseInt(this.RRL_inputE_Width_1.n/this.RRL_inputE_Width_1.d));
           } else {
           ele.C_RUW_Letter.changeletter(''+parseInt(this.RRL_inputE_Width_1.n/this.RRL_inputE_Width_1.d)+ '-'+this.RRL_inputE_Width_1.n%this.RRL_inputE_Width_1.d + '/' + this.RRL_inputE_Width_1.d);
         }
  
         b.RR_upArrowline =  [{x:b.downline_pos[1].x, y:935}, {x:443 + b.widthDifference, y:935},]
         b.RR_ulArrowP = [{x:443 + b.widthDifference , y:945}, {x:443 + b.widthDifference , y:925},]
        //  b.extra_p3 = [{x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:205}, {x:b.upline_pos[1].x + 10*b.rate*this.RT_notch_width2, y:185},]
         b.RR_ulTip = {x:b.downline_pos[1].x, y:935}
         b.RR_urTip = {x:443 + b.widthDifference, y:935}
         b.RRUW_Group = {x:415 + b.widthDifference - 10 * this.RRL_inputE_Width_2 * b.rate/2 , y:933}
  
         if(this.RRL_inputE_Width_2.n%this.RRL_inputE_Width_2.d == 0) {
           ele.R_RUW_Letter.changeletter('' + parseInt(this.RRL_inputE_Width_2.n/this.RRL_inputE_Width_2.d));
           } else {
           ele.R_RUW_Letter.changeletter(''+parseInt(this.RRL_inputE_Width_2.n/this.RRL_inputE_Width_2.d)+ '-'+this.RRL_inputE_Width_2.n%this.RRL_inputE_Width_2.d + '/' + this.RRL_inputE_Width_2.d);
         }
         
     
  
  
         b.RLL_E_dot_Line_1 = [{x:443 + b.widthDifference,y:195},{x:443 + b.widthDifference, y:905 }]  
        //  b.RLL_E_dot_Line_2 = [{x:443 + b.widthDifference,y:905 - this.RLL_inputE_Height*10*b.rate},{x:443 + b.widthDifference,y:905}]
         b.R_Elbow_1 = [{x:b.upline_pos[1].x, y:195},{x:443 + b.widthDifference,y:905-10*b.rate*this.RRL_inputE_Height}]
         b.R_Elbow_2 = [{x:443 + b.widthDifference,y:905-10*b.rate*this.RRL_inputE_Height},{x:443+b.widthDifference - 10*b.rate*this.RRL_inputE_Width_2,y:905}]
  
         }
      
         if(this.RRR_inputE_Width_1){
  
          // rect , rightline remove
          b.ruRectmove = b.initSignle_pos
          b.rbRectmove = b.initSignle_pos;
          b.rightline_pos = b.init2d_pos;
          b.rightnoteletter = b.initSignle_pos;
     
     
          // change
         b.downline_pos =  [{x:ele.downLine.getPosition()[0].x, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * b.rate *(this.RRR_inputE_Width_1+this.RRR_inputE_Width_2), y:ele.downLine.getPosition()[1].y},]
         b.downletter = {x:ele.downmainGroup.getPosition().x-10 * b.rate *(this.RRR_inputE_Width_1+this.RRR_inputE_Width_2)/2,y:ele.downmainGroup.getPosition().y}
         b.downnoteletter = {x:ele.downnote_Group.getPosition().x-10 * b.rate *(this.RRR_inputE_Width_1+this.RRR_inputE_Width_2)/2,y:ele.downnote_Group.getPosition().y}
        
        
         b.centernotletter.x = ele.centerGroup.getPosition().x-(443+b.widthDifference-b.upline_pos[1].x)/2 + 20
  
         b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
         b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
         b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
         b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
         b.drTip_pos = {x:b.downline_pos[1].x, y:935};
  
         // //first rightline
         b.CU_rArrowline =[{x:480+b.widthDifference, y:195}, {x:480+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10},]
         b.CU_rgupArrowP = [{x:470+b.widthDifference, y:195}, {x:490+b.widthDifference, y:195},]
         b.CU_rgupTip = {x:480+b.widthDifference, y:195}
         b.CU_rgdownTip = {x:480+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10}
         this.R_RUH_Group = {x:460 + b.widthDifference , y:23 + (710-this.RRR_inputE_Height*b.rate*10) / 2}
         R_RUH_Group.moveGroup(this.R_RUH_Group)
     
  
  
         this.tempHeight = math.subtract(ele.right_Heightletter.returnValue(),this.RRR_inputE_Height)
         if(this.tempHeight.n%this.tempHeight.d == 0) {
          R_RUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
           } else {
            R_RUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
         }
  
         // second rightline
         b.RU_rArrowline =[{x:480+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10}, {x:480+b.widthDifference, y:905},]
         b.RU_rgupArrowP = [{x:470+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10}, {x:490+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10},]
         b.RU_rgupTip = {x:480+b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10}
         b.RU_rgdownTip = {x:480+b.widthDifference, y:905}
     
         this.R_RDH_Group = {x:460 + b.widthDifference , y:23 + 710 - 10 * b.rate * this.RRR_inputE_Height / 2}
         R_RDH_Group.moveGroup(this.R_RDH_Group)
  
         if(this.RRR_inputE_Height.n%this.RRR_inputE_Height.d == 0) {
          R_RDH_letter.changeletter('' + parseInt(this.RRR_inputE_Height.n/this.RRR_inputE_Height.d));
           } else {
            R_RDH_letter.changeletter(''+parseInt(this.RRR_inputE_Height.n/this.RRR_inputE_Height.d)+ '-'+this.RRR_inputE_Height.n%this.RRR_inputE_Height.d + '/' + this.RRR_inputE_Height.d);
         }
  
  
         // horizon line
         b.CR_upArrowline =  [{x:ele.downLine.getPosition()[1].x-10*b.rate*this.RRR_inputE_Width_1, y:935}, {x:ele.downLine.getPosition()[1].x, y:935},]
         b.CR_ulArrowP = [{x:ele.downLine.getPosition()[1].x, y:945}, {x:ele.downLine.getPosition()[1].x, y:925},]
         b.CR_ulTip = {x:ele.downLine.getPosition()[1].x-10*b.rate*this.RRR_inputE_Width_1, y:935}
         b.CR_urTip = {x:ele.downLine.getPosition()[1].x , y:935}
  
         b.CRUW_Group = {x:415 + b.widthDifference - 10 *this.RRR_inputE_Width_1/2* b.rate , y:933}
       
          if(this.RRR_inputE_Width_1.n%this.RRR_inputE_Width_1.d == 0) {
           ele.C_RUW_Letter.changeletter('' + parseInt(this.RRR_inputE_Width_1.n/this.RRR_inputE_Width_1.d));
           } else {
           ele.C_RUW_Letter.changeletter(''+parseInt(this.RRR_inputE_Width_1.n/this.RRR_inputE_Width_1.d)+ '-'+this.RRR_inputE_Width_1.n%this.RRR_inputE_Width_1.d + '/' + this.RRR_inputE_Width_1.d);
         }
  
         b.RR_upArrowline =  [{x:b.downline_pos[1].x, y:935}, {x:b.CR_upArrowline[0].x, y:935},]
         b.RR_ulArrowP = [{x:b.CR_upArrowline[0].x , y:945}, {x:b.CR_upArrowline[0].x , y:925},]
         b.RR_ulTip = {x:b.downline_pos[1].x, y:935}
         b.RR_urTip = {x:b.CR_upArrowline[0].x , y:935}
         b.RRUW_Group = {x:415 + b.widthDifference - 10 * (this.RRR_inputE_Width_2/2+this.RRR_inputE_Width_1) * b.rate , y:933}
  
         if(this.RRR_inputE_Width_2.n%this.RRR_inputE_Width_2.d == 0) {
           ele.R_RUW_Letter.changeletter('' + parseInt(this.RRR_inputE_Width_2.n/this.RRR_inputE_Width_2.d));
           } else {
           ele.R_RUW_Letter.changeletter(''+parseInt(this.RRR_inputE_Width_2.n/this.RRR_inputE_Width_2.d)+ '-'+this.RRR_inputE_Width_2.n%this.RRR_inputE_Width_2.d + '/' + this.RRR_inputE_Width_2.d);
         }
        
         b.RLL_E_dot_Line_1 = [{x:443 + b.widthDifference,y:195},{x:443 + b.widthDifference, y:905-this.RRR_inputE_Height*b.rate*10 }]  
         b.RLL_E_dot_Line_2 = [{x:443 + b.widthDifference-10*b.rate*this.RRR_inputE_Width_1,y:905-this.RRR_inputE_Height*b.rate*10},{x:443 + b.widthDifference-10*b.rate*this.RRR_inputE_Width_1,y:905}]
         b.R_Elbow_1 = [{x:443 + b.widthDifference,y:195},{x:443 + b.widthDifference-10*b.rate*this.RRR_inputE_Width_1,y:905-10*b.rate*this.RRR_inputE_Height}]
         b.R_Elbow_2 = [{x:443 + b.widthDifference-10*b.rate*this.RRR_inputE_Width_1,y:905-10*b.rate*this.RRR_inputE_Height},{x:443+b.widthDifference - 10*b.rate*(this.RRR_inputE_Width_1+this.RRR_inputE_Width_2),y:905}]
  
         }
  
          b.dis_leftHeight = ele.left_Heightletter.returnValue()
          b.dis_rightHeight = ele.right_Heightletter.returnValue()

          b.dis_upWidth = math.subtract(ele.up_Widthletter.returnValue(),(this.RL_TopRight+(this.RLL_inputE_Width_1+this.RLL_inputE_Width_2)-(this.RLR_inputE_Width_1-this.RLR_inputE_Width_2)+this.RRL_inputE_Width_1))
          b.dis_downWidth = math.subtract(ele.down_Widthletter.returnValue(),(this.RL_TopLeft+this.RRL_inputE_Width_2+(this.RRR_inputE_Width_1+this.RRR_inputE_Width_2)))
          b.draw();
  
        }
      }