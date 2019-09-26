import * as THREE from './Core/three.module';
import { OrbitControls } from './Core/OrbitControls';
import Cube from './Objects/cube/index'

class MyHome {
    constructor(container) {
        this.container = container;
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
        this.camera.position.z = 100;

        this.controls = new OrbitControls(this.camera, this.container);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
        this.container.appendChild(this.renderer.domElement)
        this.renderer.setClearAlpha(0)
        this.renderer.shadowMapSoft = true
        this.renderer.shadowCameraNear = 1
        this.renderer.shadowCameraFar = this.camera.far
        this.renderer.shadowCameraFov = 60
        this.renderer.shadowMapBias = 0.0025
        this.renderer.shadowMapDarkness = 0.5
        this.renderer.shadowMapWidth = this.container.clientWidth
        this.renderer.shadowMapHeight = this.container.clientHeight

        let light = new THREE.AmbientLight(0xffffff)
        this.scene.add(light)

        this.scene.add(new Cube())
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }
}

export default MyHome;
