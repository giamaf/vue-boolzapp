console.log('JS OK');
console.log('Vue OK', Vue);

const { createApp } = Vue;

const myApp = createApp({
    name: 'WhatsApp',

    // * Dati
    data: () => ({
        data
    })
})

myApp.mount('#root');