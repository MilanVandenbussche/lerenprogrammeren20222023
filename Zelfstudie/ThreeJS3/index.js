// Variables for setup
let container;
let camera;
let renderer;
let scene;
let shape;

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    console.log("resizing");
    camera.updateProjectionMatrix();
})

container = document.querySelector(".scene");

// Create scene
scene = new THREE.Scene();

// Renderer
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Camera Setup
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = .1;
const far = 100;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.lookAt(scene.position);
camera.position.set(5, 10, 30);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxDistance = 50;
controls.minDistance = 5;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;
controls.enableDamping = true;

// Shape
const shapeGeometry = new THREE.TorusGeometry(5, 2, 20, 30);
const shapeMaterial = new THREE.PointsMaterial({color: 0x00FF00, size: .05});
shape = new THREE.Points(shapeGeometry, shapeMaterial);

// Stars
const starsGeometry = new THREE.BufferGeometry();
const starsCnt = 1000;
const posArray = new Float32Array(starsCnt * 3);
for(let i = 0; i < starsCnt * 3; i++){
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 100);
}
const starsMaterial = new THREE.PointsMaterial({color: "white", size: .05});
starsGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const stars = new THREE.Points(starsGeometry, starsMaterial);

// Planet
const texture = new THREE.TextureLoader().load("./3d/textures/earth-texture.jpeg");
const planetGeometry = new THREE.SphereGeometry(.5, 32, 16);
const planetMaterial = new THREE.MeshPhongMaterial({map: texture});
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(4.9, 0, 0);

let orbit = new THREE.Group();
orbit.add(planet);

// Add shapes
scene.add(shape, stars, orbit);

// Lights
const ambientLight = new THREE.AmbientLight(0x404040);
const pointLight = new  THREE.PointLight(0x404040, 2, 100);

// Add Lights
scene.add(ambientLight, pointLight);

/** test
var planet = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 32, 32),
    new THREE.MeshPhongMaterial({color: 'yellow'})
);
planet.position.set(3.2, 0, 0);

var orbitDir = new THREE.Group();
orbitDir.rotation.x = 0.25;
orbitDir.add(planet);
scene.add(orbitDir);

var solar = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1.0, 32, 32),
    new THREE.MeshPhongMaterial({emissive: 0xff5800, emissiveIntensity: 0.5})
);

// Lights
const ambientLight = new THREE.AmbientLight(0x404040);
const pointLight = new  THREE.PointLight(0x404040, 5, 100);
solar.add(pointLight);

// Add Lights
scene.add(ambientLight, solar);

 **/

function animate() {
    shape.rotation.z += 0.001;
    // stars.rotation.z -= 0.001;
    // stars.rotation.y += 0.001;
    // if(comet.position.z <= 105){
    //     comet.position.z += .05;
    // }else{
    //     comet.position.z = -105;
    // }
    planet.rotation.y += 0.003;
    planet.rotation.x -= 0.003;
    planet.rotation.z += 0.003;
    orbit.rotation.z -= 0.001;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();