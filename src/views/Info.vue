<template>
  <!-- Info Section -->
  <div class="Info">
    <b-container fluid class="content-section">
      <b-row no-gutters class="pt-4">
        <b-col>
          <h1 class="urdu-font text-center pb-3">خریداری</h1>
        </b-col>
      </b-row>
      <b-row no-gutters class="pt-5 justify-content-center">
        <b-col col="4" lg="4" v-for="disease in diseases[diseases]" :key="disease.id">
          <router-link :to="disease.route">
            <!-- <DiseaseCards :product="disease"/> -->
          </router-link>
          <h4 class="urdu-font cards-title pt-2 pb-4">{{disease.title}}</h4>
        </b-col>
        <b-col>
          Ali
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DiseaseCards from '../components/DiseasesCards';
export default {
  name : 'content',
  props: {
   diseases:Object
  },
  components: {
    DiseaseCards
  },
  data(){
   return {
 
   }
  },
  computed:{
  }
}
</script>


<style scoped>
  .cards-title{
    width: 200px;
    text-align: center;
  }

  /* .bg-img{
    background: url('../../public/assets/rice.jpg') no-repeat;
    background-size: cover;
  } */
</style>