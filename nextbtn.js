
let nextBtn = document.getElementById("next-btn");
let inputF = document.getElementById("number-type")
inputF.addEventListener("keypress", (e) =>{
    const valueF = e.currentTarget.value;
    if(valueF === "" ){
        nextBtn.style.backgroundColor = "green";
        nextBtn.disabled = true;
    }else{
        nextBtn.disabled = false;
        // nextBtn.style.backgroundColor = "gray";
    }
})