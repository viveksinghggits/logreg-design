document.addEventListener("DOMContentLoaded", function (){
    let e = document.getElementsByClassName("showlinks");
    for(let a=0; a<e.length; a++){
        e[a].addEventListener("click", function(e){
            let i = e.target.id;
            let ele = document.getElementById("content");
            if(i=="loginlink"){
                showForms("loginform");
                ele.style.marginLeft="337px";
            }
            else{
                showForms("registerform");
                ele.style.marginLeft="100px";
            }
        });
    }
});
function showForms(i){
    let es = document.getElementsByClassName("forms");
    for(let m=0; m<es.length; m++){
        es[m].style.display="none";
    }
    document.getElementById(i).style.display="block";
}