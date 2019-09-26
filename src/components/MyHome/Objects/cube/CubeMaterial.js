import * as THREE from '../../Core/three.module';
import vert from './shader/vert'
import frag from './shader/frag'

/**
 * CubeMaterial class
 */
class CubeMaterial extends THREE.ShaderMaterial {
  /**
   * Constructor function
   * @param {Object} options Options
   */
  constructor(options) {
    super(options);

    this.vertexShader = vert;
    this.fragmentShader = frag;
    this.extensions.derivatives = true;

    this.uniforms = {
      a_Color: { type: 'c', value: new THREE.Vector3(Math.random(), Math.random(), Math.random()) }
    };

  }

  /**
   * Update function
   * @param {number} time Time
   */
  // update (time) {
  //   this.uniforms.time.value = time * 0.3;
  // }
}

export default CubeMaterial;