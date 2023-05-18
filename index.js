const express = require('express')
const app = express()
const port = 6666

// console.log("Hello world!!!")

// let a = 10;

// console.log(a)

// let name = "Hoang Long"
// let message = name

// console.log(message)

// let s = 32 + 6 *2**3

// console.log(s)

//git clone https://github.com/dkhoa91/DKhoa.git


// let a = 1005;
// if (a % 2 === 0) {
//     console.log("a la so chan ")
// } else {
//     console.log(" a la so le ")
// }

// let dtb = 7
// if ( dtb < 5){
//     console.log("HS yeu")
// } else if ( dtb >=5){
//     console.log("HS Kha")
// } else {
//     console.log("HS gioi")
// }

// let tuoi = 18

// if (tuoi < 18) {
//     console.log('Khong dc ket hon')
// } else {
//     console.log('Dc ket hon')
// }

// let tuoi = 19

// let kq = (tuoi >= 18) ? true: false

// console.log(kq)

// let dtb = 2

// let ketqua = (dtb <5) ? "Yeu" : ((dtb <= 5 && dtb < 8) ? "Kha" : "Gioi")

// // let kq = (dtb < 5) ? "Hs yeu" : ((dtb >= 5 && dtb < 8) ? "Hs Kha" : "Hs Gioi") ;


// console.log(ketqua)


// let x = 28

// switch(x) {
//     case 1: 
//     case 4:
//         console.log(" ko phai so nguyen to")
//         break
//     case 2:
//     case 3:
//         console.log(" la so nguyen to")
//         break
    
//     default:
//         console.log("ko xac dinh")
// }

// for (let number = 1; number <11 ; number ++) {
//     console.log(number);
// }

// for (let i = 0; i < 11; i++){
//     if (i % 2 === 0)
//         console.log(i);
// }

// let i = 1
// while ( i< 11) {
//     if ( i % 2 !== 0)
//     console.log(i);
//     i++
// }

// i = 2
// do {
//     if (i % 2 !== 0)
//         console.log(i);
//     i++
// } while(i<9)


// for (let i = 9;; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//         break
//     }
// }

// function hello() {
//     console.log("Hello world");
// }
// hello();


// function sum(a,b) {
//     let c = a + b
//     console.log(c);
// }
// sum(190,10)


// function min(a,b) {
//     if (a > b) {
//         return b
//     }
//     return a
// }

// let minimum = min(28,99)
// console.log(minimum)

// function songuyento(a) {
//     if (a<2) return false;
//     if (a === 2) return true;
//     for (i=2; i*i <= a; i++) {
//         if (a%i === 0) return false
//     }
//     return true;
// }

// let sumnt = 0
// function lasonguyento(b) {
//     for (let i = 2; i <101; i++) {
//         lasonguyento(i)
//     } return sumnt += i
// }
// console.log(sumnt)

// let y = songuyento(13)
// console.log(y);

// for (let i = 1; i <21; i++) {
//     if (i % 2===0) 
//         console.log(i);
// }


arr1 = [9,4,5,6,7]
// function max(mang) {
//     console.log(mang);
//     let max_number = mang[0]
//     for ( i = 1; i < mang.length; i++) {
//         if (mang[i]>max_number) {
//             max_number = mang[i]
//         }
//     } 
//     return max_number
//     }
// console.log(max(arr1));


// function sum(mang) {
//     let tong = 0
//     for (i =0; i < mang.length; i++) {
//         tong += mang[i]
// } return tong
// } 
// console.log(sum(arr1));
// function find(a) {
//     for (let i=0; i<arr1.length;i++){
//         if (arr1[i]=== a)
//         return i
//     } return -1
// }
    
// console.log(find(3));


// let num = [1,2,3,4,5,6,7]
// num.splide(1,2,55)
// console.log(num);

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})
