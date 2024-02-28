

AFRAME.registerComponent('locutor-model', {
    init: function () {
        this.counter = 0;
        this.el.addEventListener('model-loaded', event => {
            console.log("Model loaded ...");
            var objMesh = this.el.getObject3D('mesh');
            objMesh.traverse((node) => {
                if (node.isMesh && node.material.map) {
                    this.counter += 1;
                    // console.log('material= ' + node.material.name)
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.map, 0);
                }
                if (node.isMesh && node.material.normalMap) {
                    this.counter += 1;
                    // console.log('NORMAL MAP=' + node.material.normalMap.name);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.normalMap, 0);
                }
                if (node.isMesh && node.material.envMap) {
                    this.counter += 1;
                    // console.log('ENV MAP =' + node.material.envMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.envMap, 0);
                }
                if (node.isMesh && node.material.bumpMap) {
                    this.counter += 1;
                    // console.log('BUMP MAP =' + node.material.bumpMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.bumpMap, 0);
                }
                if (node.isMesh && node.material.emissiveMap) {
                    this.counter += 1;
                    // console.log('EMISSIVE MAP =' + node.material.emissiveMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.emissiveMap, 0);
                }
                if (node.isMesh && node.material.lightMap) {
                    this.counter += 1;
                    // console.log('LIGHT MAP =' + node.material.lightMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.lightMap, 0);
                }
                if (node.isMesh && node.material.aoMap) {
                    this.counter += 1;
                    // console.log('Ambien Oclussion MAP =' + node.material.aoMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.aoMap, 0);
                }
                if (node.isMesh && node.material.metalnessMap) {
                    this.counter += 1;
                    // console.log('METALNESS MAP =' + node.material.metalnessMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.metalnessMap, 0);
                }
                if (node.isMesh && node.material.roughnessMap) {
                    this.counter += 1;
                    // console.log('ROUGHNESS MAP  =' + node.material.roughnessMap);
                    document.querySelector('a-scene').renderer.setTexture2D(node.material.roughnessMap, 0);
                }
            });
            console.log("TOTAL Materials= " + this.counter);
        });
    }
});