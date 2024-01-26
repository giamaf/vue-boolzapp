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
        newMessageText: ''
    }),
    computed: {
        // # Recupero il contatto cliccato dall'utente perchè è qualcosa che cambia in tempo reale. Se ho il contatto, posso accedere quindi a foto, nome ecc...
        activeContact() {
            return this.contacts.find(contact => contact.id === this.currentId)
        },

        // # Recupero la chat dei vari contatti 
        contactChat() {
            return this.activeContact.messages
        }
    },

    methods: {
        // # Funzione per ottenere l'id dell'utente cliccato.
        // # Il parametro è l'id dell'utente cliccato '(contact.id)'
        setCurrentId(id) {
            return this.currentId = id;
        },

        // # Funzione per creare una data
        getNowDate() {
            return `${new Date().toLocaleDateString()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        },

        // # Funzione per inviare un nuovo messaggio
        sendMessage() {
            const newMessage = {
                id: new Date().toISOString(),
                date: this.getNowDate(),
                text: this.newMessageText,
                status: 'sent'
            }
            this.contactChat.push(newMessage);
        }
    }
})

myApp.mount('#root');