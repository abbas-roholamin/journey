const question = document.querySelectorAll('.question');
const sectionCenter = document.querySelector('.section-center');

sectionCenter.addEventListener('click', function(e){

    question.forEach(function(q){
        q.classList.remove('show-text');
    })

    e.target.parentElement.parentElement.parentElement.parentElement.classList.add('show-text')
})
