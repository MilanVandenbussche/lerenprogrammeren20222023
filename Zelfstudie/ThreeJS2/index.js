/**
 // Scene
 const scene = new THREE.Scene();

 // Object
 const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

 // Materials
 const material = new THREE.MeshBasicMaterial();
 material.color = new THREE.Color(0xff0000);

 // Mesh
 const torus = new THREE.Mesh(geometry, material);
 scene.add(torus);

 // Lights
 const pointLight = new THREE.PointLight(0xffffff, 0.1);
 pointLight.position.x = 2;
 pointLight.position.y = 3;
 pointLight.position.z = 4;
 scene.add(pointLight);

 // Sizes //
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

 window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

 // Camera //
 // Base camera
 const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
 camera.position.x = 0;
 camera.position.y = 0;
 camera.position.z = 2;
 scene.add(camera);

 // Renderer //
 const renderer = new THREE.WebGLRenderer({antialias: true});
 renderer.setSize(sizes.width, sizes.height);
 renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
 renderer.setClearColor("#e5e5e5");

 // Animate //
 const clock = new THREE.Clock();

 const tick = () =>{
    const elapsedTime = clock.getElapsedTime();

    // Update Objects
    torus.rotation.y = .5 * elapsedTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

 tick();

 **/

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog({
    color: "#21282a",
    near: 1,
    far: 2
})

// Objects
const sphereGeometry = new THREE.OctahedronGeometry(.5, 0);

// Materials
const sphereMaterial = new THREE.MeshPhysicalMaterial();
sphereMaterial.clearcoat = 1;
sphereMaterial.color = new THREE.Color(0xeab676)

// Mesh
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Lights
const pointLight = new THREE.PointLight(0xFff6a9, .7);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// sizes !!!!
const sizes = {width: window.innerWidth, height: window.innerHeight}

window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 4;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#21282a");

// Mouse
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

sphere.position.x = 0;

let render = () => {
    sphere.rotation.y = mouseX * 0.000935;

    // Render
    renderer.render(scene, camera);

    // Call render again on the next frame
    window.requestAnimationFrame(render);
}

window.addEventListener("click", () => {
    while (camera.position.z <= 2) {
        camera.position.z -= 0.01;
    })

render();
