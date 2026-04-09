import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const w = 1000;
const h = window.innerHeight;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.querySelector('main').appendChild(renderer.domElement);

const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;

const geometry = new THREE.SphereGeometry(2);
const lineMat = new THREE.LineBasicMaterial({color: 0xffffff});
const edges = new THREE.EdgesGeometry(geometry, 0);
const line = new THREE.LineSegments(edges, lineMat);

scene.add(line);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	ctrls.update();
}

animate();

function handleWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);