

  function format(context) {

    b = new initDraw(context);
   // main line 
   b.upline_pos = [{x:163, y:195},  {x:443, y:195},]
   b.downline_pos = [ {x:163, y:905},{x:443 , y:905}, ]  
   b.leftline_pos = [{x:163, y:195}, {x:163, y:905},]
   b.rightline_pos = [{x:443, y:195},{x:443, y:905},]

   b.logoMove =  {x:183, y:855}

   // main arrow
   b.upArrowline_pos =  [{x:163, y:165},  {x:443 , y:165},]
   b.ulArrowP_pos = [{x:163, y:175},{x:163, y:155}]
   b.urArrowP_pos = [{x:443 , y:175},{x:443 , y:155}]
   b.ulTip_pos = {x:163, y:165};
   b.urTip_pos = {x:443, y:165};

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


   b.lArrowline_pos =  [{x:52, y:195},  {x:52, y:905},]
   b.lfupArrowP_pos = [{x:40 , y:195}, {x:65, y:195}]
   b.lfdownArrowP_pos = [{x:40, y:905},{x:65, y:905}]
   b.lfupTip_pos = {x:52, y:195};
   b.lfdownTip_pos ={x:52, y:905};
   // group

   b.upletter = {x:268 , y:145}
   b.downletter = {x:268 , y:918}
   b.rightletter = {x:500 , y:370}
   b.leftletter = {x:30 , y:370}
   b.centernotletter = {x:280,y:300}

   b.topnoteletter = {x:280,y:200}
   b.downnoteletter = {x:280,y:860}
   b.leftnoteletter = {x:190,y:365}
   b.rightnoteletter= {x:380,y:365}


   
   b.CLUW_Group = b.initSignle_pos
   b.CRUW_Group =  b.initSignle_pos
   b.CLBW_Group =  b.initSignle_pos
   b.CRBW_Group =  b.initSignle_pos

   b.CLUH_Group =  b.initSignle_pos
   b.CLBH_Group =  b.initSignle_pos
   b.CRUH_Group = b.initSignle_pos
   b.CRBH_Group =  b.initSignle_pos

   b.RLUW_Group =  b.initSignle_pos
   b.RRUW_Group =  b.initSignle_pos
   b.RLBW_Group = b.initSignle_pos
   b.RRBW_Group =  b.initSignle_pos

   b.RLUH_Group = b.initSignle_pos
   b.RLBH_Group =  b.initSignle_pos
   b.RRUH_Group =  b.initSignle_pos
   b.RRBH_Group =  b.initSignle_pos


   // rect
   b.ruRectmove = {x:433 , y:195}
   b.rbRectmove = {x:433 , y:895}
   b.luRectmove = {x:163, y:195}
   b.lbRectmove = {x:163, y:895}


   // letters
   b.frontletterMove = {x:303, y:115};
   b.backletterMove = {x:303 , y:20};
   b.centernoteMove = {x:297,y:320};


   // corner && radius

     b.CL_upArrowline = b.init2d_pos
     b.CL_ulArrowP = b.init2d_pos
     b.CL_ulTip = b.initSignle_pos
     b.CL_urTip = b.initSignle_pos

     b.CR_upArrowline = b.init2d_pos
     b.CR_ulArrowP = b.init2d_pos
     b.CR_ulTip = b.initSignle_pos
     b.CR_urTip = b.initSignle_pos

      // down
      b.CL_downArrowline = b.init2d_pos
      b.CL_dlArrowP = b.init2d_pos
      b.CL_dlTip = b.initSignle_pos
      b.CL_drTip = b.initSignle_pos

      b.CR_downArrowline = b.init2d_pos
      b.CR_dlArrowP = b.init2d_pos
      b.CR_dlTip = b.initSignle_pos
      b.CR_drTip = b.initSignle_pos

       // left
     b.CU_lArrowline = b.init2d_pos
     b.CU_lfupArrowP = b.init2d_pos
     b.CU_lfupTip = b.initSignle_pos
     b.CU_lfdownTip = b.initSignle_pos

     b.CD_lArrowline = b.init2d_pos
     b.CD_lfdownArrowP = b.init2d_pos
     b.CD_lfupTip = b.initSignle_pos
     b.CD_lfdownTip = b.initSignle_pos

     //  right
     b.CU_rArrowline = b.init2d_pos
     b.CU_rgupArrowP = b.init2d_pos
     b.CU_rgupTip = b.initSignle_pos
     b.CU_rgdownTip = b.initSignle_pos

     b.CD_rArrowline = b.init2d_pos
     b.CD_rgdownArrowP = b.init2d_pos
     b.CD_rgupTip = b.initSignle_pos
     b.CD_rgdownTip = b.initSignle_pos

   // Radius

     b.RL_upArrowline = b.init2d_pos
     b.RL_ulArrowP = b.init2d_pos
     b.RL_ulTip = b.initSignle_pos
     b.RL_urTip = b.initSignle_pos

     b.RR_upArrowline = b.init2d_pos
     b.RR_ulArrowP = b.init2d_pos
     b.RR_ulTip = b.initSignle_pos
     b.RR_urTip = b.initSignle_pos

      // down
      b.RL_downArrowline = b.init2d_pos
      b.RL_dlArrowP = b.init2d_pos
      b.RL_dlTip = b.initSignle_pos
      b.RL_drTip = b.initSignle_pos

      b.RR_downArrowline = b.init2d_pos
      b.RR_dlArrowP = b.init2d_pos
      b.RR_dlTip = b.initSignle_pos
      b.RR_drTip = b.initSignle_pos

       // left
     b.RU_lArrowline = b.init2d_pos
     b.RU_lfupArrowP = b.init2d_pos
     b.RU_lfupTip = b.initSignle_pos
     b.RU_lfdownTip = b.initSignle_pos

     b.RD_lArrowline = b.init2d_pos
     b.RD_lfdownArrowP = b.init2d_pos
     b.RD_lfupTip = b.initSignle_pos
     b.RD_lfdownTip = b.initSignle_pos

     //  right
     b.RU_rArrowline = b.init2d_pos
     b.RU_rgupArrowP = b.init2d_pos
     b.RU_rgupTip = b.initSignle_pos
     b.RU_rgdownTip = b.initSignle_pos

     b.RD_rArrowline = b.init2d_pos
     b.RD_rgdownArrowP = b.init2d_pos
     b.RD_rgupTip = b.initSignle_pos
     b.RD_rgdownTip = b.initSignle_pos

   // = = = = = = = left outage = = = = = = = == =

   
   b.LLL_E_dot_Line_1 =  b.init2d_pos
   b.LLL_E_dot_Line_2 =  b.init2d_pos
   b.L_Elbow_1 =  b.init2d_pos
   b.L_Elbow_2 =  b.init2d_pos

   //  = = = = = = = == = right outage = = = = = = ==  = =

   b.RLL_E_dot_Line_1 =  b.init2d_pos
   b.RLL_E_dot_Line_2 =  b.init2d_pos
   b.R_Elbow_1 =  b.init2d_pos
   b.R_Elbow_2 =  b.init2d_pos

   
   //  = = = = Notch
   b.extra_p1 = b.init2d_pos
   b.extra_p2 = b.init2d_pos
   b.extra_p3 = b.init2d_pos
   b.extra_p4 = b.init2d_pos
   b.extra_p5 = b.init2d_pos
   b.extra_p6 = b.init2d_pos
   b.extra_p7 = b.init2d_pos
   b.extra_p8 = b.init2d_pos

   // // = = = = = = Joints = = = =  = = = 

   b.BULine = [{x:163,y:45},{x:443,y:45}]
   b.BLLine = [{x:163,y:45},{x:163,y:75}]
   b.BRLine =  [{x:443,y:45},{x:443,y:75}]
   b.BDLine =  [{x:163,y:75},{x:443,y:75}]

   b.LM_dot = b.init2d_pos;
   b.RM_dot = b.init2d_pos;






   b.draw();

}