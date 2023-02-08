
window.addEventListener("load",function(){

    var items = this.document.querySelectorAll("#sortlist li"),
    dragged = null;

    for (let i of items){
        i.addEventListener("dragstart",function(){
            dragged = this;

            for (let it of items){
                if(it != dragged){
                    it.classList.add("hint");
                }
            }
        });

        i.addEventListener("dragenter",function(){
            if(this != dragged){
                this.classList.add("active");
            }
        });

        i.addEventListener("dragleave",function(){
            this.classList.remove("active");
        });

        i.addEventListener("dragend",function(){
            for(let it of items){
                it.classList.remove("hint");
                it.classList.remove("active");
            }
        });

 
        i.addEventListener("dragover",function(evt){
            evt.preventDefault();
        });


        i.addEventListener("drop",function(evt){
            evt.preventDefault();
            if(this != dragged){
                this.parentNode.insertBefore(dragged,this);
            }
        });

    }
});