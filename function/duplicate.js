
  
  function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
  }
  



  $('#hole_btn').click(function(){    
    var $div = $('div[id^="hole"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $hole = $div.clone().prop('id', 'hole'+num );  
    $div.after( $hole.append() );
  });


  $('#UN_btn').click(function(){
    var $div = $('div[id^="unotch"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $unotch = $div.clone().prop('id', 'unotch'+num );  
    $div.after( $unotch.append() );
  });

  /* $("#addContainer").click(function(){
    var $div = $('div[id^="mainDesignArea"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $mainDesignArea = $div.clone().prop('id', 'mainDesignArea'+num );  
    $mainDesignArea.find('[id]').each(function () {
      this.id += "_clone";
    });
    $div.after( $mainDesignArea.append() );
  }); */

  function cloning(clicked_id) {
    console.log("cloned by this id: ", clicked_id);
    var $div = $('div[id^="mainDesignArea"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $mainDesignArea = $div.clone().prop('id', 'mainDesignArea'+num );  
    $mainDesignArea.find('[id]').each(function () {
      this.id += "_clone";
    });
    $div.after( $mainDesignArea.append() );    
    document.getElementById(clicked_id).style.display = "none";
  }


  $('#CN_btn').click(function(){
    var $div = $('div[id^="cnotch"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $cnotch = $div.clone().prop('id', 'cnotch'+num );  
    $div.after( $cnotch.append() );
  });



  $('#RN_btn').click(function(){
    var $div = $('div[id^="rnotch"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $rnotch = $div.clone().prop('id', 'rnotch'+num );  
    $div.after( $rnotch.append() );
  });



  $('#EN_btn').click(function(){
    var $div = $('div[id^="enotch"]:last');
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;  
    var $enotch = $div.clone().prop('id', 'enotch'+num );  
    $div.after( $enotch.append() );
  });
