<template>
  <div class="main">
    <b-container class="content-section">
        <b-row no-gutters class="pt-4">
          <b-col>
            <h1 class="text-center pb-3">خریداری</h1>
          </b-col>
        </b-row>
        <b-row no-gutters class="pt-5 justify-content-center">
          <b-col col="4" lg="4" v-for="card in categories" :key="card.id">
            <router-link :to="card.route">
              <ProductCards :product="card"/>
            </router-link>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCards from '@/components/ProductCards';
import {mapGetters} from "vuex"

export default {
  name: 'content',
  components: {
    ProductCards
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('card', ['categories'])
  }
}
</script>


<style scoped>
body {
  background-color: red;
  /*background: url('/public/assets/bg.jpg') no-repeat;*/
  /* The image used */
  background-image: url("https://ied.eu/wp-content/uploads/2018/05/agriculture-economy.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.cards-title {
  width: 200px;
  text-align: center;
}

/* .bg-img{
  background: url('../../public/assets/rice.jpg') no-repeat;
  background-size: cover;
} */
</style>
