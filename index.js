// 1st method
document.querySelectorAll(".accordion_heading").forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log("clicked")
        let accordion_text = item.nextElementSibling
        let accordion_svg = item.children[0]
        
        if (accordion_text.classList.contains("hidden")) {
            
            accordion_text.classList.remove("hidden")
            accordion_text.classList.add("block")
            accordion_svg.classList.add("rotate-180")
        }
        else {
            accordion_text.classList.remove("block")
            accordion_text.classList.add("hidden")
            accordion_svg.classList.remove("rotate-180")
        }
    })
})

// 2nd method
// var acc = document.getElementsByClassName("accordion_heading");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             console.log("clicked")
//             panel.style.maxHeight = null;
//     } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

// document.querySelectorAll(".accordion_heading").forEach((item) => {
//     item.addEventListener("click", (event) => {
//         console.log("clicked")
//         let accordion_text = item.nextElementSibling
//         let accordion_svg = item.children[0]
        
//         if (accordion_text.style.maxHeight) {
//             accordion_text.style.maxHeight = 0
//             accordion_svg.classList.remove("rotate-180")    
//         } else {            
//             accordion_text.style.maxHeight = accordion_text.scrollHeight + "px"
//             accordion_svg.classList.add("rotate-180")
//         }
//     })
// })