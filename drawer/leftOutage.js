function leftOutage() {

    this.Handle = "leftOutage";
    this.draw = function(context) {

      var simpleParameter = [];
      simpleParameter = context.Parameters.filter((parameter, i) => { 
       return parameter.ParameterName === 'leftOutage';
      })
      this.parameter = simpleParameter[0]

      this.LL_TopLeft = this.parameter.value[0].topLeft;
     
      this.LL_TopRight = this.parameter.value[0].topRight;
    
      this.LLL_inputE_Width_1 = this.parameter.value[1].width1;

      this.LLL_inputE_Width_2 = this.parameter.value[1].width2;

      this.LLL_inputE_Height = this.parameter.value[1].height;

      this.LLR_inputE_Width_1 =  this.parameter.value[2].width1;

      this.LLR_inputE_Width_2 = this.parameter.value[2].width2;

      this.LLR_inputE_Height = this.parameter.value[2].height;
   
      this.LRL_inputE_Width_1 =this.parameter.value[3].width1;

      this.LRL_inputE_Width_2 = this.parameter.value[3].width2;

      this.LRL_inputE_Height = this.parameter.value[3].height;

      this.LRR_inputE_Width_1 = this.parameter.value[4].width1;
    
      this.LRR_inputE_Width_2 = this.parameter.value[4].width2;

      this.LRR_inputE_Height =this.parameter.value[4].height;

      if(!$('#L_LUH_Group').length){

        var L_LUH_Group= makeSVG('g', { id :'L_LUH_Group', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
        document.getElementById('editor').appendChild(L_LUH_Group);
    
        var L_LUH_rect= makeSVG('rect', { width:"50", height:"40", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"none",'pointer-events':"all" });
        document.getElementById('L_LUH_Group').appendChild(L_LUH_rect);
    
        var L_LUH_letter= makeSVG('text', { id :'L_LUH_letter',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
        document.getElementById('L_LUH_Group').appendChild(L_LUH_letter);
  
      }
      if(!$('#L_LDH_Group').length){

        var L_LDH_Group= makeSVG('g', { id :'L_LDH_Group', transform : "translate(320000000, 23000000) rotate(-90 100 100)" });
        document.getElementById('editor').appendChild(L_LDH_Group);
    
        var L_LDH_rect= makeSVG('rect', { width:"50", height:"40", fill:"url(#mx-gradient-ffffff-1-ffffff-1-s-0)", stroke:"none",'pointer-events':"all" });
        document.getElementById('L_LDH_Group').appendChild(L_LDH_rect);
    
        var L_LDH_letter= makeSVG('text', { id :'L_LDH_letter',x:"28", y:"20", 'dominant-baseline':"middle", 'text-anchor':"middle", style:"font-size: 15px;"});
        document.getElementById('L_LDH_Group').appendChild(L_LDH_letter);
  
      }
 
      var L_LUH_Group = new Group('L_LUH_Group', 'vertical')

      var L_LUH_letter = new letter('L_LUH_letter');

      var L_LDH_Group = new Group('L_LDH_Group', 'vertical')

      var L_LDH_letter = new letter('L_LDH_letter');

      var b = new initDraw(context);
      var ele = new definitionObject();

      // signle
      if(this.LL_TopLeft) {
        // rect , leftLine,letter remove
        b.luRectmove = b.initSignle_pos;
        b.lbRectmove = b.initSignle_pos;
        b.leftline_pos = b.init2d_pos;
        b.leftnoteletter = b.initSignle_pos

        // b.rightline_pos = b.init2d_pos;

        b.downline_pos =  [{x:ele.downLine.getPosition()[0].x + 10 * b.rate * this.LL_TopLeft, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x, y:ele.downLine.getPosition()[1].y},]
        b.downletter = {x:ele.downmainGroup.getPosition().x +this.LL_TopLeft*10*b.rate/2, y: ele.downmainGroup.getPosition().y}
        b.downnoteletter= {x:ele.downnote_Group.getPosition().x +this.LL_TopLeft*10*b.rate/2, y: ele.downnote_Group.getPosition().y}
      
        b.logoMove =  {x:b.downline_pos[0].x + 20, y:b.downline_pos[1].y - 30}
       
       
        b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
        b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
        b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
        b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
        b.drTip_pos = {x:b.downline_pos[1].x, y:935};
      
        //  line
        this.cl_uline =  [{x:b.upline_pos[0].x, y:b.upline_pos[0].y},{x:b.downline_pos[0].x, y:b.downline_pos[0].y},]
        this.L_dot_Line = [{x:163,y:195},{x:163,y:905}]

        ele.L_dot_Line.drawPath(this.L_dot_Line)
        ele.CL_uline.drawPath(this.cl_uline);
        //  line
        b.CL_downArrowline = [{x:163, y:935}, {x:b.downline_pos[0].x, y:935},]
        b.CL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
        b.CL_dlTip = {x:163, y:935}
        b.CL_drTip = {x:b.downline_pos[0].x, y:935}
        b.CLBW_Group = {x:133 + 10*b.rate*this.LL_TopLeft/2 , y:933}

        if(this.LL_TopLeft.n%this.LL_TopLeft.d == 0) {
          ele.C_LBW_Letter.changeletter('' + parseInt(this.LL_TopLeft.n/this.LL_TopLeft.d));
          } else {
          ele.C_LBW_Letter.changeletter(''+parseInt(this.LL_TopLeft.n/this.LL_TopLeft.d)+ '-'+this.LL_TopLeft.n%this.LL_TopLeft.d + '/' + this.LL_TopLeft.d);
        }

      } 
      
      
      if(this.LL_TopRight) {
        // rect , leftLine remove
        b.luRectmove = b.initSignle_pos;
        b.lbRectmove = b.initSignle_pos;
        b.leftline_pos = b.init2d_pos;  
        b.leftnoteletter = b.initSignle_pos



        b.upline_pos =  [{x: ele.upLine.getPosition()[0].x + 10* this.LL_TopRight * b.rate , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x, y:ele.upLine.getPosition()[1].y},]
      
        b.upletter = {x:ele.upmainGroup.getPosition().x + this.LL_TopRight*10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
        b.topnoteletter = {x:ele.topnote_Group.getPosition().x + this.LL_TopRight*10*b.rate/2 , y: ele.topnote_Group.getPosition().y}


        b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
        b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
        b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
        b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
        b.urTip_pos = {x:b.upline_pos[1].x, y:165};
       
       
        b.centernotletter.x = ele.centerGroup.getPosition().x+(b.upline_pos[0].x-163)/2-20

        //  line
        this.cl_dline = [{x:b.downline_pos[0].x, y:b.downline_pos[0].y},{x:b.upline_pos[0].x, y:b.upline_pos[0].y}]
        this.L_dot_Line = [{x:163,y:195},{x:163,y:905}]
        
        ele.L_dot_Line.drawPath(this.L_dot_Line)
        ele.CL_dline.drawPath(this.cl_dline);

        // letter

        b.centernoteMove = {x:297 -11* ( b.centerNote.length-1)/2 + (b.upline_pos[0].x-163)/2-(443+b.widthDifference-ele.upLine.getPosition()[1].x)/2 + (b.widthDifference)/2,y:350};


        b.CL_upArrowline = [{x: 163, y:165}, {x:b.upline_pos[0].x , y:165},]
        b.CL_ulArrowP = [{x:163, y:175}, {x:163, y:155},]
        b.CL_ulTip = {x:163, y:165}
        b.CL_urTip = {x:b.upline_pos[0].x, y:165};
        b.CLUW_Group = {x:133 + 10 * b.rate/2 * this.LL_TopRight , y:130}


        if(this.LL_TopRight.n%this.LL_TopRight.d == 0) {
          ele.C_LUW_Letter.changeletter('' + parseInt(this.LL_TopRight.n/this.LL_TopRight.d));
          } else {
          ele.C_LUW_Letter.changeletter(''+parseInt(this.LL_TopRight.n/this.LL_TopRight.d)+ '-'+this.LL_TopRight.n%this.LL_TopRight.d + '/' + this.LL_TopRight.d);
        }
      }
     

      if(this.LLL_inputE_Width_1){

         // rect , leftLine,letter remove
        b.luRectmove = b.initSignle_pos;
        b.lbRectmove = b.initSignle_pos;
        b.leftline_pos = b.init2d_pos;
        b.leftnoteletter = b.initSignle_pos

        // change
        b.downline_pos =  [{x:ele.downLine.getPosition()[0].x + (this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate*10,y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x,y:ele.downLine.getPosition()[1].y}]
        b.downletter = {x:ele.downmainGroup.getPosition().x + (this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate*10/2, y: ele.downmainGroup.getPosition().y}
        b.downnoteletter = {x:ele.downnote_Group.getPosition().x + (this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate*10/2, y: ele.downnote_Group.getPosition().y}


        b.logoMove =  {x:b.downline_pos[0].x + 20, y:b.downline_pos[1].y - 30}


        b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
        b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
        b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
        b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
        b.drTip_pos = {x:b.downline_pos[1].x, y:935};

        b.centernotletter.x = ele.centerGroup.getPosition().x+(b.upline_pos[0].x-163)/2-20

  

        //first leftline
        b.CU_lArrowline =[{x:100, y:195}, {x:100, y:905-this.LLL_inputE_Height*10*b.rate},]
        b.CU_lfupArrowP =[{x:90, y:195}, {x:110, y:195},]
        b.CU_lfupTip = {x:100, y:195}
        b.CU_lfdownTip = {x:100, y:905-this.LLL_inputE_Height*b.rate*10}

        this.L_LUH_Group = {x:82 , y:20 +  (710 - this.LLL_inputE_Height*10*b.rate) / 2}
        L_LUH_Group.moveGroup(this.L_LUH_Group)

        this.tempHeight = math.subtract(ele.left_Heightletter.returnValue(),this.LLL_inputE_Height)
        if(this.tempHeight.n%this.tempHeight.d == 0) {
          L_LUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
          } else {
          L_LUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
        }


        b.RU_lArrowline =[{x:100, y:905}, {x:100, y:905-this.LLL_inputE_Height*10*b.rate},]
        b.RU_lfupArrowP =[{x:90, y:905}, {x:110, y:905},]
        b.extra_p2 =[{x:90,y:905-this.LLL_inputE_Height*b.rate*10},{x:110,y:905-this.LLL_inputE_Height*b.rate*10}]
        b.RU_lfupTip = {x:100, y:905-this.LLL_inputE_Height*b.rate*10}
        b.RU_lfdownTip = {x:100, y:905}
        this.L_LDH_Group = {x:82 , y:730-b.rate*10*this.LLL_inputE_Height/2}
        L_LDH_Group.moveGroup(this.L_LDH_Group)

        if(this.LLL_inputE_Height.n%this.LLL_inputE_Height.d == 0) {
          L_LDH_letter.changeletter('' + parseInt(this.LLL_inputE_Height.n/this.LLL_inputE_Height.d));
          } else {
            L_LDH_letter.changeletter(''+parseInt(this.LLL_inputE_Height.n/this.LLL_inputE_Height.d)+ '-'+this.LLL_inputE_Height.n%this.LLL_inputE_Height.d + '/' + this.LLL_inputE_Height.d);
        }


        b.CL_downArrowline = [{x:163, y:935}, {x:163+10*b.rate*this.LLL_inputE_Width_1, y:935},]
        b.CL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
        b.CL_dlTip = {x:163, y:935}
        b.CL_drTip = {x:163+10*b.rate*this.LLL_inputE_Width_1, y:935}
        b.CLBW_Group = {x:133 + this.LLL_inputE_Width_1 * b.rate * 10/2 , y:933}

        if(this.LLL_inputE_Width_1.n%this.LLL_inputE_Width_1.d == 0) {
          ele.C_LBW_Letter.changeletter('' + parseInt(this.LLL_inputE_Width_1.n/this.LLL_inputE_Width_1.d));
          } else {
          ele.C_LBW_Letter.changeletter(''+parseInt(this.LLL_inputE_Width_1.n/this.LLL_inputE_Width_1.d)+ '-'+this.LLL_inputE_Width_1.n%this.LLL_inputE_Width_1.d + '/' + this.LLL_inputE_Width_1.d);
        }


        b.RL_downArrowline = [{x:163+ 10*b.rate*this.LLL_inputE_Width_1, y:935}, {x:163+(this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate*10, y:935},]
        b.RL_dlArrowP = [{x:163+ 10*b.rate*this.LLL_inputE_Width_1, y:945}, {x:163+ 10*b.rate*this.LLL_inputE_Width_1, y:925},]
        b.RL_dlTip = {x:163+ 10*b.rate*this.LLL_inputE_Width_1, y:935}
        b.RL_drTip = {x:163+(this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate*10, y:935}
        b.RLBW_Group = {x:135+this.LLL_inputE_Width_1 * b.rate * 10 + this.LLL_inputE_Width_2*b.rate*10/2,y:933}

        if(this.LLL_inputE_Width_2.n%this.LLL_inputE_Width_2.d == 0) {
          ele.R_LBW_Letter.changeletter('' + parseInt(this.LLL_inputE_Width_2.n/this.LLL_inputE_Width_2.d));
          } else {
          ele.R_LBW_Letter.changeletter(''+parseInt(this.LLL_inputE_Width_2.n/this.LLL_inputE_Width_2.d)+ '-'+this.LLL_inputE_Width_2.n%this.LLL_inputE_Width_2.d + '/' + this.LLL_inputE_Width_2.d);
        }


        b.LLL_E_dot_Line_1 = [{x:163,y:195},{x:163,y:905-10*b.rate*this.LLL_inputE_Height}]                                
        b.LLL_E_dot_Line_2 = [{x:163+10*b.rate*this.LLL_inputE_Width_1,y:905 - this.LLL_inputE_Height*10*b.rate},{x: 163+10*b.rate*this.LLL_inputE_Width_1,y:905}]
        b.L_Elbow_1 = [{x:163,y:195},{x:163+10*b.rate*this.LLL_inputE_Width_1,y:905-this.LLL_inputE_Height*10*b.rate}]
        b.L_Elbow_2 = [{x:163+10*b.rate*this.LLL_inputE_Width_1,y:905-this.LLL_inputE_Height*10*b.rate},{x:163+10*(this.LLL_inputE_Width_1+this.LLL_inputE_Width_2)*b.rate,y:905}]

      }



      // *left-right elbow
      if(this.LLR_inputE_Width_1){

        // rect , leftLine,letter remove
       b.luRectmove = b.initSignle_pos;
       b.lbRectmove = b.initSignle_pos;
       b.leftline_pos = b.init2d_pos;
       b.leftnoteletter = b.initSignle_pos

       // change
       b.upline_pos = [{x:ele.upLine.getPosition()[0].x + this.LLR_inputE_Width_1*b.rate*10,y:ele.upLine.getPosition()[0].y},{x:ele.upLine.getPosition()[1].x,y:ele.upLine.getPosition()[1].y}]
       b.downline_pos =  [{x:ele.downLine.getPosition()[0].x +this.LLR_inputE_Width_2*b.rate*10,y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x,y:ele.downLine.getPosition()[1].y}]
       b.downletter = {x:ele.downmainGroup.getPosition().x + this.LLR_inputE_Width_2*b.rate*10/2, y: ele.downmainGroup.getPosition().y}
     
       b.logoMove =  {x:b.downline_pos[0].x + 20, y:b.downline_pos[1].y - 30}

       b.upletter = {x:ele.upmainGroup.getPosition().x+this.LLR_inputE_Width_1*b.rate*10/2,y:ele.upmainGroup.getPosition().y}
       b.topnoteletter  = {x:ele.topnote_Group.getPosition().x+this.LLR_inputE_Width_1*b.rate*10/2,y:ele.topnote_Group.getPosition().y}

       b.centernotletter.x = ele.centerGroup.getPosition().x+(b.upline_pos[0].x-163)/2-20


       b.downArrowline_pos =  [{x:b.downline_pos[0].x, y:935},  {x:b.downline_pos[1].x, y:935},]
       b.dlArrowP_pos = [{x:b.downline_pos[0].x, y:945},{x:b.downline_pos[0].x, y:925}]      
       b.drArrowP_pos = [{x:b.downline_pos[1].x, y:945},{x:b.downline_pos[1].x, y:925}]
       b.dlTip_pos = {x:b.downline_pos[0].x, y:935};
       b.drTip_pos = {x:b.downline_pos[1].x, y:935};

       b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
       b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
       b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
       b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
       b.urTip_pos = {x:b.upline_pos[1].x, y:165};

       //first leftline
       b.CU_lArrowline =[{x:100, y:195}, {x:100, y:905-this.LLR_inputE_Height*10*b.rate},]
       b.CU_lfupArrowP =[{x:90, y:195}, {x:110, y:195},]
       b.CU_lfupTip = {x:100, y:195}
       b.CU_lfdownTip = {x:100, y:905-this.LLR_inputE_Height*b.rate*10}
       this.L_LUH_Group = {x:82 , y:20 +  (710 - this.LLR_inputE_Height*10*b.rate) / 2}
       L_LUH_Group.moveGroup(this.L_LUH_Group)

       this.tempHeight = math.subtract(ele.left_Heightletter.returnValue(),this.LLR_inputE_Height)
       if(this.tempHeight.n%this.tempHeight.d == 0) {
        L_LUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
         } else {
        L_LUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
       }

      //  second leftline
       b.RU_lArrowline =[{x:100, y:905}, {x:100, y:905-this.LLR_inputE_Height*10*b.rate},]
       b.RU_lfupArrowP =[{x:90, y:905}, {x:110, y:905},]
       b.extra_p2 =[{x:90,y:905-this.LLR_inputE_Height*b.rate*10},{x:110,y:905-this.LLR_inputE_Height*b.rate*10}]
       b.RU_lfupTip = {x:100, y:905-this.LLR_inputE_Height*b.rate*10}
       b.RU_lfdownTip = {x:100, y:905}
       this.L_LDH_Group = {x:82 , y:730-b.rate*10*this.LLR_inputE_Height/2}
       L_LDH_Group.moveGroup(this.L_LDH_Group)

       if(this.LLR_inputE_Height.n%this.LLR_inputE_Height.d == 0) {
          L_LDH_letter.changeletter('' + parseInt(this.LLR_inputE_Height.n/this.LLR_inputE_Height.d));
         } else {
          L_LDH_letter.changeletter(''+parseInt(this.LLR_inputE_Height.n/this.LLR_inputE_Height.d)+ '-'+this.LLR_inputE_Height.n%this.LLR_inputE_Height.d + '/' + this.LLR_inputE_Height.d);
       }


      
       b.CL_downArrowline = [{x:163, y:165}, {x:163+10*b.rate*this.LLR_inputE_Width_1, y:165},]
       b.CL_dlArrowP = [{x:163, y:175}, {x:163, y:155},]
       b.CL_dlTip = {x:163, y:165}
       b.CL_drTip = {x:163+10*b.rate*this.LLR_inputE_Width_1, y:165}
       b.CLBW_Group = {x:135 + this.LLR_inputE_Width_1 * b.rate * 10/2 , y:130}

       if(this.LLR_inputE_Width_1.n%this.LLR_inputE_Width_1.d == 0) {
         ele.C_LBW_Letter.changeletter('' + parseInt(this.LLR_inputE_Width_1.n/this.LLR_inputE_Width_1.d));
         } else {
         ele.C_LBW_Letter.changeletter(''+parseInt(this.LLR_inputE_Width_1.n/this.LLR_inputE_Width_1.d)+ '-'+this.LLR_inputE_Width_1.n%this.LLR_inputE_Width_1.d + '/' + this.LLR_inputE_Width_1.d);
       }


       b.RL_downArrowline = [{x:163, y:935}, {x:163+this.LLR_inputE_Width_2*b.rate*10, y:935},]
       b.RL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
       b.RL_dlTip = {x:163, y:935}
       b.RL_drTip = {x:163+this.LLR_inputE_Width_2*b.rate*10, y:935}
       b.RLBW_Group = {x:135 + this.LLR_inputE_Width_2*b.rate*10/2,y:933}

       if(this.LLR_inputE_Width_2.n%this.LLR_inputE_Width_2.d == 0) {
         ele.R_LBW_Letter.changeletter('' + parseInt(this.LLR_inputE_Width_2.n/this.LLR_inputE_Width_2.d));
         } else {
         ele.R_LBW_Letter.changeletter(''+parseInt(this.LLR_inputE_Width_2.n/this.LLR_inputE_Width_2.d)+ '-'+this.LLR_inputE_Width_2.n%this.LLR_inputE_Width_2.d + '/' + this.LLR_inputE_Width_2.d);
       }


       b.LLL_E_dot_Line_1 = [{x:163,y:195},{x:163,y:905-10*b.rate*this.LLR_inputE_Height}]                                
       b.LLL_E_dot_Line_2 = [{x:163,y:905 - this.LLR_inputE_Height*10*b.rate},{x: 163,y:905}]
       b.L_Elbow_1 = [{x:163+10*b.rate*this.LLR_inputE_Width_1,y:195},{x:163,y:905-this.LLR_inputE_Height*10*b.rate}]
       b.L_Elbow_2 = [{x:163,y:905-this.LLR_inputE_Height*10*b.rate},{x:163+10*this.LLR_inputE_Width_2*b.rate,y:905}]

     }

      // *right-left elbow
      if(this.LRL_inputE_Width_1){

        // rect , leftLine,letter remove
       b.luRectmove = b.initSignle_pos;
       b.lbRectmove = b.initSignle_pos;
       b.leftline_pos = b.init2d_pos;
       b.leftnoteletter = b.initSignle_pos

       // change

      b.logoMove =  {x:b.downline_pos[0].x + 20, y:b.downline_pos[1].y - 30}

      
       b.leftletter = {x:ele.leftmainGroup.getPosition().x+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:ele.leftmainGroup.getPosition().y}
     
       b.upletter = {x:ele.upmainGroup.getPosition().x+(this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10/2,y:ele.upmainGroup.getPosition().y-25}
       b.topnoteletter = {x:ele.topnote_Group.getPosition().x+(this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10/2,y:ele.topnote_Group.getPosition().y}
     
     
       b.downletter = {x:ele.downmainGroup.getPosition().x,y:ele.downmainGroup.getPosition().y+30}
       b.downnoteletter = {x:ele.downnote_Group.getPosition().x,y:ele.downnote_Group.getPosition().y}

       b.centernotletter.x = ele.centerGroup.getPosition().x+(b.upline_pos[0].x-163)/2-20


       b.upline_pos = [{x:ele.upLine.getPosition()[0].x + (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:ele.upLine.getPosition()[0].y},{x:ele.upLine.getPosition()[1].x,y:ele.upLine.getPosition()[1].y}]

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

       b.lArrowline_pos =  [{x:ele.lArrowline.getPosition()[0].x+(this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:ele.lArrowline.getPosition()[0].y},{x:ele.lArrowline.getPosition()[1].x+(this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:ele.lArrowline.getPosition()[1].y}]
       b.lfupArrowP_pos = [{x:b.lArrowline_pos[0].x-10,y:b.lArrowline_pos[0].y},{x:b.lArrowline_pos[1].x+10,y:b.lArrowline_pos[0].y}]
       b.lfdownArrowP_pos =   [{x:b.lArrowline_pos[0].x-10,y:b.lArrowline_pos[1].y},{x:b.lArrowline_pos[1].x+10,y:b.lArrowline_pos[1].y}]
       b.lfupTip_pos = {x:b.lArrowline_pos[0].x, y:b.lArrowline_pos[0].y};
       b.lfdownTip_pos ={x:b.lArrowline_pos[1].x, y:b.lArrowline_pos[1].y};








       //first leftline
       b.CU_lArrowline =[{x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:195}, {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905-this.LRL_inputE_Height*10*b.rate},]
       b.CU_lfupArrowP =[{x:90+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:195}, {x:110+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:195},]
       b.CU_lfupTip = {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:195}
       b.CU_lfdownTip = {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905-this.LRL_inputE_Height*b.rate*10}
       this.L_LUH_Group = {x:82+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10 , y:20 +  (710 - this.LRL_inputE_Height*10*b.rate) / 2}
       L_LUH_Group.moveGroup(this.L_LUH_Group)

       this.tempHeight = math.subtract(ele.left_Heightletter.returnValue(),this.LRL_inputE_Height)
       if(this.tempHeight.n%this.tempHeight.d == 0) {
          L_LUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
         } else {
          L_LUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
       }

      //  second leftline
       b.RU_lArrowline =[{x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905}, {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905-this.LRL_inputE_Height*10*b.rate},]
       b.RU_lfupArrowP =[{x:90+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905}, {x:110+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905},]
       b.extra_p2 =[{x:90+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:905-this.LRL_inputE_Height*b.rate*10},{x:110+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:905-this.LRL_inputE_Height*b.rate*10}]
       b.RU_lfupTip = {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905-this.LRL_inputE_Height*b.rate*10}
       b.RU_lfdownTip = {x:100+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:905}
       this.L_LDH_Group = {x:82+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10 , y:730-b.rate*10*this.LRL_inputE_Height/2}
       L_LDH_Group.moveGroup(this.L_LDH_Group)

       if(this.LRL_inputE_Height.n%this.LRL_inputE_Height.d == 0) {
          L_LDH_letter.changeletter('' + parseInt(this.LRL_inputE_Height.n/this.LRL_inputE_Height.d));
         } else {
          L_LDH_letter.changeletter(''+parseInt(this.LRL_inputE_Height.n/this.LRL_inputE_Height.d)+ '-'+this.LRL_inputE_Height.n%this.LRL_inputE_Height.d + '/' + this.LRL_inputE_Height.d);
       }


      
       b.CL_downArrowline = [{x:163+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:165}, {x:163+10*b.rate*this.LRL_inputE_Width_2, y:165},]
       b.CL_dlArrowP = [{x:163+10*b.rate*this.LRL_inputE_Width_2, y:175}, {x:163+10*b.rate*this.LRL_inputE_Width_2, y:155},]
       b.CL_dlTip = {x:163+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10, y:165}
       b.CL_drTip = {x:163+10*b.rate*this.LRL_inputE_Width_2, y:165}
       b.CLBW_Group = {x:135+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1/2) * b.rate * 10 , y:130}

       if(this.LRL_inputE_Width_1.n%this.LRL_inputE_Width_1.d == 0) {
         ele.C_LBW_Letter.changeletter('' + parseInt(this.LRL_inputE_Width_1.n/this.LRL_inputE_Width_1.d));
         } else {
         ele.C_LBW_Letter.changeletter(''+parseInt(this.LRL_inputE_Width_1.n/this.LRL_inputE_Width_1.d)+ '-'+this.LRL_inputE_Width_1.n%this.LRL_inputE_Width_1.d + '/' + this.LRL_inputE_Width_1.d);
       }


       b.RL_downArrowline = [{x:163, y:935}, {x:163+this.LRL_inputE_Width_2*b.rate*10, y:935},]
       b.RL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
       b.RL_dlTip = {x:163, y:935}
       b.RL_drTip = {x:163+this.LRL_inputE_Width_2*b.rate*10, y:935}
       b.RLBW_Group = {x:135 + this.LRL_inputE_Width_2*b.rate*10/2,y:933}

       if(this.LRL_inputE_Width_2.n%this.LRL_inputE_Width_2.d == 0) {
         ele.R_LBW_Letter.changeletter('' + parseInt(this.LRL_inputE_Width_2.n/this.LRL_inputE_Width_2.d));
         } else {
         ele.R_LBW_Letter.changeletter(''+parseInt(this.LRL_inputE_Width_2.n/this.LRL_inputE_Width_2.d)+ '-'+this.LRL_inputE_Width_2.n%this.LRL_inputE_Width_2.d + '/' + this.LRL_inputE_Width_2.d);
       }


       b.LLL_E_dot_Line_1 = [{x:163+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:195},{x:163+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:905-10*b.rate*this.LRL_inputE_Height}]                                
       b.LLL_E_dot_Line_2 = [{x:163,y:905 - this.LRL_inputE_Height*10*b.rate},{x: 163,y:905}]
       b.L_Elbow_1 = [{x:163+ (this.LRL_inputE_Width_2-this.LRL_inputE_Width_1)*b.rate*10,y:195},{x:163+10*b.rate*this.LRL_inputE_Width_2,y:905-this.LRL_inputE_Height*10*b.rate}]
       b.L_Elbow_2 = [{x:163+10*b.rate*this.LRL_inputE_Width_2,y:905-this.LRL_inputE_Height*10*b.rate},{x:163,y:905}]

     }


     //right-right elbow
     if(this.LRR_inputE_Width_1){

      // rect , leftLine,letter remove
     b.luRectmove = b.initSignle_pos;
     b.lbRectmove = b.initSignle_pos;
     b.leftline_pos = b.init2d_pos;
     b.leftnoteletter = b.initSignle_pos


     // change
     b.upline_pos = [{x:ele.upLine.getPosition()[0].x + (this.LRR_inputE_Width_1+this.LRR_inputE_Width_2)*b.rate*10,y:ele.upLine.getPosition()[0].y},{x:ele.upLine.getPosition()[1].x,y:ele.upLine.getPosition()[1].y}]
     b.upletter = {x:ele.upmainGroup.getPosition().x+(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2)*b.rate*10/2,y:ele.upmainGroup.getPosition().y}
     b.topnoteletter = {x:ele.topnote_Group.getPosition().x+(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2)*b.rate*10/2,y:ele.topnote_Group.getPosition().y}
  
     b.centernotletter.x = ele.centerGroup.getPosition().x+(b.upline_pos[0].x-163)/2-20
   
 
     b.upArrowline_pos =  [{x:b.upline_pos[0].x, y:165},  {x:b.upline_pos[1].x, y:165},] 
     b.ulArrowP_pos = [{x:b.upline_pos[0].x, y:175},{x:b.upline_pos[0].x, y:155}]
     b.urArrowP_pos = [{x:b.upline_pos[1].x, y:175},{x:b.upline_pos[1].x, y:155}]
     b.ulTip_pos = {x:b.upline_pos[0].x, y:165};
     b.urTip_pos = {x:b.upline_pos[1].x, y:165};

     //first leftline
     b.CU_lArrowline =[{x:100, y:195}, {x:100, y:905-this.LRR_inputE_Height*10*b.rate},]
     b.CU_lfupArrowP =[{x:90, y:195}, {x:110, y:195},]
     b.CU_lfupTip = {x:100, y:195}
     b.CU_lfdownTip = {x:100, y:905-this.LRR_inputE_Height*b.rate*10}
     this.L_LUH_Group = {x:82 , y:20 +  (710 - this.LRR_inputE_Height*10*b.rate) / 2}
     L_LUH_Group.moveGroup(this.L_LUH_Group)

     this.tempHeight = math.subtract(ele.left_Heightletter.returnValue(),this.LRR_inputE_Height)
     if(this.tempHeight.n%this.tempHeight.d == 0) {
        L_LUH_letter.changeletter('' + parseInt(this.tempHeight.n/this.tempHeight.d));
       } else {
        L_LUH_letter.changeletter(''+parseInt(this.tempHeight.n/this.tempHeight.d)+ '-'+this.tempHeight.n%this.tempHeight.d + '/' + this.tempHeight.d);
     }

    //  second leftline
     b.RU_lArrowline =[{x:100, y:905}, {x:100, y:905-this.LRR_inputE_Height*10*b.rate},]
     b.RU_lfupArrowP =[{x:90, y:905}, {x:110, y:905},]
     b.extra_p2 =[{x:90,y:905-this.LRR_inputE_Height*b.rate*10},{x:110,y:905-this.LRR_inputE_Height*b.rate*10}]
     b.RU_lfupTip = {x:100, y:905-this.LRR_inputE_Height*b.rate*10}
     b.RU_lfdownTip = {x:100, y:905}
     this.L_LDH_Group= {x:82 , y:730-b.rate*10*this.LRR_inputE_Height/2}
     L_LDH_Group.moveGroup(this.L_LDH_Group)

     if(this.LRR_inputE_Height.n%this.LRR_inputE_Height.d == 0) {
      L_LDH_letter.changeletter('' + parseInt(this.LRR_inputE_Height.n/this.LRR_inputE_Height.d));
       } else {
        L_LDH_letter.changeletter(''+parseInt(this.LRR_inputE_Height.n/this.LRR_inputE_Height.d)+ '-'+this.LRR_inputE_Height.n%this.LRR_inputE_Height.d + '/' + this.LRR_inputE_Height.d);
     }


    
     b.CL_downArrowline = [{x:163+10*b.rate*this.LRR_inputE_Width_2, y:165}, {x:163+10*b.rate*(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2), y:165},]
     b.CL_dlArrowP = [{x:163+10*b.rate*this.LRR_inputE_Width_2, y:175}, {x:163+10*b.rate*this.LRR_inputE_Width_2, y:155},]
     b.CL_dlTip = {x:163+10*b.rate*this.LRR_inputE_Width_2, y:165}
     b.CL_drTip = {x:163+10*b.rate*(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2), y:165}
     b.CLBW_Group = {x:135 + (this.LRR_inputE_Width_2+this.LRR_inputE_Width_1/2) * b.rate * 10, y:130}

     if(this.LRR_inputE_Width_1.n%this.LRR_inputE_Width_1.d == 0) {
       ele.C_LBW_Letter.changeletter('' + parseInt(this.LRR_inputE_Width_1.n/this.LRR_inputE_Width_1.d));
       } else {
       ele.C_LBW_Letter.changeletter(''+parseInt(this.LRR_inputE_Width_1.n/this.LRR_inputE_Width_1.d)+ '-'+this.LRR_inputE_Width_1.n%this.LRR_inputE_Width_1.d + '/' + this.LRR_inputE_Width_1.d);
     }


     b.RL_downArrowline = [{x:163, y:165}, {x:163+(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2)*b.rate*10, y:165},]
     b.RL_dlArrowP = [{x:163, y:175}, {x:163, y:155},]
     b.RL_dlTip = {x:163, y:165}
     b.RL_drTip = {x:163+this.LRR_inputE_Width_2*b.rate*10, y:165}
     b.RLBW_Group = {x:135+this.LRR_inputE_Width_2/2*b.rate*10,y:130}

     if(this.LRR_inputE_Width_2.n%this.LRR_inputE_Width_2.d == 0) {
       ele.R_LBW_Letter.changeletter('' + parseInt(this.LRR_inputE_Width_2.n/this.LRR_inputE_Width_2.d));
       } else {
       ele.R_LBW_Letter.changeletter(''+parseInt(this.LRR_inputE_Width_2.n/this.LRR_inputE_Width_2.d)+ '-'+this.LRR_inputE_Width_2.n%this.LRR_inputE_Width_2.d + '/' + this.LRR_inputE_Width_2.d);
     }


     b.LLL_E_dot_Line_1 = [{x:163+this.LRR_inputE_Width_2*10*b.rate,y:195},{x:163+this.LRR_inputE_Width_2*10*b.rate,y:905-10*b.rate*this.LRR_inputE_Height}]                                
     b.LLL_E_dot_Line_2 = [{x:163,y:905 - this.LRR_inputE_Height*10*b.rate},{x: 163,y:905}]
     b.L_Elbow_1 = [{x:163+10*b.rate*(this.LRR_inputE_Width_1+this.LRR_inputE_Width_2),y:195},{x:163+this.LRR_inputE_Width_2*10*b.rate,y:905-this.LRR_inputE_Height*10*b.rate}]
     b.L_Elbow_2 = [{x:163+10*b.rate*this.LRR_inputE_Width_2,y:905-this.LRR_inputE_Height*10*b.rate},{x:163,y:905}]

   }

      
      b.dis_leftHeight = ele.left_Heightletter.returnValue()
      b.dis_rightHeight = ele.right_Heightletter.returnValue()
      b.dis_upWidth = math.subtract(ele.up_Widthletter.returnValue(),(this.LL_TopRight+this.LLR_inputE_Width_1+this.LRR_inputE_Width_1+this.LRR_inputE_Width_2))
      b.dis_downWidth = math.subtract(ele.down_Widthletter.returnValue(),(this.LLL_inputE_Width_1+this.LLL_inputE_Width_2+this.LL_TopLeft+this.LLR_inputE_Width_2))
     

      b.draw();

    }
  }