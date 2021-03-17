<template>
  <b-container class="products content-section">
    <b-row no-gutters class="pt-4">
      <b-col>
        <h1 class="urdu-font text-center pb-3">{{type}}</h1>
      </b-col>
    </b-row>
    <b-row no-gutters class="pt-5 justify-content-center">
      <b-col col="4" lg="4" v-for="item in cartItems[$route.params.type]" :key="item.id">
        <CartCards :cartItem="item" v-if="$route.params.type!='crops'"/>
        <!-- <DiseaseCards :cartItem="item" v-else-if="$route.params.type=='diseases'"/> -->
        <CropCards :cartItem="item" v-else/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CartCards from '../components/CartCards';
import DiseaseCards from '../components/DiseasesCards';
import CropCards from '../components/CropsCards';
export default {
  name: 'Products',
  components: {
    CartCards,
    DiseaseCards,
    CropCards
  },
  data(){
    return {
      cartItems:{
        fertilizers:[
          {
            id : 0,
            item: 'ڈی اے پی',
            src: './../assets/sona-dap.jpg',
            des: '',
            price: 'Rs. 4,100',
            audio: './../audio/dap.mp3'
          },
          {
            id : 1,
            item: 'سرسبز یوریا',
            src: './../assets/sarsabz-urea.jpg',
            des: '',
            price: 'Rs. 1,760',
            audio: './../audio/sarsabz-urea.mp3'
          },
          {
            id : 2,
            item: 'سونا یوریا',
            src: './../assets/sona-urea.jpg',
            des: '',
            price: 'Rs. 1,760',
            audio: './../audio/sona-urea.mp3'
          },
          {
            id : 3,
            item: 'اینگرو یوریا',
            src: './../assets/engro-urea.jpg',
            des: '',
            price: 'Rs. 1,760',
            audio: './../audio/engro-urea.mp3'
          },
          {
            id : 4,
            item: 'ایس او پی',
            src: './../assets/engro-sop.jpg',
            des: '',
            price: 'Rs. 4,310',
            audio: './../audio/sop.mp3'
          },
        ],
        seeds:[
          {
            id : 0,
            item: 'ٹماٹر',
            src: './../assets/tomato-seeds.jpg',
            des: '',
            price: 'Rs. 100',
            audio: './../audio/tmater.mp3'
          },
          {
            id : 1,
            item: 'کھیرا',
            src: './../assets/cucumber-seeds.jpg',
            des: '',
            price: 'Rs. 760',
            audio: './../audio/khera.mp3'
          },
          {
            id : 2,
            item: 'مرچ',
            src: './../assets/pepper-seed.jpg',
            des: '',
            price: 'Rs. 160',
            audio: './../audio/mirch.mp3'
          },
          {
            id : 3,
            item: 'گوبھی',
            src: './../assets/cabbage-seeds.jpg',
            des: '',
            price: 'Rs. 70',
            audio: './../audio/gobhi.mp3'
          },
          {
            id : 4,
            item: 'کدو',
            src: './../assets/squash-seeds.jpg',
            des: '',
            price: 'Rs. 130',
            audio: './../audio/kadu.mp3'
          },
        ],
        agrochemicals:[
          {
            id : 0,
            item: 'ٹیکامن-میکس',
            src: './../assets/tecamin-max.jpg',
            des: '',
            price: 'Rs. 100',
            audio: './../audio/tecamin-max.mp3'
          },
          {
            id : 1,
            item: 'ڈیناڈیم',
            src: './../assets/danadim.png',
            des: '',
            price: 'Rs. 760',
            audio: './../audio/danadim.mp3'
          },
          {
            id : 2,
            item: 'پرائموکسن',
            src: './../assets/primoxon.jpg',
            des: '',
            price: 'Rs. 160',
            audio: './../audio/primoxon.mp3'
          },
          {
            id : 3,
            item: 'نانوک',
            src: './../assets/nanok.png',
            des: '',
            price: 'Rs. 70',
            audio: './../audio/nanok.mp3'
          },
          {
            id : 4,
            item: 'پرائم کل',
            src: './../assets/primekill.jpg',
            des: '',
            price: 'Rs. 130',
            audio: './../audio/primekill.mp3'
          },
        ],
        crops:[
          {
            id : 0,
            item: 'گندم',
            src: './../assets/weat-crops.jpg',
            audio: './../audio/weat-crops.mp3',
            diseases:[
              {
                id : 0,
                item: 'افیڈز',
                src: './../assets/aphids.png',
                des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                audio: './../audio/aphids.mp3'
              },
              {
                id : 1,
                item: 'ایپل-سکیب',
                src: './../assets/apple-scab.jpg',
                des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                audio: './../audio/apple-scab.mp3'
              },
              {
                id : 2,
                item: 'انتھراکنوس',
                src: './../assets/anthracnose.jpg',
                des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                audio: './../audio/anthracnose.mp3'
              },
              {
                id : 3,
                item: 'لیف-کرل',
                src: './../assets/leaf-curl.jpg',
                des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                audio: './../audio/leaf-curl.mp3'
              },
              {
                id : 4,
                item: 'رسٹ',
                src: './../assets/rust.jpg',
                des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                audio: './../audio/rust.mp3'
              },
            ]
          },
          {
            id : 1,
            item: 'چاول',
            src: './../assets/rice-crops.jpg',
            audio: './../audio/rice-crops.mp3',
            diseases:[
              {
                id : 0,
                item: 'افیڈز',
                src: './../assets/aphids.png',
                des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                audio: './../audio/aphids.mp3'
              },
              {
                id : 1,
                item: 'ایپل-سکیب',
                src: './../assets/apple-scab.jpg',
                des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                audio: './../audio/apple-scab.mp3'
              },
              {
                id : 2,
                item: 'انتھراکنوس',
                src: './../assets/anthracnose.jpg',
                des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                audio: './../audio/anthracnose.mp3'
              },
              {
                id : 3,
                item: 'لیف-کرل',
                src: './../assets/leaf-curl.jpg',
                des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                audio: './../audio/leaf-curl.mp3'
              },
              {
                id : 4,
                item: 'رسٹ',
                src: './../assets/rust.jpg',
                des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                audio: './../audio/rust.mp3'
              },
            ]
          },
          {
            id : 2,
            item: 'کماد',
            src: './../assets/sugarcane-crops.jpg',
            audio: './../audio/sugarcane-crops.mp3',
            diseases:[
              {
                id : 0,
                item: 'افیڈز',
                src: './../assets/aphids.png',
                des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                audio: './../audio/aphids.mp3'
              },
              {
                id : 1,
                item: 'ایپل-سکیب',
                src: './../assets/apple-scab.jpg',
                des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                audio: './../audio/apple-scab.mp3'
              },
              {
                id : 2,
                item: 'انتھراکنوس',
                src: './../assets/anthracnose.jpg',
                des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                audio: './../audio/anthracnose.mp3'
              },
              {
                id : 3,
                item: 'لیف-کرل',
                src: './../assets/leaf-curl.jpg',
                des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                audio: './../audio/leaf-curl.mp3'
              },
              {
                id : 4,
                item: 'رسٹ',
                src: './../assets/rust.jpg',
                des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                audio: './../audio/rust.mp3'
              },
            ]
          },
          {
            id : 3,
            item: 'مکئ',
            src: './../assets/corn-crops.jpg',
            audio: './../audio/corn-crops.mp3',
            diseases:[
              {
                id : 0,
                item: 'افیڈز',
                src: './../assets/aphids.png',
                des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                audio: './../audio/aphids.mp3'
              },
              {
                id : 1,
                item: 'ایپل-سکیب',
                src: './../assets/apple-scab.jpg',
                des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                audio: './../audio/apple-scab.mp3'
              },
              {
                id : 2,
                item: 'انتھراکنوس',
                src: './../assets/anthracnose.jpg',
                des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                audio: './../audio/anthracnose.mp3'
              },
              {
                id : 3,
                item: 'لیف-کرل',
                src: './../assets/leaf-curl.jpg',
                des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                audio: './../audio/leaf-curl.mp3'
              },
              {
                id : 4,
                item: 'رسٹ',
                src: './../assets/rust.jpg',
                des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                audio: './../audio/rust.mp3'
              },
            ]
          },
          {
            id : 4,
            item: 'کپاس',
            src: './../assets/cotton-crops.jpg',
            audio: './../audio/cotton-crops.mp3',
            diseases:[
              {
                id : 0,
                item: 'افیڈز',
                src: './../assets/aphids.png',
                des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                audio: './../audio/aphids.mp3'
              },
              {
                id : 1,
                item: 'ایپل-سکیب',
                src: './../assets/apple-scab.jpg',
                des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                audio: './../audio/apple-scab.mp3'
              },
              {
                id : 2,
                item: 'انتھراکنوس',
                src: './../assets/anthracnose.jpg',
                des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                audio: './../audio/anthracnose.mp3'
              },
              {
                id : 3,
                item: 'لیف-کرل',
                src: './../assets/leaf-curl.jpg',
                des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                audio: './../audio/leaf-curl.mp3'
              },
              {
                id : 4,
                item: 'رسٹ',
                src: './../assets/rust.jpg',
                des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                audio: './../audio/rust.mp3'
              },
            ]
          },
        ],
      }
    }
  },
  computed:{
    type(){
      let type=this.$route.params.type;
      if(type=="fertilizers"){
        return "کھادیں";
      }else if(type=="seeds"){
        return "بیج"
      }else if(type=="agrochemicals"){
        return "کیڑے مار ادویات";
      }else if(type=="crops"){
        return "فصلیں";
      }else if(type=="diseases"){
        return "فصلوں کی بیماریاں";
      }
    }
  }
}
</script>
