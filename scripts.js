var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 100 );
camera.position.z = 30;
//camera.translateX( 1)
//camera.translateZ( -200 )
//camera.translateY( -400)

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* var pcontrol = new THREE.PointerLockControls(camera, renderer.domElement);
pcontrol.lock() */
//var fperson = new THREE.FirstPersonControls(camera, renderer.domElement)

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enablePan = false

//controls.enabled = true
controls.target.set( 0, 0, 15 );
//controls.enableDamping = true;
//controls.enablePan = false;
controls.dampingFactor = 0.25;
//controls.enableZoom = true;
//controls.autoRotate = false;
//controls.maxZoom = 0.1;
//controls.minZoom = 0.1;

//controls.maxAzimuthAngle = 0.2

//controls.maxPolarAngle = 1.9
//controls.minDistance = 70;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

let light4 = new THREE.PointLight(0xc4c4c4,3);
        light4.position.set(-500,300,500);
        

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
//scene.add(light4);

var objLoader = new THREE.OBJLoader();

objLoader.setPath('./assets/');
objLoader.load('Virgencita--.obj', function (object) {

    scene.add(object);
    camera.lookAt(object.position)
    console.log(object.position)
    object.position.x = 0;
    object.position.y = -10;
    object.position.z = 0;
    /* object.position.y -= 60;
    object.position.z = -100; */

});

/* var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('../../examples/3d-obj-loader/assets/');
mtlLoader.setPath('../../examples/3d-obj-loader/assets/');
mtlLoader.load('r2-d2.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    //objLoader.setMaterials(materials);
    objLoader.setPath('../../examples/3d-obj-loader/assets/');
    objLoader.load('gato.obj', function (object) {

        scene.add(object);
        object.position.y -= 60;

    });

}); */

var animate = function () {
	requestAnimationFrame( animate );
    //fperson.update(0.3)
	controls.update();
	renderer.render(scene, camera);
};

animate();