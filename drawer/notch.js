

    function notch() {

        this.Handle = "notch";
        this.draw = function(context) {

          var simpleParameter = [];

          simpleParameter = context.Parameters.filter((parameter, i) => { 
           return parameter.ParameterName === 'notch';
         })
  
            this.parameter = simpleParameter[0]
    
            this.LT_notch_width1 = this.parameter.value[0].width1;
            this.LT_notch_width2 = this.parameter.value[0].width2;

        
            this.LT_notch_height1 = this.parameter.value[0].height1;
            this.LT_notch_height2 = this.parameter.value[0].height2;
         
      
            this.RT_notch_width1 = this.parameter.value[1].width1;
            this.RT_notch_width2 = this.parameter.value[1].width2;
            
  
            this.RT_notch_height1 = this.parameter.value[1].height1;
            this.RT_notch_height2 = this.parameter.value[1].height2;
           
  
            this.LB_notch_width1 = this.parameter.value[2].width1;
            this.LB_notch_width2 = this.parameter.value[2].width2;
           
  
            this.LB_notch_height1 = this.parameter.value[2].height1;
            this.LB_notch_height2 = this.parameter.value[2].height2;
          
  
            this.RB_notch_width1 = this.parameter.value[3].width1;
            this.RB_notch_width2 = this.parameter.value[3].width2;
         
  
            this.RB_notch_height1 = this.parameter.value[3].height1;
            this.RB_notch_height2 = this.parameter.value[3].height2;
           
  
            var b = new initDraw(context);
            var ele = new definitionObject();

            // for avoiding leftarrowline disappear after leftline disappear in the leftoutage.
              // so only there is parameter, 
            if(this.LT_notch_width1||this.LT_notch_height1||
              this.RT_notch_width1||   this.RT_notch_height1||
              this.LB_notch_width1||this.LB_notch_height1||
              this.RB_notch_width1||this.RB_notch_height1)
              
              {
                b.upletter = {x:ele.upmainGroup.getPosition().x + (this.LT_notch_width1 - this.RT_notch_width1 ) *10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
                b.topnoteletter = {x:ele.topnote_Group.getPosition().x + (this.LT_notch_width1 - this.RT_notch_width1 ) *10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
              
                b.rightletter = {x:ele.rightmainGroup.getPosition().x , y:ele.rightmainGroup.getPosition().y+ (this.RT_notch_height1 - this.RB_notch_height1)*10*b.rate/2}
                b.rightnoteletter = {x:ele.rightnote_Group.getPosition().x , y:ele.rightnote_Group.getPosition().y+ (this.RT_notch_height1 - this.RB_notch_height1)*10*b.rate/2}
              
                b.downletter = {x:ele.downmainGroup.getPosition().x +(this.LB_notch_width1-this.RB_notch_width1)*10*b.rate/2,y:ele.downmainGroup.getPosition().y}
                b.downnoteletter = {x:ele.downnote_Group.getPosition().x +(this.LB_notch_width1-this.RB_notch_width1)*10*b.rate/2,y:ele.downnote_Group.getPosition().y}
              
                b.leftletter = {x:ele.leftmainGroup.getPosition().x,  y:ele.leftmainGroup.getPosition().y + (this.LT_notch_height1-this.LB_notch_height1)*10*b.rate/2}
                b.leftnoteletter = {x:ele.leftnote_Group.getPosition().x,  y:ele.leftnote_Group.getPosition().y + (this.LT_notch_height1-this.LB_notch_height1)*10*b.rate/2}
               
                b.upline_pos =  [{x: ele.upLine.getPosition()[0].x + 10* this.LT_notch_width1 * b.rate , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x -  10 * this.RT_notch_width1 * b.rate, y:ele.upLine.getPosition()[1].y},]
                b.downline_pos =  [{x:ele.downLine.getPosition()[0].x + 10 * b.rate * this.LB_notch_width1, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * this.RB_notch_width1 * b.rate, y:ele.downLine.getPosition()[1].y},]
                b.leftline_pos =  [ {x:ele.leftLine.getPosition()[0].x, y:ele.leftLine.getPosition()[0].y+this.LT_notch_height1*10*b.rate}, {x:ele.leftLine.getPosition()[1].x, y:ele.leftLine.getPosition()[1].y - 10 * b.rate * this.LB_notch_height1},]
                b.rightline_pos = [{x:ele.rightLine.getPosition()[0].x, y:ele.rightLine.getPosition()[0].y + 10 * b.rate * this.RT_notch_height1},{x:ele.rightLine.getPosition()[1].x, y: ele.rightLine.getPosition()[1].y - 10 * b.rate * this.RB_notch_height1},]
    
                b.logoMove =  {x:b.downline_pos[0].x + 20, y:b.downline_pos[1].y - 30}
                
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
      
                b.rArrowline_pos =  [{x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y},  {x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y},]
                b.rgupArrowP_pos = [{x:b.rightline_pos[0].x-10+77, y:b.rightline_pos[0].y}, {x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[0].y}]
                b.rgdownArrowP_pos = [{x:b.rightline_pos[1].x-10+77, y:b.rightline_pos[1].y},{x:b.rightline_pos[1].x+10+77, y:b.rightline_pos[1].y}]
                b.rgupTip_pos = {x:b.rightline_pos[0].x+77, y:b.rightline_pos[0].y};
                b.rgdownTip_pos ={x:b.rightline_pos[1].x+77, y:b.rightline_pos[1].y};
      
                b.lArrowline_pos =  [{x:52, y:b.leftline_pos[0].y},  {x:52, y:b.leftline_pos[1].y},]
                b.lfupArrowP_pos = [{x:40 , y:b.leftline_pos[0].y}, {x:65, y:b.leftline_pos[0].y}]
                b.lfdownArrowP_pos = [{x:40, y:b.leftline_pos[1].y},{x:65, y:b.leftline_pos[1].y}]
                b.lfupTip_pos = {x:52, y:b.leftline_pos[0].y};
                b.lfdownTip_pos ={x:52, y:b.leftline_pos[1].y};
              }

         
  
            if(this.LT_notch_width1||this.LT_notch_height1) {
            
              var LT_Rect2= makeSVG('rect', { id :'LT_Rect2',x:"-10000", y:"-1220",  width:"10", height:"10", fill:"#ffffff", stroke:"#000000",'pointer-events':"all" });
              document.getElementById('editor').appendChild(LT_Rect2);
            
              var LT_Rect2 = new Rect('LT_Rect2')
            
              this.ltrect = {x:b.leftline_pos[0].x + this.LT_notch_width1*10*b.rate-10,y:b.leftline_pos[0].y}
           
              LT_Rect2.moveRect(this.ltrect)

              b.luRectmove = b.upline_pos[0]

              b.luRectmove1 = b.leftline_pos[0]
           
               this.LT_notch_width_path1 = [{x:b.leftline_pos[0].x, y:b.leftline_pos[0].y},{x:b.upline_pos[0].x,y:b.leftline_pos[0].y}]
            
               this.LT_notch_height_path1 = [{x:b.upline_pos[0].x,y:b.upline_pos[0].y},{x:b.upline_pos[0].x,y:b.leftline_pos[0].y}]
           
               ele.LT_notch_width_path1.drawPath(this.LT_notch_width_path1)
          
               ele.LT_notch_height_path1.drawPath(this.LT_notch_height_path1)
  
              
              b.CL_upArrowline = [{x: 163, y:165}, {x:b.upline_pos[0].x , y:165},]
              b.CL_ulArrowP = [{x:163, y:175}, {x:163, y:155},]
              b.CL_ulTip = {x:163, y:165}
              b.CL_urTip = {x:b.upline_pos[0].x, y:165};
                  
              b.CU_lArrowline =[{x:52, y:195}, {x:52, y:b.leftline_pos[0].y},]
              b.CU_lfupArrowP =[{x:40, y:195}, {x:65, y:195},]
              b.CU_lfupTip = {x:52, y:195}
              b.CU_lfdownTip = {x:52, y:b.leftline_pos[0].y}
  
              
              b.CLUW_Group = {x:133 + 10 * b.rate/2 * this.LT_notch_width1 , y:130}
              b.CLUH_Group = {x:15 , y:26 + 10 *b.rate*this.LT_notch_height1/2}
  
             
  
              if(this.LT_notch_width1.n%this.LT_notch_width1.d == 0) {
                ele.C_LUW_Letter.changeletter('' + parseInt(this.LT_notch_width1.n/this.LT_notch_width1.d));
                } else {
                ele.C_LUW_Letter.changeletter(''+parseInt(this.LT_notch_width1.n/this.LT_notch_width1.d)+ '-'+this.LT_notch_width1.n%this.LT_notch_width1.d + '/' + this.LT_notch_width1.d);
              }
    
              if(this.LT_notch_height1.n%this.LT_notch_height1.d == 0) {
                ele.C_LUH_Letter.changeletter('' + parseInt(this.LT_notch_height1.n/this.LT_notch_height1.d));
                } else {
                ele.C_LUH_Letter.changeletter(''+parseInt(this.LT_notch_height1.n/this.LT_notch_height1.d)+ '-'+this.LT_notch_height1.n%this.LT_notch_height1.d + '/' + this.LT_notch_height1.d);
              }
              
                if(this.LT_notch_width2||this.LT_notch_height2){
  
                  LT_Rect2.moveRect(b.initSignle_pos)

                  this.LT_notch_width_path1 = [{x:b.leftline_pos[0].x,y:b.leftline_pos[0].y},{x:b.leftline_pos[0].x + 10*b.rate*this.LT_notch_width2,y:b.leftline_pos[0].y}]
                  this.LT_notch_height_path1 = [{x:b.leftline_pos[0].x+this.LT_notch_width2*10*b.rate,y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2},{x:b.leftline_pos[0].x+this.LT_notch_width2*10*b.rate,y:b.leftline_pos[0].y}]
                  this.LT_notch_width_path2 = [{x:b.leftline_pos[0].x+this.LT_notch_width2*10*b.rate,y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2},{x:b.upline_pos[0].x,y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2}]
                  this.LT_notch_height_path2 = [{x:b.upline_pos[0].x,y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2},{x:b.upline_pos[0].x,y:b.upline_pos[0].y}]
                
                  ele.LT_notch_width_path1.drawPath(this.LT_notch_width_path1)
                  ele.LT_notch_height_path1.drawPath(this.LT_notch_height_path1)
                  ele.LT_notch_width_path2.drawPath(this.LT_notch_width_path2)
                  ele.LT_notch_height_path2.drawPath(this.LT_notch_height_path2)
  
                  b.RL_upArrowline = [{x: b.leftline_pos[0].x + 10*b.rate*this.LT_notch_width2, y:165}, {x:b.upline_pos[0].x , y:165},]
                  b.RL_ulArrowP = [{x:b.RL_upArrowline[0].x, y:175}, {x:b.RL_upArrowline[0].x, y:155},]
                  // b.extra_p1 = [{x:b.upline_pos[0].x, y:205}, {x:b.upline_pos[0].x, y:185},]
                  b.RL_ulTip ={x:b.RL_upArrowline[0].x, y:165}
                  b.RL_urTip ={x:b.upline_pos[0].x, y:165};
                      
                  b.RU_lArrowline =[{x:52, y:195}, {x:52, y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2},]
                  b.RU_lfupArrowP =[{x:40, y:195}, {x:65, y:195},]
                  b.extra_p2 =[{x:40, y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2}, {x:65, y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2},]
                  b.RU_lfupTip = {x:52, y:195}
                  b.RU_lfdownTip = {x:52, y:b.upline_pos[0].y+10*b.rate*this.LT_notch_height2}
  
                  
                  b.CL_upArrowline = [{x: 163, y:165}, {x:b.RL_upArrowline[0].x , y:165},]
                  b.CL_ulArrowP = [{x:163, y:175}, {x:163, y:155},]
                  b.CL_ulTip = {x:163, y:165}
                  b.CL_urTip = {x:b.RL_upArrowline[0].x, y:165};
                  
                  b.CU_lArrowline =[{x:52, y: b.RU_lArrowline[1].y}, {x:52, y:b.leftline_pos[0].y},]
                  b.CU_lfupArrowP =[{x:40, y:b.CU_lArrowline[1].y}, {x:65, y:b.CU_lArrowline[1].y},]
                  b.CU_lfupTip = {x:52, y:b.RU_lArrowline[1].y}
                  b.CU_lfdownTip = {x:52, y:b.leftline_pos[0].y}



                  b.CLUW_Group = {x:-15, y:176+ 10 *b.rate*this.LT_notch_height2 + 10 *b.rate*(this.LT_notch_height1-this.LT_notch_height2)/2}
                  b.CLUH_Group = {x:143  + 10 * b.rate * this.LT_notch_width2 + 10 * b.rate * (this.LT_notch_width1- this.LT_notch_width2)/2  , y:-40}


  
                  this.temp_LT_notch_width = math.subtract(this.LT_notch_width1,this.LT_notch_width2)
                  this.temp_LT_notch_height = math.subtract(this.LT_notch_height1,this.LT_notch_height2)

                  if(this.temp_LT_notch_height.n%this.temp_LT_notch_height.d == 0) {
                    ele.C_LUW_Letter.changeletter('' + parseInt(this.temp_LT_notch_height.n/this.temp_LT_notch_height.d));
                    } else {
                    ele.C_LUW_Letter.changeletter(''+parseInt(this.temp_LT_notch_height.n/this.temp_LT_notch_height.d)+ '-'+this.temp_LT_notch_height.n%this.temp_LT_notch_height.d + '/' + this.temp_LT_notch_height.d);
                  }
        
                  if(this.temp_LT_notch_width.n%this.temp_LT_notch_width.d == 0) {
                    ele.C_LUH_Letter.changeletter('' + parseInt(this.temp_LT_notch_width.n/this.temp_LT_notch_width.d));
                    } else {
                    ele.C_LUH_Letter.changeletter(''+parseInt(this.temp_LT_notch_width.n/this.temp_LT_notch_width.d)+ '-'+this.temp_LT_notch_width.n%this.temp_LT_notch_width.d + '/' + this.temp_LT_notch_width.d);
                  }


                
                  b.RLUW_Group = {x:-15, y:176 + 10 *b.rate*this.LT_notch_height2/2}
                  b.RLUH_Group = {x:143 + 10 * b.rate * this.LT_notch_width2/2 , y:-40}
               
                  if(this.LT_notch_height2.n%this.LT_notch_height2.d == 0) {
                    ele.R_LUW_Letter.changeletter('' + parseInt(this.LT_notch_height2.n/this.LT_notch_height2.d));
                    } else {
                    ele.R_LUW_Letter.changeletter(''+parseInt(this.LT_notch_height2.n/this.LT_notch_height2.d)+ '-'+this.LT_notch_height2.n%this.LT_notch_height2.d + '/' + this.LT_notch_height2.d);
                  }
        
                  if(this.LT_notch_width2.n%this.LT_notch_width2.d == 0) {
                    ele.R_LUH_Letter.changeletter('' + parseInt(this.LT_notch_width2.n/this.LT_notch_width2.d));
                    } else {
                    ele.R_LUH_Letter.changeletter(''+parseInt(this.LT_notch_width2.n/this.LT_notch_width2.d)+ '-'+this.LT_notch_width2.n%this.LT_notch_width2.d + '/' + this.LT_notch_width2.d);
                  }


                } else {
                  ele.LT_notch_width_path2.drawPath(b.init2d_pos)
                  ele.LT_notch_height_path2.drawPath(b.init2d_pos)
                }
             
            } 
  
  
            if(this.RT_notch_width1||this.RT_notch_height1) {

              var RT_Rect2= makeSVG('rect', { id :'RT_Rect2', x:"-10000", y:"-1220", width:"10", height:"10", fill:"#ffffff", stroke:"#000000",'pointer-events':"all" });
              document.getElementById('editor').appendChild(RT_Rect2);
          
              var RT_Rect2 = new Rect('RT_Rect2')

              this.rtrect = {x:b.rightline_pos[0].x - this.RT_notch_width1*10*b.rate,y:b.rightline_pos[0].y}
              RT_Rect2.moveRect(this.rtrect)

              b.ruRectmove = {x:b.upline_pos[1].x-10,y:b.upline_pos[1].y}
              b.ruRectmove1 = {x:b.rightline_pos[0].x-10,y:b.rightline_pos[0].y}
  
              this.RT_notch_width_path1 = [{x:b.rightline_pos[0].x, y:b.rightline_pos[0].y},{x:b.upline_pos[1].x,y:b.rightline_pos[0].y}]
              this.RT_notch_height_path1 = [{x:b.upline_pos[1].x,y:b.upline_pos[1].y},{x:b.upline_pos[1].x,y:b.rightline_pos[0].y}]
              ele.RT_notch_width_path1.drawPath(this.RT_notch_width_path1)
              ele.RT_notch_height_path1.drawPath(this.RT_notch_height_path1)
  
              b.CR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:443 + b.widthDifference, y:165},]
              b.CR_ulArrowP = [{x:443 + b.widthDifference, y:175}, {x:443 + b.widthDifference, y:155},]
              b.CR_ulTip = {x:b.upline_pos[1].x, y:165}
              b.CR_urTip = {x:443 + b.widthDifference , y:165}
    
    
              b.CU_rArrowline =[{x:b.rArrowline_pos[0].x, y:195}, {x:b.rArrowline_pos[1].x, y:b.rightline_pos[0].y},]
              b.CU_rgupArrowP = [{x:b.rArrowline_pos[0].x-10, y:195}, {x:b.rArrowline_pos[0].x+10, y:195},]
              b.CU_rgupTip = {x:b.rArrowline_pos[0].x, y:195}
              b.CU_rgdownTip = {x:b.rArrowline_pos[0].x, y:b.rightline_pos[0].y}
          
              
              b.CRUW_Group = {x:412 + b.widthDifference - 10 * this.RT_notch_width1 * b.rate/2 , y:130}
              b.CRUH_Group = {x:485 + b.widthDifference , y:26 + 10 * b.rate * this.RT_notch_height1/ 2}
              
             
             
              if(this.RT_notch_width1.n%this.RT_notch_width1.d == 0) {
                ele.C_RUW_Letter.changeletter('' + parseInt(this.RT_notch_width1.n/this.RT_notch_width1.d));
                } else {
                ele.C_RUW_Letter.changeletter(''+parseInt(this.RT_notch_width1.n/this.RT_notch_width1.d)+ '-'+this.RT_notch_width1.n%this.RT_notch_width1.d + '/' + this.RT_notch_width1.d);
              }
    
              if(this.RT_notch_height1.n%this.RT_notch_height1.d == 0) {
                ele.C_RUH_Letter.changeletter('' + parseInt(this.RT_notch_height1.n/this.RT_notch_height1.d));
                } else {
                ele.C_RUH_Letter.changeletter(''+parseInt(this.RT_notch_height1.n/this.RT_notch_height1.d)+ '-'+this.RT_notch_height1.n%this.RT_notch_height1.d + '/' + this.RT_notch_height1.d);
              }
  
  
              if (this.RT_notch_width2||this.RT_notch_height2) {
  
                RT_Rect2.moveRect(b.initSignle_pos)

                this.RT_notch_width_path1 = [{x:b.rightline_pos[0].x,y:b.rightline_pos[0].y},{x:b.rightline_pos[1].x - 10*b.rate*this.RT_notch_width2,y:b.rightline_pos[0].y}]
                this.RT_notch_height_path1 = [{x:b.rightline_pos[1].x - 10*b.rate*this.RT_notch_width2,y:b.upline_pos[1].y+10*b.rate*this.RT_notch_height2},{x:b.rightline_pos[1].x - 10*b.rate*this.RT_notch_width2,y:b.rightline_pos[0].y}]
                this.RT_notch_width_path2 = [{x:b.upline_pos[1].x,y:b.upline_pos[1].y+10*b.rate*this.RT_notch_height2},{x:b.rightline_pos[1].x - 10*b.rate*this.RT_notch_width2,y:b.upline_pos[1].y+10*b.rate*this.RT_notch_height2}]
                this.RT_notch_height_path2 = [{x:b.upline_pos[1].x,y:b.upline_pos[1].y+10*b.rate*this.RT_notch_height2},{x:b.upline_pos[1].x,y:b.upline_pos[1].y}]
              
                ele.RT_notch_width_path1.drawPath(this.RT_notch_width_path1)
                ele.RT_notch_height_path1.drawPath(this.RT_notch_height_path1)
                ele.RT_notch_width_path2.drawPath(this.RT_notch_width_path2)
                ele.RT_notch_height_path2.drawPath(this.RT_notch_height_path2)
  
                b.RR_upArrowline =  [ {x:b.rightline_pos[1].x - 10*b.rate*this.RT_notch_width2, y:165},{x:b.rightline_pos[0].x, y:165},,]
                b.RR_ulArrowP = [{x:b.RR_upArrowline[0].x , y:175}, {x:b.RR_upArrowline[0].x , y:155},]
                b.extra_p3 = [{x:b.RR_upArrowline[1].x, y:175}, {x:b.RR_upArrowline[1].x, y:155},]
                b.RR_ulTip = {x:b.RR_upArrowline[0].x, y:165}
                b.RR_urTip = {x:b.RR_upArrowline[1].x, y:165}
      
      
                b.RU_rArrowline =[{x:b.rArrowline_pos[0].x, y:195}, {x:b.rArrowline_pos[0].x, y:b.upline_pos[0].y+10*b.rate*this.RT_notch_height2},]
                b.RU_rgupArrowP = [{x:b.rArrowline_pos[0].x-10, y:195}, {x:b.rArrowline_pos[0].x+10, y:195},]
                b.extra_p4 = [{x:b.rArrowline_pos[0].x-10, y:b.upline_pos[0].y+10*b.rate*this.RT_notch_height2}, {x:b.rArrowline_pos[0].x+10, y:b.upline_pos[0].y+10*b.rate*this.RT_notch_height2},]
                b.RU_rgupTip = {x:b.rArrowline_pos[0].x, y:195}
                b.RU_rgdownTip = {x:b.rArrowline_pos[0].x, y:b.upline_pos[0].y+10*b.rate*this.RT_notch_height2}
                

                b.CR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:b.RR_upArrowline[0].x, y:165},]
                b.CR_ulArrowP = [{x:b.RR_upArrowline[0].x, y:175}, {x:b.RR_upArrowline[0].x, y:155},]
                b.CR_ulTip = {x:b.CR_upArrowline[0].x, y:165}
                b.CR_urTip = {x:b.CR_upArrowline[1].x , y:165}
      
      
                b.CU_rArrowline =[{x:b.rArrowline_pos[0].x, y:b.RU_rArrowline[1].y}, {x:b.rArrowline_pos[1].x, y:b.rightline_pos[0].y},]
                b.CU_rgupArrowP = [{x:b.rArrowline_pos[0].x-10, y:b.RU_rArrowline[1].y}, {x:b.rArrowline_pos[0].x+10, y:b.RU_rArrowline[1].y},]
                b.CU_rgupTip = {x:b.rArrowline_pos[0].x, y:b.RU_rArrowline[1].y}
                b.CU_rgdownTip = {x:b.rArrowline_pos[0].x, y:b.rightline_pos[0].y}


                b.RRUW_Group = {x:450 + b.widthDifference , y:175 + 10 * b.rate * this.RT_notch_height2 / 2}
              
                b.RRUH_Group = {x:423 + b.widthDifference - 10 * this.RT_notch_width2 * b.rate/2, y:-40}
      
                if(this.RT_notch_width2.n%this.RT_notch_width2.d == 0) {
                  ele.R_RUW_Letter.changeletter('' + parseInt(this.RT_notch_width2.n/this.RT_notch_width2.d));
                  } else {
                  ele.R_RUW_Letter.changeletter(''+parseInt(this.RT_notch_width2.n/this.RT_notch_width2.d)+ '-'+this.RT_notch_width2.n%this.RT_notch_width2.d + '/' + this.RT_notch_width2.d);
                }
  
                if(this.RT_notch_height2.n%this.RT_notch_height2.d == 0) {
                  ele.R_RUH_Letter.changeletter('' + parseInt(this.RT_notch_height2.n/this.RT_notch_height2.d));
                  } else {
                  ele.R_RUH_Letter.changeletter(''+parseInt(this.RT_notch_height2.n/this.RT_notch_height2.d)+ '-'+this.RT_notch_height2.n%this.RT_notch_height2.d + '/' + this.RT_notch_height2.d);
                }
  

        
                b.CRUW_Group = {x:450 + b.widthDifference  , y:175 + 10 * b.rate * (this.RT_notch_height2 +(this.RT_notch_height1-this.RT_notch_height2)/2)}
              
                b.CRUH_Group = {x:423 + b.widthDifference - 10 * this.RT_notch_width2 * b.rate - ( this.RT_notch_width1 - this.RT_notch_width2 )/2*10* b.rate, y:-40}


                this.temp_RT_notch_width = math.subtract(this.RT_notch_width1,this.RT_notch_width2)
                this.temp_RT_notch_height = math.subtract(this.RT_notch_height1,this.RT_notch_height2)

                if(this.temp_RT_notch_height.n%this.temp_RT_notch_height.d == 0) {
                  ele.C_RUW_Letter.changeletter('' + parseInt(this.temp_RT_notch_height.n/this.temp_RT_notch_height.d));
                  } else {
                  ele.C_RUW_Letter.changeletter(''+parseInt(this.temp_RT_notch_height.n/this.temp_RT_notch_height.d)+ '-'+this.temp_RT_notch_height.n%this.temp_RT_notch_height.d + '/' + this.temp_RT_notch_height.d);
                }
      
                if(this.temp_RT_notch_width.n%this.temp_RT_notch_width.d == 0) {
                  ele.C_RUH_Letter.changeletter('' + parseInt(this.temp_RT_notch_width.n/this.temp_RT_notch_width.d));
                  } else {
                  ele.C_RUH_Letter.changeletter(''+parseInt(this.temp_RT_notch_width.n/this.temp_RT_notch_width.d)+ '-'+this.temp_RT_notch_width.n%this.temp_RT_notch_width.d + '/' + this.temp_RT_notch_width.d);
                }
    


              } else {
                ele.RT_notch_width_path2.drawPath(b.init2d_pos)
                ele.RT_notch_height_path2.drawPath(b.init2d_pos)
              }
            } 
  
  
            if(this.LB_notch_width1||this.LB_notch_height1) {
  
              var LB_Rect2= makeSVG('rect', { id :'LB_Rect2', x:"-10000", y:"-1220",  width:"10", height:"10", fill:"#ffffff", stroke:"#000000",'pointer-events':"all" });
              document.getElementById('editor').appendChild(LB_Rect2);
            
              var LB_Rect2 = new Rect('LB_Rect2')
            
              this.lbrect = {x:b.leftline_pos[1].x + this.LB_notch_width1*10*b.rate-10,y:b.leftline_pos[1].y-10}
           
              LB_Rect2.moveRect(this.lbrect)

              b.lbRectmove = {x:b.downline_pos[0].x,y:b.downline_pos[0].y-10}
              b.lbRectmove1 ={x:b.leftline_pos[1].x,y:b.leftline_pos[1].y-10}
  
              this.LB_notch_width_path1 = [{x:b.leftline_pos[1].x, y:b.leftline_pos[1].y},{x:b.downline_pos[0].x,y:b.leftline_pos[1].y}]
              this.LB_notch_height_path1 = [{x:b.downline_pos[0].x,y:b.downline_pos[0].y},{x:b.downline_pos[0].x,y:b.leftline_pos[1].y}]
              ele.LB_notch_height_path1.drawPath(this.LB_notch_height_path1)
              ele.LB_notch_width_path1.drawPath(this.LB_notch_width_path1)
  
  
              b.CD_lArrowline = [{x:52, y:905}, {x:52, y:b.leftline_pos[1].y},]
              b.CD_lfdownArrowP =[{x:40, y:905}, {x:65, y:905},]
              b.CD_lfupTip = {x:52, y:b.leftline_pos[1].y}
              b.CD_lfdownTip = {x:52, y:905}
    
              b.CL_downArrowline = [{x:163, y:935}, {x:b.downline_pos[0].x, y:935},]
              b.CL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
              b.CL_dlTip = {x:163, y:935}
              b.CL_drTip = {x:b.downline_pos[0].x, y:935}
    
              b.CLBW_Group = {x:133 + 10*b.rate*this.LB_notch_width1/2 , y:900}
              b.CLBH_Group = {x:15 , y:734 - 10 * b.rate * this.LB_notch_height1/2}
  
             
              
              if(this.LB_notch_width1.n%this.LB_notch_width1.d == 0) {
                ele.C_LBW_Letter.changeletter('' + parseInt(this.LB_notch_width1.n/this.LB_notch_width1.d));
                } else {
                ele.C_LBW_Letter.changeletter(''+parseInt(this.LB_notch_width1.n/this.LB_notch_width1.d)+ '-'+this.LB_notch_width1.n%this.LB_notch_width1.d + '/' + this.LB_notch_width1.d);
              }
    
              if(this.LB_notch_height1.n%this.LB_notch_height1.d == 0) {
                ele.C_LBH_letter.changeletter('' + parseInt(this.LB_notch_height1.n/this.LB_notch_height1.d));
                } else {

                ele.C_LBH_letter.changeletter(''+parseInt(this.LB_notch_height1.n/this.LB_notch_height1.d)+ '-'+this.LB_notch_height1.n%this.LB_notch_height1.d + '/' + this.LB_notch_height1.d);
              }
  
              if(this.LB_notch_width2||this.LB_notch_height2) {
  
                LB_Rect2.moveRect(b.initSignle_pos)
  
                this.LB_notch_width_path1 = [{x:b.leftline_pos[1].x,y:b.leftline_pos[1].y},{x:b.leftline_pos[0].x+this.LB_notch_width2*10*b.rate,y:b.leftline_pos[1].y}]
                this.LB_notch_height_path1 = [{x:b.leftline_pos[0].x+this.LB_notch_width2*10*b.rate,y:b.leftline_pos[1].y},{x:b.leftline_pos[0].x+this.LB_notch_width2*10*b.rate,y:b.leftline_pos[1].y+this.LB_notch_height2*10*b.rate}]
                this.LB_notch_width_path2 = [{x:b.leftline_pos[0].x+this.LB_notch_width2*10*b.rate,y:b.leftline_pos[1].y+this.LB_notch_height2*10*b.rate},{x:b.downline_pos[0].x,y:b.leftline_pos[1].y+this.LB_notch_height2*10*b.rate}]
                this.LB_notch_height_path2 = [{x:b.downline_pos[0].x,y:b.leftline_pos[1].y+this.LB_notch_height2*10*b.rate},{x:b.downline_pos[0].x,y:b.downline_pos[0].y}]
             
                ele.LB_notch_width_path1.drawPath(this.LB_notch_width_path1)
                ele.LB_notch_height_path1.drawPath(this.LB_notch_height_path1)
                ele.LB_notch_width_path2.drawPath(this.LB_notch_width_path2)
                ele.LB_notch_height_path2.drawPath(this.LB_notch_height_path2)
  
  
             
                b.RD_lArrowline = [{x:52, y:905}, {x:52, y:b.leftline_pos[1].y+10*b.rate*this.LB_notch_height2},]
                b.RD_lfdownArrowP =[{x:40, y:905}, {x:65, y:905},]
                b.extra_p6 = [{x:40, y:b.RD_lArrowline[1].y}, {x:65, y:b.RD_lArrowline[1].y},]
                b.RD_lfupTip = {x:52, y:b.RD_lArrowline[1].y}
                b.RD_lfdownTip = {x:52, y:905}


                b.RL_downArrowline = [{x:163+ 10*b.rate*this.LB_notch_width2, y:935}, {x:b.downline_pos[0].x, y:935},]
                b.RL_dlArrowP = [{x:163+ 10*b.rate*this.LB_notch_width2, y:945}, {x:163+ 10*b.rate*this.LB_notch_width2, y:925},]
                b.extra_p5 = [{x:b.downline_pos[0].x, y:945}, {x:b.downline_pos[0].x, y:925},]
                b.RL_dlTip = {x:163+ 10*b.rate*this.LB_notch_width2, y:935}
                b.RL_drTip = {x:b.downline_pos[0].x, y:935}
  
  
                b.CD_lArrowline = [ {x:52, y:b.leftline_pos[1].y},{x:52, y:b.leftline_pos[1].y+10*b.rate*this.LB_notch_height2},]
                b.CD_lfdownArrowP =[{x:40, y:b.CD_lArrowline[1].y}, {x:65, y:b.CD_lArrowline[1].y},]
                b.CD_lfupTip = {x:52, y:b.CD_lArrowline[0].y}
                b.CD_lfdownTip = {x:52, y:b.CD_lArrowline[1].y}
      
                b.CL_downArrowline = [{x:163, y:935}, {x:163+ 10*b.rate*this.LB_notch_width2, y:935},]
                b.CL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
                b.CL_dlTip = {x:163, y:935}
                b.CL_drTip = {x:163+ 10*b.rate*this.LB_notch_width2, y:935}


              

                b.CLBW_Group = {x:-15 , y:886- 10 * b.rate * (this.LB_notch_height1-this.LB_notch_height2)/2}
                b.CLBH_Group = {x:143 + 10*b.rate*(this.LB_notch_width2+(this.LB_notch_width1-this.LB_notch_width2)/2), y:800}
    

                this.temp_LB_notch_width = math.subtract(this.LB_notch_width1,this.LB_notch_width2)
                this.temp_LB_notch_height = math.subtract(this.LB_notch_height1,this.LB_notch_height2)
                
                if(this.temp_LB_notch_height.n%this.temp_LB_notch_height.d == 0) {
                  ele.C_LBW_Letter.changeletter('' + parseInt(this.temp_LB_notch_height.n/this.temp_LB_notch_height.d));
                  } else {
                  ele.C_LBW_Letter.changeletter(''+parseInt(this.temp_LB_notch_height.n/this.temp_LB_notch_height.d)+ '-'+this.temp_LB_notch_height.n%this.temp_LB_notch_height.d + '/' + this.temp_LB_notch_height.d);
                }
      
                if(this.temp_LB_notch_width.n%this.temp_LB_notch_width.d == 0) {
                  ele.C_LBH_letter.changeletter('' + parseInt(this.temp_LB_notch_width.n/this.temp_LB_notch_width.d));
                  } else {
  
                  ele.C_LBH_letter.changeletter(''+parseInt(this.temp_LB_notch_width.n/this.temp_LB_notch_width.d)+ '-'+this.temp_LB_notch_width.n%this.temp_LB_notch_width.d + '/' + this.temp_LB_notch_width.d);
                }

      
                b.RLBW_Group = {x:-15 , y:886 - 10*b.rate*(this.LB_notch_height1-this.LB_notch_height2/2)}
                b.RLBH_Group = {x:143 + 10*b.rate*this.LB_notch_width2*1/2 , y:800 }
              
                if(this.LB_notch_height2.n%this.LB_notch_height2.d == 0) {
                  ele.R_LBW_Letter.changeletter('' + parseInt(this.LB_notch_height2.n/this.LB_notch_height2.d));
                  } else {
                  ele.R_LBW_Letter.changeletter(''+parseInt(this.LB_notch_height2.n/this.LB_notch_height2.d)+ '-'+this.LB_notch_height2.n%this.LB_notch_height2.d + '/' + this.LB_notch_height2.d);
                }
      
                if(this.LB_notch_width2.n%this.LB_notch_width2.d == 0) {
                  ele.R_LBH_letter.changeletter('' + parseInt(this.LB_notch_width2.n/this.LB_notch_width2.d));
                  } else {
                  ele.R_LBH_letter.changeletter(''+parseInt(this.LB_notch_width2.n/this.LB_notch_width2.d)+ '-'+this.LB_notch_width2.n%this.LB_notch_width2.d + '/' + this.LB_notch_width2.d);
                }


                
           



  
              } else {
                ele.LB_notch_width_path2.drawPath(b.init2d_pos)
                ele.LB_notch_height_path2.drawPath(b.init2d_pos)
              }


            }
  
            if(this.RB_notch_width1||this.RB_notch_height1) {
  
              var RB_Rect2= makeSVG('rect', { id :'RB_Rect2', x:"-10000", y:"-1220",  width:"10", height:"10", fill:"#ffffff", stroke:"#000000",'pointer-events':"all" });
              document.getElementById('editor').appendChild(RB_Rect2);
            
              var RB_Rect2 = new Rect('RB_Rect2')
            
              this.rbrect = {x:b.rightline_pos[1].x - this.RB_notch_width1*10*b.rate,y:b.rightline_pos[1].y-10}
           
              RB_Rect2.moveRect(this.rbrect)


              b.rbRectmove = {x:b.rightline_pos[1].x-10,y:b.rightline_pos[1].y-10}
              b.rbRectmove1 ={x:b.downline_pos[1].x-10,y:b.downline_pos[1].y-10}
  
              this.RB_notch_width_path1 = [{x:b.rightline_pos[1].x, y:b.rightline_pos[1].y},{x:b.downline_pos[1].x,y:b.rightline_pos[1].y}]
              this.RB_notch_height_path1 = [{x:b.downline_pos[1].x,y:b.downline_pos[1].y},{x:b.downline_pos[1].x,y:b.rightline_pos[1].y}]
              ele.RB_notch_width_path1.drawPath(this.RB_notch_width_path1)
              ele.RB_notch_height_path1.drawPath(this.RB_notch_height_path1)
  
  
              b.CR_downArrowline = [{x:b.downline_pos[1].x, y:935}, {x:443 + b.widthDifference, y:935},]
              b.CR_dlArrowP = [{x:443 + b.widthDifference, y:945}, {x:443 + b.widthDifference, y:925},]
              b.CR_dlTip ={x:b.downline_pos[1].x, y:935}
              b.CR_drTip = {x:443 + b.widthDifference, y:935}
             
              b.CD_rArrowline = [{x:520 + b.widthDifference, y:905}, {x:520 + b.widthDifference, y:b.rightline_pos[1].y},]
              b.CD_rgdownArrowP = [{x:510 + b.widthDifference, y:905}, {x:530 + b.widthDifference, y:905},]
              b.CD_rgupTip = {x:520 + b.widthDifference, y:b.rightline_pos[1].y}
              b.CD_rgdownTip = {x:520 + b.widthDifference, y:905}
    
              b.CRBW_Group = {x:412 + b.widthDifference -10*this.RB_notch_width1/2*b.rate, y:900}
              b.CRBH_Group = {x:485 + b.widthDifference , y:734-10*b.rate*this.RB_notch_height1/2}
            
  
              if(this.RB_notch_width1.n%this.RB_notch_width1.d == 0) {
                ele.C_RBW_Letter.changeletter('' + parseInt(this.RB_notch_width1.n/this.RB_notch_width1.d));
                } else {
                ele.C_RBW_Letter.changeletter(''+parseInt(this.RB_notch_width1.n/this.RB_notch_width1.d)+ '-'+this.RB_notch_width1.n%this.RB_notch_width1.d + '/' + this.RB_notch_width1.d);
              }
    
              if(this.RB_notch_height1.n%this.RB_notch_height1.d == 0) {
                ele.C_RBH_Letter.changeletter('' + parseInt(this.RB_notch_height1.n/this.RB_notch_height1.d));
                } else {
                ele.C_RBH_Letter.changeletter(''+parseInt(this.RB_notch_height1.n/this.RB_notch_height1.d)+ '-'+this.RB_notch_height1.n%this.RB_notch_height1.d + '/' + this.RB_notch_height1.d);
              }
  
              if(this.RB_notch_width2||this.RB_notch_height2) {
  
                RB_Rect2.moveRect(b.initSignle_pos)

                this.RB_notch_width_path1 = [{x:b.rightline_pos[1].x,y:b.rightline_pos[1].y},{x:b.rightline_pos[1].x - 10*b.rate*this.RB_notch_width2,y:b.rightline_pos[1].y}]
                this.RB_notch_height_path1 = [{x:b.rightline_pos[1].x - 10*b.rate*this.RB_notch_width2,y:b.downline_pos[1].y-10*b.rate*this.RB_notch_height2},{x:b.rightline_pos[1].x - 10*b.rate*this.RB_notch_width2,y:b.rightline_pos[1].y}]
                this.RB_notch_width_path2 = [{x:b.downline_pos[1].x,y:b.downline_pos[1].y-10*b.rate*this.RB_notch_height2},{x:b.rightline_pos[1].x - 10*b.rate*this.RB_notch_width2,y:b.downline_pos[1].y-10*b.rate*this.RB_notch_height2}]
                this.RB_notch_height_path2 = [{x:b.downline_pos[1].x,y:b.downline_pos[1].y-10*b.rate*this.RB_notch_height2},{x:b.downline_pos[1].x,y:b.downline_pos[1].y}]
              
                ele.RB_notch_width_path1.drawPath(this.RB_notch_width_path1)
                ele.RB_notch_height_path1.drawPath(this.RB_notch_height_path1)
                ele.RB_notch_width_path2.drawPath(this.RB_notch_width_path2)
                ele.RB_notch_height_path2.drawPath(this.RB_notch_height_path2)
  
                b.RR_downArrowline = [{x:b.downline_pos[1].x, y:935}, {x:b.rightline_pos[1].x - 10*b.rate*this.RB_notch_width2, y:935},]
                b.RR_dlArrowP = [{x:b.RR_downArrowline[0].x, y:945}, {x:b.RR_downArrowline[0].x, y:925},]
                b.extra_p7 = [{x:b.RR_downArrowline[1].x, y:945}, {x:b.RR_downArrowline[1].x, y:925},]
                b.RR_dlTip ={x:b.RR_downArrowline[0].x, y:935}
                b.RR_drTip = {x:b.RR_downArrowline[1].x, y:935}
  
  
                b.RD_rArrowline = [{x: 520 + b.widthDifference, y:905}, {x:520 + b.widthDifference, y:b.downline_pos[1].y-this.RB_notch_height2*b.rate*10},]
                b.RD_rgdownArrowP = [{x:510 + b.widthDifference, y:905}, {x:530 + b.widthDifference, y:905},]
                b.extra_p8 = [{x:510 + b.widthDifference, y:b.downline_pos[1].y-10*this.RB_notch_height2*b.rate}, {x:530 + b.widthDifference, y:b.downline_pos[1].y-10*this.RB_notch_height2*b.rate},]
                b.RD_rgupTip = {x:520 + b.widthDifference, y:b.downline_pos[1].y-10*this.RB_notch_height2*b.rate}
                b.RD_rgdownTip = {x:520 + b.widthDifference, y:905}
  

                b.CR_downArrowline = [{x:b.RR_downArrowline[1].x, y:935}, {x:443 + b.widthDifference, y:935},]
                b.CR_dlArrowP = [{x:443 + b.widthDifference, y:945}, {x:443 + b.widthDifference, y:925},]
                b.CR_dlTip ={x:b.CR_downArrowline[0].x, y:935}
                b.CR_drTip = {x:443 + b.widthDifference, y:935}
               
                b.CD_rArrowline = [{x:520 + b.widthDifference, y:b.RD_rArrowline[1].y}, {x:520 + b.widthDifference, y:b.rightline_pos[1].y},]
                b.CD_rgupTip = {x:520 + b.widthDifference, y:b.CD_rArrowline[1].y}
                b.CD_rgdownTip = {x:520 + b.widthDifference, y:b.CD_rArrowline[0].y}




   
                b.RRBW_Group = {x:450 + b.widthDifference, y:886-10*this.RB_notch_width2*1/2*b.rate}
                b.RRBH_Group = {x:423 + b.widthDifference  -10*this.RB_notch_width2*1/2*b.rate, y:800}
  

        
                if(this.RB_notch_height2.n%this.RB_notch_height2.d == 0) {
                  ele.R_RBW_Letter.changeletter('' + parseInt(this.RB_notch_height2.n/this.RB_notch_height2.d));
                  } else {
                  ele.R_RBW_Letter.changeletter(''+parseInt(this.RB_notch_height2.n/this.RB_notch_height2.d)+ '-'+this.RB_notch_height2.n%this.RB_notch_height2.d + '/' + this.RB_notch_height2.d);
                }
      
                if(this.RB_notch_width2.n%this.RB_notch_width2.d == 0) {
                  ele.R_RBH_Letter.changeletter('' + parseInt(this.RB_notch_width2.n/this.RB_notch_width2.d));
                  } else {
                  ele.R_RBH_Letter.changeletter(''+parseInt(this.RB_notch_width2.n/this.RB_notch_width2.d)+ '-'+this.RB_notch_width2.n%this.RB_notch_width2.d + '/' + this.RB_notch_width2.d);
                }
  


            


                b.CRBW_Group = {x:450 + b.widthDifference , y:886-10*b.rate*(this.RB_notch_height2+this.RB_notch_height1)/2}
                b.CRBH_Group = {x:423 + b.widthDifference - 10*((this.RB_notch_width1-this.RB_notch_width2)/2+this.RB_notch_width2)*b.rate , y:800}
              


                this.temp_RB_notch_width = math.subtract(this.RB_notch_width1,this.RB_notch_width2)
                this.temp_RB_notch_height = math.subtract(this.RB_notch_height1,this.RB_notch_height2)

               
              
    
                if(this.temp_RB_notch_height.n%this.temp_RB_notch_height.d == 0) {
                  ele.C_RBW_Letter.changeletter('' + parseInt(this.temp_RB_notch_height.n/this.temp_RB_notch_height.d));
                  } else {
                  ele.C_RBW_Letter.changeletter(''+parseInt(this.temp_RB_notch_height.n/this.temp_RB_notch_height.d)+ '-'+this.temp_RB_notch_height.n%this.temp_RB_notch_height.d + '/' + this.temp_RB_notch_height.d);
                }
      
                if(this.temp_RB_notch_width.n%this.temp_RB_notch_width.d == 0) {
                  ele.C_RBH_Letter.changeletter('' + parseInt(this.temp_RB_notch_width.n/this.temp_RB_notch_width.d));
                  } else {
                  ele.C_RBH_Letter.changeletter(''+parseInt(this.temp_RB_notch_width.n/this.temp_RB_notch_width.d)+ '-'+this.temp_RB_notch_width.n%this.temp_RB_notch_width.d + '/' + this.temp_RB_notch_width.d);
                }


  
              } else {
                ele.RB_notch_width_path2.drawPath(b.init2d_pos)
                ele.RB_notch_height_path2.drawPath(b.init2d_pos)
              }
            }
          
            b.dis_upWidth =math.subtract( math.subtract(ele.up_Widthletter.returnValue(),this.LT_notch_width1),this.RT_notch_width1)
  
            b.dis_leftHeight = math.subtract( math.subtract(ele.left_Heightletter.returnValue(),this.LT_notch_height1),this.LB_notch_height1)
  
            b.dis_rightHeight = math.subtract(math.subtract(ele.right_Heightletter.returnValue(),this.RT_notch_height1),this.RB_notch_height1)
  
            b.dis_downWidth = math.subtract(math.subtract(ele.down_Widthletter.returnValue(),this.LB_notch_width1),this.RB_notch_width1)
  
  
            b.draw()
         }
  
      }
  