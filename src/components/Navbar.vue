<template>
  <!-- Navigation menu -->
  <b-navbar toggleable="lg" type="dark" variant="info" style="position: fixed; z-index:10;" class="w-100">
    <b-navbar-brand to="/">U-Farmer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">

          <b-badge pill variant="light" @click="showModal=!showModal">
            <b-icon icon="cart2" font-scale="2" variant="primary"></b-icon>
            {{ totalCount}}
          </b-badge>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <CartModal @hide="hide" :showModal="showModal"/>
  </b-navbar>
</template>

<script>
import {mapGetters} from "vuex";
import CartModal from './CartModal';

export default {
  data() {
    return {
      showModal: false
    }
  },
  components: {CartModal},
  computed: {
    ...mapGetters('card', ['cart']),
    totalCount(){
      let qty=0;
      this.cart.forEach(i=>{
        qty+=i.qty;
      })
      return qty;
    }
  },
  methods: {
    hide() {
      this.showModal = false
    }
  }

}
</script>


<style scoped>

</style>
