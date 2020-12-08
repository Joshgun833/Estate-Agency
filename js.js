var slayd11 = document.getElementById('slayd1')
var slayd22 = document.getElementById('slayd2')
var slayd33 = document.getElementById('slayd3')
var knopka1 = document.getElementById('slay11')
var knopka2 = document.getElementById('slay21')
var knopka3 = document.getElementById('slay31')


function slayd1() {
    slayd11.style.display = 'block'
    slayd22.style.display = 'none'
    slayd33.style.display = 'none'
    knopka2.style.animationName = ''
    knopka3.style.animationName = ''
    knopka1.style.animationName = 'enlenme'
    knopka1.style.width = '37px'
    knopka2.style.width = '20px'
    knopka3.style.width = '20px'


return

}
function slayd2() {
    slayd11.style.display = 'none'
    slayd22.style.display = 'block'
    slayd33.style.display = 'none'
    // knopka2.style.animationName = 'enlenme'
    // knopka1.style.animationName = ''
    // knopka3.style.animationName = ''

    knopka1.style.width = '20px'

    knopka2.style.width = '37px'
    knopka3.style.width = '20px'

    return



}
function slayd3() {
    slayd11.style.display = 'none'
    slayd22.style.display = 'none'
    slayd33.style.display = 'block'
    knopka2.style.animationName = ''
    knopka1.style.animationName = ''

    knopka3.style.animationName = 'enlenme'
    knopka1.style.width = '20px'
    knopka2.style.width = '20px'

    knopka3.style.width = '37px'

return

}
var eded = 1
// setInterval(() => {
// if(eded==1){
//     slayd1()
//     eded=2
//     return
// }
// if(eded==2){
//     slayd2()
//     eded=3
//     return
// }
// if(eded==3){
//    slayd3()
//    eded=1
//    return
// }

// }, 5000);
var menu = document.getElementById('menuuu')
var eded = 1
function myFunction(x) {
    x.classList.toggle("change");
   if(eded==1){
       menu.style.display = "block"
       eded=2
       return
   }
   if(eded==2){
    menu.style.display = "none"
    eded=1
    return

   }
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1180:{
              items:3
            }
          }
    })
})