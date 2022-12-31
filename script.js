let btn = document.getElementById('crossbutton');
let card = document.getElementById('cardelement');
function remove_hover(){
    $('#cardelement').removeClass('card');
    
}

card.addEventListener('mouseenter',()=>{
    card.classList.add('card');
})


