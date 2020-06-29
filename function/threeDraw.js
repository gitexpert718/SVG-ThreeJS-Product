
let scene = new THREE.Scene(), 
    material, 
    geometry, 
    pan={},
    panSize={},
    mesh = new THREE.Group(), 
    light = new THREE.PointLight("0xFFFFF",1,500);

light.position.set(1, 0, 300);
scene.add(light);
scene.add(mesh);

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


function shapeDrawInidividualPan(obj, id, pos) {

    if(pan[id]) {
        mesh.remove(pan[id]);
        pan[id].geometry.dispose();
        pan[id].material.dispose();
        pan[id] = undefined;
    }

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
        amount: 2,
        bevelSize: 0, 
        bevelThickness: 2 
    };    
    geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
    material = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        specular: 0x0000ff,
        opacity: obj.opacity,
        transparent: true,
        shininess: 100,
        clipShadows: true
    });
    pan[id] = new THREE.Mesh( geometry, material );
    pan[id].rotation.y = obj.angle;
    pan[id].position.x = pos[0];
    pan[id].position.y = pos[1];
    pan[id].position.z = pos[2];
    console.log(id + "'s position: ", pan[id].position, "\n");
    AddPanToMesh(pan[id]);
}


function AddPanToMesh(pan) {
    mesh.add(pan);
}


function drawThreeModelBtnClick(clicked_id) {

    cloneIdAdded = clicked_id.split("-")[1];

    let inputedWidth = document.getElementById("width" + cloneIdAdded).value || 28,
        inputedHeight = document.getElementById("height" + cloneIdAdded).value || 71,

        leftTopWidth = document.getElementById("LT_notch_width1" + cloneIdAdded).value || 0,
        leftTopSubWidth = document.getElementById("LT_notch_width2" + cloneIdAdded).value || leftTopWidth,
        leftTopHeight = document.getElementById("LT_notch_height1" + cloneIdAdded).value || 0,
        leftTopSubHeight = document.getElementById("LT_notch_height2" + cloneIdAdded).value || leftTopHeight,

        rightTopWidth = document.getElementById("RT_notch_width1" + cloneIdAdded).value || 0,
        rightTopSubWidth = document.getElementById("RT_notch_width2" + cloneIdAdded).value || rightTopWidth,
        rightTopHeight = document.getElementById("RT_notch_height1" + cloneIdAdded).value || 0,
        rightTopSubHeight = document.getElementById("RT_notch_height2" + cloneIdAdded).value || rightTopHeight,

        leftBottomWidth = document.getElementById("LB_notch_width1" + cloneIdAdded).value || 0,
        leftBottomSubWidth = document.getElementById("LB_notch_width2" + cloneIdAdded).value || leftBottomWidth,
        leftBottomHeight = document.getElementById("LB_notch_height1" + cloneIdAdded).value || 0,
        leftBottomSubHeight = document.getElementById("LB_notch_height2" + cloneIdAdded).value || leftBottomHeight,

        rightBottomWidth = document.getElementById("RB_notch_width1" + cloneIdAdded).value || 0,
        rightBottomSubWidth = document.getElementById("RB_notch_width2" + cloneIdAdded).value || rightBottomWidth,
        rightBottomHeight = document.getElementById("RB_notch_height1" + cloneIdAdded).value || 0,
        rightBottomSubHeight = document.getElementById("RB_notch_height2" + cloneIdAdded).value || rightBottomHeight,

        transRate,
        transformBy = "TransformByHeight";

    if(cloneIdAdded == "") {
        cloneIdAdded = "main";
    }
    
    panSize[cloneIdAdded] = {
        "width": inputedWidth, 
        "height": inputedHeight,
        "angle": 0,
        "opacity": 0.6,
        "leftTopWidth": leftTopWidth,
        "leftTopSubWidth": leftTopSubWidth,
        "leftTopHeight": leftTopHeight,
        "leftTopSubHeight": leftTopSubHeight,
        "rightTopWidth": rightTopWidth,
        "rightTopSubWidth": rightTopSubWidth,
        "rightTopHeight": rightTopHeight,
        "rightTopSubHeight": rightTopSubHeight,
        "leftBottomWidth": leftBottomWidth,
        "leftBottomSubWidth": leftBottomSubWidth,
        "leftBottomHeight": leftBottomHeight,
        "leftBottomSubHeight": leftBottomSubHeight,
        "rightBottomWidth": rightBottomWidth,
        "rightBottomSubWidth": rightBottomSubWidth,
        "rightBottomHeight": rightBottomHeight,
        "rightBottomSubHeight": rightBottomSubHeight
    };

    let maxHeight = parseInt(panSize[Object.keys(panSize)[0]]["height"]) || 71,
        maxWidth = parseInt(panSize[Object.keys(panSize)[0]]["width"]) || 28;
    for (let i = 1; i < Object.keys(panSize).length; i++) {
        let cntHeight = parseInt(panSize[Object.keys(panSize)[i]]["height"]),
            cntWidth = parseInt(panSize[Object.keys(panSize)[i]]["width"]);
        if ( cntHeight > maxHeight ) {
            maxHeight = cntHeight;
        }
        if ( cntWidth > maxWidth ) {
            maxWidth = cntWidth;
        }
    }

    transRate = 500 / maxHeight;

    if( maxWidth * transRate > 400) {
        transRate = 400 / maxWidth;
        transformBy = "TransformByWidth";
    }

    DrawMesh(panSize, transRate);
    
}


function DrawMesh(objects, rate) {
    let panLength = Object.keys(objects).length;

    let objectTotalWidth = 0, startPosX = 0;
    for (let i = 0; i < panLength; i++) {
        objectTotalWidth += parseInt( objects[Object.keys(objects)[i]].width ) * rate;
    }
    startPosX = - objectTotalWidth / 2 + parseInt( objects[Object.keys(objects)[0]].width ) * rate / 2;

    for (let i = 0; i < panLength ; i++) {
        shapeDrawInidividualPan(
            {
                "width": parseInt( objects[Object.keys(objects)[i]].width ) * rate, 
                "height": parseInt( objects[Object.keys(objects)[i]].height ) * rate, 
                "angle": ( objects[Object.keys(objects)[i]].angle ),
                "opacity": ( objects[Object.keys(objects)[i]].opacity ),
                "leftTopWidth": parseInt( objects[Object.keys(objects)[i]].leftTopWidth ) * rate,
                "leftTopSubWidth": parseInt( objects[Object.keys(objects)[i]].leftTopSubWidth ) * rate,
                "leftTopHeight": parseInt( objects[Object.keys(objects)[i]].leftTopHeight ) * rate,
                "leftTopSubHeight": parseInt( objects[Object.keys(objects)[i]].leftTopSubHeight ) * rate,
                "rightTopWidth": parseInt( objects[Object.keys(objects)[i]].rightTopWidth ) * rate,
                "rightTopSubWidth": parseInt( objects[Object.keys(objects)[i]].rightTopSubWidth ) * rate,
                "rightTopHeight": parseInt( objects[Object.keys(objects)[i]].rightTopHeight ) * rate,
                "rightTopSubHeight": parseInt( objects[Object.keys(objects)[i]].rightTopSubHeight ) * rate,
                "leftBottomWidth": parseInt( objects[Object.keys(objects)[i]].leftBottomWidth ) * rate,
                "leftBottomSubWidth": parseInt( objects[Object.keys(objects)[i]].leftBottomSubWidth ) * rate,
                "leftBottomHeight": parseInt( objects[Object.keys(objects)[i]].leftBottomHeight ) * rate,
                "leftBottomSubHeight": parseInt( objects[Object.keys(objects)[i]].leftBottomSubHeight ) * rate,
                "rightBottomWidth": parseInt( objects[Object.keys(objects)[i]].rightBottomWidth ) * rate,
                "rightBottomSubWidth": parseInt( objects[Object.keys(objects)[i]].rightBottomSubWidth ) * rate,
                "rightBottomHeight": parseInt( objects[Object.keys(objects)[i]].rightBottomHeight ) * rate,
                "rightBottomSubHeight": parseInt( objects[Object.keys(objects)[i]].rightBottomSubHeight ) * rate
            },
            Object.keys(objects)[i],
            [startPosX, 0, 0]
        );
        startPosX += ( parseInt( objects[Object.keys(objects)[i]].width ) + parseInt( objects[Object.keys(objects)[i+1]].width ) ) * rate / 2;
    }    
}


let clonedStatus = "_clone";
function AddPage(clicked_id) {

    cloning(clicked_id);
    
    let cloneId = "main",
        checkedCloneId = clicked_id.split("-")[1];
    
    if(checkedCloneId != "") {
        cloneId = checkedCloneId;
    }
    
    panSize[clonedStatus] = {
        "width": panSize[cloneId].width, 
        "height": panSize[cloneId].height,
        "angle": panSize[cloneId].angle,
        "opacity": panSize[cloneId].opacity,
        "leftTopWidth": panSize[cloneId].leftTopWidth,
        "leftTopSubWidth": panSize[cloneId].leftTopSubWidth,
        "leftTopHeight": panSize[cloneId].leftTopHeight,
        "leftTopSubHeight": panSize[cloneId].leftTopSubHeight,
        "rightTopWidth": panSize[cloneId].rightTopWidth,
        "rightTopSubWidth": panSize[cloneId].rightTopSubWidth,
        "rightTopHeight": panSize[cloneId].rightTopHeight,
        "rightTopSubHeight": panSize[cloneId].rightTopSubHeight,
        "leftBottomWidth": panSize[cloneId].leftBottomWidth,
        "leftBottomSubWidth": panSize[cloneId].leftBottomSubWidth,
        "leftBottomHeight": panSize[cloneId].leftBottomHeight,
        "leftBottomSubHeight": panSize[cloneId].leftBottomSubHeight,
        "rightBottomWidth": panSize[cloneId].rightBottomWidth,
        "rightBottomSubWidth": panSize[cloneId].rightBottomSubWidth,
        "rightBottomHeight": panSize[cloneId].rightBottomHeight,
        "rightBottomSubHeight": panSize[cloneId].rightBottomSubHeight
    }
    clonedStatus += "_clone";

    drawThreeModelBtnClick("transform-");
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
    shapeDrawInidividualPan(
        {
            "width": 28 * 500 / 71, 
            "height": 500, 
            "angle": 0, 
            "opacity": 0.6,
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
        }, 
        "main",
        [0, 0, 0]
    );
    render();
    addMouseHandler(canvasdiv);
    panSize["main"] = {
        "width": 28, 
        "height": 71,
        "angle": 0,
        "opacity": 0.6,
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
    };
}


init();