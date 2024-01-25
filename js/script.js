console.log('Vue OK', Vue);

const { user, contacts } = data;

const { createApp } = Vue;

const myApp = createApp({
    name: 'WhatsApp',

    // * Dati
    data: () => ({
        user,
        contacts,
        currentId: 1,
    }),

    computed: {

        // # Recupero l'id del contatto cliccato dall'utente
        currentContact() {
            return this.contacts.find((contact) => contact.id === this.currentId)
        },
    },

    // # Funzioni



})

myApp.mount('#root');