<template>
 <div class="main">
   <b-container class="products content-section">
     <b-row no-gutters class="pt-4">
       <b-col>
         <h1 class="urdu-font text-center pb-3">{{ type }}</h1>
       </b-col>
     </b-row>
     <b-row no-gutters class="pt-5 justify-content-center">
       <b-col col="4" lg="4" v-for="item in cartItems[$route.params.type]" :key="item.id">
         <CartCards :cartItem="item" v-if="$route.params.type!='crops'"/>
         <!-- <DiseaseCards :cartItem="item" v-else-if="$route.params.type=='diseases'"/> -->
         <CropCards :cartItem="item" v-else/>
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
export default {
  name: 'Products',
  components: {
    CartCards,
    DiseaseCards,
    CropCards
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters('card', ['cartItems']),
    type(){
      let type=this.$route.params.type;
      if(type=="fertilizers"){
        return "کھادیں";
      }else if(type=="seeds"){
        return "بیج"
      }else if(type=="agrochemicals"){
        return "کیڑے مار ادویات";
      }else if(type=="crops"){
        return "فصلیں";
      }else if(type=="diseases"){
        return "فصلوں کی بیماریاں";
      }
    }
  }
}
</script>
<style scoped>
.main {
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
</style>
