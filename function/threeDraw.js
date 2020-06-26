
let scene = new THREE.Scene(), material, geometry, pan, mesh, light;

let camera = new THREE.PerspectiveCamera(50, 1134/600, 1, 1000)
camera.position.z = 650;
scene.add( camera );
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth * 0.8/600;
    camera.updateProjectionMatrix()
});

let canvasdiv = document.getElementById("threeCanvasDiv"),
    renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor('#e5e5e5')
renderer.setSize(1134, 600);
canvasdiv.appendChild(renderer.domElement);

function shapeDraw(obj) {
    let x = 0, y = 0;

    let shape = new THREE.Shape();
    shape.moveTo( x - obj.width / 2, y - obj.height / 2 + obj.leftBottomHeight ); // A
    shape.lineTo( x - obj.width / 2, y + obj.height / 2 - obj.leftTopHeight ); // B
    shape.lineTo( x - obj.width / 2 + obj.leftTopSubWidth, y + obj.height / 2 - obj.leftTopHeight ); // C
    shape.lineTo( x - obj.width / 2 + obj.leftTopSubWidth, y + obj.height / 2 - obj.leftTopSubHeight ); // D
    shape.lineTo( x - obj.width / 2 + obj.leftTopWidth, y + obj.height / 2 - obj.leftTopSubHeight ); // E
    shape.lineTo( x - obj.width / 2 + obj.leftTopWidth, y + obj.height / 2 ); // F
    shape.lineTo( x + obj.width / 2 - obj.rightTopWidth, y + obj.height / 2 ); // G
    shape.lineTo( x + obj.width / 2 - obj.rightTopWidth, y + obj.height / 2 - obj.rightTopSubHeight ); // H
    shape.lineTo( x + obj.width / 2 - obj.rightTopSubWidth, y + obj.height / 2 - obj.rightTopSubHeight ); // I
    shape.lineTo( x + obj.width / 2 - obj.rightTopSubWidth, y + obj.height / 2 - obj.rightTopHeight );
    shape.lineTo( x + obj.width / 2, y + obj.height / 2 - obj.rightTopHeight ); // J
    shape.lineTo( x + obj.width / 2, y - obj.height / 2 + obj.rightBottomHeight ); // K
    shape.lineTo( x + obj.width / 2 - obj.rightBottomSubWidth, y - obj.height / 2 + obj.rightBottomHeight ); // L
    shape.lineTo( x + obj.width / 2 - obj.rightBottomSubWidth, y - obj.height / 2 + obj.rightBottomSubHeight ); // M
    shape.lineTo( x + obj.width / 2 - obj.rightBottomWidth, y - obj.height / 2 + obj.rightBottomSubHeight ); // N
    shape.lineTo( x + obj.width / 2 - obj.rightBottomWidth, y - obj.height / 2 ); // O
    shape.lineTo( x - obj.width / 2 + obj.leftBottomWidth, y - obj.height / 2 ); // P
    shape.lineTo( x - obj.width / 2 + obj.leftBottomWidth, y - obj.height / 2 + obj.leftBottomSubHeight ); // Q
    shape.lineTo( x - obj.width / 2 + obj.leftBottomSubWidth, y - obj.height / 2 + obj.leftBottomSubHeight ); // R
    shape.lineTo( x - obj.width / 2 + obj.leftBottomSubWidth, y - obj.height / 2 + obj.leftBottomHeight ); // S
    shape.lineTo( x - obj.width / 2, y - obj.height / 2 + obj.leftBottomHeight ); // A

    let extrudeSettings = { 
        amount: 10,
        bevelSize: 1, 
        bevelThickness: 2 
    };
    mesh = new THREE.Group();
    geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
    material = new THREE.MeshPhongMaterial({
        color:0x00ff00,
        opacity: obj.opacity,
        transparent: true,
        shininess: 100,
        clipShadows: true
    });
    pan = new THREE.Mesh( geometry, material );
    pan.rotation.y = obj.angle;
    mesh.add(pan);
    scene.add(mesh);
    light = new THREE.PointLight(0xFFFFF,1,500);
    light.position.set(1, 0, 300);
    scene.add(light);
}

function drawThreeModel() {

    clearThree(scene);    

    let inputedWidth = document.getElementById("width").value || 0,
        inputedHeight = document.getElementById("height").value || 0,

        leftTopWidth = document.getElementById("LT_notch_width1").value || 0,
        leftTopSubWidth = document.getElementById("LT_notch_width2").value || leftTopWidth,
        leftTopHeight = document.getElementById("LT_notch_height1").value || 0,
        leftTopSubHeight = document.getElementById("LT_notch_height2").value || leftTopHeight,

        rightTopWidth = document.getElementById("RT_notch_width1").value || 0,
        rightTopSubWidth = document.getElementById("RT_notch_width2").value || rightTopWidth,
        rightTopHeight = document.getElementById("RT_notch_height1").value || 0,
        rightTopSubHeight = document.getElementById("RT_notch_height2").value || rightTopHeight,

        leftBottomWidth = document.getElementById("LB_notch_width1").value || 0,
        leftBottomSubWidth = document.getElementById("LB_notch_width2").value || leftBottomWidth,
        leftBottomHeight = document.getElementById("LB_notch_height1").value || 0,
        leftBottomSubHeight = document.getElementById("LB_notch_height2").value || leftBottomHeight,

        rightBottomWidth = document.getElementById("RB_notch_width1").value || 0,
        rightBottomSubWidth = document.getElementById("RB_notch_width2").value || rightBottomWidth,
        rightBottomHeight = document.getElementById("RB_notch_height1").value || 0,
        rightBottomSubHeight = document.getElementById("RB_notch_height2").value || rightBottomHeight,

        transRate = 500 / inputedHeight;

    if(transRate * inputedWidth > 400) {
        transRate = 400 / inputedWidth;
    }

    let boxWidth = inputedWidth * transRate, 
        boxHeight = inputedHeight * transRate;

    shapeDraw(
        {
            "width": boxWidth, 
            "height": boxHeight, 
            "angle": 0, 
            "opacity": 0.4,
            "leftTopWidth": leftTopWidth * transRate,
            "leftTopSubWidth": leftTopSubWidth * transRate,
            "leftTopHeight": leftTopHeight * transRate,
            "leftTopSubHeight": leftTopSubHeight * transRate,
            "rightTopWidth": rightTopWidth * transRate,
            "rightTopSubWidth": rightTopSubWidth * transRate,
            "rightTopHeight": rightTopHeight * transRate,
            "rightTopSubHeight": rightTopSubHeight * transRate,
            "leftBottomWidth": leftBottomWidth * transRate,
            "leftBottomSubWidth": leftBottomSubWidth * transRate,
            "leftBottomHeight": leftBottomHeight * transRate,
            "leftBottomSubHeight": leftBottomSubHeight * transRate,
            "rightBottomWidth": rightBottomWidth * transRate,
            "rightBottomSubWidth": rightBottomSubWidth * transRate,
            "rightBottomHeight": rightBottomHeight * transRate,
            "rightBottomSubHeight": rightBottomSubHeight * transRate
        }
    );
}

function clearThree(obj){
    while(obj.children.length > 0){ 
      clearThree(obj.children[0])
      obj.remove(obj.children[0]);
    }
    if(obj.geometry) obj.geometry.dispose()
  
    if(obj.material){
      Object.keys(obj.material).forEach(prop => {
        if(!obj.material[prop])
          return         
        if(typeof obj.material[prop].dispose === 'function')                                  
          obj.material[prop].dispose()                                                        
      })
      obj.material.dispose()
    }
}

let render = function() {
    requestAnimationFrame(render); //to adjust aspect ratio when screen changes
    renderer.render(scene, camera);
}

let mouseDown = false,
    mouseX = 0,
    mouseY = 0;

function onMouseMove(evt) {
    if (!mouseDown) {
        return;
    }
    evt.preventDefault();

    let deltaX = evt.clientX - mouseX,
        deltaY = evt.clientY - mouseY;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
    rotateScene(deltaX, deltaY);
}

function onMouseDown(evt) {
    evt.preventDefault();
    mouseDown = true;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
}

function onMouseUp(evt) {
    evt.preventDefault();
    mouseDown = false;
}

function addMouseHandler(canvas) {
    canvas.addEventListener('mousemove', function (e) {
        onMouseMove(e);
    }, false);
    canvas.addEventListener('mousedown', function (e) {
        onMouseDown(e);
    }, false);
    canvas.addEventListener('mouseup', function (e) {
        onMouseUp(e);
    }, false);
}

function rotateScene(deltaX, deltaY) {
    mesh.rotation.y += deltaX / 100;
    mesh.rotation.x += deltaY / 100;
}

function init() {
    shapeDraw({
        "width": 28 * 500 / 71, 
        "height": 500, 
        "angle": -Math.PI / 6, 
        "opacity": 0.4,
        "leftTopWidth": 0,
        "leftTopSubWidth": 0,
        "leftTopHeight": 0,
        "leftTopSubHeight": 0,
        "rightTopWidth": 0,
        "rightTopSubWidth": 0,
        "rightTopHeight": 0,
        "rightTopSubHeight": 0,
        "leftBottomWidth": 0,
        "leftBottomSubWidth": 0,
        "leftBottomHeight": 0,
        "leftBottomSubHeight": 0,
        "rightBottomWidth": 0,
        "rightBottomSubWidth": 0,
        "rightBottomHeight": 0,
        "rightBottomSubHeight": 0
    });
    render();
    addMouseHandler(canvasdiv);
}

init();