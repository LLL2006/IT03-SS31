// Lấy theo id thông qua getElementById
const heading1 = document.getElementById("heading-1");
console.log("Heading 1: ", heading1);

// Lấy theo class thông qua getElementByClassName
const course = document.getElementsByClassName("course")
console.log("course: ", course);

// Lấy thông qua queySelector
let listProductElement = document.querySelector("#list-product");
console.log("listProductElement: ", listProductElement);

const productItem = document.querySelectorAll(".product")
console.log("productItem: ", productItem);

// Lấy ra tất cả các thẻ li có trong trang
const listLiTags = document.querySelectorAll("li");
console.log("listLiTags: ", listLiTags);

// Lấy ra input có name = "email"
const emailElement = document.querySelector("input[name='email']")

const products = document.querySelector("#list-product li");
console.log("products: ", products);

const userNameElement = document.querySelector("#userName");
console.log(userNameElement.innerText);
console.log(userNameElement.textContent);   
console.log(userNameElement.innerHTML);

// Sự khác nhau giữa innerText, textContent, innerHTML
let demoElement = document.querySelector("#demo");

console.log("innerText: ",demoElement.innerText);
console.log("textContent: ",demoElement.textContent);
console.log("innerHTML: ",demoElement.innerHTML);

const ageElement = document.querySelector("#age");
ageElement.textContent = "Tôi 31 tuổi";

// classList
const formElement = document.querySelector("#form");

// Thêm class vào 1 phần tử
formElement.classList.add("form-add");

// Xóa class của 1 phần tử
formElement.classList.remove("form");


// Kiểm tra class đã tồn tại trong phần tử chưa
console.log(formElement.classList.contains("hidden"));

// Thêm/xóa class nếu nó đã/chưa tồn tại
formElement.classList.toggle("hidden")