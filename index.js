


  var Drawers;

  DrawingManager = {
    Drawers: [],
    register: function (drawer) {
      DrawingManager.Drawers.push(drawer);
    },
    findDrawer: function (drawerHandle) {
      for (var i = 0; i < DrawingManager.Drawers.length; i++) {
        if (DrawingManager.Drawers[i].Handle === drawerHandle) {
          return DrawingManager.Drawers[i];
        }
      }
      return null;
    }
  }

    var oriWidth = 280;
    var oriHeight = 710;



    // = = = = = = =  = =   Object instances = = = == =
    function definitionObject() {

      //  = = == =  = = == = Main = = = = = == == = = == 

      //Line  
      this.upLine = new Pathline("ULine");
      this.leftLine = new Pathline("LLine");
      this.rightLine = new Pathline("RLine");
      this.downLine = new Pathline("DLine");

      //-  - -  main Arrow  - 
      // upArrow
      this.upArrowline = new Pathline("U_LineArrow");
      this.ulArrowP = new Pathline("UL_Arrow");
      this.urArrowP = new Pathline("UR_Arrow");
      this.ulTip = new Arrow("UL_Tip","left");
      this.urTip = new Arrow("UR_Tip","right");

      // down
      this.downArrowline = new Pathline("D_LineArrow");
      this.dlArrowP = new Pathline("DL_Arrow");
      this.drArrowP = new Pathline("DR_Arrow");
      this.dlTip = new Arrow("DL_Tip","left");
      this.drTip = new Arrow("DR_Tip","right");

      // left
      this.lArrowline = new Pathline("L_LineArrow");
      this.lfupArrowP = new Pathline("LU_Arrow");
      this.lfdownArrowP = new Pathline("LD_Arrow");
      this.lfupTip = new Arrow("LU_Tip","up");
      this.lfdownTip = new Arrow("LD_Tip","down");

      //  right
      this.rArrowline = new Pathline("R_LineArrow");
      this.rgupArrowP = new Pathline("RU_Arrow");
      this.rgdownArrowP = new Pathline("RD_Arrow");
      this.rgupTip = new Arrow("RU_Tip","up");
      this.rgdownTip = new Arrow("RD_Tip","down");





      // =  = = = = = =  = = == = Corner  = = = = = = = = = = = = =  

      // line
      this.CL_uline = new Pathline("OLineLU");
      this.CL_dline = new Pathline("OLineLB");
      this.CR_uline = new Pathline("OLineRU");
      this.CR_dline = new Pathline("OLineRB");


      // upArrow
      this.CL_upArrowline = new Pathline("C_UL_Line");
      this.CL_ulArrowP = new Pathline("C_UL_P");
      this.CL_ulTip = new Arrow("C_UL_LTip","left");
      this.CL_urTip = new Arrow("C_UL_RTip","right");

      this.CR_upArrowline = new Pathline("C_UR_Line");
      this.CR_ulArrowP = new Pathline("C_UR_P");
      this.CR_ulTip = new Arrow("C_UR_LTip","left");
      this.CR_urTip = new Arrow("C_UR_RTip","right");

       // down
       this.CL_downArrowline = new Pathline("C_DL_Line");
       this.CL_dlArrowP = new Pathline("C_DL_P");
       this.CL_dlTip = new Arrow("C_DL_LTip","left");
       this.CL_drTip = new Arrow("C_DL_RTip","right");

       this.CR_downArrowline = new Pathline("C_DR_Line");
       this.CR_dlArrowP = new Pathline("C_DR_P");
       this.CR_dlTip = new Arrow("C_DR_LTip","left");
       this.CR_drTip = new Arrow("C_DR_RTip","right");

        // left
      this.CU_lArrowline = new Pathline("C_LU_Line");
      this.CU_lfupArrowP = new Pathline("C_LU_P");
      this.CU_lfupTip = new Arrow("C_LU_UTip","up");
      this.CU_lfdownTip = new Arrow("C_LU_DTip","down");

      this.CD_lArrowline = new Pathline("C_LD_Line");
      this.CD_lfdownArrowP = new Pathline("C_LD_P");
      this.CD_lfupTip = new Arrow("C_LD_UTip","up");
      this.CD_lfdownTip = new Arrow("C_LD_DTip","down");

      //  right
      this.CU_rArrowline = new Pathline("C_RU_Line");
      this.CU_rgupArrowP = new Pathline("C_RU_P");
      this.CU_rgupTip = new Arrow("C_RU_UTip","up");
      this.CU_rgdownTip = new Arrow("C_RU_DTip","down");

      this.CD_rArrowline = new Pathline("C_RD_Line");
      this.CD_rgdownArrowP = new Pathline("C_RD_P");
      this.CD_rgupTip = new Arrow("C_RD_UTip","up");
      this.CD_rgdownTip = new Arrow("C_RD_DTip","down");

      // group
      this.CLUW_Group = new Group("CLUW_Group","horizon");
      this.CRUW_Group = new Group("CRUW_Group","horizon");
      this.CLBW_Group = new Group("CLBW_Group","horizon");
      this.CRBW_Group = new Group("CRBW_Group","horizon");

      this.CLUH_Group = new Group("CLUH_Group","vertical");
      this.CLBH_Group = new Group("CLBH_Group","vertical");
      this.CRUH_Group = new Group("CRUH_Group","vertical");
      this.CRBH_Group = new Group("CRBH_Group","vertical");
      // letter
      this.C_LUH_Letter = new letter("C_LUH_Letter");
      this.C_LUW_Letter = new letter("C_LUW_Letter");
      this.C_RUW_Letter = new letter("C_RUW_Letter")
      this.C_RUH_Letter = new letter("C_RUH_Letter")

      this.C_LBH_letter = new letter("C_LBH_letter");
      this.C_LBW_Letter = new letter("C_LBW_Letter");
      this.C_RBW_Letter = new letter("C_RBW_Letter")
      this.C_RBH_Letter = new letter("C_RBH_Letter")



      //  - - - - Radius

      this.RL_u = new curve("LU_curve");
      this.RL_d = new curve("LD_curve");
      this.RR_u = new curve("RU_curve");
      this.RR_d = new curve("RD_curve");


      
      // upArrow
      this.RL_upArrowline = new Pathline("R_UL_Line");
      this.RL_ulArrowP = new Pathline("R_UL_P");
      this.RL_ulTip = new Arrow("R_UL_LTip","left");
      this.RL_urTip = new Arrow("R_UL_RTip","right");

      this.RR_upArrowline = new Pathline("R_UR_Line");
      this.RR_ulArrowP = new Pathline("R_UR_P");
      this.RR_ulTip = new Arrow("R_UR_LTip","left");
      this.RR_urTip = new Arrow("R_UR_RTip","right");

       // down
       this.RL_downArrowline = new Pathline("R_DL_Line");
       this.RL_dlArrowP = new Pathline("R_DL_P");
       this.RL_dlTip = new Arrow("R_DL_LTip","left");
       this.RL_drTip = new Arrow("R_DL_RTip","right");

       this.RR_downArrowline = new Pathline("R_DR_Line");
       this.RR_dlArrowP = new Pathline("R_DR_P");
       this.RR_dlTip = new Arrow("R_DR_LTip","left");
       this.RR_drTip = new Arrow("R_DR_RTip","right");



        // left
      this.RU_lArrowline = new Pathline("R_LU_Line");
      this.RU_lfupArrowP = new Pathline("R_LU_P");
      this.RU_lfupTip = new Arrow("R_LU_UTip","up");
      this.RU_lfdownTip = new Arrow("R_LU_DTip","down");

      this.RD_lArrowline = new Pathline("R_LD_Line");
      this.RD_lfdownArrowP = new Pathline("R_LD_P");
      this.RD_lfupTip = new Arrow("R_LD_UTip","up");
      this.RD_lfdownTip = new Arrow("R_LD_DTip","down");

      //  right
      this.RU_rArrowline = new Pathline("R_RU_Line");
      this.RU_rgupArrowP = new Pathline("R_RU_P");
      this.RU_rgupTip = new Arrow("R_RU_UTip","up");
      this.RU_rgdownTip = new Arrow("R_RU_DTip","down");

      this.RD_rArrowline = new Pathline("R_RD_Line");
      this.RD_rgdownArrowP = new Pathline("R_RD_P");
      this.RD_rgupTip = new Arrow("R_RD_UTip","up");
      this.RD_rgdownTip = new Arrow("R_RD_DTip","down");

      //Group 
      this.RLUW_Group = new Group("RLUW_Group","horizon");
      this.RRUW_Group = new Group("RRUW_Group","horizon");
      this.RLBW_Group = new Group("RLBW_Group","horizon");
      this.RRBW_Group = new Group("RRBW_Group","horizon");

      this.RLUH_Group = new Group("RLUH_Group","vertical");
      this.RLBH_Group = new Group("RLBH_Group","vertical");
      this.RRUH_Group = new Group("RRUH_Group","vertical");
      this.RRBH_Group = new Group("RRBH_Group","vertical");
      // letter
      this.R_LUH_Letter = new letter("R_LUH_Letter");
      this.R_LUW_Letter = new letter("R_LUW_Letter");
      this.R_RUW_Letter = new letter("R_RUW_Letter")
      this.R_RUH_Letter = new letter("R_RUH_Letter")

      this.R_LBH_letter = new letter("R_LBH_letter");
      this.R_LBW_Letter = new letter("R_LBW_Letter");
      this.R_RBW_Letter = new letter("R_RBW_Letter")
      this.R_RBH_Letter = new letter("R_RBH_Letter")



    // = = = = = = = = == =  LeftOutage

      this.L_dot_Line = new Pathline("L_dot_Line");
      this.LLL_E_dot_Line_1 = new Pathline("LLL_E_dot_Line_1");
      this.LLL_E_dot_Line_2 = new Pathline("LLL_E_dot_Line_2");
      this.L_Elbow_1 = new Pathline("L_Elbow_1");
      this.L_Elbow_2 = new Pathline("L_Elbow_2");
     
      //  = = = = = = = = ==  =RightOutage
     
      this.R_dot_Line = new Pathline("R_dot_Line");
      this.RLL_E_dot_Line_1 = new Pathline("RLL_E_dot_Line_1");
      this.RLL_E_dot_Line_2 = new Pathline("RLL_E_dot_Line_2");
      this.R_Elbow_1 = new Pathline("R_Elbow_1");
      this.R_Elbow_2 = new Pathline("R_Elbow_2");
     
      // bottom
      
      this.D_dot_Line = new Pathline("D_dot_Line"); 

      // Notch

      this.LT_notch_width_path1 = new Pathline("LT_notch_width_path1");
      this.LT_notch_width_path2 = new Pathline("LT_notch_width_path2");

      this.LT_notch_height_path1 = new Pathline("LT_notch_height_path1");
      this.LT_notch_height_path2 = new Pathline("LT_notch_height_path2");

      this.RT_notch_width_path1 = new Pathline("RT_notch_width_path1");
      this.RT_notch_width_path2 = new Pathline("RT_notch_width_path2");

      this.RT_notch_height_path1 = new Pathline("RT_notch_height_path1");
      this.RT_notch_height_path2 = new Pathline("RT_notch_height_path2");

      this.LB_notch_width_path1 = new Pathline("LB_notch_width_path1");
      this.LB_notch_width_path2 = new Pathline("LB_notch_width_path2");

      this.LB_notch_height_path1 = new Pathline("LB_notch_height_path1");
      this.LB_notch_height_path2 = new Pathline("LB_notch_height_path2");

      this.RB_notch_width_path1 = new Pathline("RB_notch_width_path1");
      this.RB_notch_width_path2 = new Pathline("RB_notch_width_path2");

      this.RB_notch_height_path1 = new Pathline("RB_notch_height_path1");
      this.RB_notch_height_path2 = new Pathline("RB_notch_height_path2");


      this.extra_p1 = new Pathline("extra_p1");
    
      this.extra_p2 = new Pathline("extra_p2");
      this.extra_p3 = new Pathline("extra_p3");
      this.extra_p4 = new Pathline("extra_p4");
      this.extra_p5 = new Pathline("extra_p5");
      this.extra_p6 = new Pathline("extra_p6");
      this.extra_p7 = new Pathline("extra_p7");
      this.extra_p8 = new Pathline("extra_p8");


      //  = = = = ==  = ==  = Group
      this. upmainGroup = new Group("upGroup","horizon");
      this. downmainGroup = new Group("downGroup","horizon");
      this. leftmainGroup = new Group("leftGroup","vertical");
      this. rightmainGroup = new Group("rightGroup","vertical");
      this.centerGroup = new Group("cnote_Group","horizon")
      
      this.topnote_Group = new Group("topnote_Group","horizon")
      this.downnote_Group = new Group("downnote_Group","horizon")
      this.leftnote_Group = new Group("leftnote_Group","vertical");
      this.rightnote_Group = new Group("rightnote_Group","vertical");

      this.logoNote_Group = new Group("logoNote_Group","horizon");


      // letter
      this.frontletter = new letter("frontletter")
      this.backletter = new letter("backletter")

      this.leftnote = new letter("leftnote")
      this.rightnote = new letter("rightnote")


      this. centerNote = new letter("cnote")
      this.logoNote = new letter("logo")

      this.up_Widthletter = new letter("Top_Width");
      this.down_Widthletter = new letter("Bottom_Width");
      this.left_Heightletter = new letter("lef_height")
      this.right_Heightletter = new letter("Right_Height")


      // Rect
      this. luRect = new Rect("LU_Rect")
      this. ruRect = new Rect("RU_Rect")
      this. lbRect = new Rect("LB_Rect")
      this. rbRect = new Rect("RB_Rect")

      this.luRect1 = new Rect("LU_Rect1")
      this. ruRect1 = new Rect("RU_Rect1")
      this. lbRect1 = new Rect("LB_Rect1")
      this. rbRect1 = new Rect("RB_Rect1")

   

      //  = = = = = = = = Joints = = = == = == = = = = 

      this.BULine = new Pathline("BULine");
      this.BLLine = new Pathline("BLLine");
      this.BDLine = new Pathline("BDLine");
      this.BRLine = new Pathline("BRLine");

      this.LM_dot = new Pathline("LM_dot");
      this.RM_dot = new Pathline("RM_dot");


      this.LM_letterG = new Group("LM_letterG","horizon");
      this.RM_letterG = new Group("RM_letterG","horizon");
      this.LM_letter = new letter("LM_letter");
      this.RM_letter = new letter("RM_letter");


    }
 
   function Transform(context) {


        this.draw = function () {

            format(context);

            var simplePanle = new simplePanel();
        
            DrawingManager.register(simplePanle);
          
            var drawer1 = DrawingManager.findDrawer('simplePanel');

            drawer1.draw(context);
            // drawer1.convertToPNG();

            var draw_corner = new corner();

            DrawingManager.register(draw_corner);

            var drawer2 = DrawingManager.findDrawer('corner');

            drawer2.draw(context);

            

            var draw_radius = new radius();

            DrawingManager.register(draw_radius);

            var drawer3 = DrawingManager.findDrawer('radius');

            drawer3.draw(context);


            var draw_leftOutage = new leftOutage();

            DrawingManager.register(draw_leftOutage);

            var drawer4 = DrawingManager.findDrawer('leftOutage');

            drawer4.draw(context);


            
            var draw_rightOutage = new rightOutage();
        
            DrawingManager.register(draw_rightOutage);

            var drawer5 = DrawingManager.findDrawer('rightOutage');
            drawer5.draw(context);


            var draw_bottomOutage = new bottomOutage();

            DrawingManager.register(draw_bottomOutage);

            var drawer6 = DrawingManager.findDrawer('bottomOutage');

            drawer6.draw(context);

            
            var draw_notch = new notch();

            DrawingManager.register(draw_notch);

            var drawer7 = DrawingManager.findDrawer('notch');

            drawer7.draw(context);


            var draw_Miter = new Miter();

            DrawingManager.register(draw_Miter);

            var drawer8 = DrawingManager.findDrawer('Miter');

            drawer8.draw(context);



            var draw_Hole = new Hole();

            DrawingManager.register(draw_Hole);

            var drawer9 = DrawingManager.findDrawer('Hole');

            drawer9.draw(context);


            var draw_Unotch = new Unotch();

            DrawingManager.register(draw_Unotch);

            var drawer10 = DrawingManager.findDrawer('Unotch');

            drawer10.draw(context);

            
            var draw_CircleNotch = new CircleNotch();

            DrawingManager.register(draw_CircleNotch);

            var drawer11 = DrawingManager.findDrawer('CircleNotch');

            drawer11.draw(context);


            var draw_RectNotch = new RectNotch();

            DrawingManager.register(draw_RectNotch);

            var drawer12 = DrawingManager.findDrawer('RectNotch');

            drawer12.draw(context);


            var draw_EarNotch = new EarNotch();

            DrawingManager.register(draw_EarNotch);

            var drawer13 = DrawingManager.findDrawer('EarNotch');

            drawer13.draw(context);



        
        } 

    }

  
   $("#transform").click( function() {

    // mainValue(simplePanel)
      this.inputWidth = inputing("width");
      this.inputHeight = inputing("height")
    
      this.ratio = this.inputWidth/this.inputHeight

      // console.log("getting inputed", this.inputHeight, this.inputWidth)


      this.centerNote = $("#note").val();

      // cornerValue
      this.LU_inputC_Width = inputing("LU_c_width1");
      this.LU_inputC_Height = inputing("LU_c_height1");
      this.RU_inputC_Width = inputing("RU_c_width1");
      this.RU_inputC_Height = inputing("RU_c_height1");
      this.LB_inputC_Width = inputing("LB_c_width1");
      this.LB_inputC_Height = inputing("LB_c_height1");
      this.RB_inputC_Width = inputing("RB_c_width1");
      this.RB_inputC_Height = inputing("RB_c_height1");

      // radiusValue
      this.LU_inputR_Width = inputing("LU_r_width1");
      this.LU_inputR_Height = inputing("LU_r_height1");
      this.RU_inputR_Width = inputing("RU_r_width1");
      this.RU_inputR_Height = inputing("RU_r_height1");
      this.LB_inputR_Width = inputing("LB_r_width1");
      this.LB_inputR_Height = inputing("LB_r_height1");
      this.RB_inputR_Width = inputing("RB_r_width1");
      this.RB_inputR_Height = inputing("RB_r_height1");


      // left-outage value
      this.LL_TopLeft = inputing("topLL");
      this.LL_TopRight = inputing("topLR");

      this.LLL_inputE_Width_1 = inputing("LLL_e_width1")
      this.LLL_inputE_Width_2 = inputing("LLL_e_width2")
      this.LLL_inputE_Height = inputing("LLL_e_height1")

      this.LLR_inputE_Width_1 = inputing("LLR_e_width1")
      this.LLR_inputE_Width_2 = inputing("LLR_e_width2")
      this.LLR_inputE_Height = inputing("LLR_e_height1")

      this.LRL_inputE_Width_1 = inputing("LRL_e_width1")
      this.LRL_inputE_Width_2 = inputing("LRL_e_width2")
      this.LRL_inputE_Height = inputing("LRL_e_height1")

      this.LRR_inputE_Width_1 = inputing("LRR_e_width1")
      this.LRR_inputE_Width_2 = inputing("LRR_e_width2")
      this.LRR_inputE_Height = inputing("LRR_e_height1")

      // right-outage value
      this.RL_TopLeft = inputing("topLL_R");
      this.RL_TopRight = inputing("topLR_R");

      this.RLL_inputE_Width_1 = inputing("RLL_e_width1")
      this.RLL_inputE_Width_2 = inputing("RLL_e_width2")
      this.RLL_inputE_Height = inputing("RLL_e_height1")

      this.RLR_inputE_Width_1 = inputing("RLR_e_width1")
      this.RLR_inputE_Width_2 = inputing("RLR_e_width2")
      this.RLR_inputE_Height = inputing("RLR_e_height1")

      this.RRL_inputE_Width_1 = inputing("RRL_e_width1")
      this.RRL_inputE_Width_2 = inputing("RRL_e_width2")
      this.RRL_inputE_Height = inputing("RRL_e_height1")

      this.RRR_inputE_Width_1 = inputing("RRR_e_width1")
      this.RRR_inputE_Width_2 = inputing("RRR_e_width2")
      this.RRR_inputE_Height = inputing("RRR_e_height1")

      // bottom-outage value
      this.leftRight = inputing("bLR_R")
      this.rightLeft = inputing("bLR_F")

      // notch
      this.LT_notch_width1 = inputing("LT_notch_width1")
      this.LT_notch_width2 = inputing("LT_notch_width2")

      this.LT_notch_height1 = inputing("LT_notch_height1")
      this.LT_notch_height2 = inputing("LT_notch_height2")

      this.RT_notch_width1 = inputing("RT_notch_width1")
      this.RT_notch_width2 = inputing("RT_notch_width2")
    
      this.RT_notch_height1 = inputing("RT_notch_height1")
      this.RT_notch_height2 = inputing("RT_notch_height2")


      this.LB_notch_width1 = inputing("LB_notch_width1")
      this.LB_notch_width2 = inputing("LB_notch_width2")
    
      this.LB_notch_height1 = inputing("LB_notch_height1")
      this.LB_notch_height2 = inputing("LB_notch_height2")

      this.RB_notch_width1 = inputing("RB_notch_width1")
      this.RB_notch_width2 = inputing("RB_notch_width2")
    
      this.RB_notch_height1 = inputing("RB_notch_height1")
      this.RB_notch_height2 = inputing("RB_notch_height2")

    // Miter

      this.LMB_letter = inputing("LMB")
      this.RMB_letter = inputing("RMB")
      this.LMF_letter = inputing("LMF")
      this.RMF_letter = inputing("RMF")

      // single hole

      this.SingleHole = getAllValues("SingleHole");
      
      this.SingleHole_parm = listToMatrix(this.SingleHole,7)


     
      // Unotch
    
      this.Unotch = getAllValues("Unotch");
      this.Unotch_parm = listToMatrix(this.Unotch,6)


      // CircleNotch
      this.Cnotch = getAllValues("Cnotch");
      this.Cnotch_parm = listToMatrix(this.Cnotch,5)


      // RectNotch
      this.Rnotch = getAllValues("Rnotch")
      this.Rnotch_parm = listToMatrix(this.Rnotch,6)

      // EarNotch
      this.Enotch = getAllValues("Enotch")
      this.Enotch_parm = listToMatrix(this.Enotch,8)



    var context =
    {
      Canvas: null,
      Parameters: [
         { ParameterName: 'simeplePanel', 
         value: [{width:this.inputWidth,height:this.inputHeight},{centerNote:this.centerNote}],  Type: 'fraction', FriendlyNmae : 'inputWidth' }, 

         { ParameterName: 'corner',
         value: [
            {width:this.LU_inputC_Width, height:this.LU_inputC_Height},
            {width:this.RU_inputC_Width, height:this.RU_inputC_Height},
            {width:this.LB_inputC_Width, height:this.LB_inputC_Height},
            {width:this.RB_inputC_Width, height:this.RB_inputC_Height},],   Type: 'fraction', FriendlyNmae : 'corner' },

         { ParameterName: 'radius',
         value: [
            {width:this.LU_inputR_Width, height:this.LU_inputR_Height},
            {width:this.RU_inputR_Width, height:this.RU_inputR_Height},
            {width:this.LB_inputR_Width, height:this.LB_inputR_Height},
            {width:this.RB_inputR_Width, height:this.RB_inputR_Height},],   Type: 'fraction', FriendlyNmae : 'radius' },

         { ParameterName: 'leftOutage',
         value: [
            {topLeft:this.LL_TopLeft,topRight:this.LL_TopRight},
            {width1:this.LLL_inputE_Width_1, width2: this.LLL_inputE_Width_2,height:this.LLL_inputE_Height},
            {width1:this.LLR_inputE_Width_1, width2:this.LLR_inputE_Width_2,height:this.LLR_inputE_Height},
            {width1:this.LRL_inputE_Width_1, width2: this.LRL_inputE_Width_2,height:this.LRL_inputE_Height},
            {width1:this.LRR_inputE_Width_1, width2:this.LRR_inputE_Width_2,height:this.LRR_inputE_Height},],   Type: 'fraction', FriendlyNmae : 'leftOutage' },

         { ParameterName: 'rightOutage',
         value: [
            {topLeft:this.RL_TopLeft,topRight:this.RL_TopRight},
            {width1:this.RLL_inputE_Width_1, width2: this.RLL_inputE_Width_2,height:this.RLL_inputE_Height},
            {width1:this.RLR_inputE_Width_1, width2:this.RLR_inputE_Width_2,height:this.RLR_inputE_Height},
            {width1:this.RRL_inputE_Width_1, width2: this.RRL_inputE_Width_2,height:this.RRL_inputE_Height},
            {width1:this.RRR_inputE_Width_1, width2:this.RRR_inputE_Width_2,height:this.RRR_inputE_Height},],   Type: 'fraction', FriendlyNmae : 'rightOutage' },

         { ParameterName: 'bottomOutage',
         value: [
            {leftRight:this.leftRight,rightLeft:this.rightLeft},],   Type: 'fraction', FriendlyNmae : 'bottomOutage' },
     
         { ParameterName: 'notch',
         value: [
          {width1:this.LT_notch_width1, height1:this.LT_notch_height1,width2:this.LT_notch_width2, height2:this.LT_notch_height2},
          {width1:this.RT_notch_width1, height1:this.RT_notch_height1,width2:this.RT_notch_width2, height2:this.RT_notch_height2},  
          {width1:this.LB_notch_width1, height1:this.LB_notch_height1,width2:this.LB_notch_width2, height2:this.LB_notch_height2},
          {width1:this.RB_notch_width1, height1:this.RB_notch_height1,width2:this.RB_notch_width2, height2:this.RB_notch_height2},  ],   Type: 'fraction', FriendlyNmae : 'notch' },

         { ParameterName: 'Miter',
         value: [
          {LMB_letter:this.LMB_letter, RMB_letter:this.RMB_letter,LMF_letter:this.LMF_letter,RMF_letter:this.RMF_letter},],   Type: 'fraction', FriendlyNmae : 'Miter' },
        
          { ParameterName: 'Hole',
         value: [
            this.SingleHole_parm
          ,],   Type: 'fraction', FriendlyNmae : 'Hole' },
    
          { ParameterName: 'Unotch',
         value: [
            this.Unotch_parm
            ],   Type: 'fraction', FriendlyNmae : 'Unotch' },
       
          { ParameterName: 'CircleNotch',
          value: [
            this.Cnotch_parm
            ,],   Type: 'fraction', FriendlyNmae : 'CircleNotch' },

            { ParameterName: 'RectNotch',
            value: [
              this.Rnotch_parm
           ,],   Type: 'fraction', FriendlyNmae : 'RectNotch' },

              { ParameterName: 'EarNotch',
              value: [
              this.Enotch_parm
                ,],   Type: 'fraction', FriendlyNmae : 'EarNotch' },

                

            ],
      Reset: function () { }
    };

      var transform = new Transform(context);
      transform.draw();

  })


   $("#reload").click(function () {
    window.location.reload();
   
  });

  $("#download").click(function () {
    download();
  });





