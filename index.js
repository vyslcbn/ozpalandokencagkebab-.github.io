document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function menuAc(x) {
    x.classList.toggle("active");
    document.querySelector("#mmbl").classList.toggle("active");
  }