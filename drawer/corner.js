function corner() {

    this.Handle = "corner";

    this.draw = function(context) {

      var simpleParameter = [];
      simpleParameter = context.Parameters.filter((parameter, i) => { 
       return parameter.ParameterName === 'corner';
   })
     this.parameter = simpleParameter[0]


      this.c_luWidth = this.parameter.value[0].width;
      
      this.c_luHeight = this.parameter.value[0].height;
      
      this.c_ruWidth = this.parameter.value[1].width;

      this.c_ruHeight = this.parameter.value[1].height;

      this.c_lbWidth = this.parameter.value[2].width;
     
      this.c_lbHeight = this.parameter.value[2].height;

      this.c_rbWidth = this.parameter.value[3].width;

      this.c_rbHeight = this.parameter.value[3].height;
     


      var b = new initDraw(context);
      var ele = new definitionObject();

      // letter
      b.downletter = {x:ele.downmainGroup.getPosition().x +(this.c_lbWidth-this.c_rbWidth)*10*b.rate/2,y:ele.downmainGroup.getPosition().y}
      b.downnoteletter =  {x:ele.downnote_Group.getPosition().x +(this.c_lbWidth-this.c_rbWidth)*10*b.rate/2,y:ele.downnote_Group.getPosition().y}

      b.upletter = {x:ele.upmainGroup.getPosition().x + (this.c_luWidth - this.c_ruWidth ) *10*b.rate/2 , y: ele.upmainGroup.getPosition().y}
      b.topnoteletter = {x:ele.topnote_Group.getPosition().x + (this.c_luWidth - this.c_ruWidth ) *10*b.rate/2 , y: ele.topnote_Group.getPosition().y}
    
      b.leftletter = {x:ele.leftmainGroup.getPosition().x,  y:ele.leftmainGroup.getPosition().y + (this.c_luHeight - this.c_lbHeight)*10*b.rate/2}
      b.leftnoteletter ={x:ele.leftnote_Group.getPosition().x,  y:ele.leftnote_Group.getPosition().y + (this.c_luHeight - this.c_lbHeight)*10*b.rate/2}
    
      b.rightletter = {x:ele.rightmainGroup.getPosition().x , y:ele.rightmainGroup.getPosition().y+ (this.c_ruHeight - this.c_rbHeight)*10*b.rate/2}
      b.rightnoteletter = {x:ele.rightnote_Group.getPosition().x , y:ele.rightnote_Group.getPosition().y+ (this.c_ruHeight - this.c_rbHeight)*10*b.rate/2}


      // mainline
      b.upline_pos =  [{x: ele.upLine.getPosition()[0].x + 10* this.c_luWidth * b.rate , y:ele.upLine.getPosition()[0].y}, {x:ele.upLine.getPosition()[1].x -  10 * this.c_ruWidth * b.rate, y:ele.upLine.getPosition()[1].y},]
      b.downline_pos =  [{x:ele.downLine.getPosition()[0].x + 10 * b.rate * this.c_lbWidth, y:ele.downLine.getPosition()[0].y},{x:ele.downLine.getPosition()[1].x - 10 * this.c_rbWidth * b.rate, y:ele.downLine.getPosition()[1].y},]
      b.leftline_pos =  [ {x:ele.leftLine.getPosition()[0].x, y:ele.leftLine.getPosition()[0].y + 10 * b.rate * this.c_luHeight}, {x:ele.leftLine.getPosition()[1].x, y:ele.leftLine.getPosition()[1].y - 10 * b.rate * this.c_lbHeight},]
      b.rightline_pos = [{x:ele.rightLine.getPosition()[0].x, y:ele.rightLine.getPosition()[0].y + 10 * b.rate * this.c_ruHeight},{x:ele.rightLine.getPosition()[1].x, y: ele.rightLine.getPosition()[1].y - 10 * b.rate * this.c_rbHeight},]
 
      b.logoMove =  {x:b.leftline_pos[1].x + 20, y:b.leftline_pos[1].y - 30}


      //  arrow
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


  // corner line && arrow

      if(this.c_luWidth || this.c_luHeight) {
       
        b.luRectmove = b.initSignle_pos;
       
        b.CL_upArrowline = [{x: 163, y:165}, {x:b.upline_pos[0].x , y:165},]
        b.CL_ulArrowP = [{x:163, y:175}, {x:163, y:155},]
        b.CL_ulTip = {x:163, y:165}
        b.CL_urTip = {x:b.upline_pos[0].x, y:165};
            
        b.CU_lArrowline =[{x:52, y:195}, {x:52, y:b.leftline_pos[0].y},]
        b.CU_lfupArrowP =[{x:40, y:195}, {x:65, y:195},]
        b.CU_lfupTip = {x:52, y:195}
        b.CU_lfdownTip = {x:52, y:b.leftline_pos[0].y}

        b.CLUW_Group = {x:133 + 10 * b.rate/2 * this.c_luWidth , y:130}
        b.CLUH_Group = {x:15 , y:26 + 10 *b.rate*this.c_luHeight/2}

        if(this.c_luWidth.n%this.c_luWidth.d == 0) {
          ele.C_LUW_Letter.changeletter('' + parseInt(this.c_luWidth.n/this.c_luWidth.d));
          } else {
          ele.C_LUW_Letter.changeletter(''+parseInt(this.c_luWidth.n/this.c_luWidth.d)+ '-'+this.c_luWidth.n%this.c_luWidth.d + '/' + this.c_luWidth.d);
        }

        if(this.c_luHeight.n%this.c_luHeight.d == 0) {
          ele.C_LUH_Letter.changeletter('' + parseInt(this.c_luHeight.n/this.c_luHeight.d));
          } else {
          ele.C_LUH_Letter.changeletter(''+parseInt(this.c_luHeight.n/this.c_luHeight.d)+ '-'+this.c_luHeight.n%this.c_luHeight.d + '/' + this.c_luHeight.d);
        }

        this.cl_uline =  [{x:b.upline_pos[0].x, y:195},{x:163, y:b.leftline_pos[0].y},]
       
        ele.CL_uline.drawPath(this.cl_uline);
       
      } else {
        this.cl_uline =  b.init2d_pos
        ele.CL_uline.drawPath(this.cl_uline)

      }

      if(this.c_ruWidth || this.c_ruHeight) {

        b.ruRectmove = b.initSignle_pos;
        b.CR_upArrowline =  [{x:b.upline_pos[1].x, y:165}, {x:443 + b.widthDifference, y:165},]
        b.CR_ulArrowP = [{x:443 + b.widthDifference, y:175}, {x:443 + b.widthDifference, y:155},]
        b.CR_ulTip = {x:b.upline_pos[1].x, y:165}
        b.CR_urTip = {x:443 + b.widthDifference , y:165}


        b.CU_rArrowline =[{x:b.rArrowline_pos[0].x, y:195}, {x:b.rArrowline_pos[1].x, y:b.rightline_pos[0].y},]
        b.CU_rgupArrowP = [{x:b.rArrowline_pos[0].x-10, y:195}, {x:b.rArrowline_pos[0].x+10, y:195},]
        b.CU_rgupTip = {x:b.rArrowline_pos[0].x, y:195}
        b.CU_rgdownTip = {x:b.rArrowline_pos[0].x, y:b.rightline_pos[0].y}
    
        
        b.CRUW_Group = {x:412 + b.widthDifference - 10 * this.c_ruWidth * b.rate/2 , y:130}
        b.CRUH_Group = {x:485 + b.widthDifference , y:26 + 10 * b.rate * this.c_ruHeight / 2}

        if(this.c_ruWidth.n%this.c_ruWidth.d == 0) {
          ele.C_RUW_Letter.changeletter('' + parseInt(this.c_ruWidth.n/this.c_ruWidth.d));
          } else {
          ele.C_RUW_Letter.changeletter(''+parseInt(this.c_ruWidth.n/this.c_ruWidth.d)+ '-'+this.c_ruWidth.n%this.c_ruWidth.d + '/' + this.c_ruWidth.d);
        }

        if(this.c_ruHeight.n%this.c_ruHeight.d == 0) {
          ele.C_RUH_Letter.changeletter('' + parseInt(this.c_ruHeight.n/this.c_ruHeight.d));
          } else {
          ele.C_RUH_Letter.changeletter(''+parseInt(this.c_ruHeight.n/this.c_ruHeight.d)+ '-'+this.c_ruHeight.n%this.c_ruHeight.d + '/' + this.c_ruHeight.d);
        }

        this.cr_uline = [{x:b.upline_pos[1].x, y:195},{x:443 + b.widthDifference, y:b.rightline_pos[0].y},]
        ele.CR_uline.drawPath(this.cr_uline);

      } else {
        this.cr_uline =  b.init2d_pos
        ele.CR_uline.drawPath(this.cr_uline)

      }


      if(this.c_lbWidth || this.c_lbHeight) {
        b.lbRectmove = b.initSignle_pos;

        b.CD_lArrowline = [{x:52, y:905}, {x:52, y:b.leftline_pos[1].y},]
        b.CD_lfdownArrowP =[{x:40, y:905}, {x:65, y:905},]
        b.CD_lfupTip = {x:52, y:b.leftline_pos[1].y}
        b.CD_lfdownTip = {x:52, y:905}

        b.CL_downArrowline = [{x:163, y:935}, {x:b.downline_pos[0].x, y:935},]
        b.CL_dlArrowP = [{x:163, y:945}, {x:163, y:925},]
        b.CL_dlTip = {x:163, y:935}
        b.CL_drTip = {x:b.downline_pos[0].x, y:935}

        
        b.CLBW_Group = {x:133 + 10*b.rate*this.c_lbWidth/2 , y:933}
        b.CLBH_Group = {x:15 , y:734 - 10 * b.rate * this.c_lbHeight/2}

        if(this.c_lbWidth.n%this.c_lbWidth.d == 0) {
          ele.C_LBW_Letter.changeletter('' + parseInt(this.c_lbWidth.n/this.c_lbWidth.d));
          } else {
          ele.C_LBW_Letter.changeletter(''+parseInt(this.c_lbWidth.n/this.c_lbWidth.d)+ '-'+this.c_lbWidth.n%this.c_lbWidth.d + '/' + this.c_lbWidth.d);
        }

        if(this.c_lbHeight.n%this.c_lbHeight.d == 0) {
          ele.C_LBH_letter.changeletter('' + parseInt(this.c_lbHeight.n/this.c_lbHeight.d));
          } else {
          ele.C_LBH_letter.changeletter(''+parseInt(this.c_lbHeight.n/this.c_lbHeight.d)+ '-'+this.c_lbHeight.n%this.c_lbHeight.d + '/' + this.c_lbHeight.d);
        }
          this.cl_dline = [{x:163, y:b.leftline_pos[1].y},{x:b.downline_pos[0].x, y:905}]
          ele.CL_dline.drawPath(this.cl_dline);


      } else {
        this.cl_dline =  b.init2d_pos
        ele.CL_dline.drawPath(this.cl_dline)

      }


      if(this.c_rbWidth || this.c_rbHeight) {
        b.rbRectmove = b.initSignle_pos;

        b.CR_downArrowline = [{x:b.downline_pos[1].x, y:935}, {x:443 + b.widthDifference, y:935},]
        b.CR_dlArrowP = [{x:443 + b.widthDifference, y:945}, {x:443 + b.widthDifference, y:925},]
        b.CR_dlTip ={x:b.downline_pos[1].x, y:935}
        b.CR_drTip = {x:443 + b.widthDifference, y:935}
       
        b.CD_rArrowline = [{x:520 + b.widthDifference, y:905}, {x:520 + b.widthDifference, y:b.rightline_pos[1].y},]
        b.CD_rgdownArrowP = [{x:510 + b.widthDifference, y:905}, {x:530 + b.widthDifference, y:905},]
        b.CD_rgupTip = {x:520 + b.widthDifference, y:b.rightline_pos[1].y}
        b.CD_rgdownTip = {x:520 + b.widthDifference, y:905}

        b.CRBW_Group = {x:412 + b.widthDifference -10*this.c_rbWidth/2*b.rate, y:933}
        b.CRBH_Group = {x:485 + b.widthDifference , y:734-10*b.rate*this.c_rbHeight/2}

        if(this.c_rbWidth.n%this.c_rbWidth.d == 0) {
          ele.C_RBW_Letter.changeletter('' + parseInt(this.c_rbWidth.n/this.c_rbWidth.d));
          } else {
          ele.C_RBW_Letter.changeletter(''+parseInt(this.c_rbWidth.n/this.c_rbWidth.d)+ '-'+this.c_rbWidth.n%this.c_rbWidth.d + '/' + this.c_rbWidth.d);
        }

        if(this.c_rbHeight.n%this.c_rbHeight.d == 0) {
          ele.C_RBH_Letter.changeletter('' + parseInt(this.c_rbHeight.n/this.c_rbHeight.d));
          } else {
          ele.C_RBH_Letter.changeletter(''+parseInt(this.c_rbHeight.n/this.c_rbHeight.d)+ '-'+this.c_rbHeight.n%this.c_rbHeight.d + '/' + this.c_rbHeight.d);
        }

        
      this.cr_dline = [{x:443 + b.widthDifference, y:b.rightline_pos[1].y},{x:b.downline_pos[1].x, y:905},]
      ele.CR_dline.drawPath(this.cr_dline);
        
      } else {
        this.cr_dline =  b.init2d_pos
        ele.CR_dline.drawPath(this.cr_dline)

      }

      b.dis_upWidth =  math.subtract(ele.up_Widthletter.returnValue(),(this.c_luWidth+this.c_ruWidth))
      b.dis_downWidth =  math.subtract(ele.down_Widthletter.returnValue(),(this.c_lbWidth+this.c_rbWidth))
      b.dis_leftHeight = math.subtract(ele.left_Heightletter.returnValue(),(this.c_luHeight+this.c_lbHeight))
      b.dis_rightHeight = math.subtract(ele.right_Heightletter.returnValue(),(this.c_ruHeight+this.c_rbHeight))
      b.draw();

    }
  }