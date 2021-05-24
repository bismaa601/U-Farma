<template>
  <div id="app">
    <img src="/assets/logo.jpg" v-if="showLogo" width="100%" height="100%"/>
    <div v-else>
      <Navbar/>
      <router-view class="cs"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters('card', ['cart'])
  },
  data() {
    return {
      showLogo: true,
    }
  },
  methods: {
    ...mapActions('card', ['updateCart'])
  },
  mounted() {
    setTimeout(() => {
      this.showLogo = false
    }, 3000)
  },
  watch: {
    'cart': {
      handler() {
        this.updateCart();
      },
      deep: true,
    }
  }

}
</script>

<style lang="css">
body, html {
  height: 100%;
  /*background: url('/public/assets/bg.jpg') no-repeat;*/
  /* The image used */
  background-image: url("https://ied.eu/wp-content/uploads/2018/05/agriculture-economy.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-size: cover;
}

#app {
  height: 100%;
}

@import url(http://fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css);
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.urdu-font {
  font-family: 'Noto Nastaliq Urdu Draft', serif;
}

.text-center {
  text-align: center;
}

.shadow {
  box-shadow: 1px 1px 5px 5px rgba(53, 50, 50, 0.91);
}

.border {
  border: 1px solid black;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cs {
  padding-top: 40px;
}
</style>
