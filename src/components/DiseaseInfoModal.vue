<template>
  <div>
    <b-modal
      v-model="showModal"
      :title="disease.item"
      centered
      size="lg"
    >
      <b-container class="content-section">
        <b-card no-body class="overflow-hidden pt-3" style="max-width: 660px; border:none">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="disease.src" alt="Image" class="rounded-0" style="width:330px; height:260px"></b-card-img>
              <p class="urdu-font text-center px-5 pt-3 pb-5">{{disease.des}}</p>
            </b-col>
            <b-col md="6">
              <b-card-body title="علامات" style="text-align:right" v-if="disease.symptoms">
                <b-card-text class="urdu-font text-center">
                  {{disease.symptoms}}
                </b-card-text>
              </b-card-body>
              <b-card-body title="علاج" style="text-align:right" v-if="disease.cure">
                <b-card-text class="urdu-font text-center">
                  {{disease.cure}}
                </b-card-text>
              </b-card-body>
              <b-card-body title="اثرات" style="text-align:right" v-if="disease.reasons">
                <b-card-text class="urdu-font text-center">
                  {{disease.reasons}}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
    </b-modal>
  </div>
</template>


<script>
export default {
  props: {
   showModal:Boolean,
   disease:Object
  },

  data() {
    return {}
  }
}
</script>


<style scoped>

</style>
