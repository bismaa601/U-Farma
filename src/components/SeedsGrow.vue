<template>
  <div class="containers">
    <b-card>
      <b-card-body class="h-20">
        <b-row>
          <b-col>
            <b-img src="/assets/seedGrowOne.jpg"/>
          </b-col>
          <b-col>
            <h4>اپنے بیجوں اور پودوں کی افزائش کرنے کا طریقہ تلاش کرنے سے پہلے ، صحیح بیج سے شروعات کریں۔ اگر آپ اپنے
              آپریشن کو مصدقہ نامیاتی کے طور پر چلانے کا ارادہ رکھتے ہیں تو ، آپ کو تصدیق شدہ نامیاتی بیج اور انچارجوں
              کو صرف کچھ استثناء کے ساتھ استعمال کرنے کی ضرورت ہے۔</h4>
            <b-button variant="outline-info" class="mt-2" @click="audio('./../audio/afzaish/1.ogg',)">
              <b-icon icon="volume-up" aria-hidden="true"></b-icon>
            </b-button>
          </b-col>
        </b-row>
        <h4 class="pull-right my-3">بیجوں کو اگنے کے لئے درجہ حرارت ، نمی اور روشنی کی صورتحال درست ہونی چاہئے۔ تمام
          بیجوں میں انکرن کے لئے درجہ حرارت کی حد ہوتی ہے۔کم سے کم درجہ حرارت سب سے کم درجہ حرارت ہے جس پر بیج موثر
          طریقے سے اگ سکتا ہے۔زیادہ سے زیادہ درجہ حرارت وہ ہے جس میں بیج انکرن ہوسکتے ہیں۔ اس درجہ حرارت کے اوپر یا اس
          سے نیچے کی کوئی چیز بھی بیجوں کو نقصان پہنچا سکتی ہے یا انہیں استحکام میں ڈال سکتی ہے۔</h4>
        <b-button variant="outline-info" class="mt-2" @click="audio('./../audio/afzaish/2.ogg',)">
          <b-icon icon="volume-up" aria-hidden="true"></b-icon>
        </b-button>
        <h4 class="mt-3">
          پودوں کے سائنسدانوں نے دیکھا ہے کہ جب ماحول میں کاربن ڈائی آکسائیڈ کی سطح بڑھ جاتی ہے تو ، زیادہ تر پودے کچھ
          غیر معمولی کام کرتے ہیں: وہ اپنے پتے کو گاڑھا کرتے ہیں۔

          اور چونکہ انسانی سرگرمی ماحولیاتی کاربن ڈائی آکسائیڈ کی سطح کو بڑھا رہی ہے ، لہذا موٹی پتے والے پودے ہمارے
          مستقبل میں دکھائی دیتے ہیں۔

          لیکن اس جسمانی ردعمل کے نتائج بہت سے پودوں پر بھاری پتیوں سے بہت آگے ہیں۔ واشنگٹن کی دو یونیورسٹی کے سائنس
          دانوں نے دریافت کیا ہے کہ گھنے پتوں والے پودے آب و ہوا کی تبدیلی کے اثرات کو بڑھا سکتے ہیں کیونکہ وہ ماحولیاتی
          کاربن کو الگ کرنے میں کم موثر ہوں گے ، یہ حقیقت ہے کہ آج تک آب و ہوا کی تبدیلی کے ماڈل کو خاطر میں نہیں لیا
          گیا ہے۔
        </h4>
        <b-button variant="outline-info" class="mt-2" @click="audio('./../audio/afzaish/3.ogg',)">
          <b-icon icon="volume-up" aria-hidden="true"></b-icon>
        </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SeedsGrow",
  data(){
    return {
      sound:new Audio()
    }
  },
  methods: {
    audio(path) {
      this.sound.pause()
      this.sound = new Audio(path);
      this.sound.play();
    }
  }
}
</script>

<style scoped>
.containers {
  height: 500px;
  overflow: scroll;
}
</style>
