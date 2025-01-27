const form = document.querySelector('form');
const email = document.querySelector('.email');
const span = document.querySelector('.input span');


form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if( email.value === ''  ){
        span.style.display = 'block';
        email.style.border =' 2px solid hsl(354, 100%, 66%)';

}   else if(!email.value.match(valid)){
        span.style.display = 'block';
        email.style.border =' 2px solid hsl(354, 100%, 66%)';

    }else{
        form.submit()
    }
})
