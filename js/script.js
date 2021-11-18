

// hamburger Btn
const hamburgerBtn = document.querySelector(".hamburguer-bt")
const hamburguerBtStripe = document.getElementsByClassName("hamburguer-bt__stripe") // html collection
const overlay =document.getElementsByClassName("overlay")
const navBarOverlay =document.getElementsByClassName("nav-bar-overlay")
let hamburgerBtnOpen= false

                hamburgerBtn.addEventListener("click",openingMenu)
                    function openingMenu(){

                  
                    if (hamburgerBtnOpen === false ){
                        hamburguerBtStripe[0].classList.add("on-stripe-top")
                        hamburguerBtStripe[1].classList.add("on-stripe-middle")
                        hamburguerBtStripe[2].classList.add("on-stripe-bottom")
                       
                        overlay[0].classList.add("overlay-visible")
                        navBarOverlay[0].style.display="block"
                        navBarOverlay[0].classList.add("nav-bar-overlay-visible")
                        
                        hamburgerBtnOpen = true
                } else {  
                                hamburguerBtStripe[0].classList.remove("on-stripe-top")
                                hamburguerBtStripe[1].classList.remove("on-stripe-middle")
                                hamburguerBtStripe[2].classList.remove("on-stripe-bottom")               
                                overlay[0].classList.remove("overlay-visible")
                                navBarOverlay[0].style.display="none"
                                navBarOverlay[0].classList.remove("nav-bar-overlay-visible")
                                hamburgerBtnOpen = false
                        }  
                    }
                
           
            
               

      