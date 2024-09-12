Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue</h1>',
        title: 'Я есть грут',
        items: [1, 2, ],
        person: {
            firstName: 'Olga',
            lastName: 'Djura',
            age: 26
        },

    }),
    methods: {
        addItems(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        }
    },

    computed: {
        evenItems () {
            return this.items.filter(index => index % 2 === 0)
        }
    }
    
    
    
    }).mount('#app')