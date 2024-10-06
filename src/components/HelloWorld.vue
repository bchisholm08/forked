<template>
  <div class="hello">
    <div id="demo">
      <div id="inner-demo">
        <h1 id="inner-demo-2"></h1>
      </div>
    </div>
    <VueParticle domId="demo" :config="particleConfig" />
  </div>
</template>

<script>
import VueParticle from "vue-particlejs";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    VueParticle,
  },
  data() {
    return {
      particleConfig: {
        particles: {
          number: { value: 300, density: { enable: true, value_area: 800 } },
          color: { value: "#7A7D7D" },
          shape: {
            type: "triangle",
            stroke: { width: 0, color: "#F87666" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.08,
            random: true,
            anim: { enable: true, speed: 1.0, opacity_min: 0.02, sync: true },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 0.5, size_min: 0.1, sync: true },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#5C6672",
            opacity: 0.3,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "repulse" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 0 } },
            bubble: {
              distance: 500,
              size: 500,
              duration: 5,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 400, duration: 25 },
            push: { particles_nb: 3.5 },
            remove: { particles_nb: 3.5 },
          },
        },
        retina_detect: true,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo {
  width: 100%;
  height: 50vh;
  background: #d7f9ff;
}
#inner-demo {
  width: 100%;
  height: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #565254;
  font-size: 2em;
}
#inner-demo h1 {
  position: relative;
  top: 4em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f87666;
}
</style>
