document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        let a = document.querySelector(".aperture__header").classList.toggle("open")
        console.log('asd' + a)
    })
})