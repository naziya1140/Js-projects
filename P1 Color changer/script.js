let boxes= document.querySelectorAll('.box');
let body= document.querySelector('body');

boxes.forEach(function(box){
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);//e.target is pointing to the entire element.
        if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='green'){
            body.style.backgroundColor=e.target.id;
        }
    });
});