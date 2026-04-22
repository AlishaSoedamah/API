import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Globe from 'globe.gl';

// const w = 1000;
// const h = window.innerHeight;
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
// camera.position.z = 5;
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(w, h);
// document.querySelector('main').appendChild(renderer.domElement);

// const ctrls = new OrbitControls(camera, renderer.domElement);
// ctrls.enableDamping = true;

// const geometry = new THREE.SphereGeometry(2);
// const lineMat = new THREE.LineBasicMaterial({color: 0xffffff});
// const edges = new THREE.EdgesGeometry(geometry, 0);
// const line = new THREE.LineSegments(edges, lineMat);


// scene.add(line);

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// scene.add(hemiLight);

// function animate() {
// 	requestAnimationFrame(animate);
// 	renderer.render(scene, camera);
// 	ctrls.update();
// }

// animate();

// function handleWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// }
// window.addEventListener('resize', handleWindowResize, false);

// const globe = Globe()
//   .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
//   .pointsData([
//     { lat: 52.37, lng: 4.89, size: 0.5, color: 'hotpink' },   // Amsterdam
//     { lat: 40.71, lng: -74.00, size: 0.5, color: 'blue' }, // New York
//   ])
//   .pointAltitude('size')
//   .pointColor('color');

const globe = Globe()
  .globeImageUrl('./big.jpg')

globe(document.getElementById('globeViz'));

globe
  .arcsData([
	//long and lat data is in api
    { startLat: 52.37, startLng: 4.89, endLat: 46.4959, endLng: 80},
    { startLat: 47.7817, startLng: 8.0804, endLat: 46.4959, endLng: 80},
    { startLat: 47.0442, startLng: 8, endLat: 46.4959, endLng: 80},
    { startLat: 47.0442, startLng: 8, endLat: 20, endLng: 80},
    { startLat: 47.0442, startLng: 10, endLat: 4, endLng: 80},
    { startLat: 47.0442, startLng: 80, endLat: 10, endLng: 80},
    { startLat: 47.0442, startLng: 9, endLat: 2, endLng: 80},
  ])
  .arcColor(() => 'rgb(255, 255, 255)')

globe(document.getElementById('globeViz'));