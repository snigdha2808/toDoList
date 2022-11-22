var entry = document.querySelector(".entry");
    var tobox = document.querySelector(".tobox");
    entry.addEventListener("keyup", function(event){
        if (event.key == "Enter"){
            addlist(this.value);
            this.value = "";
        }
    })
    const addlist = (item) =>{
        const listitem = document.createElement('li');
        listitem.innerHTML = `
        ${item}
        <i class="fa-solid fa-circle-xmark"></i> `;

        tobox.appendChild(listitem);


    listitem.addEventListener('click', function(){
        this.classList.toggle("done");
    })

    listitem.querySelector("i").addEventListener("click", function(){
        listitem.remove();

    })

    }


    var k = document.querySelector('.mode');
    var h = document.querySelector('.red')
    h.addEventListener("click",function(){
        k.style.background = "#c64c26";
    })
    var h = document.querySelector('.skyblue')
    h.addEventListener("click",function(){
        k.style.background = "cyan";
    })
    var h = document.querySelector('.crimson')
    h.addEventListener("click",function(){
        k.style.background = "crimson";
    })
    var h = document.querySelector('.black')
    h.addEventListener("click",function(){
        k.style.background = "rgb(81, 182, 45)";
    })
    var h = document.querySelector('.pink')
    h.addEventListener("click",function(){
        k.style.background = "pink";
    })
