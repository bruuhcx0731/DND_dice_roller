const app = Vue.createApp({
    data() {
        return{
            d20roll:[],
            d20history: false,
            d20result: 0,
            d20lastroll: 0,
            d12roll: 0,
            d10roll: 0,
            d10roll2:0,
            d8roll: 0,
            d6roll: 0,
            d4roll: 0,
            d20counter: 0,
            d12counter: 0,
            d10counter: 0,
            d8counter: 0,
            d6counter: 0,
            d4counter: 0,
        };
    },
    methods : {
        roller() {
            if(document.getElementById("20roller").click) {
                // this.d20roll = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
                this.d20result = Math.floor(Math.random() * (20 - 1 + 1)) + 1; 
                this.d20roll.push(this.d20result);
                this.d20counter += 1;
                this.d20lastroll = this.d20roll[this.d20roll.length - 1];
            }
        },
        reset(){
            if(document.getElementById("20reset").click) {
                this.d20roll = [];
                this.d20counter = 0;
                this.d20lastroll = 0;
                this.d20history = false;
            }
        },
        history() {
            if(document.getElementById("20history").click) {
                this.d20history = true;
            }
        },
        // d20roller(min, max) {
        //     this.d20roll = Math.floor(Math.random() * (max - min + 1)) + min;
        //     this.d20counter += 1;
        // },
        // d20reset() {
        //     this.d20roll = 0;
        //     this.d20counter = 0;
        // },
        d12roller(min, max) {
            this.d12roll = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d12counter += 1;
        },
        d12reset() {
            this.d12roll = 0;
            this.d12counter = 0;
        },
        d10roller(min, max) {
            this.d10roll = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d10roll2 = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d10counter += 1;
        },
        d10reset() {
            this.d10roll = 0;
            this.d10roll2 = 0;
            this.d10counter = 0;
        },
        d8roller(min, max) {
            this.d8roll = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d8counter += 1;
        },
        d8reset() {
            this.d8roll = 0;
            this.d8counter = 0;
        },
        d6roller(min, max) {
            this.d6roll = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d6counter += 1;
        },
        d6reset() {
            this.d6roll = 0;
            this.d6counter = 0;
        },
        d4roller(min, max) {
            this.d4roll = Math.floor(Math.random() * (max - min + 1)) + min;
            this.d4counter += 1;
        },
        d4reset() {
            this.d4roll = 0;
            this.d4counter = 0;
        }
    }
});
app.mount('#dice-roller');