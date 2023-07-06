const app = Vue.createApp({
    data() {
        return{
            value: 0
        };
    },
    methods : {

    }
});
app.component('d20-roll', {
    template: `<div id="divs">
    <h2>D20 Roller</h2>
    <p>{{ d20lastroll }}</p>
    <p v-if="d20history"> {{ d20roll}} </p>
    <p class="counter">You have rolled {{ d20counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d20roll: [],
            d20result: 0,
            d20lastroll: 0,
            d20history: false,
            d20counter: 0
        }
    },
    methods: {
        roller() {
            this.d20result = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            this.d20roll.push(this.d20result);
            this.d20lastroll = this.d20roll[this.d20roll.length - 1];
            this.d20counter += 1;
            console.log("d20 rolled!");
        },
        reset() {
            this.d20roll = [];
            this.d20counter = 0;
            this.d20history = false;
            this.d20lastroll = 0;
        },
        history() {
            this.d20history = true;
        }
    }
});
app.component('d12-roll', {
    template: `<div id="divs">
    <h2>D12 Roller</h2>
    <p>{{ d12lastroll }}</p>
    <p v-if="d12history"> {{ d12roll}} </p>
    <p class="counter">You have rolled {{ d12counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d12roll: [],
            d12result: 0,
            d12lastroll: 0,
            d12history: false,
            d12counter: 0
        }
    },
    methods: {
        roller() {
            this.d12result = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            this.d12roll.push(this.d12result);
            this.d12lastroll = this.d12roll[this.d12roll.length - 1];
            this.d12counter += 1;
            console.log("d12 rolled!");
        },
        reset() {
            this.d12roll = [];
            this.d12counter = 0;
            this.d12history = false;
            this.d12lastroll = 0;
        },
        history() {
            this.d12history = true;
        }
    }
});
app.component('d10-roll', {
    template: `<div id="divs">
    <h2>D10 Roller</h2>
    <p>{{ d10lastroll }}, {{ d10lastroll2 }}</p>
    <p v-if="d10history"> {{ d10roll }} </p>
    <p v-if="d10history2">{{ d10roll2 }}</p>
    <p class="counter">You have rolled {{ d10counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d10roll: [],
            d10roll2: [],
            d10result2:0,
            d10result: 0,
            d10lastroll: 0,
            d10lastroll2: 0,
            d10history2: false,
            d10history: false,
            d10counter: 0
        }
    },
    methods: {
        roller() {
            this.d10result = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            this.d10roll.push(this.d10result);
            this.d10lastroll = this.d10roll[this.d10roll.length - 1];
            this.d10result2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            this.d10roll2.push(this.d10result2);
            this.d10lastroll2 = this.d10roll2[this.d10roll2.length - 1];
            this.d10counter += 1;
        },
        reset() {
            this.d10roll = [];
            this.d10counter = 0;
            this.d10history = false;
            this.d10lastroll = 0;
            this.d10roll2 =[];
            this.d10history2 = 0;
            this.d10lastroll2 = 0;
            this.d10history2 = 0;
        },
        history() {
            this.d10history = true;
            this.d10history2 = true;
        }
    }
});
app.component('d8-roll', {
    template: `<div id="divs">
    <h2>D8 Roller</h2>
    <p>{{ d8lastroll }}</p>
    <p v-if="d8history"> {{ d8roll}} </p>
    <p class="counter">You have rolled {{ d8counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d8roll: [],
            d8result: 0,
            d8lastroll: 0,
            d8history: false,
            d8counter: 0
        }
    },
    methods: {
        roller() {
            this.d8result = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
            this.d8roll.push(this.d8result);
            this.d8lastroll = this.d8roll[this.d8roll.length - 1];
            this.d8counter += 1;
            console.log("d8 rolled!");
        },
        reset() {
            this.d8roll = [];
            this.d8counter = 0;
            this.d8history = false;
            this.d8lastroll = 0;
        },
        history() {
            this.d8history = true;
        }
    }
});
app.component('d6-roll', {
    template: `<div id="divs">
    <h2>D6 Roller</h2>
    <p>{{ d6lastroll }}</p>
    <p v-if="d6history"> {{ d6roll}} </p>
    <p class="counter">You have rolled {{ d6counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d6roll: [],
            d6result: 0,
            d6lastroll: 0,
            d6history: false,
            d6counter: 0
        }
    },
    methods: {
        roller() {
            this.d6result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            this.d6roll.push(this.d6result);
            this.d6lastroll = this.d6roll[this.d6roll.length - 1];
            this.d6counter += 1;
            console.log("d6 rolled!");
        },
        reset() {
            this.d6roll = [];
            this.d6counter = 0;
            this.d6history = false;
            this.d6lastroll = 0;
        },
        history() {
            this.d6history = true;
        }
    }
});

app.component('d4-roll', {
    template: `<div id="divs">
    <h2>D4 Roller</h2>
    <p>{{ d4lastroll }}</p>
    <p v-if="d4history"> {{ d4roll}} </p>
    <p class="counter">You have rolled {{ d4counter }} times</p>
    <button type="button" @click="roller">Roll</button>
    <button type="button" @click="reset">Reset</button>
    <button type="button" @click="history">Show History</button>
</div>`,
    data() {
        return{
            d4roll: [],
            d4result: 0,
            d4lastroll: 0,
            d4history: false,
            d4counter: 0
        }
    },
    methods: {
        roller() {
            this.d4result = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            this.d4roll.push(this.d4result);
            this.d4lastroll = this.d4roll[this.d4roll.length - 1];
            this.d4counter += 1;
            console.log("d4 rolled!");
        },
        reset() {
            this.d4roll = [];
            this.d4counter = 0;
            this.d4history = false;
            this.d4lastroll = 0;
        },
        history() {
            this.d4history = true;
        }
    }
});

app.mount('#dice-roller');