<template>
 <div>
    <b-card
      :img-src="cartItem.src"
      img-alt="Image"
      img-top
      img-height="160"
      tag="article"
      class="mb-5 card-anim shadow card-imgS"
    >
      <b-card-text>
        <b-row class="mb-1">
          <b-col class="inline">
            <h4 class="urdu-font">{{cartItem.item}}</h4>
            <b-button variant="outline-info" class="mt-2" @click="audio(cartItem)">
              <b-icon icon="volume-up" aria-hidden="true"></b-icon>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <!-- <h4 class="urdu-font des">{{cartItem.des}}</h4> -->
          </b-col>
        </b-row>
      </b-card-text>
      <b-button :diseases="cartItem" variant="primary" class="w-100 urdu-font" @click="showModal = !showModal">بیماری کی وضاحت</b-button>
      <DiseaseInfoModal :showModal="showModal" :disease="cartItem"/>
    </b-card>
  </div>
</template>

<script>
import DiseaseInfoModal from './DiseaseInfoModal';

export default {
  components:{
    DiseaseInfoModal
  },
  props: {
   cartItem:Object
  },

  data() {
    return{
      showModal: false
    }
  },

  methods:{
    audio(cartItem){
      var sound = new Audio(cartItem.audio);
      sound.play();
    }
  }
}
</script>


<style scoped>
  .card-anim{
    width: 350px;
    /*height: 400px;*/
    padding: 15px 10px;
    transition: 0.3s;
  }

  .card-anim:hover{
    transform: scale(1.05);
  }

  .des{
    font-size: 18px;
    letter-spacing: 0.05rem;
    word-spacing: 0.6rem;
  }

  .inline{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

</style>
