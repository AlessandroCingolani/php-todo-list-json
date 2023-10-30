# PHP ToDo List JSON

Dobbiamo creare una web-app che permetta di leggere e scrivere una lista di Todo.
Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.

**Consigli**

Nello svolgere l’esercizio seguite un approccio graduale.
Prima assicuratevi che la vostra pagina _index.php_ (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).
Lo step successivo è quello di “testare” l’invio di un nuovo task, sapendo che manca comunque la persistenza lato server (ancora non memorizzate i dati da nessuna parte).
Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.

1. Creo mark-up statico dove andrò a impostare Vue axios con la cdn e tramite Vue stampo dinamicamente dati che prendo con il get di axios dal mio JSON.

2. Imposto il mio PHP trasformandolo in un JSON il mio array di oggetti.

3. Creo funzioni per comunicare al mio PHP tramite axios POST trasformandolo in un form e salvare nuovi dati inviati dal mio html/vue in dati da storare.

4. Aggiungo sempre tramite il post l indice ciclato con il v-for da rimuovere e lo tolgo direttamente nel mio PHP con il metodo array_splice.
