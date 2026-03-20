// ----------------------------------------------------------------------------------up to top button events---------------------------------------------------------------//
let btnToTop = document.getElementById("btn_upToTop");
let firstSection = document.getElementById("header");

/* Hiden and show arrow */
function showToUpButton(){
    if(window.scrollY > 500){
        btnToTop.style.setProperty("right", "30px")
    }else{
        btnToTop.style.setProperty("right", "-50px")
    }
}
    
/* click on arrow to scroll to top */
btnToTop.onclick = function(){
    window.scrollTo({top: 0, behavior: "smooth"});
}



//--------------------------------------------------------------------------------------menu icon click events-----------------------------------------------------------//

let menuList = document.getElementById("mobile_menu")
let menuIconOpen = document.getElementById("menu_icon_open")
let menuIconClose = document.getElementById("menu_icon_close")

menuIconClose.style.setProperty("display", "none")


// open menu function
menuIconOpen.onclick = function(){
        menuList.style.setProperty("height", "100vh")
        menuIconOpen.style.setProperty("display", "none")
        menuIconClose.style.setProperty("display", "flex")
        
}

// close menu function
menuIconClose.onclick = function(){
        menuList.style.setProperty("height", "0")
        menuIconOpen.style.setProperty("display", "flex")
        menuIconClose.style.setProperty("display", "none")
}

// click on ul elements 

let links = document.getElementsByClassName("link")

for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
    menuList.style.setProperty("height", "0")
    menuIconOpen.style.setProperty("display", "flex")
    menuIconClose.style.setProperty("display", "none")
}
}

//--------------------------------------------------------------------------------------open and close night mood----------------------------------------------------------//
let nightIcon = document.getElementById("fas fa-moon");
let lightIcon = document.getElementById("fas fa-sun");
let nightIconMobile = document.getElementById("fas fa-moon_mobile");
let lightIconMobile = document.getElementById("fas fa-sun_mobile");
nightIcon.style.setProperty("display", "none");
nightIconMobile.style.setProperty("display", "none");


function darkMood(){
        nightIcon.style.setProperty("display", "none");
        lightIcon.style.setProperty("display", "inline");
        lightIcon.style.setProperty("color", "#ffffff");
        nightIconMobile.style.setProperty("display", "none");
        lightIconMobile.style.setProperty("display", "inline");
        lightIconMobile.style.setProperty("color", "#ffffff");
        menuList.style.setProperty("background-color", "#252A34");
        menuIconOpen.style.setProperty("color", "#ffffff")
        menuIconClose.style.setProperty("color", "#ffffff")

        document.body.style.setProperty("background-color", "#252A34") 
        document.getElementById("nav-bar").style.setProperty("background-color", "#252A34")
        document.getElementById("cv2").style.setProperty("border-color", "#ffffff")
        document.getElementById("cv2").style.setProperty("background-color", "#252A34")
        document.getElementById("cv2").style.setProperty("color", "#ffffff")
        document.getElementById("cv2").onmouseenter = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
            document.getElementById("cv2").style.setProperty("color", "#252A34")
        }
        document.getElementById("cv2").onmouseout = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#252A34")
            document.getElementById("cv2").style.setProperty("color", "#ffffff",)
        }



        for(let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h1").length; i++){
            document.getElementsByTagName("h1")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h2").length; i++){
            document.getElementsByTagName("h2")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h3").length; i++){
            document.getElementsByTagName("h3")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("span").length; i++){
            document.getElementsByTagName("span")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].style.setProperty("color", "#ffffff")
            
        };   

        document.getElementById("fucking_p").style.setProperty("color", "#ffffff")
}

function darkMoodMobile(){
        nightIcon.style.setProperty("display", "none");
        lightIcon.style.setProperty("display", "inline");
        lightIcon.style.setProperty("color", "#ffffff");
        nightIconMobile.style.setProperty("display", "none");
        lightIconMobile.style.setProperty("display", "inline");
        lightIconMobile.style.setProperty("color", "#ffffff");
        menuList.style.setProperty("background-color", "#252A34");
        menuIconOpen.style.setProperty("color", "#ffffff")
        menuIconClose.style.setProperty("color", "#ffffff")

        document.body.style.setProperty("background-color", "#252A34") 
        document.getElementById("nav-bar").style.setProperty("background-color", "#252A34")
        document.getElementById("cv2").style.setProperty("border-color", "#ffffff")
        document.getElementById("cv2").style.setProperty("background-color", "#252A34")
        document.getElementById("cv2").style.setProperty("color", "#ffffff")
        document.getElementById("cv2").onmouseenter = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
            document.getElementById("cv2").style.setProperty("color", "#252A34")
        }
        document.getElementById("cv2").onmouseout = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#252A34")
            document.getElementById("cv2").style.setProperty("color", "#ffffff",)
        }


        for(let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h1").length; i++){
            document.getElementsByTagName("h1")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h2").length; i++){
            document.getElementsByTagName("h2")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h3").length; i++){
            document.getElementsByTagName("h3")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("span").length; i++){
            document.getElementsByTagName("span")[i].style.setProperty("color", "#ffffff")
            
        };

        for(let i = 0; i < document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].style.setProperty("color", "#ffffff")
            
        };   

        document.getElementById("fucking_p").style.setProperty("color", "#ffffff")
}

nightIcon.onclick = darkMood;
nightIconMobile.onclick = darkMoodMobile;


function lightMood(){
        nightIcon.style.setProperty("display", "inline") 
        lightIcon.style.setProperty("display", "none") 
        nightIcon.style.setProperty("color", "#252A34") 
        nightIconMobile.style.setProperty("display", "inline") 
        lightIconMobile.style.setProperty("display", "none") 
        nightIconMobile.style.setProperty("color", "#252A34") 
        menuList.style.setProperty("background-color", "#ffffff");
        menuIconOpen.style.setProperty("color", "#252A34")
        menuIconClose.style.setProperty("color", "#252A34")
        
        
        document.getElementById("up_arrow").style.setProperty("color", "#ffffff")
        document.getElementById("nav-bar").style.setProperty("background-color", "#ffffff") 
        document.body.style.setProperty("background-color", "#ffffff")
        document.getElementById("cv2").style.setProperty("border-color", "#252A34")
        document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
        document.getElementById("cv2").style.setProperty("color", "#252A34")
        document.getElementById("cv2").onmouseenter = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#252A34")
            document.getElementById("cv2").style.setProperty("color", "#ffffff")
        }
        document.getElementById("cv2").onmouseout = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
            document.getElementById("cv2").style.setProperty("color", "#252A34")
        }
        


        for(let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].style.setProperty("color", "#252A34")
        };

        for(let i = 0; i < document.getElementsByTagName("li").length; i++){
            document.getElementsByTagName("li")[i].style.setProperty("color", "#252A34")
        };

        for(let i = 0; i < document.getElementsByTagName("h1").length; i++){
            document.getElementsByTagName("h1")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h2").length; i++){
            document.getElementsByTagName("h2")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h3").length; i++){
            document.getElementsByTagName("h3")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("span").length; i++){
            document.getElementsByTagName("span")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].style.setProperty("color", "#252A34")
            
        };
        document.getElementById("fucking_p").style.setProperty("color", "#252A34")
}

function lightMoodMobile(){
        nightIcon.style.setProperty("display", "inline") 
        lightIcon.style.setProperty("display", "none") 
        nightIcon.style.setProperty("color", "#252A34")
        nightIconMobile.style.setProperty("display", "inline") 
        lightIconMobile.style.setProperty("display", "none") 
        nightIconMobile.style.setProperty("color", "#252A34") 
        menuList.style.setProperty("background-color", "#ffffff");
        menuIconOpen.style.setProperty("color", "#252A34")
        menuIconClose.style.setProperty("color", "#252A34")

        document.getElementById("up_arrow").style.setProperty("color", "#ffffff")
        document.getElementById("nav-bar").style.setProperty("background-color", "#ffffff") 
        document.body.style.setProperty("background-color", "#ffffff") 
        document.getElementById("cv2").style.setProperty("border-color", "#252A34")
        document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
        document.getElementById("cv2").style.setProperty("color", "#252A34")
        document.getElementById("cv2").onmouseenter = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#252A34")
            document.getElementById("cv2").style.setProperty("color", "#ffffff")
        }
        document.getElementById("cv2").onmouseout = function(){
            document.getElementById("cv2").style.setProperty("background-color", "#ffffff")
            document.getElementById("cv2").style.setProperty("color", "#252A34",)
        }
        


        for(let i = 0; i < document.getElementsByTagName("a").length; i++){
            document.getElementsByTagName("a")[i].style.setProperty("color", "#252A34")
        };

        for(let i = 0; i < document.getElementsByTagName("li").length; i++){
            document.getElementsByTagName("li")[i].style.setProperty("color", "#252A34")
        };

        for(let i = 0; i < document.getElementsByTagName("h1").length; i++){
            document.getElementsByTagName("h1")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h2").length; i++){
            document.getElementsByTagName("h2")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("h3").length; i++){
            document.getElementsByTagName("h3")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("span").length; i++){
            document.getElementsByTagName("span")[i].style.setProperty("color", "#252A34")
            
        };

        for(let i = 0; i < document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].style.setProperty("color", "#252A34")
            
        };   
        document.getElementById("fucking_p").style.setProperty("color", "#252A34")     
}

lightIcon.onclick = lightMood;
lightIconMobile.onclick = lightMoodMobile;



//-------------------------------------------------------------------------------------skills precentage animations-----------------------------------------------------------//
let secPosition = document.getElementById("my-skills")
let funStarted = false; // function started ? = no
function SkillsAnimations(){
    if(window.scrollY >= secPosition.offsetTop - 200 ){
        // set width to the element
        for(let i = 0; i < document.querySelectorAll('[name="skill"]').length; i++){ 
            document.querySelectorAll('[name="skill"]')[i].style.cssText = `width: ${document.querySelectorAll('[name="skill"]')[i].getAttribute("data-width")}; transition: 2s;`; 
        }

        if(!funStarted){
            let numOfSkills = document.querySelectorAll(".spanSkill");
        numOfSkills.forEach((num) => startCount(num))
        function startCount(el){
                let goal = el.getAttribute("data-numberValue")
                let count = setInterval(()=>{
                el.textContent++
                if(el.textContent == goal){
                        clearInterval(count);
                    }
                }, 2000 / goal)
            }
            funStarted = true;
        }
        

}
}

    
//---------------------------------------------------------------------------------------------window.scroll event-------------------------------------------------------------//

window.onscroll = function(){
    showToUpButton();
    SkillsAnimations();
}

