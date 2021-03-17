<template>
  <div>
    <b-card class="card-anim cards-img shadow flex-center" overlay>
      <img :src="product.src"/>

        <h3 class="text-center mt-3">{{ product.title }}</h3>

    </b-card>
  </div>
</template>

<script>

export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.card-anim {
  /*width: 300px;*/
  height: 20em;
  margin: 1em;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}

img {
  width: 100%;
  height: 80%;
}

.card-anim:hover {
  transform: scale(1.05);
}
</style>

