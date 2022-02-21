var startBtn=document.getElementById('startBtn');
var correctBtn=document.getElementById('correctBtn');
var landingPg=document.getElementById('landingPg');
var Q1=document.getElementById('Q1');
var Q2=document.getElementById('Q2');
var End=document.getElementById('End');


//Start button on launching page
startBtn.addEventListener('click', function(){
    console.log('clicked')
    landingPg.classList.add('hidden')
    Q1.classList.remove('hidden')
})

//Correct button will send you to next page
correctBtn.addEventListener('click', function(){
    console.log('clicked')
    Q1.classList.add('hidden')
    Q2.classList.remove('hidden')
})

//Wrong button will send you to logging page and restart button
wrongBtn.addEventListener('click', function(){
    console.log('clicked')
    Q1.classList.add('hidden')
    End.classList.remove('hidden')
})

