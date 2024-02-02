# Introduzione

Questo repository GitHub è dedicato allo sviluppo di progetti semplici in Typescript. Il boilerplate  utilizza Webpack per la generazione delle build e la conversione del codice Typescript in Javascript, facilitando lo sviluppo e la distribuzione di applicazioni web moderne.

## Inizio

Per iniziare a utilizzare questo progetto, segui i passaggi descritti di seguito.

### Prerequisiti

Assicurati di avere Node.js e npm installati sul tuo sistema. Puoi scaricarli e installarli da [qui](https://nodejs.org/).

### Installazione

Per impostare il progetto sul tuo sistema locale, esegui i seguenti passaggi:

1. Clona il repository GitHub sul tuo computer locale.
   ```
   git clone https://github.com/riccardogenova/typescript-boilerplate.git
   ```
2. Naviga nella cartella del progetto clonato.
   ```
   cd typescript-boilerplate
   ```
3. Installa tutte le dipendenze necessarie eseguendo il comando `npm install`.
   ```
   npm install
   ```

### File e Struttura del Progetto

- `src/index.ts`: Questo è il primo file che viene eseguito e rappresenta l'entry point del progetto.
- `src/`: Questa cartella contiene tutti i file sorgente, inclusi i file TypeScript, CSS, HTML e le immagini.

### Scripts Disponibili

Il progetto include i seguenti scripts npm che puoi utilizzare:

- `format`: Formatta il codice sorgente utilizzando Prettier, escludendo i file specificati nel `.gitignore`.
  ```
  npm run format
  ```
- `start`: Avvia un server di sviluppo locale e apre il progetto in una finestra del browser. Utilizza `webpack serve` per il hot reloading.
  ```
  npm start
  ```
- `build`: Crea una build di produzione del tuo progetto, convertendo i file TypeScript in JavaScript e ottimizzando il bundle per la distribuzione.
  ```
  npm run build
  ```

### Uso

Dopo aver installato le dipendenze, puoi iniziare a sviluppare il tuo progetto in TypeScript. Utilizza `npm start` per avviare lo sviluppo e visualizzare le modifiche in tempo reale nel browser. Quando sei pronto per creare una build di produzione, utilizza `npm run build`.

## Contribuire

Le contribuzioni sono ciò che rende la comunità open-source un luogo incredibile per imparare, ispirare e creare. Qualsiasi contributo che tu faccia sarà **molto apprezzata**.

## Licenza

Questo progetto è sotto licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

