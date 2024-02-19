const seatBus =document.querySelectorAll(".seat");

for(index = 0; index < seatBus.length; index++){
    const seats = seatBus[index];
    // console.log(Element);
    seats.addEventListener("click", function(){
        seats.style.backgroundColor = 'green';
        // console.log("clicked");
        // get the seat

        const seatId = seats.querySelector("h3").innerText;
        // console.log(seatId);

        
        const backendGm = document.getElementById("backend-gm");
        // console.log(backendGm);
        const h4 = document.createElement("h4");
        h4.innerText = seatId;

        const p = document.createElement("p");
        p.innerText = 'Economy';

        const h5 =document.createElement("h5");
        h5.innerText = 550;

        backendGm.appendChild(h4);
        backendGm.appendChild(p);
        backendGm.appendChild(h5);
    })
}


                    

                    

                



                   