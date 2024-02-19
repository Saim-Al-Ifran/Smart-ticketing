 const seats = document.querySelectorAll(".seats");
 const couponBtn = document.getElementById("apply-btn");
 let seatCount = 0;
 let totalSeats = 12;
 let countTicketPrice = 0;

 for(let i = 0; i < seats.length; i++){
         const seat = seats[i];
         
         seat.addEventListener("click",function(){
                 if(seatCount < 4){
                      this.classList.add("afterClick");
                      seatCount++;   
                      addSeatList(this.innerText);
                      calculateTotalPrice();
                      document.getElementById("seatCount").innerText = seatCount;
                    
                 }else{
                      alert("Selected maximum number of tickets or seat already selected");
                 }
                 document.getElementById("totalSeats").innerText = totalSeats-seatCount;
                 if(seatCount > 0){
                    nextBtn.removeAttribute("disabled");
                 }
                
         })
 }

 function addSeatList(seatName){
            
           let div = document.createElement('div');
           div.classList.add("flex","mt-3","justify-between","pb-4" );
           div.innerHTML = `
                <p class="text-lg text-sm ">${seatName}</p>
                <p class="text-lg text-sm ">Economy</p>
                <p class="text-lg text-sm ">550</p>
           `;
           document.getElementById("seatDetails").appendChild(div);
            
 }

 function calculateTotalPrice(){
    countTicketPrice += 550
    document.getElementById("totalPrice").innerText = countTicketPrice;
    document.getElementById("grandTotal").innerText = countTicketPrice;
 }

 couponBtn.addEventListener("click",function(){
           if(seatCount  != 4){
                alert("Buy at least 4 tickets to apply coupon");
           } else{

            const inputField  = document.getElementById("input-field").value;
            calculateDiscoutPrice(inputField);

            if(inputField === ""){
                
                alert("Please enter coupon code");
                
            }
            else if(inputField === "NEW15" || inputField === "Couple 20"){
                 couponSection.style.display = "none";
            }else{
                alert("invalid coupon");
            }
           

           }

 });

 function calculateDiscoutPrice(couponCode){
          
         if(couponCode === "NEW15"){
                countTicketPrice = countTicketPrice - (countTicketPrice * .15);    
                document.getElementById("grandTotal").innerText = countTicketPrice; 
         }
         if(couponCode === "Couple 20"){
                countTicketPrice = countTicketPrice - (countTicketPrice * .20);    
                document.getElementById("grandTotal").innerText = countTicketPrice; 
         } 
         
 };
 
// document.getElementById("nextBtn").addEventListener("click",function(){
//              if(seatCount > 0){
//                     console.log(this);
//              }
// });

 