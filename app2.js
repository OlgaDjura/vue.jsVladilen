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
    },

/*     template: 
`
        <div class="card center">
            <h1>{{title}}</h1>
            <button class="btn" @click="title = 'Другое'">Другое</button>
        </div>
    
` */
render() {
    return h('div', {
        class: 'card center'},
    [
        h('h1', {}, this.title),
        h('button', {class: 'btn', onClick: this.changeTitle}, 'Other')
    ])
}, 
beforeCreate() {
    console.log('beforeCreate')
},
})


app2.mount('#app')