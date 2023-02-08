

let root = document.querySelector('ul');

let max = 63;
let index = 0;

function addQuotes(){
    for(let i=0; i<max; i++){
      let li=document.createElement('li');
      let blockquote=document.createElement('blockqoute');
      let cite=document.createElement('cite');

      blockquote.innerText = quotes[index].quoteText;
      cite.innerText = quotes[index].qouteAuthor;


      li.append(blockquote,cite);
      root.append(li);

      index++;
    }
}

addQuotes();

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }

});