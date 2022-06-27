<template>
  <q-layout :class="$q.dark.isActive ? 'dark_auth' : 'normal_auth'">
    <q-page-container>
      <q-page class="flex flex-center">
        <div
          id="particles-js"
          :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
        ></div>
        <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
        <router-view></router-view>
      </q-page>
      <q-footer elevated>
        <q-toolbar>
          <q-toolbar>
            <q-btn flat round dense class="q-mr-sm">
              ПОДДЕРЖКА 24/7 <i class="fas fa-phone" style="margin: 0 5px;"></i>
              <div class="phone">(+996 990 000 302)</div>
            </q-btn>
            <q-space></q-space>
            <SetLocaleBtn></SetLocaleBtn>
            <q-btn flat round dense style="margin-left: 10px;">
              © 2022 with
              <i class="fas fa-heart" style="margin-left: 5px;"></i>
            </q-btn>
          </q-toolbar>
        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>
<script>
  import SetLocaleBtn from "../../../components/SetLocaleBtn"

  export default {
    data() {
      return {
        username: 'admin',
        password: 'Admin@CRM'
      }
    },
    components: {
      SetLocaleBtn,
    },

    mounted() {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 120,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }
</script>

<style>
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .normal_gradient {
    background-image: url("/statics/images/bg_light.png");
    background-size: cover !important;
    /*background: linear-gradient(145deg, rgb(74, 94, 137) 15%, #b61924 70%);*/
  }

  .dark_gradient {
    background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6)
    ), url("/statics/images/bg_light.png");
    background-size: cover !important;
    /*background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);*/
  }

  .login-form {
    position: absolute;
  }

  .normal_auth a {
    color: var(--q-color-primary);
  }

  .dark_auth a {
    color: white;
  }

  .dark_auth .q-footer {
    background-color: transparent;
  }

  @media screen and (max-width: 400px) {
    a {
      font-size: 12px;
    }

    .q-checkbox__label {
      font-size: 11px;
    }

    .q-checkbox__inner {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 486px) {
    .phone {
      display: none;
    }
  }
</style>
