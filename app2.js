const h = Vue.h


const app2 = Vue.createApp({
    data() {
        return {
            title: 'Это из свойства template'
        }

    },
    methods: {
        changeTitle() {
            this.title = 'Love'
        }
    },})