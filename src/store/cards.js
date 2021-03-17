export default {
  namespaced: true,
  state: {
      cards : [
        {
          id : 0,
          src: './../assets/fertilizers.png',
          route: '/product/fertilizers',
          title: 'کھادیں'
        },
        {
          id : 1,
          src: './../assets/seeds.jpg',
          route: '/product/seeds',
          title: 'بیج'
        },
        {
          id : 2,
          src: './../assets/crops.jpg',
          route: '/product/crops',
          title: 'فصلوں کی بیماریں'
        },
        {
          id : 3,
          src: './../assets/agrochemicals.png',
          route: '/product/agrochemicals',
          title: 'کیڑے مار ادویات'
        },
        
      ],
  },
  getters: {
      categories: (state) => state.cards
  },
  mutations: {},
  actions: {}
}
