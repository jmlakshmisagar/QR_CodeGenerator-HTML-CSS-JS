
let imgBox =document.getElementById("imgBox");
let qrImg=document.getElementById("qrImage");
let qrtext=document.getElementById("qrText");
function generateQR(){
    if(qrText.value.length > 0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        imgBox.classList.add("show-img");}
    else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
generateQR();