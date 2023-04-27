// //Add local storage to store users score and name
// var submitEl = document.querySelector('#submitinitials')
// var nameEl = document.getElementById('name')

// function save(event) {
//     console.log('hello')
//     event.preventDefault();
//     let name = nameEl.value.trim()
//     let score = timeLeft.value
//     let storedScore = JSON.parse(localStorage.getItem('userData')||[])
//     let userData = {
//         name: name,
//         score: score
//     };
//     storedScore.push(userData)
//     localStorage.setItem('userData', JSON.stringify(userData));
    
//     window.location.replace.apply(href='/index.html')
//     };
    
//     submitEl.addEventListener("click", save)