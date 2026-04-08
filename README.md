# API

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## De opdacht

Maak een server side rendered website die gebruikmaakt van web-en content API's
Maak een overview pagina en een detail pagina

# Week 1
### Dag 1 • kickoff
#### Woensdag 01.04.26


<b>Wat heb ik vandaag gedaan?</b>
- Node op mijn laptop geïnstalleerd
- Astro opgezet
- Eerste idee bedacht voor de overzicht en detail pagina met Stock Exchange API
https://api-ninjas.com/api/stockexchange

Design:
<img src="public/stock-app.png">

<b>Hoeveel tijd heeft me dat gekost?</b>
6 uur

<b>Wat heb ik geleerd?</b>
Meer over Astro, dat je JS in je HTML kunt gebruiken

<b>Wat ga ik morgen doen?</b>
Voortgang bespreken en horen of het idee goed genoeg is

##### Het idee 
Een stock app waar je bedrijven kan opzoeken...

### Voortgang week 1
<details>
<summary> Donderdag 02.04.26 </summary>

Het is wel een leuk idee maar
Wat we hebben besproken:

- Misschien andere data vinden waar je een visualisatie van kunt maken (de stockmarket API haalt maar 1 market op)

- Als je 3D gaat doen met Threes.js (webGL) dan wordt dan erg veel werk (bedenk of je dat echt wil doen of toch iets anders kiest)

- [github globe animation](https://www.youtube.com/watch?v=ddIZlWmfFKM)

Ideeën voor connecties
- https://rapidapi.com/RyanFin/api/mountain-api1
- https://www.mountain-forecast.com/peaks/Api

</details>

# Week 2

### Dag 2
#### Woensdag 08.04.26

<b>Wat heb ik vandaag gedaan?</b>
- Workshop over components in astro gedaan
- three.js in mijn astro project gezet
- Sphere in three.js gemaakt
Een simpele textured 3D globe in Three.js:

```
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	const w = window.innerWidth;
	const h = window.innerHeight;
	const scene = new THREE.Scene(); //container waar de HELE 3D scene in gaat
	const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100); //wat de viewer ziet, een gedeelde van de 3D scene
	camera.position.z = 5; //camera pos

	const renderer = new THREE.WebGLRenderer({antialias: true}); //Maakt een nieuwe WebGL renderer

	renderer.setSize(w, h);
	document.body.appendChild(renderer.domElement);

	new OrbitControls(camera, renderer.domElement); //let camera orbit around object

	const loader = new THREE.TextureLoader();
	const geometry = new THREE.IcosahedronGeometry(1, 12);
	const material = new THREE.MeshStandardMaterial({map: loader.load("earthcloudmap.jpg")});
	const earthMesh = new THREE.Mesh(geometry, material);

	scene.add(earthMesh);

	const hemi = new THREE.HemisphereLight(0xffffff, 0x444444);
	scene.add(hemi);

	function animate()
	{
		requestAnimationFrame(animate);
		earthMesh.rotation.x += 0.001;
		earthMesh.rotation.y += 0.001;
		renderer.render(scene, camera);
	}

	animate();
```
<b>Hoeveel tijd heeft me dat gekost?</b>
De hele dag


<b>Wat heb ik geleerd?</b>
Meer over astro en three.js


### Dag 3
#### Donderdag 09.04.26

### Voortgang week 2
<details>
<summary> Vrijdag 10.04.26 </summary>
Wat we hebben besproken:
</details>

# Week 3
### Dag 4
#### Donderdag 16.04.26

### Voortgang week 3
<details>
<summary> Vrijdag 17.04.26 </summary>
Wat we hebben besproken:
</details>

# Week 4
### Dag 5
#### Woensdag 22.04.26

### Dag 6
#### Donderdag 23.04.26

### Voortgang week 4
<details>
<summary> Vrijdag 24.04.26 </summary>
Wat we hebben besproken:
</details>