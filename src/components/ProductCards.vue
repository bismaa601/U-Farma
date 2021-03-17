<template>
  <div>
    <b-card class="card-anim cards-img shadow flex-center" :img-src="product.src" img-alt="Image" overlay>
      <!-- <b-card-text>{{ product.title }}</b-card-text> -->
    </b-card>
  </div>
</template>

<script>

export default {
  props: {
   product:Object
  }
}
</script>

<style scoped>
    .card-anim{
    width: 200px;
    height: 200px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
  }

  .card-anim:hover{
    transform: scale(1.05);
  }
</style>

