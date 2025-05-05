document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".aperture__header").classList.toggle("open")
    })
})
async function sendData(data) {
    return await fetch('/api/apply/', {
      method: 'POST',
      body: data,
    })
  }  
function serializeForm(formNode) {
    return new FormData(formNode)
}
async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
    const response = await sendData(data)
}  
const applicantForm = document.getElementById('email')
applicantForm.addEventListener('submit', handleFormSubmit)

