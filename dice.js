const app = Vue.createApp({
    data() {
        return{
            d20roll: 0,
            d12roll: 0,
            d10roll: 0,
            d8roll: 0,
            d6roll: 0,
            d4roll: 0
        };
    },
    methods : {
        d20roller(min, max) {
            this.d20roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d20reset() {
            this.d20roll = 0;
        },
        d12roller(min, max) {
            this.d12roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d12reset() {
            this.d12roll = 0;
        },
        d10roller(min, max) {
            this.d10roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d10reset() {
            this.d10roll = 0;
        },
        d8roller(min, max) {
            this.d8roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d8reset() {
            this.d8roll = 0;
        },
        d6roller(min, max) {
            this.d6roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d6reset() {
            this.d6roll = 0;
        },
        d4roller(min, max) {
            this.d4roll = Math.floor(Math.random() * (max - min + 1)) + min;
        },
        d4reset() {
            this.d4roll = 0;
        }
    }
});
app.mount('#dice-roller');