const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: [ 'Заметка 1', 'Заментка 5']
        }

    },
    methods: {
        inputChengeHander(event) {
            this.inputValue = event.target.value
        },
        addNewNode() {
            if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''}
        }, toUpperCase(item) {
            return item.toUpperCase()

        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        computed: {
            doubelCountComputed() {
                return this.notes.length * 2
            },
        },
        watch: {
            inputValue(value) {
                if (value.length > 10){
                    this.inputValue = ''
                }
            }
        },
    }
}

const app = Vue.createApp(App).mount('#app')

