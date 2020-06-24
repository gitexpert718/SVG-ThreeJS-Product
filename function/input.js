
    function strTofraction(string) {
        var str = string.split("-");
        var realValue = str[1] ? math.fraction(str[0]+' ' +str[1]) : math.fraction(str[0]);
        return realValue;
      }
  
      function inputing(id) {
        
        if($('#'+id).val()) {
          var string = $('#'+id).val()
         return strTofraction(string)
        } else {
          return 0;
        }
      }
  
      function getAllValues(id) {
     
        var inputValues = $('#'+id+' :input').map(function() {
            var type = $(this).prop("type");
  
            // checked radios/checkboxes
            if ((type == "checkbox" || type == "radio") && this.checked) { 
              return $(this).val();
            }
            // all other fields, except buttons
            else if (type != "button" && type != "submit") {
                return $(this).val();
            }
        })
        return inputValues;
      }
  
      function listToMatrix(list, elementsPerSubArray) {
      var matrix = [], i, k;
  
      for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
              k++;
              matrix[k] = [];
          }
  
          matrix[k].push(list[i]);
      }
  
      return matrix;
      }