var startBtn=document.getElementById('startBtn');
var correctBtn=document.getElementById('correctBtn');
var landingPg=document.getElementById('landingPg');
var Q1=document.getElementById('Q1');
var Q2=document.getElementById('Q2');
var End=document.getElementById('End');
console.log(startBtn);

startBtn.addEventListener('click', function(){
    console.log('clicked')
    landingPg.classList.add('hidden')
    Q1.classList.remove('hidden')
})

correctBtn.addEventListener('click', function(){
    console.log('clicked')
    Q1.classList.add('hidden')
    Q2.classList.remove('hidden')
})

wrongBtn.addEventListener('click', function(){
    console.log('clicked')
    Q1.classList.add('hidden')
    End.classList.remove('hidden')
})

