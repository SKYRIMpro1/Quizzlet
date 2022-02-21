var startBtn=document.getElementById('startBtn');
var landingPg=document.getElementById('landingPg');
var Q1=document.getElementById('Q1')
console.log(startBtn);

startBtn.addEventListener('click', function(){
    console.log('clicked')
    landingPg.classList.add('hidden')
    Q1.classList.remove('hidden')
})

