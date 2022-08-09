let hoahong = 0;
let soluong = +parseInt(prompt("Nhập số lượng: "))
let giaban = +parseFloat(prompt("Nhập giá bán: "))
let khoantru = +parseFloat(prompt("Nhập khoản trừ"))
let tongdoanhthu = soluong * giaban;
let doanhthuthuan = tongdoanhthu - khoantru;
if( doanhthuthuan >= 10000000){
    hoahong = (doanhthuthuan * 10)/100;
    alert(" Số tiền hoa hồng nhận đươc là:" +hoahong)
}else if (doanhthuthuan >= 5000000 && doanhthuthuan < 10000000){
    hoahong = (doanhthuthuan * 5)/100;
    alert(" Số tiền hoa hồng nhận được là:" +hoahong)
}
else if (doanhthuthuan < 5000000){
    hoahong = (doanhthuthuan * 1)/100
    alert(" Số tiền hoa hồng nhận được là:" +hoahong)
}