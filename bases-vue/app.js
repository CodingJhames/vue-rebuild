
const app = Vue.createApp({

    // template: `

    //     <h1> Hello Parchis </h1>
    //     <p> From app.js </p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }


    }

})

app.mount('#myApp');

