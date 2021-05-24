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
      <b-button href="#" variant="primary" class="w-100 urdu-font" @click="add">
       خریدنا
      </b-button>
    </b-card>

    <div>
      <b-modal :ref="`cartItem${cartItem.id}`" title="اسٹاک"
               centered
               hide-footer>
        <b-row v-if="cart.length" v-for="(item,index) in cart" :key="index">
          <b-col cols="1">{{ index + 1 }}.</b-col>
          <b-col cols="3">{{ item.item }}</b-col>
          <b-col class="d-flex justify-content-end">
            <b-button href="#" variant="outline-primary" class="btn btn-qty mx-1 urdu-font"
                      @click="decreaseQty(item)">کم
            </b-button>

            <b-form-group
                label-for="name-input"
                invalid-feedback="Name is required"
            >
              <b-form-input
                  id="name-input"
                  v-model="item.qty"
                  required
                  class="qty"
              ></b-form-input>
            </b-form-group>
            <b-button href="#" variant="outline-primary" class="btn btn-qty mx-1 urdu-font"
                      @click="increaseQty(item)">
              زیادہ
            </b-button>
          </b-col>
        </b-row>
      </b-modal>
    </div>
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
    ...mapGetters('card', ['cart']),
  },
  methods: {
    ...mapActions('card', ['addToCart', 'decreaseQty', 'increaseQty', 'clearCart']),
    total(item) {
      let qty = 0;
      this.cart.forEach(i => {
        if (i.type === item.type && i.id === item.id) {
          qty += i.qty;
        }
      })
      return qty;
    },
    add() {
      this.addToCart(this.cartItem)
      this.$refs[`cartItem${this.cartItem.id}`].show()
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
