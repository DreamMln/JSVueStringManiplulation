const app = Vue.createApp({
        data() {
            return {
            
                    word: null,
                    words: [],
                    message: null,
                    character: []
            }
        },
        
          methods: {
           //add methods here
           Button() { //save the button
                this.message=""
                //save
                this.words.push(this.word.toUpperCase())
                this.words.push(this.word.toLowerCase())
                this.words.push(this.word.charAt(0).toUpperCase() + this.word.slice(1))
                this.words.push(this.word.slice(0, -1) + this.word.slice(-1).toUpperCase())

                this.character = this.word.split("")
                this.character.reverse()
                this.words.push(this.character.join(""))
           }, 
          }
        }).mount("#app")
