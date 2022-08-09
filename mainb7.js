let phut = +parseFloat(prompt("Nhập số phút gọi:"))
let phi ;
if ( phut <= 50){
    phi = phut * 600;
    alert("số tiền cước là "+ phi)
}else if (phut > 50 && phut <= 200){
    phi = (phut - 50)* 400 + 50 * 600;
    alert("số tiền cước là "+ phi)
}
else if (phut > 200){
    phi = 50 * 600 + 150 * 400 + (phut - 200)* 200;
    alert("số tiền cước là "+ phi)
}
