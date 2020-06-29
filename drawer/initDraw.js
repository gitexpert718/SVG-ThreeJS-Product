var globalRate = 1;

function initDraw(context) {
      

    var simpleParameter = {};
     simpleParameter = context.Parameters.filter((parameter, i) => { 
      return parameter.ParameterName === 'simeplePanel';
  })
     this.parameter = simpleParameter[0]


        var ele = new definitionObject();

        this.width = this.parameter.value[0].width
        this.height = this.parameter.value[0].height;
        this.centerNote = this.parameter.value[1].centerNote;
        
        
        // parameter calculation
        this.calHeight = 10 * this.height;
        this.rate  = oriHeight/this.calHeight;
        this.calWidth = 10 * this.width * this.rate;

        // let checkWidth = (this.calWidth > 650);
        // if(checkWidth) {
        //   console.log("this.rate", this.rate);
        //   this.rate = this.rate / (this.calWidth/650);
        //   this.calWidth = 650;
        // }

        this.widthDifference = this.calWidth - oriWidth;

        this.upWidth = this.width;
        this.downWidth = this.width;
        this.leftHeight = this.height;
        this.rightHeight = this.height;

       
        this.dis_upWidth = this.width;
        this.dis_downWidth = this.width;
        this.dis_leftHeight = this.height;
        this.dis_rightHeight = this.height;
      

        this.init3d_pos = [{x:-10000, y:0},  {x:-10000 , y:0},{x:-10000, y:0}]
        this.init2d_pos = [{x:-10000, y:0},  {x:-10000 , y:0},]
        this.initSignle_pos = {x:-10000, y:-10000};

        // main line 
        this.upline_pos = ele.upLine.getPosition()
        this.downline_pos =ele.downLine.getPosition()
        this.leftline_pos = ele.leftLine.getPosition()
        this.rightline_pos = ele.rightLine.getPosition()

        // main arrow
        this.upArrowline_pos =  ele.upArrowline.getPosition()
        this.ulArrowP_pos = ele.ulArrowP.getPosition()
        this.urArrowP_pos = ele.urArrowP.getPosition()
        this.ulTip_pos = ele.ulTip.getPosition()
        this.urTip_pos = ele.urTip.getPosition()

        this.downArrowline_pos = ele.downArrowline.getPosition()

        this.dlArrowP_pos = ele.dlArrowP.getPosition()

        this.drArrowP_pos = ele.drArrowP.getPosition()

        this.dlTip_pos = ele.dlTip.getPosition()

        this.drTip_pos = ele.drTip.getPosition()


        this.rArrowline_pos =  ele.rArrowline.getPosition()
        this.rgupArrowP_pos = ele.rgupArrowP.getPosition();
        this.rgdownArrowP_pos =ele.rgdownArrowP.getPosition();
        this.rgupTip_pos = ele.rgupTip.getPosition();
        this.rgdownTip_pos =ele.rgdownTip.getPosition();


        this.lArrowline_pos =ele.lArrowline.getPosition();
        this.lfupArrowP_pos = ele.lfupArrowP.getPosition();
        this.lfdownArrowP_pos = ele.lfdownArrowP.getPosition();
        this.lfupTip_pos = ele.lfupTip.getPosition();
        this.lfdownTip_pos = ele.lfdownTip.getPosition();

        // group

        this.upletter = ele.upmainGroup.getPosition()
        this.downletter = ele.downmainGroup.getPosition();
        this.rightletter =ele.rightmainGroup.getPosition();
        this.leftletter = ele.leftmainGroup.getPosition()

        this.centernotletter = ele.centerGroup.getPosition()
       
        this.topnoteletter = ele.topnote_Group.getPosition()
        this.downnoteletter = ele.downnote_Group.getPosition()
        this.leftnoteletter = ele.leftnote_Group.getPosition()
        this.rightnoteletter = ele.rightnote_Group.getPosition()

        // letters
        this.frontletterMove = {x:303 + (this.widthDifference)/2 - 10*4/2, y:115};
        this.backletterMove = {x:303 + (this.widthDifference)/2 - 10*4/2, y:20};
      
      
        this.logoMove = ele.logoNote_Group.getPosition()
        //  {x:ele.leftLine.getPosition()[1].x + 20, y:ele.leftLine.getPosition()[1].y - 20}
       




        this.CLUW_Group = ele.CLUW_Group.getPosition();
        this.CRUW_Group = ele.CRUW_Group.getPosition();
        this.CLBW_Group = ele.CLBW_Group.getPosition();
        this.CRBW_Group = ele.CRBW_Group.getPosition();
  
        this.CLUH_Group = ele.CLUH_Group.getPosition();
        this.CLBH_Group = ele.CLBH_Group.getPosition();
        this.CRUH_Group = ele.CRUH_Group.getPosition();
        this.CRBH_Group = ele.CRBH_Group.getPosition();

        this.RLUW_Group = ele.RLUW_Group.getPosition();
        this.RRUW_Group = ele.RRUW_Group.getPosition();
        this.RLBW_Group = ele.RLBW_Group.getPosition();
        this.RRBW_Group = ele.RRBW_Group.getPosition();
  
        this.RLUH_Group = ele.RLUH_Group.getPosition();
        this.RLBH_Group = ele.RLBH_Group.getPosition();
        this.RRUH_Group = ele.RRUH_Group.getPosition();
        this.RRBH_Group = ele.RRBH_Group.getPosition();
      

        // rect
        this.ruRectmove = {x:ele.ruRect.getPosition().x, y:ele.ruRect.getPosition().y};
        this.rbRectmove = {x:ele.rbRect.getPosition().x, y:ele.rbRect.getPosition().y};
        this.luRectmove = {x:ele.luRect.getPosition().x, y:ele.luRect.getPosition().y};
        this.lbRectmove = {x:ele.lbRect.getPosition().x, y:ele.lbRect.getPosition().y};

        this.ruRectmove1 = {x:ele.ruRect1.getPosition().x, y:ele.ruRect1.getPosition().y};
        this.rbRectmove1 = {x:ele.rbRect1.getPosition().x, y:ele.rbRect1.getPosition().y};
        this.luRectmove1 = {x:ele.luRect1.getPosition().x, y:ele.luRect1.getPosition().y};
        this.lbRectmove1 = {x:ele.lbRect1.getPosition().x, y:ele.lbRect1.getPosition().y};


        // corner && radius
        this.CL_upArrowline = ele.CL_upArrowline.getPosition();
        this.CL_ulArrowP = ele.CL_ulArrowP.getPosition();
        this.CL_ulTip = ele.CL_ulTip.getPosition();
        this.CL_urTip = ele.CL_urTip.getPosition();
  
        this.CR_upArrowline = ele.CR_upArrowline.getPosition();
        this.CR_ulArrowP = ele.CR_ulArrowP.getPosition();
        this.CR_ulTip = ele.CR_ulTip.getPosition();
        this.CR_urTip = ele.CR_urTip.getPosition();
  
         // down
         this.CL_downArrowline = ele.CL_downArrowline.getPosition();
         this.CL_dlArrowP = ele.CL_dlArrowP.getPosition();
         this.CL_dlTip = ele.CL_dlTip.getPosition();
         this.CL_drTip = ele.CL_drTip.getPosition();
  
         this.CR_downArrowline = ele.CR_downArrowline.getPosition();
         this.CR_dlArrowP = ele.CR_dlArrowP.getPosition();
         this.CR_dlTip = ele.CR_dlTip.getPosition();
         this.CR_drTip = ele.CR_drTip.getPosition();
  
          // left
        this.CU_lArrowline = ele.CU_lArrowline.getPosition();
        this.CU_lfupArrowP = ele.CU_lfupArrowP.getPosition();
        this.CU_lfupTip = ele.CU_lfupTip.getPosition();
        this.CU_lfdownTip = ele.CU_lfdownTip.getPosition();
  
        this.CD_lArrowline = ele.CD_lArrowline.getPosition();
        this.CD_lfdownArrowP = ele.CD_lfdownArrowP.getPosition();
        this.CD_lfupTip = ele.CD_lfupTip.getPosition();
        this.CD_lfdownTip = ele.CD_lfdownTip.getPosition();
  
        //  right
        this.CU_rArrowline = ele.CU_rArrowline.getPosition();
        this.CU_rgupArrowP = ele.CU_rgupArrowP.getPosition()
        this.CU_rgupTip = ele.CU_rgupTip.getPosition();
        this.CU_rgdownTip = ele.CU_rgdownTip.getPosition();
  
        this.CD_rArrowline = ele.CD_rArrowline.getPosition();
        this.CD_rgdownArrowP = ele.CD_rgdownArrowP.getPosition();
        this.CD_rgupTip = ele.CD_rgupTip.getPosition();
        this.CD_rgdownTip = ele.CD_rgdownTip.getPosition();

        // Radius

         this.RL_upArrowline = ele.RL_upArrowline.getPosition();
         this.RL_ulArrowP = ele.RL_ulArrowP.getPosition();
         this.RL_ulTip = ele.RL_ulTip.getPosition();
         this.RL_urTip = ele.RL_urTip.getPosition();
   
         this.RR_upArrowline = ele.RR_upArrowline.getPosition();
         this.RR_ulArrowP = ele.RR_ulArrowP.getPosition();
         this.RR_ulTip = ele.RR_ulTip.getPosition();
         this.RR_urTip = ele.RR_urTip.getPosition();
   
          // down
          this.RL_downArrowline = ele.RL_downArrowline.getPosition();
          this.RL_dlArrowP = ele.RL_dlArrowP.getPosition();
          this.RL_dlTip = ele.RL_dlTip.getPosition();
          this.RL_drTip = ele.RL_drTip.getPosition();
   
          this.RR_downArrowline = ele.RR_downArrowline.getPosition();
          this.RR_dlArrowP = ele.RR_dlArrowP.getPosition();
          this.RR_dlTip = ele.RR_dlTip.getPosition();
          this.RR_drTip = ele.RR_drTip.getPosition();
   
           // left
         this.RU_lArrowline = ele.RU_lArrowline.getPosition();
         this.RU_lfupArrowP = ele.RU_lfupArrowP.getPosition();
         this.RU_lfupTip = ele.RU_lfupTip.getPosition();
         this.RU_lfdownTip = ele.RU_lfdownTip.getPosition();
   
         this.RD_lArrowline = ele.RD_lArrowline.getPosition();
         this.RD_lfdownArrowP = ele.RD_lfdownArrowP.getPosition();
         this.RD_lfupTip = ele.RD_lfupTip.getPosition();
         this.RD_lfdownTip = ele.RD_lfdownTip.getPosition();
   
         //  right
         this.RU_rArrowline = ele.RU_rArrowline.getPosition();
         this.RU_rgupArrowP = ele.RU_rgupArrowP.getPosition();
         this.RU_rgupTip = ele.RU_rgupTip.getPosition();
         this.RU_rgdownTip = ele.RU_rgdownTip.getPosition();
   
         this.RD_rArrowline = ele.RD_rArrowline.getPosition();
         this.RD_rgdownArrowP = ele.RD_rgdownArrowP.getPosition();
         this.RD_rgupTip = ele.RD_rgupTip.getPosition();
         this.RD_rgdownTip = ele.RD_rgdownTip.getPosition();
  
         // = = = = = = = left outage = = = = = = = == =

         
         this.LLL_E_dot_Line_1 = ele.LLL_E_dot_Line_1.getPosition();
         this.LLL_E_dot_Line_2 = ele.LLL_E_dot_Line_2.getPosition();
         this.L_Elbow_1 = ele.L_Elbow_1.getPosition();
         this.L_Elbow_2 = ele.L_Elbow_2.getPosition();

        //  = = = = = = = == = right outage = = = = = = ==  = =

        this.RLL_E_dot_Line_1 = ele.RLL_E_dot_Line_1.getPosition();
        this.RLL_E_dot_Line_2 = ele.RLL_E_dot_Line_2.getPosition();
        this.R_Elbow_1 = ele.R_Elbow_1.getPosition();
        this.R_Elbow_2 = ele.R_Elbow_2.getPosition();

         
        //  = = = = Notch
        this.extra_p1 = ele.extra_p1.getPosition();
        this.extra_p2 = ele.extra_p2.getPosition();
        this.extra_p3 = ele.extra_p3.getPosition();
        this.extra_p4 = ele.extra_p4.getPosition();
        this.extra_p5 = ele.extra_p5.getPosition();
        this.extra_p6 = ele.extra_p6.getPosition();
        this.extra_p7 = ele.extra_p7.getPosition();
        this.extra_p8 = ele.extra_p8.getPosition();

        // = = = = = = Joints = = = =  = = = 

        this.BULine = ele.BULine.getPosition()
        this.BLLine = ele.BLLine.getPosition()
        this.BRLine = ele.BRLine.getPosition()
        this.BDLine =  ele.BDLine.getPosition()

        this.LM_dot = ele.LM_dot.getPosition();
        this.RM_dot = ele.RM_dot.getPosition();

       

        this.draw =function () {

          var shape = new definitionObject();
// mainline
            shape.upLine.drawPath(this.upline_pos);
            shape.downLine.drawPath(this.downline_pos);
            shape.leftLine.drawPath(this.leftline_pos);
            shape.rightLine.drawPath(this.rightline_pos);
// arrow
            shape.upArrowline.drawPath(this.upArrowline_pos)
            shape.ulArrowP.drawPath(this.ulArrowP_pos)
            shape.urArrowP.drawPath(this.urArrowP_pos)
            shape.ulTip.drawArrow(this.ulTip_pos)
            shape.urTip.drawArrow(this.urTip_pos)

            shape.downArrowline.drawPath(this.downArrowline_pos)
            shape.dlArrowP.drawPath(this.dlArrowP_pos)
            shape.drArrowP.drawPath(this.drArrowP_pos)
            shape.dlTip.drawArrow(this.dlTip_pos)
            shape.drTip.drawArrow(this.drTip_pos)


            shape.rArrowline.drawPath(this.rArrowline_pos)
            shape.rgupArrowP.drawPath(this.rgupArrowP_pos)
            shape.rgdownArrowP.drawPath(this.rgdownArrowP_pos)
            shape.rgupTip.drawArrow(this.rgupTip_pos)
            shape.rgdownTip.drawArrow(this.rgdownTip_pos)

            shape.lArrowline.drawPath(this.lArrowline_pos)
            shape.lfupArrowP.drawPath(this.lfupArrowP_pos)
            shape.lfdownArrowP.drawPath(this.lfdownArrowP_pos)
            shape.lfupTip.drawArrow(this.lfupTip_pos)
            shape.lfdownTip.drawArrow(this.lfdownTip_pos)


// group
            shape.upmainGroup.moveGroup(this.upletter)
            shape.downmainGroup.moveGroup(this.downletter)
            shape.rightmainGroup.moveGroup(this.rightletter)
            shape.leftmainGroup.moveGroup(this.leftletter)
            
            shape.centerGroup.moveGroup(this.centernotletter)
            shape.topnote_Group.moveGroup(this.topnoteletter)
            shape.downnote_Group.moveGroup(this.downnoteletter)
            shape.leftnote_Group.moveGroup(this.leftnoteletter)
            shape.rightnote_Group.moveGroup(this.rightnoteletter)

            
// rect
            shape.ruRect.moveRect(this.ruRectmove)
            shape.rbRect.moveRect(this.rbRectmove)
            shape.luRect.moveRect(this.luRectmove)
            shape.lbRect.moveRect(this.lbRectmove)

            shape.ruRect1.moveRect(this.ruRectmove1)
            shape.rbRect1.moveRect(this.rbRectmove1)
            shape.luRect1.moveRect(this.luRectmove1)
            shape.lbRect1.moveRect(this.lbRectmove1)
// letter
            shape.frontletter.moveletter(this.frontletterMove)
            shape.backletter.moveletter(this.backletterMove)
            shape.centerNote.changeletter(this.centerNote)
            shape.logoNote_Group.moveGroup(this.logoMove)

    
            if(this.dis_upWidth.n%this.dis_upWidth.d == 0) {
              shape.up_Widthletter.changeletter('' + parseInt(this.dis_upWidth.n/this.dis_upWidth.d));
              } else {
              shape.up_Widthletter.changeletter(''+parseInt(this.dis_upWidth.n/this.dis_upWidth.d)+ '-'+this.dis_upWidth.n%this.dis_upWidth.d + '/' + this.dis_upWidth.d);
            }

            if(this.dis_downWidth.n%this.dis_downWidth.d == 0) {
              shape.down_Widthletter.changeletter('' + parseInt(this.dis_downWidth.n/this.dis_downWidth.d));
              } else {
              shape.down_Widthletter.changeletter(''+parseInt(this.dis_downWidth.n/this.dis_downWidth.d)+ '-'+this.dis_downWidth.n%this.dis_downWidth.d + '/' + this.dis_downWidth.d);
            }
         

            if(this.dis_leftHeight.n%this.dis_leftHeight.d == 0) {
              shape.left_Heightletter.changeletter('' + parseInt(this.dis_leftHeight.n/this.dis_leftHeight.d));
              } else {
              shape.left_Heightletter.changeletter(''+parseInt(this.dis_leftHeight.n/this.dis_leftHeight.d) + '-'+this.dis_leftHeight.n%this.dis_leftHeight.d + '/' + this.dis_leftHeight.d);
            }

            if(this.dis_rightHeight.n%this.dis_rightHeight.d == 0) {
              shape.right_Heightletter.changeletter('' + parseInt(this.dis_rightHeight.n/this.dis_rightHeight.d));
              } else {
              shape.right_Heightletter.changeletter(''+parseInt(this.dis_rightHeight.n/this.dis_rightHeight.d) + '-'+this.dis_rightHeight.n%this.dis_rightHeight.d + '/' + this.dis_rightHeight.d);
            }
              
            //  = = = = = = = corner
            shape.CL_upArrowline.drawPath(this.CL_upArrowline)
            shape.CL_ulArrowP.drawPath(this.CL_ulArrowP) 
            shape.CL_ulTip.drawArrow(this.CL_ulTip) 
            shape.CL_urTip.drawArrow(this.CL_urTip) 

            shape.CR_upArrowline.drawPath(this.CR_upArrowline) 
            shape.CR_ulArrowP.drawPath(this.CR_ulArrowP) 
            shape.CR_ulTip.drawArrow(this.CR_ulTip) 
            shape.CR_urTip.drawArrow(this.CR_urTip) 

            // down
            shape.CL_downArrowline.drawPath(this.CL_downArrowline) 
            shape.CL_dlArrowP.drawPath(this.CL_dlArrowP)
            shape.CL_dlTip.drawArrow(this.CL_dlTip) 
            shape.CL_drTip.drawArrow(this.CL_drTip)

            shape.CR_downArrowline.drawPath(this.CR_downArrowline) 
            shape.CR_dlArrowP.drawPath(this.CR_dlArrowP) 
            shape.CR_dlTip.drawArrow(this.CR_dlTip) 
            shape.CR_drTip.drawArrow(this.CR_drTip) 

            // left
            shape.CU_lArrowline.drawPath(this.CU_lArrowline) 
            shape.CU_lfupArrowP.drawPath(this.CU_lfupArrowP)
            shape.CU_lfupTip.drawArrow(this.CU_lfupTip) 
            shape.CU_lfdownTip.drawArrow(this.CU_lfdownTip) 

            shape.CD_lArrowline.drawPath(this.CD_lArrowline) 
            shape.CD_lfdownArrowP.drawPath(this.CD_lfdownArrowP)
            shape.CD_lfupTip.drawArrow(this.CD_lfupTip) 
            shape.CD_lfdownTip.drawArrow(this.CD_lfdownTip)

            //  right
            shape.CU_rArrowline.drawPath(this.CU_rArrowline)
            shape.CU_rgupArrowP.drawPath(this.CU_rgupArrowP)
            shape.CU_rgupTip.drawArrow(this.CU_rgupTip) 
            shape.CU_rgdownTip.drawArrow(this.CU_rgdownTip)

            shape.CD_rArrowline.drawPath(this.CD_rArrowline)
            shape.CD_rgdownArrowP.drawPath(this.CD_rgdownArrowP)
            shape.CD_rgupTip.drawArrow(this.CD_rgupTip) 
            shape.CD_rgdownTip.drawArrow(this.CD_rgdownTip)
            

            shape.CLUW_Group.moveGroup(this.CLUW_Group);
            shape.CRUW_Group.moveGroup( this.CRUW_Group);
            shape.CLBW_Group.moveGroup(this.CLBW_Group);
            shape.CRBW_Group.moveGroup(this.CRBW_Group);
      
            shape.CLUH_Group.moveGroup(this.CLUH_Group);
            shape.CLBH_Group.moveGroup(this.CLBH_Group);
            shape.CRUH_Group.moveGroup(this.CRUH_Group);
            shape.CRBH_Group.moveGroup(this.CRBH_Group);
            

            // = = = = = = = = = Radius
            shape.RL_upArrowline.drawPath(this.RL_upArrowline)
            shape.RL_ulArrowP.drawPath(this.RL_ulArrowP) 
            shape.RL_ulTip.drawArrow(this.RL_ulTip) 
            shape.RL_urTip.drawArrow(this.RL_urTip) 

            shape.RR_upArrowline.drawPath(this.RR_upArrowline) 
            shape.RR_ulArrowP.drawPath(this.RR_ulArrowP) 
            shape.RR_ulTip.drawArrow(this.RR_ulTip) 
            shape.RR_urTip.drawArrow(this.RR_urTip) 

            // down
            shape.RL_downArrowline.drawPath(this.RL_downArrowline) 
            shape.RL_dlArrowP.drawPath(this.RL_dlArrowP)
            shape.RL_dlTip.drawArrow(this.RL_dlTip) 
            shape.RL_drTip.drawArrow(this.RL_drTip)

            shape.RR_downArrowline.drawPath(this.RR_downArrowline) 
            shape.RR_dlArrowP.drawPath(this.RR_dlArrowP) 
            shape.RR_dlTip.drawArrow(this.RR_dlTip) 
            shape.RR_drTip.drawArrow(this.RR_drTip) 

            // left
            shape.RU_lArrowline.drawPath(this.RU_lArrowline) 
            shape.RU_lfupArrowP.drawPath(this.RU_lfupArrowP)
            shape.RU_lfupTip.drawArrow(this.RU_lfupTip) 
            shape.RU_lfdownTip.drawArrow(this.RU_lfdownTip) 

            shape.RD_lArrowline.drawPath(this.RD_lArrowline) 
            shape.RD_lfdownArrowP.drawPath(this.RD_lfdownArrowP)
            shape.RD_lfupTip.drawArrow(this.RD_lfupTip) 
            shape.RD_lfdownTip.drawArrow(this.RD_lfdownTip)

            //  right
            shape.RU_rArrowline.drawPath(this.RU_rArrowline)
            shape.RU_rgupArrowP.drawPath(this.RU_rgupArrowP)
            shape.RU_rgupTip.drawArrow(this.RU_rgupTip) 
            shape.RU_rgdownTip.drawArrow(this.RU_rgdownTip)

            shape.RD_rArrowline.drawPath(this.RD_rArrowline)
            shape.RD_rgdownArrowP.drawPath(this.RD_rgdownArrowP)
            shape.RD_rgupTip.drawArrow(this.RD_rgupTip) 
            shape.RD_rgdownTip.drawArrow(this.RD_rgdownTip)


            shape.RLUW_Group.moveGroup(this.RLUW_Group);
            shape.RRUW_Group.moveGroup( this.RRUW_Group);
            shape.RLBW_Group.moveGroup(this.RLBW_Group);
            shape.RRBW_Group.moveGroup(this.RRBW_Group);
      
            shape.RLUH_Group.moveGroup(this.RLUH_Group);
            shape.RLBH_Group.moveGroup(this.RLBH_Group);
            shape.RRUH_Group.moveGroup(this.RRUH_Group);
            shape.RRBH_Group.moveGroup(this.RRBH_Group);

            //  == = = = = leftOutage
            shape.LLL_E_dot_Line_1.drawPath(this.LLL_E_dot_Line_1)
            shape.LLL_E_dot_Line_2.drawPath(this.LLL_E_dot_Line_2)
            shape.L_Elbow_1.drawPath(this.L_Elbow_1)
            shape.L_Elbow_2.drawPath(this.L_Elbow_2)
 
            //  == = = = = leftOutage
            shape.RLL_E_dot_Line_1.drawPath(this.RLL_E_dot_Line_1)
            shape.RLL_E_dot_Line_2.drawPath(this.RLL_E_dot_Line_2)
            shape.R_Elbow_1.drawPath(this.R_Elbow_1)
            shape.R_Elbow_2.drawPath(this.R_Elbow_2)

            //  = = = notch
            shape.extra_p1.drawPath(this.extra_p1)
            shape.extra_p2.drawPath(this.extra_p2)
            shape.extra_p3.drawPath(this.extra_p3)
            shape.extra_p4.drawPath(this.extra_p4)
            shape.extra_p5.drawPath(this.extra_p5)
            shape.extra_p6.drawPath(this.extra_p6)
            shape.extra_p7.drawPath(this.extra_p7)
            shape.extra_p8.drawPath(this.extra_p8)

            //  = = =  = = = Joints
            shape.BULine.drawPath(this.BULine)
            shape.BLLine.drawPath(this.BLLine)
            shape.BDLine.drawPath(this.BDLine)
            shape.BRLine.drawPath(this.BRLine)

            shape.LM_dot.drawPath(this.LM_dot)
            shape.RM_dot.drawPath(this.RM_dot)

            // console.log(shape)
    }
  }
