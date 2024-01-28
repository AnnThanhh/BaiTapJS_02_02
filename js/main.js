let numArr = [];

document.querySelector("#btnNumber").onclick = function addNumber() {
  let num = Number(document.querySelector("#inputNumber").value);
  numArr.push(num);
  document.getElementById("mang").innerHTML = numArr;
};

//Câu số 1: tổng số dương
document.getElementById("btnSumPos").onclick = function () {
  let total = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0) {
      total += numArr[index];
    }
  }
  let result = "tổng các số dương trong mảng = " + total;
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 2: đếm số dương
document.getElementById("btnNumPos").onclick = function () {
  let count = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0) {
      count++;
    }
  }
  let result = "Có tổng cộng " + count + " Số dương";
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 3: Số nhỏ nhất
document.getElementById("btnMin").onclick = function () {
  let min = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    let num = numArr[i];
    if (min > num) {
      min = num;
    }
  }
  let result = "Số nhỏ nhất là " + min;
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 4: Số dương nhỏ nhất
document.getElementById("btnMinPos").onclick = function () {
  let min = numArr[0];
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0 && min > numArr[index]) {
      min = numArr[index];
    }
  }
  let result = "Số nhỏ nhất dương là " + min;
  document.getElementById("Ketqua").innerHTML = result;
};

//câu số 5: số chẵn cuối cùng
document.getElementById("btnLastEven").onclick = function () {
  let max = numArr[0];
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] % 2 == 0 && numArr[index] > 0 && max < numArr[index]) {
      max = numArr[index];
    } else {
      max = -1;
    }
  }
  let result = "Số chẵn cuối cùng là " + max;
  document.getElementById("Ketqua").innerHTML = result;
};

//câu số 6: Đổi chỗ
document.getElementById("btnSwitch").onclick = function () {
  let position1 = Number(document.getElementById("inputNumber1").value);
  let position2 = Number(document.getElementById("inputNumber2").value);
  let temp = numArr[position1];
  numArr[position1] = numArr[position2];
  numArr[position2] = temp;
  let result = "Mảng sau khi đổi " + numArr;
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 7: Sắp xếp thứ tự
document.getElementById("btnSort").onclick = function () {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] > numArr[j]) {
        let temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }
  let result = "Mảng sau khi sấp xếp " + numArr;
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 8: Số nguyên tố đầu tiên
function kiemtra(so) {
    if (so <= 1) return false;
    for (let i = 2; i <= Math.sqrt(so); i++)
        if (so % i == 0) return false;
    return true;
}
document.getElementById("btnFirstn").onclick = function () {
    let nguyenTo = 0
    for (let i = 0; i < numArr.length; i++) {
        if (kiemtra(numArr[i])) {
            nguyenTo = numArr[i];
            break
        }
    }
    if (nguyenTo > 0) {
        result = "Số nguyên tố đầu tiên là " + nguyenTo;
    } else {
        result = -1;
    }
    
    document.getElementById("Ketqua").innerHTML = result;
  };

//câu số 9: số nguyên
let numArr1 = [];

document.querySelector("#btnNumber1").onclick = function addNumber() {
  let num = Number(document.querySelector("#inputNumber3").value);
  numArr1.push(num);
  document.getElementById("mang1").innerHTML = numArr1;
};

document.getElementById("btnCoN").onclick = function () {
  let count = 0;
  for (let i = 0; i < numArr1.length; i++) {
    Number.isInteger(numArr1[i]);
    count++;
  }
  let result = "Số nguyên là " + count;
  document.getElementById("Ketqua").innerHTML = result;
};

//Câu số 10: so sánh
document.getElementById("btnCompare").onclick = function () {
  let count = 0;
  let count1 = 0;
  let result = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] > 0) {
      count++;
    }
  }
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] < 0) {
      count1++;
    }
  }
  if (count > count1) {
    result = "số âm < số dương";
    document.getElementById("Ketqua").innerHTML = result;
  } else if (count < count1) {
    result = "số âm > số dương";
    document.getElementById("Ketqua").innerHTML = result;
  } else {
    result = "số âm = số dương";
    document.getElementById("Ketqua").innerHTML = result;
  }
};
