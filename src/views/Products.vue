<template>
  <div class="main">
    <b-container class="products content-section">
      <b-row no-gutters class="pt-4">
        <b-col>
          <h1 class="urdu-font text-white text-center pb-3">{{ type }}</h1>
        </b-col>
      </b-row>
      <b-row no-gutters class="pt-5 justify-content-center">
        <b-col col="4" lg="4" v-for="item in cartItems[$route.params.type]" :key="item.id">
          <CartCards :cartItem="item" v-if="!['crops','seedsDiseases'].includes($route.params.type)"/>
          <!-- <DiseaseCards :cartItem="item" v-else-if="$route.params.type=='diseases'"/> -->
<!--          <CropCards :cartItem="item" v-if="$route.params.type=='crops'"/>-->
        </b-col>
      </b-row>
      <b-row no-gutters class="pt-1" v-if="$route.params.type=='seedsDiseases'">
        <b-col class="ml-2 d-flex justify-content-center" v-for="item in cartItems[$route.params.type]" :key="item.id">
          <DiseaseCards :cartItem="item"/>
        </b-col>
      </b-row>
      <b-row no-gutters class="pt-1" v-if="$route.params.type=='crops'">
        <b-col class="ml-2 d-flex justify-content-center" v-for="item in cartItems['cropsDiseases']" :key="item.id">
          <CropDisease :cartItem="item"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CartCards from '../components/CartCards';
import DiseaseCards from '../components/DiseasesCards';
import CropCards from '../components/CropsCards';
import {mapGetters} from "vuex";
import CropDisease from "../components/CropDisease";

export default {
  name: 'Products',
  components: {
    CropDisease,
    CartCards,
    DiseaseCards,
    CropCards
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('card', ['cartItems']),
    type() {
      let type = this.$route.params.type;
      if (type == "fertilizers") {
        return "کھادیں";
      } else if (type == "seeds") {
        return "بیج"
      } else if (type == "agrochemicals") {
        return "کیڑے مار ادویات";
      } else if (type == "crops") {
        return "فصلیں";
      } else if (type == "diseases") {
        return "فصلوں کی بیماریاں";
      } else if (type == "seedsDiseases") {
        return "بیج کی بیماریاں";
      }
    }
  }
}
</script>
<style scoped>

</style>
