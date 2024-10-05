const form=document.querySelector('.sign_up');
const submit=document.querySelector('#username');
const feedback=document.querySelector('.feedback');

form.addEventListener('submit', e=>{
   e.preventDefault();
const username=form.username.value;
const pattern=/^[a-z]{7,10}$/;

if (pattern.test(username)){
  feedback.textContent='correct username';
}else {
     feedback.textContent='wrone username';
    
}});
