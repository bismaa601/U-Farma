<template>
  <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">U-Farma</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink to="/">
            <a class="nav-link" href="#">

              <i class="fa fa-home"></i>
              Home
              <span class="sr-only">(current)</span>

            </a></RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/product/fertilizers">
            <a class="nav-link" href="#">
              <i class="fa fa-medkit"></i>
              Fertilizers
              <span class="sr-only">(current)</span>

            </a></RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/product/seeds">
            <a class="nav-link" href="#">
              <i class="fa fa-sun-o"></i>
              seeds
              <span class="sr-only">(current)</span>

            </a></RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/product/crops">
            <a class="nav-link" href="#">
              <i class="fa fa-sun-o"></i>
              Disease
              <span class="sr-only">(current)</span>

            </a></RouterLink>
        </li>
      </ul>
      <ul class="navbar-nav ">
        <li class="nav-item" @click="showModal=true">
          <a class="nav-link" href="#">
            <i class="fa fa-cart-plus">
              <span class="badge badge-success">{{ totalCount }}</span>
            </i>
            Cart
          </a>
        </li>
      </ul>
    </div>
    <CartModal @hide="hide" :show-modal="showModal"/>
  </nav>

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
    totalCount() {
      let qty = 0;
      this.cart.forEach(i => {
        qty += i.qty;
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
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
a:hover{
  text-decoration: none;
}
.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}

@media (min-width: 576px) {
  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 768px) {
  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 992px) {
  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 1200px) {
  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

</style>
