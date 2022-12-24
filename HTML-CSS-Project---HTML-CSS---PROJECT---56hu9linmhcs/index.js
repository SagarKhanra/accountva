let otp_boxes = document.querySelectorAll(".otp");
 otp_boxes[0].focus();
 const otp ="123456";
 let bag = "";
  otp_boxes.forEach((e, i) => {
    e.addEventListener("keydown", (event) => { //console.log(event.key); if(isotp boxes.length-1){
        if(i === otp_boxes.length - 1){  
           return;     
    }  
    if (event.key >=0 && event.key <= 9){ 
        e.classList.add("valid")
        setTimeout(() => {
    otp_boxes[i + 1].focus();
        }, 100);
        } else if((event.key ="Backspace")){
            setTimeout(() =>{
                otp_boxes[i - 1].value = "";
                otp_boxes[i - 1].focus();
            },100);
        }
    });
});