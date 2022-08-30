var btn = document.querySelector('.btn')
btn.addEventListener('click', (ea)=> {
    btn.classList.add('fade')

    let recoginiton = new webkitSpeechRecognition()
    recoginiton.lang = 'en-GB'
    recoginiton.addEventListener('result', (e)=>{
        document.querySelector('.text').value = e.results[0][0].transcript;
        btn.classList.remove('fade');
    })
    recoginiton.start()
})