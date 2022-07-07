// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente
// ## Milstone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// ## Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.


// 1. mi creo il mio array di immagini
const images = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  ];

// 2. creo una variabile per ricordami l'immagine attiva
let active = 3;
const carosello = document.getElementById('carosello')

// 3. creo costante per tenere gli elementi generati
const imgsEls = []

// 4. ciclo sull'immagini del mio array per creare l'elemento corrispondente
images.forEach((image,i) => {
// 4.1 creo elemento div (contenitore) e img (figlio)
    const div = document.createElement('div') 
    const img = document.createElement('img')

    // 4.2 verifico se l'elemento è attivo
    if(active===i){

        // 4.2.1 se l'elemento è attivo lo segno anche tra le classi 
        div.className = 'carousel-item active'
    } else{

        // 4.2.2 se l'elemento non è attivo assegno solo la classa base del contenitore
        div.className = 'carousel-item'
    }

    // 4.3 assegno le classi all'immagine creata alla riga 16
    img.className = 'd-block w-100'

    // 4.4 assegno la sorgente dell'immagine usando quella dell'array
    img.src = image.url

    // 4.5 aggiungo img(figlio) al container div
    div.appendChild(img)

    // 4.6 aggiungo all'array degli elementi generati l'elemento generato (div + img)
    imgsEls[i] = div

    // 4.7 aggiungo l'elemento generato in pagina
    carosello.appendChild(div)
})

// 5. mi metto in ascolto del click del btn prev
document.getElementById('prev').addEventListener('click', function(){
    const activeImg = imgsEls[active];
    if(active > 0){
        active--
    } else{
        active = imgs.length - 1 
    }
    const newActiveImg = imgsEls[active];
    activeImg.classList.remove('active');
    newActiveImg.classList.add('active');
})

// 6.mi metto in ascolto del click del btn next
document.getElementById('next').addEventListener('click', function(){
    const activeImg = imgsEls[active];
    if(active < imgs.length - 1 ){
        active++
    } else{
        active = 0
    }
    const newActiveImg = imgsEls[active];
    activeImg.classList.remove('active');
    newActiveImg.classList.add('active');
})