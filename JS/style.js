/**
 * Tính ngày công
 * B1: Nhập ngày công --> convert string sang number
 * B2: Khi nhấn nút DaysWork --> ngày công * 100000
 * B3: Show kết quả UI cho người dùng
 * */
// Dom tới thẻ button --> onclick
var btn__DaysWork = document.getElementById("btn__DaysWork");
btn__DaysWork.onclick = function () {
  // Dom tới thẻ input để lấy value
  var text__Days = document.getElementById("text__Days").value;
  var text__1Days = document.getElementById("text__1Days").value;

  //   convert data types: string -->number
  //   text__Days = Number(text__Days);
  var total = Number(text__Days) * Number(text__1Days);
  var result = "Tiền của bạn: " + total + " VNĐ";
  console.log(result);
  //   show kết quả UI
  var KQDAYS = document.getElementById("KQDAYS");
  KQDAYS.innerHTML = result;
  console.log(KQDAYS);
  //   Show kết quả ra ngoài UI
  //   var pDAYS = document.getElementById("kqDAYS");
  //   console.log(pDAYS);
  //   pDAYS.innerHTML = result;
};

/***
 * Tính trung bình 5 số:
 * B1: Nhập 5 số --> convert string to Number;
 * B2: Khi nhấn nút Medium --> onclick -- > (cộng 5 số)/5
 * B3: Xuất giá trị kqMedium ra UI cho người dùng
 *
 */
var btn__Medium = document.getElementById("btn__Medium");
btn__Medium.onclick = function () {
  // Convert to number
  var value1 = document.getElementById("value1").value * 1;
  console.log(value1);
  var value2 = document.getElementById("value2").value * 1;
  var value3 = document.getElementById("value3").value * 1;
  var value4 = document.getElementById("value4").value * 1;
  var value5 = document.getElementById("value5").value * 1;
  var tc = value1 + value2 + value3 + value4 + value5 * 1;
  var TrungBinh = (value1 + value2 + value3 + value4 + value5) / 5;

  //   Đầu ra
  //   var kqMedium = document.getElementById("kqMedium");
  //   kqMedium.innerHTML = TrungBinh;
  //   console.log(kqMedium);

  var result = "";
  result += "<p> Tính Trung bình 5 số: </p>";
  result += "<p>Số trung bình là: " + TrungBinh + "</p>";
  result += "<p>Tổng 5 số là: " + tc + "</p>";
  var kqMedium = document.getElementById("kqMedium");
  kqMedium.innerHTML = result;
};
/***
 * Bài 03: Nhập tỉ giá USD to VND
 * B1: nhập giá trị USD , nhập tỉ giá vnd to usd
 * B2: Xử lý nút btn__Convert -->onclick --> USD=24000 *giá trị USD
 * B3: Xuất giá trị ra UI người dùng
 *  *
 */
var btn__Convert = document.getElementById("btn__Convert");
btn__Convert.onclick = function () {
  var USD = document.getElementById("USD").value * 1;
  var convertUSDVND = document.getElementById("convertUSDVND").value * 1;
  var cal = USD * convertUSDVND;
  var kq = "Tiền của bạn được đổi là: " + cal + " VNĐ";

  // Đầu ra
  var kqUSD = document.getElementById("kqUSD");
  kqUSD.innerHTML = kq;

  //   var result = "";
  //   result += "<p>Đổi tỉ giá VND to USD</p>";
  //   result += "<p>Số tiền bạn đổi được là" + cal + "</p>";
  //   result += "<p>Tỉ giá USD,VND là" + convertUSDVND + "</p>";
  //   console.log(result);
  //   var conUSD = document.getElementById(conUSD);
  //   conUSD.innerHTML = result;
};
