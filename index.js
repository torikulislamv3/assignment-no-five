const seatBus =document.querySelectorAll(".seat");
const spanSeat = document.getElementById("seat-no");
let seatSpanCount = 0;
let selectedSeat = 0;

const leftSeat = document.getElementById("left-seat");


let totalPrice = document.getElementById("total-price");
// console.log(spanSeat.innerText)
for(index = 0; index < seatBus.length; index++){
    const seats = seatBus[index];
    
    
    // console.log(Element);
    seats.addEventListener("click", function seatBooking (){
        if(selectedSeat == 4){
            seats.removeEventListener('click', seatBooking)
            // console.log('hellow');
        }else{
        seats.style.backgroundColor = 'green';
        seatSpanCount++;
        spanSeat.innerHTML = seatSpanCount;
        leftSeat.innerHTML = parseInt(leftSeat.innerHTML)-1;
        selectedSeat++;
        console.log(selectedSeat);
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML)+550;
        
        
        // console.log("clicked");
        // get the seat

        const seatId = seats.querySelector("h3").innerText;
        // console.log(seatId);
        // seat No. count
        
        
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
        seats.removeEventListener('click', seatBooking)
        }
        
    })
}








                    

                    

                



                   