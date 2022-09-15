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

    camera.updateProjectionMatrix();
})

camera.position.z = 50;
camera.position.x = 50;
camera.position.y = 30;

const geometry = new THREE.OctahedronGeometry(3, 0);
const material = new THREE.MeshPhongMaterial({color:0xa05bfb});
/**const shape = new THREE.Mesh(geometry, material);
scene.add(shape);**/

for(i=0;i < 10; i++){
    var shape = new THREE.Mesh(geometry, material);
    shape.material.shininess = 100;
    shape.position.x = i * (Math.random() * 15);
    shape.position.y = i * (Math.random() * 10);
    shape.position.z = i * (Math.random() * 5);

    console.log(shape.position.x, shape.position.y, shape.position.z);
    scene.add(shape);
}

let shapes = scene.children.slice(2);

let render = () =>{
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function onMouseOver(){
    shapes.forEach((mesh) =>{
        let shapeSpeedX = Math.random() * 0.1;
        let shapeSpeedY = Math.random() * 0.1;
        mesh.rotation.x += shapeSpeedX;
        mesh.rotation.y += shapeSpeedY;
    })
}

window.addEventListener("mousemove", onMouseOver);

render();