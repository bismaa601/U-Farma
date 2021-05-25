export default {
    namespaced: true,
    state: {
        cards: [
            {
                id: 0,
                src: './../assets/fertilizers.png',
                route: '/product/fertilizers',
                title: 'کھادیں',
            },
            {
                id: 1,
                src: './../assets/seeds.jpg',
                route: '/product/seeds',
                title: 'بیج'
            },
            {
                id: 2,
                src: './../assets/agrochemicals.png',
                route: '/product/agrochemicals',
                title: 'کیڑے مار ادویات'
            },
            {
                id: 4,
                src: './../assets/crops.jpg',
                route: '/product/crops',
                title: 'فصلوں کی بیماریں'
            },
            {
                id: 5,
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgkdg9KB51ZeuzebQYbG0aGfW-wxkvMv8CnGvrvVQgKjUNGB_Dw594VOvSwcjZjN6AcE&usqp=CAU',
                route: '/product/seedsDiseases',
                title: 'بیج کی بیماریں'
            },
        ],
        cartItems: {
            fertilizers: [
                {
                    id: 0,
                    item: 'ڈی اے پی',
                    src: './../assets/sona-dap.jpg',
                    des: '',
                    price: 'Rs. 4,100',
                    type: 'fertilizers',
                    audio: './../audio/dap.mp3'
                },
                {
                    id: 1,
                    item: 'سرسبز یوریا',
                    src: './../assets/sarsabz-urea.jpg',
                    des: '',
                    type: 'fertilizers',
                    price: 'Rs. 1,760',
                    audio: './../audio/sarsabz-urea.mp3'
                },
                {
                    id: 2,
                    item: 'سونا یوریا',
                    src: './../assets/sona-urea.jpg',
                    des: '',
                    price: 'Rs. 1,760',
                    type: 'fertilizers',
                    audio: './../audio/sona-urea.mp3'
                },
                {
                    id: 3,
                    item: 'اینگرو یوریا',
                    src: './../assets/engro-urea.jpg',
                    des: '',
                    type: 'fertilizers',
                    price: 'Rs. 1,760',
                    audio: './../audio/engro-urea.mp3'
                },
                {
                    id: 4,
                    item: 'ایس او پی',
                    src: './../assets/engro-sop.jpg',
                    des: '',
                    type: 'fertilizers',
                    price: 'Rs. 4,310',
                    audio: './../audio/sop.mp3'
                },
            ],
            seeds: [
                {
                    id: 0,
                    item: 'ٹماٹر',
                    src: './../assets/tomato-seeds.jpg',
                    des: '',
                    type: 'seeds',
                    price: 'Rs. 100',
                    audio: './../audio/tmater.mp3'
                },
                {
                    id: 1,
                    item: 'کھیرا',
                    src: './../assets/cucumber-seeds.jpg',
                    des: '',
                    type: 'seeds',
                    price: 'Rs. 760',
                    audio: './../audio/khera.mp3'
                },
                {
                    id: 2,
                    item: 'مرچ',
                    src: './../assets/pepper-seed.jpg',
                    des: '',
                    type: 'seeds',
                    price: 'Rs. 160',
                    audio: './../audio/mirch.mp3'
                },
                {
                    id: 3,
                    item: 'گوبھی',
                    src: './../assets/cabbage-seeds.jpg',
                    des: '',
                    type: 'seeds',
                    price: 'Rs. 70',
                    audio: './../audio/gobhi.mp3'
                },
                {
                    id: 4,
                    item: 'کدو',
                    src: './../assets/squash-seeds.jpg',
                    des: '',
                    type: 'seeds',
                    price: 'Rs. 130',
                    audio: './../audio/kadu.mp3'
                },
            ],
            agrochemicals: [
                {
                    id: 0,
                    item: 'ٹیکامن-میکس',
                    src: './../assets/tecamin-max.jpg',
                    des: '',
                    type: 'agrochemicals',
                    price: 'Rs. 100',
                    audio: './../audio/tecamin-max.mp3'
                },
                {
                    id: 1,
                    item: 'ڈیناڈیم',
                    src: './../assets/danadim.png',
                    des: '',
                    type: 'agrochemicals',
                    price: 'Rs. 760',
                    audio: './../audio/danadim.mp3'
                },
                {
                    id: 2,
                    item: 'پرائموکسن',
                    src: './../assets/primoxon.jpg',
                    des: '',
                    type: 'agrochemicals',
                    price: 'Rs. 160',
                    audio: './../audio/primoxon.mp3'
                },
                {
                    id: 3,
                    item: 'نانوک',
                    src: './../assets/nanok.png',
                    des: '',
                    type: 'agrochemicals',
                    price: 'Rs. 70',
                    audio: './../audio/nanok.mp3'
                },
                {
                    id: 4,
                    item: 'پرائم کل',
                    src: './../assets/primekill.jpg',
                    des: '',
                    type: 'agrochemicals',
                    price: 'Rs. 130',
                    audio: './../audio/primekill.mp3'
                },
            ],
            crops: [
                {
                    id: 0,
                    item: 'گندم',
                    src: './../assets/weat-crops.jpg',
                    audio: './../audio/weat-crops.mp3',
                    diseases: [
                        {
                            id: 0,
                            item: 'افیڈز',
                            src: './../assets/aphids.png',
                            des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                            des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                            audio: './../audio/aphids.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 1,
                            item: 'ایپل-سکیب',
                            src: './../assets/apple-scab.jpg',
                            des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                            des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                            audio: './../audio/apple-scab.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 2,
                            item: 'انتھراکنوس',
                            src: './../assets/anthracnose.jpg',
                            des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                            des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                            audio: './../audio/anthracnose.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 3,
                            item: 'لیف-کرل',
                            src: './../assets/leaf-curl.jpg',
                            des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                            des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                            audio: './../audio/leaf-curl.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 4,
                            item: 'رسٹ',
                            src: './../assets/rust.jpg',
                            des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                            des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                            audio: './../audio/rust.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                    ]
                },
                {
                    id: 1,
                    item: 'چاول',
                    src: './../assets/rice-crops.jpg',
                    audio: './../audio/rice-crops.mp3',
                    diseases: [
                        {
                            id: 0,
                            item: 'افیڈز',
                            src: './../assets/aphids.png',
                            des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                            des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                            audio: './../audio/aphids.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 1,
                            item: 'ایپل-سکیب',
                            src: './../assets/apple-scab.jpg',
                            des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                            des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                            audio: './../audio/apple-scab.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 2,
                            item: 'انتھراکنوس',
                            src: './../assets/anthracnose.jpg',
                            des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                            des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                            audio: './../audio/anthracnose.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 3,
                            item: 'لیف-کرل',
                            src: './../assets/leaf-curl.jpg',
                            des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                            des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                            audio: './../audio/leaf-curl.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                        {
                            id: 4,
                            item: 'رسٹ',
                            src: './../assets/rust.jpg',
                            des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                            des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                            audio: './../audio/rust.mp3',
                            cure: 'Alag',
                            symptoms: 'symptoms'
                        },
                    ]
                },
                {
                    id: 2,
                    item: 'کماد',
                    src: './../assets/sugarcane-crops.jpg',
                    audio: './../audio/sugarcane-crops.mp3',
                    diseases: [
                        {
                            id: 0,
                            item: 'افیڈز',
                            src: './../assets/aphids.png',
                            des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                            des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                            audio: './../audio/aphids.mp3'
                        },
                        {
                            id: 1,
                            item: 'ایپل-سکیب',
                            src: './../assets/apple-scab.jpg',
                            des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                            des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                            audio: './../audio/apple-scab.mp3'
                        },
                        {
                            id: 2,
                            item: 'انتھراکنوس',
                            src: './../assets/anthracnose.jpg',
                            des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                            des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                            audio: './../audio/anthracnose.mp3'
                        },
                        {
                            id: 3,
                            item: 'لیف-کرل',
                            src: './../assets/leaf-curl.jpg',
                            des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                            des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                            audio: './../audio/leaf-curl.mp3'
                        },
                        {
                            id: 4,
                            item: 'رسٹ',
                            src: './../assets/rust.jpg',
                            des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                            des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                            audio: './../audio/rust.mp3'
                        },
                    ]
                },
                {
                    id: 3,
                    item: 'مکئ',
                    src: './../assets/corn-crops.jpg',
                    audio: './../audio/corn-crops.mp3',
                    diseases: [
                        {
                            id: 0,
                            item: 'افیڈز',
                            src: './../assets/aphids.png',
                            des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                            des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                            audio: './../audio/aphids.mp3'
                        },
                        {
                            id: 1,
                            item: 'ایپل-سکیب',
                            src: './../assets/apple-scab.jpg',
                            des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                            des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                            audio: './../audio/apple-scab.mp3'
                        },
                        {
                            id: 2,
                            item: 'انتھراکنوس',
                            src: './../assets/anthracnose.jpg',
                            des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                            des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                            audio: './../audio/anthracnose.mp3'
                        },
                        {
                            id: 3,
                            item: 'لیف-کرل',
                            src: './../assets/leaf-curl.jpg',
                            des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                            des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                            audio: './../audio/leaf-curl.mp3'
                        },
                        {
                            id: 4,
                            item: 'رسٹ',
                            src: './../assets/rust.jpg',
                            des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                            des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                            audio: './../audio/rust.mp3'
                        },
                    ]
                },
                {
                    id: 4,
                    item: 'کپاس',
                    src: './../assets/cotton-crops.jpg',
                    audio: './../audio/cotton-crops.mp3',
                    diseases: [
                        {
                            id: 0,
                            item: 'افیڈز',
                            src: './../assets/aphids.png',
                            des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                            des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                            audio: './../audio/aphids.mp3'
                        },
                        {
                            id: 1,
                            item: 'ایپل-سکیب',
                            src: './../assets/apple-scab.jpg',
                            des: 'پھلوں اور پتیوں پر خارش کے دھبے دبی ہوئے ہیں اور اس کے بیچ میں مخمل کے بیضہ ہو سکتے ہیں۔',
                            des1: 'Scabby spots on fruits and leaves are sunken and may have velvety spores in the center.',
                            audio: './../audio/apple-scab.mp3'
                        },
                        {
                            id: 2,
                            item: 'انتھراکنوس',
                            src: './../assets/anthracnose.jpg',
                            des: 'متاثرہ پودے تنوں ، پتیوں یا پھلوں پر تاریک ، پانی سے بھیگے گھاووں کی نشوونما کرتے ہیں۔',
                            des1: 'Infected plants develop dark, water soaked lesions on stems, leaves or fruit.',
                            audio: './../audio/anthracnose.mp3'
                        },
                        {
                            id: 3,
                            item: 'لیف-کرل',
                            src: './../assets/leaf-curl.jpg',
                            des: 'پچھواڑے آڑو اور نیکٹری کے درختوں کے پھول ، پھل ، پتیوں اور ٹہنوں کو متاثر کرتا ہے۔',
                            des1: 'Affects the blossoms, fruit, leaves and shoots of backyard peach and nectarine trees.',
                            audio: './../audio/leaf-curl.mp3'
                        },
                        {
                            id: 4,
                            item: 'رسٹ',
                            src: './../assets/rust.jpg',
                            des: 'سرخی مائل نارنجی بیضہ عوام بنیادی طور پر نچلے پتے کی سطح پر پائے جاتے ہیں۔',
                            des1: 'Reddish-orange spore masses are found primarily on the surface of lower leaves.',
                            audio: './../audio/rust.mp3'
                        },
                    ]
                },
            ],
            seedsDiseases: [
                {
                    id: 0,
                    item: 'بیج بلائٹ',
                    src: './../assets/seed_disease/1. seedling blight.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'پودوں کا نقصان ، ناقص اسٹیبلشمنٹ ، اسٹیم بیسڈ براؤننگ ، فوٹ روٹس اور ایئر بلائٹس۔',
                    reasons: 'کم پیداوار اور ممکنہ مائکوٹوکسن کے مسائل۔',
                    description_audio: './../audio/seeds_disease/BeechBlight_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/BeechBlight_Alaamat.ogg',
                },
                {
                    id: 2,
                    item: 'بیجوں والا کامن بنٹ',
                    src: './../assets/seed_disease/2. Seed-borne common bunt.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'متاثرہ ایئرز میں اناج کی جگہ بیج کی طرح \'بنٹ بالز\' لیتے ہیں جن میں سے ہر ایک میں لاکھوں چکنائی ، کالی ، بدبودار بو (جیسے بوسیدہ مچھلی) کے بیضوں ہوتے ہیں۔',
                    reasons: 'ممکنہ طور پر اناج کے معیار میں کمی سے فصلوں کو مکمل طور پر مسترد کردیا جائے۔',
                    description_audio: './../audio/seeds_disease/BeechonWalaCommonBant_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/BeechonWalaCommonBant_Alaamat.ogg',
                },
                {
                    id: 3,
                    item: 'ارگٹ',
                    src: './../assets/seed_disease/3. ergot.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'فنگس پھول پھولنے پر ہی حملہ کرتا ہے ، کچھ اسپائلیٹ میں اناج کی جگہ ایک سخت ، ارغوانی رنگ کے اسکیریٹیم کے ذریعہ بناتا ہے ، جسے ایرگٹ کہا جاتا ہے۔ ایرگٹس کی لمبائی 2 سینٹی میٹر تک بہت بڑی ہوسکتی ہے۔\n',
                    reasons: 'اس بیماری کا براہ راست اثر پیداوار پر بہت کم پڑتا ہے لیکن اس میں بڑی مقدار میں زہریلے الکلائڈ ہوتے ہیں۔ مویشیوں کو آلودہ اناج کھلانا یا اگر انسانی استعمال کے لئے استعمال کیا جائے تو اصلی صحت مل سکتی ہے۔\n',
                    description_audio: './../audio/seeds_disease/Argat_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/Argat_Alaamat.ogg',
                },
                {
                    id: 4,
                    item: 'ڈھیلا دھواں',
                    src: './../assets/seed_disease/loose_smut.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'متاثرہ کانوں میں ،سیاہ فنگل بیض اناج کی جگہ لے لیتے ہیں۔\n',
                    reasons: 'کم پیداوار اور خراب اناج کا معیار۔\n',
                    description_audio: './../audio/seeds_disease/DheelaDhuwan_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/DheelaDhuwan_Alaamat.ogg',
                },
                {
                    id: 5,
                    item: 'پتی کی پٹی',
                    src: './../assets/seed_disease/leaf_stripe.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'فنگس پتیوں پر لمبی بھوری رنگ کی پٹیوں کا سبب بنتا ہے اور کانوں کی اندھا پن کا سبب بن سکتا ہے',
                    reasons: 'بار بار علاج کے بغیر بویا بیج تیزی سے بڑھ جاتا ہے اور اس کے نتیجے میں فصل کا مکمل نقصان ہوتا ہے۔\n',
                    description_audio: './../audio/seeds_disease/PatiKiPatti_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/PatiKiPatti_Alaamat.ogg',
                },
            ],
            cropsDiseases: [
                {
                    id: 0,
                    item: 'آئی ایس اسپاٹ',
                    src: './../assets/seed_disease/1. seedling blight.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'مناسب فولانی فنگسائڈس کے استعمال سے بیماری پر قابو پایا جاسکتا ہے۔\n',
                    symptoms: 'پتیوں پر پانی سے بھیگے ہوئے چھوٹے دھبے؛ آنکھ کی شکل میں پانی میں بھیگے ہوئے لمبے لمبے مقامات۔ لال بھوری مرکز کے ساتھ بھوسے کے رنگ کے گھاووں کی نشاندہی پانی سے لگی گھاووں سے ہوتی ہے۔',
                    description_audio: './../audio/seeds_disease/ISspot_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/ISspot_Alaamat.ogg',
                    treatment_audio: './../audio/seeds_disease/ISspot_Ilaaj.ogg',
                },
                {
                    id: 1,
                    item: 'انناس کی بیماری\n',
                    src: './../assets/seed_disease/2. Seed-borne common bunt.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'اس بیماری کو سنبھالنے کا سب سے مؤثر طریقہ گنے کی مزاحم قسموں کے استعمال سے ہے۔ اگر اس قسم کے پودے لگائیں جو بیماری کا شکار ہو تو اسے خشک  مٹی میں لگائیں\n',
                    symptoms: 'جڑیں نہیں قائم کرتا ہے؛ سیٹ کے مرکزی نرم حصے میں سرخ رنگین رنگت آتی ہے جو بھوری رنگ کا ہو جاتا ہے۔ متاثرہ انٹنوڈس میں گہا۔ بڑی عمر کے کین میں پتے زرد ہو سکتے ہیں اور پودوں کا مرجھایا ہوا دکھائی دیتا ہے۔ کٹے تنوں میں انناس کی ایک مضبوط بو ہے\n',
                    description_audio: './../audio/seeds_disease/AnanaskiBimari_Alaamat.ogg',
                    symptoms_audio: './../audio/seeds_disease/AnanaskiBimari_Description.ogg',
                    treatment_audio: './../audio/seeds_disease/AnanaskiBimari_Ilaaj.ogg',
                },
                {
                    id: 2,
                    item: 'سرخ سڑ',
                    src: './../assets/seed_disease/3. ergot.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'گنے کی مزاحم اقسام کے پودے لگانا اس بیماری پر قابو پانے کا سب سے موثر طریقہ ہے۔ انوکولم کی سطح کو کم کرنے کے لئے پودے لگانے سے فصلوں کا ملبہ ہٹائیں۔ بیمار پودوں؛ اگر فصل کی مختلف قسم کی فصل کاشت کی جائے تو فورا فصل کاشت کریں۔ بیج کے ٹکڑوں کو پودے لگانے سے پہلے گرم پانی سے علاج کرنے سے بیماری کے واقعات کو کم کیا جاسکتا ہے لیکن فولر فنگسائڈ ایپلی کیشن کنٹرول کا غیر موثر طریقہ ثابت ہوا ہے',
                    symptoms: 'زرد ، خشک پتے؛ پتی مڈریبس پر لمبے لمبے سرخ گھاووں کی وجہ سے جو ایک بھوسے کا پیلے رنگ کا مرکز بن سکتا ہے۔ ڈنڈے کو لمبے لمبے حصے میں تقسیم کرنے سے سفید علاقوں کی طرف سے رکاوٹ ٹشو کے سرخ رنگ کے پیچ پڑتے ہیں۔ عروقی ٹشو بھی سرخ ہوسکتے ہیں',
                    description_audio: './../audio/seeds_disease/Lefiskid_Alaamat.ogg',
                    symptoms_audio: './../audio/seeds_disease/Lefiskid_Description.ogg',
                    treatment_audio: './../audio/seeds_disease/Lefiskid_Ilaaj.ogg',

                },
                {
                    id: 3,
                    item: 'گنے کی دھواں کی بیماری',
                    src: './../assets/seed_disease/loose_smut.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'گنے کی مختلف اقسام کے پودے لگانے سے اس مرض کو کامیابی کے ساتھ قابو کیا جاسکتا ہے جو بیماری سے مزاحم ہیں۔ کاشت سے پہلے گرم پانی کے علاج سے بیج کے ٹکڑوں سے بیماری کو عام طور پر ختم کیا جاسکتا ہے۔ متاثرہ پودوں کو ختم کرنا چاہئے',
                    symptoms: 'گنے کے پاخانے کی مستحکم نمو؛ ٹیلرز کی بے حد پیداوار؛ قصر انٹرنڈس؛ تنگ ، کھڑے پتے کے ساتھ پتلی تنوں؛ ٹرمینل بڈ سے نکلنے والی سیاہ کوڑے کی طرح کی ساخت\n',
                    description_audio: './../audio/seeds_disease/GannekDhuwanKiBimari_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/GannekDhuwanKiBimari_Alaamat.ogg',
                    treatment_audio: './../audio/seeds_disease/GannekDhuwanKiBimari_Ilaaj.ogg',
                },
                {
                    id: 4,
                    item: 'لیفسکلڈ',
                    src: './../assets/seed_disease/leaf_stripe.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'بیماری کی روک تھام کا سب سے موثر طریقہ یہ ہے کہ گنے کی مزاحم قسمیں لگائیں۔ پودے لگانے سے قبل مٹی کو صاف کرنے کے لئے گرم پانی سے بیج کے چھڑی کا علاج اس بیماری سے بچنے میں مددگار ثابت ہوسکتا ہے',
                    symptoms: 'سفید "پنسل لائن" پتی لامینہ کی پوری لمبائی میں توسیع۔ پتے کے نکات خشک ہوجاتے ہیں جس کا نتیجہ خاک میں ملتا ہے',
                    description_audio: './../audio/seeds_disease/Lefiskid_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/Lefiskid_Alaamat.ogg',
                    treatment_audio: './../audio/seeds_disease/Lefiskid_Ilaaj.ogg',
                },
                {
                    id: 5,
                    item: 'گنے کا موزیک وائرس',
                    src: './../assets/seed_disease/leaf_stripe.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'گنے کی وہ اقسام لگائیں جو وائرس سے روادار ہیں',
                    symptoms: 'پتیوں پر متضاد گرینس کے الگ الگ نمونے یعنی گہرا سبز پیچ جس میں گھیرے ہوئے ہلکے سبز ہیں۔ پتیوں کا سرخ ہونا۔ علامات 4 مختلف وائرسوں کی وجہ سے ہوسکتی ہیں',
                    description_audio: './../audio/seeds_disease/GanneKaMozikVirus_Description.ogg',
                    symptoms_audio: './../audio/seeds_disease/GanneKaMozikVirus_Alaamat.ogg',
                    treatment_audio: './../audio/seeds_disease/GanneKaMozikVirus_Ilaaj.ogg',

                },
                {
                    id: 6,
                    item: 'الٹرناریہ کی پتی',
                    src: './../assets/seed_disease/Altarnaria.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'متاثرہ پتے کو چھلنی کریں۔ پودوں کے ارد گرد نمی کو کم کرنے اور ہوا کی گردش کو فروغ دینے کے لئے پودوں کی کافی وقفہ کاری کا استعمال کریں۔ مناسب فولانی فنگسائڈ کے استعمال سے بیماری پر قابو پایا جاسکتا ہے',
                    symptoms: 'پیلے رنگ کے ہالوں سے گھرا ہوا پتوں پر گہری بھوری گھاو؛ گھاووں اکٹھا ہوجاتا ہے اور فاسد کی شکل اختیار کرلیتا ہے اور اس کی وجہ سے پتے بھڑک جاتے ہیں\n' +
                        'بیماریوں کا خروج گرم موسم اور متواتر بارش کے حق میں ہوتا ہے۔ فنگس فصل کے ملبے میں یا موزوں ماتمی لباس میں زندہ رہ سکتا ہے۔ بیماری متاثرہ بیج کے ذریعے پھیل سکتی ہے\n',
                },
                {
                    id: 7,
                    item: 'ڈاون پھپھوندی',
                    src: './../assets/seed_disease/Downy mildew.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '\n' +
                        'سورج مکھی کی انواع کو پودے لگائیں جو کہ ڈاؤن پھپھوندی کے خلاف سے پہلے مزاحم ہیں۔ کاشت کرنے بیجوں کو مناسب فنگسائڈ کے ساتھ علاج کریں۔ فولانی فنگسائڈس سیسٹیمیٹک انفیکشن کو کنٹرول کرنے میں غیر موثر ہیں اور ان کی سفارش نہیں کی جاتی ہے\n',
                    symptoms: '\n' +
                        'کھیتوں میں پودوں کی موت جس کا نتیجہ کم ہو جاتا ہے۔ اگر بیج زندہ رہے تو وہ گھنے پتوں کے ساتھ کلورٹک ہوسکتے ہیں۔ سفید کپاس کی نمو پتی کے نیچے کی سطح پر موجود ہے۔ سیسٹیمیٹک انفیکشن پودوں کی افزائش اور بیج کی پیداوار کو کم کرنے کا سبب بنتا ہے\n'

                },
                {
                    id: 8,
                    item: 'پاؤڈر پھپھوندی',
                    src: './../assets/seed_disease/Powdery mildew.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: 'پودوں کے درمیان مناسب وقفہ کرنے کی اجازت دیں تاکہ پودوں کے گرد اچھی ہوا کی گردش کو فروغ دیا جاسکے۔ کسی ایسے علاقے میں سورج مکھی کا پودے لگائیں جس میں دن کے بیشتر حصے کو پورا سورج ملتا ہو۔ فصل کے تمام سورج مکھی کی فصل کے ملبے کو ختم اور تباہ کردیں۔ مناسب فولری فنگسائڈس کے استعمال سے بیماری پر قابو پانے میں مدد مل سکتی ہے لیکن اس کی دیکھ بھال کی جانی چاہئے کیونکہ کچھ لیبل علاج شدہ پودوں کے بیجوں کو کھانے یا کھانوں کے طور پر استعمال نہیں ہونے دیتے ہیں۔',
                    symptoms: '\n' +
                        'پاؤڈر وائٹ پیچ جو ابتدائی طور پر کم پتیوں پر ظاہر ہوتے ہیں لیکن جو پودوں کے سب سے اوپر والے زمین تک پھیل سکتے ہیں۔ سفید پیچ رنگ سرمئی رنگ کے ہو رہے ہیں اور سیاہ فنگل پھل پھیلانے والی لاشیں دکھائی دیتی ہیں۔ شدید متاثرہ پتے زرد ہو کر سوکھ سکتے ہیں\n'

                },
            ],
        },
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        categories: (state) => state.cards,
        cartItems: (state) => state.cartItems,
        cart: (state) => state.cart,
    },
    mutations: {
        addToCard(state, payload) {
            let exist = state.cart.find(i => i.type === payload.type && i.id === payload.id);
            if (exist) {
                state.cart.forEach(i => {
                    if (i.type === payload.type && i.id === payload.id) {
                        i.qty++;
                    }
                })
            } else {
                state.cart.push({...payload, qty: 1})
            }
        },
        decreaseQty(state, payload) {
            state.cart.forEach(i => {
                if (i.type === payload.type && i.id === payload.id) {
                    if (i.qty === 1) {
                        state.cart.splice(state.cart.indexOf(payload), 1)
                    } else {
                        --i.qty;
                    }
                }
            })
        },
        increaseQty(state, payload) {
            state.cart.forEach(i => {
                if (i.type === payload.type && i.id === payload.id) {
                    ++i.qty;
                }
            })
        },
    },
    actions: {
        clearCart({commit, state}, item) {
            localStorage.setItem('cart', [])
            state.cart = [];
        },
        addToCart({commit, dispatch}, item) {
            commit('addToCard', item)
        },
        updateCart({state}) {
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        decreaseQty({commit}, payload = 1) {
            commit('decreaseQty', payload)
        },
        increaseQty({commit}, payload) {
            commit('increaseQty', payload)
        }
    }
}
