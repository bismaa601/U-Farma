<template>
  <div>
    
    <b-modal
      v-model="showModal"
      title="اسٹاک"
      centered
      hide-header-close
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>مقدار</b-col>
        </b-row>

        <b-row v-for="item in items" :key="item.id">
          <b-col cols="1">{{item.id}}.</b-col>
          <b-col cols="3">{{item.title}}</b-col>
          <b-col class="d-flex justify-content-end">
            <b-button href="#" variant="outline-primary" class="btn mx-1 urdu-font" @click="item.qty>0 ? item.qty=item.qty-1 : item.qty">کم</b-button>
         
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
        
            <b-button href="#" variant="outline-primary" class="btn mx-1 urdu-font" @click="item.qty=item.qty+1">زیادہ</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
   item:Object,
   showModal:Boolean
  },

  data() {
    return {
      //show: false,
      items: [
        {
          id: 1,
          title: 'ڈی اے پی',
          qty: 2
        },
        {
          id: 2,
          title: 'کھیرا',
          qty: 1
        },
        {
          id: 3,
          title: 'پرائموکسن',
          qty: 5
        }
      ],
    }
  }
}
</script>

<style scoped>
.qty{
  width: 50px;
}

.btn{
  width: 50px;
  height: 38px;
}
</style>