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
      </b-card-text>
        <b-button :diseases="cartItem" variant="primary" class="w-100 urdu-font" @click="showModal = !showModal">بیماریاں</b-button>
        <DiseaseModal :showModal="showModal" :diseases="cartItem.diseases"/>
    </b-card>
  </div>
</template>

<script>
import DiseaseModal from './DiseaseModal';

export default {
  components:{
    DiseaseModal
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
    width: 260px;
    height: 320px;
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
