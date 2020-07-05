
let scene = new THREE.Scene(), 
    material, 
    geometry, 
    pan = {},
    panSize = {},
    knobs = {},
    mesh = new THREE.Group(), 
    light_point = new THREE.PointLight("0x69d0dd",1,500);
    light = new THREE.DirectionalLight( 0xffffff );

light_point.position.set(1, 0, 300);
light.position.set( 1, 0, 300 ).normalize();
scene.add(light_point);
scene.add(light);
scene.add(mesh);

let camera = new THREE.PerspectiveCamera(50, 1134/800, 1, 2000)
camera.position.z = 1200;
scene.add( camera );
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth * 0.8/800;
//     camera.updateProjectionMatrix()
// });

let canvasdiv = document.getElementById("threeCanvasDiv"),
    renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor('#e5e5e5')
renderer.setSize(1134, 800);
canvasdiv.appendChild(renderer.domElement);


function shapeDrawInidividualPan(obj, id, pos) {

    if(pan[id]) {
        mesh.remove(pan[id]);
        pan[id].geometry.dispose();
        pan[id].material.dispose();
        pan[id] = undefined;
    }
    if(knobs[id]) {
        mesh.remove(knobs[id]);
        knobs[id].geometry.dispose();
        knobs[id].material.dispose();
        knobs[id] = undefined;
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
        color: 0x2194ce,
        ambient: 0x58eaea,
        specular: 0x111111,
        emissive: 0x0,
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
    
    mesh.add(pan[id]);
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

        angle = document.getElementById("angle" + cloneIdAdded).value || 180,

        transRate,
        transformBy = "TransformByHeight",

        knobsStatus = document.getElementById("knobs" + cloneIdAdded).value || "none";

    if(cloneIdAdded == "") {
        cloneIdAdded = "main";
    }
    
    panSize[cloneIdAdded] = {
        "width": inputedWidth, 
        "height": inputedHeight,
        "angle": angle,
        "opacity": 0.4,
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
        "rightBottomSubHeight": rightBottomSubHeight,
        "knobsStatus": knobsStatus
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

    transRate = 400 / maxHeight;

    if( maxWidth * transRate > 400) {
        transRate = 500 / maxWidth;
        transformBy = "TransformByWidth";
    }

    DrawMesh(panSize, transRate);

    transformDesign(clicked_id);
    
}


function DrawMesh(objects, rate) {
    let panLength = Object.keys(objects).length;

    let objectTotalWidth = 0, objectTotalDepth = 0, startPosX = 0, startPosZ, angle=[];
    angle[0] = 0;
    for (let i = 0; i < panLength; i++) {
        if(i > 0) {
            angle.push(angle[i-1] + parseInt(180 - objects[Object.keys(objects)[i-1]].angle ) /180 * Math.PI );
        }
        let d_objectWidth = parseInt( objects[Object.keys(objects)[i]].width ) * rate * Math.cos(angle[i]);
        let d_objectDepth = ( parseInt( objects[Object.keys(objects)[i]].width ) ) * Math.sin(angle[i]) * rate;
        if(d_objectWidth > 0) {
            objectTotalWidth += d_objectWidth;
        }
        if(d_objectDepth > 0) {
            objectTotalDepth += d_objectDepth;
        }
    }
    startPosX = - objectTotalWidth / 2 + parseInt( objects[Object.keys(objects)[0]].width ) * rate / 2;
    startPosZ = Math.abs(objectTotalDepth) / 2;
    
    for (let i = 0; i < panLength ; i++) {
        shapeDrawInidividualPan(
            {
                "width": parseInt( objects[Object.keys(objects)[i]].width ) * rate, 
                "height": parseInt( objects[Object.keys(objects)[i]].height ) * rate, 
                "angle": angle[i],
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
            [startPosX, 0, startPosZ]
        );
        if(objects[Object.keys(objects)[i]].knobsStatus != "none") {
            drawKnobs(
                Object.keys(objects)[i], 
                rate, 
                [startPosX, 0, startPosZ], 
                angle[i], 
                objects[Object.keys(objects)[i]].knobsStatus
            );
        };
        if(i < panLength - 1) {
            startPosX += ( parseInt( objects[Object.keys(objects)[i]].width ) * Math.cos(angle[i]) + parseInt( objects[Object.keys(objects)[i+1]].width ) * Math.cos(angle[i+1]) ) * rate / 2;            
            startPosZ -= ( ( parseInt( objects[Object.keys(objects)[i+1]].width ) ) * Math.sin(angle[i+1]) + ( parseInt( objects[Object.keys(objects)[i]].width ) ) * Math.sin(angle[i]) ) * rate / 2;
        };
    }
}


function drawKnobs(id, rate, pos, ang, dir) {
    var parentWidth = panSize[id].width * rate,
        pointZ = (dir == "right") ? -parentWidth / 2 + 20 : parentWidth / 2 - 20;
    
    var points = [];
    points.push( new THREE.Vector3( 0, 20, pointZ ) );
    points.push( new THREE.Vector3( 20, 20, pointZ ) );
    points.push( new THREE.Vector3( 20, -20, pointZ ) );
    points.push( new THREE.Vector3( 0, -20, pointZ ) );

    var geometry = new THREE.BufferGeometry().setFromPoints( points ),
        material = new THREE.LineBasicMaterial( { color: 0x808080, linecap: 'round', linewidth: 2, linejoin:  'round' } );

    knobs[id] = new THREE.Line( geometry, material );
    knobs[id].rotation.y = ang - Math.PI / 2;
    knobs[id].position.x = pos[0];
    knobs[id].position.z = pos[2];
    mesh.add( knobs[id] );
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
        "rightBottomSubHeight": panSize[cloneId].rightBottomSubHeight,
        "knobsStatus": "none"
    };
    clonedStatus += "_clone";

    drawThreeModelBtnClick(clicked_id);
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
    panSize["main"] = {
        "width": 28, 
        "height": 71,
        "angle": 0,
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
        "rightBottomSubHeight": 0,
        "knobsStatus": "none"
    };
    shapeDrawInidividualPan(
        {
            "width": 28 * 500 / 71, 
            "height": 500, 
            "angle": 0.1, 
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
        }, 
        "main",
        [0, 0, 0]
    );
    render();
    addMouseHandler(canvasdiv);    
}


init();