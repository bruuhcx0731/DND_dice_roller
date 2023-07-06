const app = Vue.createApp({
    data() {
        return{
            value: 0,
            sides: 0,
            side: 0
        };
    },
    methods : {

    }
});
app.component('dice-roll', {
    props: {
        sides: {
            type: Number,
            required: true
        }
    },
    template: `<div id="divs">
    <h2>D{{ sides }} Roller</h2>
    <p>{{ lastroll }}</p>
    <p v-if="rollhistory"> {{ roll }} </p>
    <p class="counter">You have rolled {{ counter }} times</p>
    <button type="button" @click="roller(sides)">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            roll: [],
            result: 0,
            lastroll: 0,
            rollhistory: false,
            counter: 0
        }
    },
    methods: {
        roller(max) {
            this.result = Math.floor(Math.random() * (max - 1 + 1)) + 1;
            this.roll.push(this.result);
            this.lastroll = this.roll[this.roll.length - 1];
            this.counter += 1;
            // console.log("d20 rolled!");
        },
        reset() {
            this.roll = [];
            this.counter = 0;
            this.rollhistory = false;
            this.lastroll = 0;
        },
        history() {
            this.rollhistory = true;
        }
    }
});
app.component('d10-roll', {
    props: {
        side: {
            type: Number,
            required: true
        }
    },
    template: `<div id="divs">
    <h2>D{{ side }} Roller</h2>
    <p>{{ lastroll }}, {{ lastroll2 }}</p>
    <p v-if="rollhistory"> {{ roll }} </p>
    <p v-if="rollhistory2"> {{ roll2 }}</p>
    <p class="counter">You have rolled {{ counter }} times</p>
    <button type="button" @click="roller(side)">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            roll: [],
            roll2: [],
            result: 0,
            result2: 0,
            lastroll: 0,
            lastroll2: 0,
            rollhistory: false,
            rollhistory2: false,
            counter: 0
        }
    },
    methods: {
        roller(max) {
            this.result = Math.floor(Math.random() * (max - 1 + 1)) + 1;
            this.roll.push(this.result);
            this.lastroll = this.roll[this.roll.length - 1];
            this.result2 = Math.floor(Math.random() * (max - 1 + 1)) + 1;
            this.roll2.push(this.result2);
            this.lastroll2 = this.roll2[this.roll2.length - 1];
            this.counter += 1;
            // console.log("d20 rolled!");
        },
        reset() {
            this.roll = [];
            this.roll2 = [];
            this.counter = 0;
            this.rollhistory2 = false;
            this.rollhistory = false;
            this.lastroll = 0;
            this.lastroll2 = 0;
        },
        history() {
            this.rollhistory = true;
            this.rollhistory2 = true;
        }
    }
});

app.mount('#dice-roller');