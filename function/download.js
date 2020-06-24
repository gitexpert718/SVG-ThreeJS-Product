
    function download() {
        var d = new Date();
            function download(
                filename, // string
                blob // Blob
              ) {
                if (window.navigator.msSaveOrOpenBlob) {
                  window.navigator.msSaveBlob(blob, filename);
                } else {
                  const elem = window.document.createElement('a');
                  elem.href = window.URL.createObjectURL(blob);
                  elem.download = filename;
                  document.body.appendChild(elem);
                  elem.click();
                  document.body.removeChild(elem);
                }
              }
              
              var svg = document.querySelector('svg');
              var data = (new XMLSerializer()).serializeToString(svg);
              var canvas = document.createElement('canvas');
            
              canvg(canvas, data, {
                renderCallback: function () {
                  canvas.toBlob(function (blob) {
                      download(`${d.getDate()}day-${d.getHours()}hour/${d.getMinutes()}min.png`, blob);
                  });
                }
              });
            return "";
      }