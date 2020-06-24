// id = threeModel

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 5  

let canvas = document.getElementById("threeCanvas");
let renderer = new THREE.WebGLRenderer({canvas});

renderer.setClearColor('#e5e5e5')

// document.getElementById("threeModel").appendChild(renderer.domElement)

// to adjust screen responsive 
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
});

let material, geometry, pan, mesh, light;

function drawPane(obj) {
    mesh = new THREE.Group();
    for (let i = 0; i < obj.length; i++) {
        material = new THREE.MeshPhongMaterial({
            color:0xffffff,
            opacity: obj[i].opacity,
            transparent: true,
        });
    
        geometry = new THREE.BoxGeometry(obj[i].width, obj[i].height ,0.1);
    
        pan = new THREE.Mesh(geometry, material);
        pan.position.set( 0, 0, 0.5 );
        pan.rotation.y = obj[i].angle;    
        
        mesh.add( pan );
    }    

    scene.add( mesh );

    light = new THREE.PointLight(0xFFFFF,1,500);
    light.position.set(10, 0, 25);
    scene.add(light);
}

drawPane(
    [
        {"width": 3, "height": 5, "angle": -Math.PI / 6, "opacity": 0.4}
    ]
);

function drawThreeModel() {

    clearThree(scene);    

    let inputedWidth = document.getElementById("width").value,
        inputedHeight = document.getElementById("height").value,
        transRate = 5 / inputedHeight;

    if(transRate * inputedWidth > 3) {
        transRate = 3 / inputedWidth;
    }

    let boxWidth = inputedWidth * transRate, 
        boxHeight = inputedHeight * transRate;

    drawPane(
        [
            {"width": boxWidth, "height": boxHeight, "angle": Math.PI / 6, "opacity": 0.6}
        ]
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

render();

addMouseHandler(canvas)