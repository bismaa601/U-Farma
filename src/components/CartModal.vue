<template>
  <div>

    <b-modal
        v-model="showModal"
        title="اسٹاک"
        centered
        hide-footer
        @hide="$emit('hide',null)"
    >
      <b-container>
        <div v-if="step===1">
          <b-row class="mb-1 text-center">
            <b-col cols="3"></b-col>
            <b-col>مقدار</b-col>
          </b-row>
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
        </div>
        <div v-if="step===2">
          <b-row class="mb-1 text-center mb-3">
            <b-col cols="6" style="cursor: pointer">
              <img src="../assets/jazzcash.png" alt="JazzCash logo" width="200" class="border"
                   @click="++step"
              >
            </b-col>
            <b-col style="cursor: pointer">
              <img src="../assets/COD.png" alt="COD logo" width="200" height="90" class="border"
                   @click="++step"
              >
            </b-col>
          </b-row>
        </div>
        <div v-if="step===3">
          <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Phone Number:" label-for="input-2">
            <b-form-input
                type="number"
                id="input-2"
                v-model="form.number"
                placeholder="Enter Phone"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Address:" label-for="input-2">
            <b-form-textarea
                id="input-2"
                v-model="form.address"
                placeholder="Address"
                required
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div class="d-flex flex-row justify-content-end" v-if="step===1">
          <b-button variant="primary"
                    @click="++step"
                    class="btn float-left"
          >خریداری
          </b-button>
        </div>
        <div v-else>
          <b-button variant="primary"
                    @click="--step"
                    class="btn float-left mr-1"
          >پیچھے

          </b-button>
          <b-button variant="primary"
                    v-if="step===3"
                    @click="clear"
                    :disabled="!form.name || !form.number || !form.address"
                    class="btn float-left mr-1"
          >مکمل
          </b-button>
        </div>


      </b-container>
    </b-modal>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    item: Object,
    showModal: Boolean
  },
  data() {
    return {
      step: 1,
      paymentFlag: false,
      formFlag: false,
      info: true,
      form: {},
    }
  },
  computed: {
    ...mapGetters('card', ['cart'])
  },
  methods: {
    ...mapActions('card', ['decreaseQty', 'increaseQty', 'clearCart']),
    clear() {
      alert("Order placed successfully")
      this.clearCart()
    }
  }
}
</script>

<style scoped>
.qty {
  width: 50px;
}

.btn-qty {
  width: 50px;
  height: 38px;
}
</style>
