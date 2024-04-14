let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");
console.log(burger);
console.log(navbarList);

burger.addEventListener("click",function() {
    if(burger.classList.toggle('active')) {
        navbarList.style.display = "block";
    } else {
        navbarList.style.display = "none";
    }
})

// $(document).ready(function () {
//     $('.navbar__btn').click (function() {
//         $(this).toggleClass('active');
//         $('.navbar__list').slideToggle(500);
//     })
// })