let a = +parseFloat(prompt("Nhập điểm kiểm tra:"))
let b = +parseFloat(prompt("Nhập điểm giữa kỳ:"))
let c = +parseFloat(prompt("Nhập điểm cuối kỳ:"))
let Ttb = (a + b*2 + c*3)/6
if (Ttb >= 9.0)
    alert("Hạng A - Đạt")
else if (Ttb >= 7.0 && Ttb < 9.0){
    alert("Hạng B - Đạt")
}else if (Ttb >= 5 && Ttb < 7.0){
    alert("Hạng C - Cần cố thêm")
}
else if (Ttb < 5.0){
    alert("Hạng F - Trượt")
}