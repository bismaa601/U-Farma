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
                id: 3,
                src: './../assets/crops.jpg',
                route: '/product/crops',
                title: 'فصلوں کی بیماریں'
            },
            {
                id: 3,
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
                }, {
                    id: 1,
                    item: 'بیجوں والا کامن بنٹ',
                    src: './../assets/seed_disease/2. Seed-borne common bunt.jpg',
                    des: 'پودوں کی یہ عام بیماری گرم ماحول اور مٹی میں نائٹروجن کے اعلی اجزاء کے ذریعہ لائی جاتی ہے۔',
                    des1: 'This common plant disease is brought about by warm environments and high contents of nitrogen in the soil.',
                    audio: './../audio/aphids.mp3',
                    cure: '',
                    symptoms: 'متاثرہ ایئرز میں اناج کی جگہ بیج کی طرح \'بنٹ بالز\' لیتے ہیں جن میں سے ہر ایک میں لاکھوں چکنائی ، کالی ، بدبودار بو (جیسے بوسیدہ مچھلی) کے بیضوں ہوتے ہیں۔',
                    reasons: 'ممکنہ طور پر اناج کے معیار میں کمی سے فصلوں کو مکمل طور پر مسترد کردیا جائے۔',
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
        clearCart({commit,state}, item) {
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
