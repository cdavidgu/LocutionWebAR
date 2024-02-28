AFRAME.registerComponent('star-spawner', {
    init: function () {
        const starPoolEl = document.getElementById('universeHome');
        let xOffset = 0;
        // this.randomPos = this.randomPos.bind(this);
        starPoolEl.addEventListener('model-loaded', event => {
            star = starPoolEl.components.pool.requestEntity();
            if (star) {
                star.object3D.position.set(-1.7, -2, -5.5);
                star.object3D.scale.set(0.8, 0.8, 0.8);
            }
            while (xOffset < 16) {
                xOffset += 1;
                console.log(xOffset);
                star = starPoolEl.components.pool.requestEntity();
                if (star) {
                    randomVector = this.randomPos();
                    // console.log(randomVector);
                    star.object3D.position.set(randomVector.x, randomVector.y, randomVector.z);
                    star.object3D.scale.set(0.2, 0.2, 0.2);
                }
            }
        });
    },

    randomPos() {
        xMax = 9;
        xMin = -9;
        yMax = 10;
        yMin = -10;
        zMax = -10;
        zMin = -15;
        return {
            x: Math.random() * (xMax - xMin) + xMin,
            y: Math.random() * (yMax - yMin) + yMin,
            z: Math.random() * (zMax - zMin) + zMin,
        };
    }
});