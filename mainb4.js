let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");
let c = +prompt("Nhập số thứ ba:");
let max = a;
if (max > b) {
    max = max;
    if (max > c) {
        max = max
        alert("Số lớn nhất là:" + max)
    } else {
        max = c;
        alert("Số lớn nhất là:" + max)
    }
    }
else if (max < b) {
        max = b;
        if (max < c) {
            max = c;
            alert("Số lớn nhất là:" + max)
        } else {
            alert("Số lớn nhất là:" + max)
        }
}
