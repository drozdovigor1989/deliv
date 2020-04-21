const cardbutton = document.querySelector('#card-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".button-close");
cardbutton.addEventListener("click", togglemodal);

close.addEventListener("click", togglemodal);
function togglemodal(){modal.classList.toggle("is-open");
}
new WOW ().init();

