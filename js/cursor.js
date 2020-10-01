const cursor = document.querySelector('.cursor');

$(document).mousedown(() => {
    cursor.classList.add("expand");
})
$(document).mouseup(() => {
    cursor.classList.remove("expand");
})
$('button, a').mouseover(() => {
    cursor.classList.add("expand");
})
$('button, a').mouseout(() => {
    cursor.classList.remove("expand");
})

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {

    cursor.style.left = (n.clientX + 14) + "px";
    cursor.style.top = (n.clientY + 8) + "px";
});