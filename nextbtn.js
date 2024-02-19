
let nextBtn = document.getElementById("next-btn");
let inputF = document.getElementById("number-type")
inputF.addEventListener("keyup", (e) =>{
    const valueF = e.currentTarget.value;
    if(valueF.length > 0 ){
        // console.log("1");
        nextBtn.style.backgroundColor = "green";
        nextBtn.disabled = false;
    }else{
        // console.log("0");
        nextBtn.disabled = true;
        
    }
})