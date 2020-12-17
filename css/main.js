const subm1 = document.querySelector("#submenu-1");
const hambur = document.querySelector("#menu-hamburguer");
const nav = document.querySelector("#navegacion");

function Menu(){
    if(subm1.className === "submenu-class"){
        subm1.className = "submenu-hidden";
    }
    else{
        subm1.className = "submenu-class";
    }
}

function Hamburguer(){
    if(hambur.className === "fas fa-times"){
        hambur.className = "fa fa-bars";
        nav.className = "nav-hidden";
    }else {
        nav.className = "nav-mobile";
        hambur.className = "fas fa-times";
    }
}