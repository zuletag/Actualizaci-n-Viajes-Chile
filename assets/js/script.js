$(document).ready();

$("#enviarCorreo").click(function () {
    alert("¡El correo fue enviado correctamente!");
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("input").focus(function () {
    $(this).css("background-color", "#e7e9eb");
});
