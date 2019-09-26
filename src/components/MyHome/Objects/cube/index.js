import * as THREE from '../../Core/three.module';
import CubeGeometry from './CubeGeometry';
import CubeMaterial from './CubeMaterial';

/**
 * Cube class
 */
class Cube extends THREE.Mesh {
  /**
   * Constructor function
   */
  constructor () {
    super(new CubeGeometry(), new CubeMaterial());
  }

  /**
   * Update function
   * @param {number} time Time
   */
//   update (time) {
//     this.material.update(time);
//   }
}

export default Cube;