const colorValidation = document.querySelector("#validation-input");

const validatorionAll = Number(colorValidation.getAttribute("data-length"));
 
colorValidation.addEventListener("blur",(color)=>{
    if(color.currentTarget.value.length === validatorionAll){
        color.currentTarget.classList.add("valid")
        color.currentTarget.classList.remove("invalid")
    }
    else{ color.currentTarget.classList.add("invalid")
}
})