


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
      this.upLine = new Pathline("ULine" + cloneIdAdded);
      this.leftLine = new Pathline("LLine" + cloneIdAdded);
      this.rightLine = new Pathline("RLine" + cloneIdAdded);
      this.downLine = new Pathline("DLine" + cloneIdAdded);

      //-  - -  main Arrow  - 
      // upArrow
      this.upArrowline = new Pathline("U_LineArrow" + cloneIdAdded);
      this.ulArrowP = new Pathline("UL_Arrow" + cloneIdAdded);
      this.urArrowP = new Pathline("UR_Arrow" + cloneIdAdded);
      this.ulTip = new Arrow("UL_Tip" + cloneIdAdded,"left");
      this.urTip = new Arrow("UR_Tip" + cloneIdAdded,"right");

      // down
      this.downArrowline = new Pathline("D_LineArrow" + cloneIdAdded);
      this.dlArrowP = new Pathline("DL_Arrow" + cloneIdAdded);
      this.drArrowP = new Pathline("DR_Arrow" + cloneIdAdded);
      this.dlTip = new Arrow("DL_Tip" + cloneIdAdded,"left");
      this.drTip = new Arrow("DR_Tip" + cloneIdAdded,"right");

      // left
      this.lArrowline = new Pathline("L_LineArrow" + cloneIdAdded);
      this.lfupArrowP = new Pathline("LU_Arrow" + cloneIdAdded);
      this.lfdownArrowP = new Pathline("LD_Arrow" + cloneIdAdded);
      this.lfupTip = new Arrow("LU_Tip" + cloneIdAdded,"up");
      this.lfdownTip = new Arrow("LD_Tip" + cloneIdAdded,"down");

      //  right
      this.rArrowline = new Pathline("R_LineArrow" + cloneIdAdded);
      this.rgupArrowP = new Pathline("RU_Arrow" + cloneIdAdded);
      this.rgdownArrowP = new Pathline("RD_Arrow" + cloneIdAdded);
      this.rgupTip = new Arrow("RU_Tip" + cloneIdAdded,"up");
      this.rgdownTip = new Arrow("RD_Tip" + cloneIdAdded,"down");





      // =  = = = = = =  = = == = Corner  = = = = = = = = = = = = =  

      // line
      this.CL_uline = new Pathline("OLineLU" + cloneIdAdded);
      this.CL_dline = new Pathline("OLineLB" + cloneIdAdded);
      this.CR_uline = new Pathline("OLineRU" + cloneIdAdded);
      this.CR_dline = new Pathline("OLineRB" + cloneIdAdded);


      // upArrow
      this.CL_upArrowline = new Pathline("C_UL_Line" + cloneIdAdded);
      this.CL_ulArrowP = new Pathline("C_UL_P" + cloneIdAdded);
      this.CL_ulTip = new Arrow("C_UL_LTip" + cloneIdAdded,"left");
      this.CL_urTip = new Arrow("C_UL_RTip" + cloneIdAdded,"right");

      this.CR_upArrowline = new Pathline("C_UR_Line" + cloneIdAdded);
      this.CR_ulArrowP = new Pathline("C_UR_P" + cloneIdAdded);
      this.CR_ulTip = new Arrow("C_UR_LTip" + cloneIdAdded,"left");
      this.CR_urTip = new Arrow("C_UR_RTip" + cloneIdAdded,"right");

       // down
       this.CL_downArrowline = new Pathline("C_DL_Line" + cloneIdAdded);
       this.CL_dlArrowP = new Pathline("C_DL_P" + cloneIdAdded);
       this.CL_dlTip = new Arrow("C_DL_LTip" + cloneIdAdded,"left");
       this.CL_drTip = new Arrow("C_DL_RTip" + cloneIdAdded,"right");

       this.CR_downArrowline = new Pathline("C_DR_Line" + cloneIdAdded);
       this.CR_dlArrowP = new Pathline("C_DR_P" + cloneIdAdded);
       this.CR_dlTip = new Arrow("C_DR_LTip" + cloneIdAdded,"left");
       this.CR_drTip = new Arrow("C_DR_RTip" + cloneIdAdded,"right");

        // left
      this.CU_lArrowline = new Pathline("C_LU_Line" + cloneIdAdded);
      this.CU_lfupArrowP = new Pathline("C_LU_P" + cloneIdAdded);
      this.CU_lfupTip = new Arrow("C_LU_UTip" + cloneIdAdded,"up");
      this.CU_lfdownTip = new Arrow("C_LU_DTip" + cloneIdAdded,"down");

      this.CD_lArrowline = new Pathline("C_LD_Line" + cloneIdAdded);
      this.CD_lfdownArrowP = new Pathline("C_LD_P" + cloneIdAdded);
      this.CD_lfupTip = new Arrow("C_LD_UTip" + cloneIdAdded,"up");
      this.CD_lfdownTip = new Arrow("C_LD_DTip" + cloneIdAdded,"down");

      //  right
      this.CU_rArrowline = new Pathline("C_RU_Line" + cloneIdAdded);
      this.CU_rgupArrowP = new Pathline("C_RU_P" + cloneIdAdded);
      this.CU_rgupTip = new Arrow("C_RU_UTip" + cloneIdAdded,"up");
      this.CU_rgdownTip = new Arrow("C_RU_DTip" + cloneIdAdded,"down");

      this.CD_rArrowline = new Pathline("C_RD_Line" + cloneIdAdded);
      this.CD_rgdownArrowP = new Pathline("C_RD_P" + cloneIdAdded);
      this.CD_rgupTip = new Arrow("C_RD_UTip" + cloneIdAdded,"up");
      this.CD_rgdownTip = new Arrow("C_RD_DTip" + cloneIdAdded,"down");

      // group
      this.CLUW_Group = new Group("CLUW_Group" + cloneIdAdded,"horizon");
      this.CRUW_Group = new Group("CRUW_Group" + cloneIdAdded,"horizon");
      this.CLBW_Group = new Group("CLBW_Group" + cloneIdAdded,"horizon");
      this.CRBW_Group = new Group("CRBW_Group" + cloneIdAdded,"horizon");

      this.CLUH_Group = new Group("CLUH_Group" + cloneIdAdded,"vertical");
      this.CLBH_Group = new Group("CLBH_Group" + cloneIdAdded,"vertical");
      this.CRUH_Group = new Group("CRUH_Group" + cloneIdAdded,"vertical");
      this.CRBH_Group = new Group("CRBH_Group" + cloneIdAdded,"vertical");
      // letter
      this.C_LUH_Letter = new letter("C_LUH_Letter" + cloneIdAdded);
      this.C_LUW_Letter = new letter("C_LUW_Letter" + cloneIdAdded);
      this.C_RUW_Letter = new letter("C_RUW_Letter" + cloneIdAdded)
      this.C_RUH_Letter = new letter("C_RUH_Letter" + cloneIdAdded)

      this.C_LBH_letter = new letter("C_LBH_letter" + cloneIdAdded);
      this.C_LBW_Letter = new letter("C_LBW_Letter" + cloneIdAdded);
      this.C_RBW_Letter = new letter("C_RBW_Letter" + cloneIdAdded)
      this.C_RBH_Letter = new letter("C_RBH_Letter" + cloneIdAdded)



      //  - - - - Radius

      this.RL_u = new curve("LU_curve" + cloneIdAdded);
      this.RL_d = new curve("LD_curve" + cloneIdAdded);
      this.RR_u = new curve("RU_curve" + cloneIdAdded);
      this.RR_d = new curve("RD_curve" + cloneIdAdded);


      
      // upArrow
      this.RL_upArrowline = new Pathline("R_UL_Line" + cloneIdAdded);
      this.RL_ulArrowP = new Pathline("R_UL_P" + cloneIdAdded);
      this.RL_ulTip = new Arrow("R_UL_LTip" + cloneIdAdded,"left");
      this.RL_urTip = new Arrow("R_UL_RTip" + cloneIdAdded,"right");

      this.RR_upArrowline = new Pathline("R_UR_Line" + cloneIdAdded);
      this.RR_ulArrowP = new Pathline("R_UR_P" + cloneIdAdded);
      this.RR_ulTip = new Arrow("R_UR_LTip" + cloneIdAdded,"left");
      this.RR_urTip = new Arrow("R_UR_RTip" + cloneIdAdded,"right");

       // down
       this.RL_downArrowline = new Pathline("R_DL_Line" + cloneIdAdded);
       this.RL_dlArrowP = new Pathline("R_DL_P" + cloneIdAdded);
       this.RL_dlTip = new Arrow("R_DL_LTip" + cloneIdAdded,"left");
       this.RL_drTip = new Arrow("R_DL_RTip" + cloneIdAdded,"right");

       this.RR_downArrowline = new Pathline("R_DR_Line" + cloneIdAdded);
       this.RR_dlArrowP = new Pathline("R_DR_P" + cloneIdAdded);
       this.RR_dlTip = new Arrow("R_DR_LTip" + cloneIdAdded,"left");
       this.RR_drTip = new Arrow("R_DR_RTip" + cloneIdAdded,"right");



        // left
      this.RU_lArrowline = new Pathline("R_LU_Line" + cloneIdAdded);
      this.RU_lfupArrowP = new Pathline("R_LU_P" + cloneIdAdded);
      this.RU_lfupTip = new Arrow("R_LU_UTip" + cloneIdAdded,"up");
      this.RU_lfdownTip = new Arrow("R_LU_DTip" + cloneIdAdded,"down");

      this.RD_lArrowline = new Pathline("R_LD_Line" + cloneIdAdded);
      this.RD_lfdownArrowP = new Pathline("R_LD_P" + cloneIdAdded);
      this.RD_lfupTip = new Arrow("R_LD_UTip" + cloneIdAdded,"up");
      this.RD_lfdownTip = new Arrow("R_LD_DTip" + cloneIdAdded,"down");

      //  right
      this.RU_rArrowline = new Pathline("R_RU_Line" + cloneIdAdded);
      this.RU_rgupArrowP = new Pathline("R_RU_P" + cloneIdAdded);
      this.RU_rgupTip = new Arrow("R_RU_UTip" + cloneIdAdded,"up");
      this.RU_rgdownTip = new Arrow("R_RU_DTip" + cloneIdAdded,"down");

      this.RD_rArrowline = new Pathline("R_RD_Line" + cloneIdAdded);
      this.RD_rgdownArrowP = new Pathline("R_RD_P" + cloneIdAdded);
      this.RD_rgupTip = new Arrow("R_RD_UTip" + cloneIdAdded,"up");
      this.RD_rgdownTip = new Arrow("R_RD_DTip" + cloneIdAdded,"down");

      //Group 
      this.RLUW_Group = new Group("RLUW_Group" + cloneIdAdded,"horizon");
      this.RRUW_Group = new Group("RRUW_Group" + cloneIdAdded,"horizon");
      this.RLBW_Group = new Group("RLBW_Group" + cloneIdAdded,"horizon");
      this.RRBW_Group = new Group("RRBW_Group" + cloneIdAdded,"horizon");

      this.RLUH_Group = new Group("RLUH_Group" + cloneIdAdded,"vertical");
      this.RLBH_Group = new Group("RLBH_Group" + cloneIdAdded,"vertical");
      this.RRUH_Group = new Group("RRUH_Group" + cloneIdAdded,"vertical");
      this.RRBH_Group = new Group("RRBH_Group" + cloneIdAdded,"vertical");
      // letter
      this.R_LUH_Letter = new letter("R_LUH_Letter" + cloneIdAdded);
      this.R_LUW_Letter = new letter("R_LUW_Letter" + cloneIdAdded);
      this.R_RUW_Letter = new letter("R_RUW_Letter" + cloneIdAdded)
      this.R_RUH_Letter = new letter("R_RUH_Letter" + cloneIdAdded)

      this.R_LBH_letter = new letter("R_LBH_letter" + cloneIdAdded);
      this.R_LBW_Letter = new letter("R_LBW_Letter" + cloneIdAdded);
      this.R_RBW_Letter = new letter("R_RBW_Letter" + cloneIdAdded)
      this.R_RBH_Letter = new letter("R_RBH_Letter" + cloneIdAdded)



    // = = = = = = = = == =  LeftOutage

      this.L_dot_Line = new Pathline("L_dot_Line" + cloneIdAdded);
      this.LLL_E_dot_Line_1 = new Pathline("LLL_E_dot_Line_1" + cloneIdAdded);
      this.LLL_E_dot_Line_2 = new Pathline("LLL_E_dot_Line_2" + cloneIdAdded);
      this.L_Elbow_1 = new Pathline("L_Elbow_1" + cloneIdAdded);
      this.L_Elbow_2 = new Pathline("L_Elbow_2" + cloneIdAdded);
     
      //  = = = = = = = = ==  =RightOutage
     
      this.R_dot_Line = new Pathline("R_dot_Line" + cloneIdAdded);
      this.RLL_E_dot_Line_1 = new Pathline("RLL_E_dot_Line_1" + cloneIdAdded);
      this.RLL_E_dot_Line_2 = new Pathline("RLL_E_dot_Line_2" + cloneIdAdded);
      this.R_Elbow_1 = new Pathline("R_Elbow_1" + cloneIdAdded);
      this.R_Elbow_2 = new Pathline("R_Elbow_2" + cloneIdAdded);
     
      // bottom
      
      this.D_dot_Line = new Pathline("D_dot_Line" + cloneIdAdded); 

      // Notch

      this.LT_notch_width_path1 = new Pathline("LT_notch_width_path1" + cloneIdAdded);
      this.LT_notch_width_path2 = new Pathline("LT_notch_width_path2" + cloneIdAdded);

      this.LT_notch_height_path1 = new Pathline("LT_notch_height_path1" + cloneIdAdded);
      this.LT_notch_height_path2 = new Pathline("LT_notch_height_path2" + cloneIdAdded);

      this.RT_notch_width_path1 = new Pathline("RT_notch_width_path1" + cloneIdAdded);
      this.RT_notch_width_path2 = new Pathline("RT_notch_width_path2" + cloneIdAdded);

      this.RT_notch_height_path1 = new Pathline("RT_notch_height_path1" + cloneIdAdded);
      this.RT_notch_height_path2 = new Pathline("RT_notch_height_path2" + cloneIdAdded);

      this.LB_notch_width_path1 = new Pathline("LB_notch_width_path1" + cloneIdAdded);
      this.LB_notch_width_path2 = new Pathline("LB_notch_width_path2" + cloneIdAdded);

      this.LB_notch_height_path1 = new Pathline("LB_notch_height_path1" + cloneIdAdded);
      this.LB_notch_height_path2 = new Pathline("LB_notch_height_path2" + cloneIdAdded);

      this.RB_notch_width_path1 = new Pathline("RB_notch_width_path1" + cloneIdAdded);
      this.RB_notch_width_path2 = new Pathline("RB_notch_width_path2" + cloneIdAdded);

      this.RB_notch_height_path1 = new Pathline("RB_notch_height_path1" + cloneIdAdded);
      this.RB_notch_height_path2 = new Pathline("RB_notch_height_path2" + cloneIdAdded);


      this.extra_p1 = new Pathline("extra_p1" + cloneIdAdded);
    
      this.extra_p2 = new Pathline("extra_p2" + cloneIdAdded);
      this.extra_p3 = new Pathline("extra_p3" + cloneIdAdded);
      this.extra_p4 = new Pathline("extra_p4" + cloneIdAdded);
      this.extra_p5 = new Pathline("extra_p5" + cloneIdAdded);
      this.extra_p6 = new Pathline("extra_p6" + cloneIdAdded);
      this.extra_p7 = new Pathline("extra_p7" + cloneIdAdded);
      this.extra_p8 = new Pathline("extra_p8" + cloneIdAdded);


      //  = = = = ==  = ==  = Group
      this. upmainGroup = new Group("upGroup" + cloneIdAdded,"horizon");
      this. downmainGroup = new Group("downGroup" + cloneIdAdded,"horizon");
      this. leftmainGroup = new Group("leftGroup" + cloneIdAdded,"vertical");
      this. rightmainGroup = new Group("rightGroup" + cloneIdAdded,"vertical");
      this.centerGroup = new Group("cnote_Group" + cloneIdAdded,"horizon")
      
      this.topnote_Group = new Group("topnote_Group" + cloneIdAdded,"horizon")
      this.downnote_Group = new Group("downnote_Group" + cloneIdAdded,"horizon")
      this.leftnote_Group = new Group("leftnote_Group" + cloneIdAdded,"vertical");
      this.rightnote_Group = new Group("rightnote_Group" + cloneIdAdded,"vertical");

      this.logoNote_Group = new Group("logoNote_Group" + cloneIdAdded,"horizon");


      // letter
      this.frontletter = new letter("frontletter" + cloneIdAdded)
      this.backletter = new letter("backletter" + cloneIdAdded)

      this.leftnote = new letter("leftnote" + cloneIdAdded)
      this.rightnote = new letter("rightnote" + cloneIdAdded)


      this. centerNote = new letter("cnote" + cloneIdAdded)
      this.logoNote = new letter("logo" + cloneIdAdded)

      this.up_Widthletter = new letter("Top_Width" + cloneIdAdded);
      this.down_Widthletter = new letter("Bottom_Width" + cloneIdAdded);
      this.left_Heightletter = new letter("lef_height" + cloneIdAdded)
      this.right_Heightletter = new letter("Right_Height" + cloneIdAdded)


      // Rect
      this. luRect = new Rect("LU_Rect" + cloneIdAdded)
      this. ruRect = new Rect("RU_Rect" + cloneIdAdded)
      this. lbRect = new Rect("LB_Rect" + cloneIdAdded)
      this. rbRect = new Rect("RB_Rect" + cloneIdAdded)

      this.luRect1 = new Rect("LU_Rect1" + cloneIdAdded)
      this. ruRect1 = new Rect("RU_Rect1" + cloneIdAdded)
      this. lbRect1 = new Rect("LB_Rect1" + cloneIdAdded)
      this. rbRect1 = new Rect("RB_Rect1" + cloneIdAdded)

   

      //  = = = = = = = = Joints = = = == = == = = = = 

      this.BULine = new Pathline("BULine" + cloneIdAdded);
      this.BLLine = new Pathline("BLLine" + cloneIdAdded);
      this.BDLine = new Pathline("BDLine" + cloneIdAdded);
      this.BRLine = new Pathline("BRLine" + cloneIdAdded);

      this.LM_dot = new Pathline("LM_dot" + cloneIdAdded);
      this.RM_dot = new Pathline("RM_dot" + cloneIdAdded);


      this.LM_letterG = new Group("LM_letterG" + cloneIdAdded,"horizon");
      this.RM_letterG = new Group("RM_letterG" + cloneIdAdded,"horizon");
      this.LM_letter = new letter("LM_letter" + cloneIdAdded);
      this.RM_letter = new letter("RM_letter" + cloneIdAdded);


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

  
  //  $("#transform-").click( function() {

    

  // })

  function transformDesign(clicked_id) {

    cloneIdAdded = clicked_id.split("-")[1];
    console.log("cloneIdAdded: ", cloneIdAdded);

    // mainValue(simplePanel)
    this.inputWidth = inputing("width" + cloneIdAdded);
    this.inputHeight = inputing("height" + cloneIdAdded)
  
    this.ratio = this.inputWidth/this.inputHeight

    // console.log("getting inputed", this.inputHeight, this.inputWidth)


    this.centerNote = $("#note" + cloneIdAdded).val();

    // cornerValue
    this.LU_inputC_Width = inputing("LU_c_width1" + cloneIdAdded);
    this.LU_inputC_Height = inputing("LU_c_height1" + cloneIdAdded);
    this.RU_inputC_Width = inputing("RU_c_width1" + cloneIdAdded);
    this.RU_inputC_Height = inputing("RU_c_height1" + cloneIdAdded);
    this.LB_inputC_Width = inputing("LB_c_width1" + cloneIdAdded);
    this.LB_inputC_Height = inputing("LB_c_height1" + cloneIdAdded);
    this.RB_inputC_Width = inputing("RB_c_width1" + cloneIdAdded);
    this.RB_inputC_Height = inputing("RB_c_height1" + cloneIdAdded);

    // radiusValue
    this.LU_inputR_Width = inputing("LU_r_width1" + cloneIdAdded);
    this.LU_inputR_Height = inputing("LU_r_height1" + cloneIdAdded);
    this.RU_inputR_Width = inputing("RU_r_width1" + cloneIdAdded);
    this.RU_inputR_Height = inputing("RU_r_height1" + cloneIdAdded);
    this.LB_inputR_Width = inputing("LB_r_width1" + cloneIdAdded);
    this.LB_inputR_Height = inputing("LB_r_height1" + cloneIdAdded);
    this.RB_inputR_Width = inputing("RB_r_width1" + cloneIdAdded);
    this.RB_inputR_Height = inputing("RB_r_height1" + cloneIdAdded);


    // left-outage value
    this.LL_TopLeft = inputing("topLL" + cloneIdAdded);
    this.LL_TopRight = inputing("topLR" + cloneIdAdded);

    this.LLL_inputE_Width_1 = inputing("LLL_e_width1" + cloneIdAdded)
    this.LLL_inputE_Width_2 = inputing("LLL_e_width2" + cloneIdAdded)
    this.LLL_inputE_Height = inputing("LLL_e_height1" + cloneIdAdded)

    this.LLR_inputE_Width_1 = inputing("LLR_e_width1" + cloneIdAdded)
    this.LLR_inputE_Width_2 = inputing("LLR_e_width2" + cloneIdAdded)
    this.LLR_inputE_Height = inputing("LLR_e_height1" + cloneIdAdded)

    this.LRL_inputE_Width_1 = inputing("LRL_e_width1" + cloneIdAdded)
    this.LRL_inputE_Width_2 = inputing("LRL_e_width2" + cloneIdAdded)
    this.LRL_inputE_Height = inputing("LRL_e_height1" + cloneIdAdded)

    this.LRR_inputE_Width_1 = inputing("LRR_e_width1" + cloneIdAdded)
    this.LRR_inputE_Width_2 = inputing("LRR_e_width2" + cloneIdAdded)
    this.LRR_inputE_Height = inputing("LRR_e_height1" + cloneIdAdded)

    // right-outage value
    this.RL_TopLeft = inputing("topLL_R" + cloneIdAdded);
    this.RL_TopRight = inputing("topLR_R" + cloneIdAdded);

    this.RLL_inputE_Width_1 = inputing("RLL_e_width1" + cloneIdAdded)
    this.RLL_inputE_Width_2 = inputing("RLL_e_width2" + cloneIdAdded)
    this.RLL_inputE_Height = inputing("RLL_e_height1" + cloneIdAdded)

    this.RLR_inputE_Width_1 = inputing("RLR_e_width1" + cloneIdAdded)
    this.RLR_inputE_Width_2 = inputing("RLR_e_width2" + cloneIdAdded)
    this.RLR_inputE_Height = inputing("RLR_e_height1" + cloneIdAdded)

    this.RRL_inputE_Width_1 = inputing("RRL_e_width1" + cloneIdAdded)
    this.RRL_inputE_Width_2 = inputing("RRL_e_width2" + cloneIdAdded)
    this.RRL_inputE_Height = inputing("RRL_e_height1" + cloneIdAdded)

    this.RRR_inputE_Width_1 = inputing("RRR_e_width1" + cloneIdAdded)
    this.RRR_inputE_Width_2 = inputing("RRR_e_width2" + cloneIdAdded)
    this.RRR_inputE_Height = inputing("RRR_e_height1" + cloneIdAdded)

    // bottom-outage value
    this.leftRight = inputing("bLR_R" + cloneIdAdded)
    this.rightLeft = inputing("bLR_F" + cloneIdAdded)

    // notch
    this.LT_notch_width1 = inputing("LT_notch_width1" + cloneIdAdded)
    this.LT_notch_width2 = inputing("LT_notch_width2" + cloneIdAdded)

    this.LT_notch_height1 = inputing("LT_notch_height1" + cloneIdAdded)
    this.LT_notch_height2 = inputing("LT_notch_height2" + cloneIdAdded)

    this.RT_notch_width1 = inputing("RT_notch_width1" + cloneIdAdded)
    this.RT_notch_width2 = inputing("RT_notch_width2" + cloneIdAdded)
  
    this.RT_notch_height1 = inputing("RT_notch_height1" + cloneIdAdded)
    this.RT_notch_height2 = inputing("RT_notch_height2" + cloneIdAdded)


    this.LB_notch_width1 = inputing("LB_notch_width1" + cloneIdAdded)
    this.LB_notch_width2 = inputing("LB_notch_width2" + cloneIdAdded)
  
    this.LB_notch_height1 = inputing("LB_notch_height1" + cloneIdAdded)
    this.LB_notch_height2 = inputing("LB_notch_height2" + cloneIdAdded)

    this.RB_notch_width1 = inputing("RB_notch_width1" + cloneIdAdded)
    this.RB_notch_width2 = inputing("RB_notch_width2" + cloneIdAdded)
  
    this.RB_notch_height1 = inputing("RB_notch_height1" + cloneIdAdded)
    this.RB_notch_height2 = inputing("RB_notch_height2" + cloneIdAdded)

  // Miter

    this.LMB_letter = inputing("LMB" + cloneIdAdded)
    this.RMB_letter = inputing("RMB" + cloneIdAdded)
    this.LMF_letter = inputing("LMF" + cloneIdAdded)
    this.RMF_letter = inputing("RMF" + cloneIdAdded)

    // single hole

    this.SingleHole = getAllValues("SingleHole" + cloneIdAdded);
    
    this.SingleHole_parm = listToMatrix(this.SingleHole,7)


   
    // Unotch
  
    this.Unotch = getAllValues("Unotch" + cloneIdAdded);
    this.Unotch_parm = listToMatrix(this.Unotch,6)


    // CircleNotch
    this.Cnotch = getAllValues("Cnotch" + cloneIdAdded);
    this.Cnotch_parm = listToMatrix(this.Cnotch,5)


    // RectNotch
    this.Rnotch = getAllValues("Rnotch" + cloneIdAdded)
    this.Rnotch_parm = listToMatrix(this.Rnotch,6)

    // EarNotch
    this.Enotch = getAllValues("Enotch" + cloneIdAdded)
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
  }


  //  $("#reload").click(function () {
  //   window.location.reload();   
  // });

  function Reload() {
    window.location.reload();   
  }

  $("#download").click(function () {
    download();
  });





