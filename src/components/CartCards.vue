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
          <b-col>
            <h4 class="urdu-font">{{ cartItem.item }}</h4>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <b-button variant="outline-info" class="mt-2" @click="audio(cartItem)">
              <b-icon icon="volume-up" aria-hidden="true"></b-icon>
            </b-button>
          </b-col>
          <b-col md="auto">
            <p class="pt-3">{{ cartItem.price }}</p>
          </b-col>
        </b-row>
      </b-card-text>
      <!-- <b-button href="#" variant="primary" class="w-100 urdu-font" @click="showModal = !showModal">خریدنا</b-button> -->
      <b-button href="#" variant="primary" class="w-100 urdu-font" @click="addToCart(cartItem)">
        ({{ total(cartItem) }})خریدنا
      </b-button>
    </b-card>


  </div>
</template>

<script>
import CartModal from './CartModal';
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    CartModal
  },
  props: {
    cartItem: Object
  },

  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters('card', ['cart'])
  },
  methods: {
    ...mapActions('card', ['addToCart']),
    total(item) {
      let qty = 0;
      this.cart.forEach(i => {
        if (i.type === item.type && i.id === item.id) {
          qty += i.qty;
        }
      })
      return qty;
    },
    audio(cartItem) {
      var sound = new Audio(cartItem.audio);
      sound.play();
    }
  }
}
</script>


<style scoped>
.card-anim {
  width: 260px;
  height: 390px;
  padding: 15px 10px;
  transition: 0.3s;
}

.card-anim:hover {
  transform: scale(1.05);
}

</style>
