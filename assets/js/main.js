// (function title(text) {
//     document.title = text
//     setTimeout(() => {
//         title(text.substr(1) + text.substr(0, 1))
//     }, 40);
// }("                  Hugo Duf - Accueil                  "))

$(document).ready(function () {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault()
            let hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash
            })
        }
    })
})

emailjs.init("user_VUPTjU33YUwxGJbJdbO59")

window.onload = () => {
    document.getElementById('contact').addEventListener('submit', (event) => {
        event.preventDefault()
        let params = {
            from_name : document.getElementById("firstname").value,
            from_email : document.getElementById("email").value,
            message : document.getElementById("subject").value
        }
        emailjs.send('service_m6tzm27', 'template_dej0qp9', params).then(() => {
            console.log('Sending Success');
        }, (err) => {
            console.log('Sending Failed', err);
        })
    })
}
