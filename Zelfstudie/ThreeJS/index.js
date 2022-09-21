const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

/**Light 1**/
let light1 = new THREE.PointLight(0xffffff, 1, 500);
light1.position.set(50, 50, 50);
scene.add(light1);

/**Light 2**/
let light2 = new THREE.PointLight(0xffffff, 1, 1000);
light2.position.set(-30, -20, 20);
scene.add(light2);


const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    console.log("resizing");
    camera.updateProjectionMatrix();
})

camera.position.z = 50;
camera.position.x = 50;
camera.position.y = 30;

const geometry = new THREE.OctahedronGeometry(3, 0);
const material = new THREE.MeshPhongMaterial({color: 0xa05bfb});
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

let render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();