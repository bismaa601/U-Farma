<template>
  <div>
    <b-modal
        v-model="showModal"
        title="بیماریاں"
        size="xl"
    >
      <b-container class="content-s">
        <b-row no-gutters class="pt-1">
          <b-col class="ml-2 d-flex justify-content-center" v-for="item in diseases" :key="item.id">
            <DiseaseCards :cartItem="item"/>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>


<script>
import DiseaseCards from './DiseasesCards';

export default {
  components: {
    DiseaseCards
  },
  props: {
    showModal: Boolean,
    diseases: {
      type: Array,
      default: []
    }
  },

  data() {
    return {

    }
  }
}
</script>


<style scoped>
.content-s {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
