const cursor = document.querySelector('.cursor2');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 2) + "px; left: " + (e.pageX - 2) + "px;")
// })

$(document).mousedown(() => {
    cursor.classList.add("expand");
    // setTimeout(() => {
    //     cursor.classList.remove("expand");
    // }, 500)
})
$(document).mouseup(() => {
    cursor.classList.remove("expand");
    // setTimeout(() => {
    //     cursor.classList.remove("expand");
    // }, 500)
})
$('button, a').mouseover(() => {
    cursor.classList.add("expand");
    // setTimeout(() => {
    //     cursor.classList.remove("expand");
    // }, 500)

})
$('button, a').mouseout(() => {
    cursor.classList.remove("expand");
    // setTimeout(() => {
    //     cursor.classList.remove("expand");
    // }, 500)
})

// $('a').mouseout(() => {
//     cursor.classList.add("expand");
//     // setTimeout(() => {
//     //     cursor.classList.remove("expand");
//     // }, 500)
// })
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {

    t.style.left = (n.clientX) + "px",
        t.style.top = (n.clientY) + "px",
        e.style.left = (n.clientX + 14) + "px",
        e.style.top = (n.clientY + 8) + "px",
        i.style.left = (n.clientX) + "px",
        i.style.top = (n.clientY) + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}

function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}