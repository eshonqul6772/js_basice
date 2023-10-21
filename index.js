// 1.m || a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, 
// qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

// let a =1 
// let b = 2
// let c = 0

// if (a>0 && b>0 && c>0){
//     console.log(a+b+c)
// }else{
//     console.log(0)
// }

// 1.m || Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' 
// ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring
//  va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.

// function getWeeks(date) {
//     if (date == 1) {
//         return 'Dushanba';
//     } else if (date == 2) {
//         return "Seshanba";
//     } else if (date == 3) {
//         return "Chorshanba";
//     } else if (date == 4) {
//         return "Payshanba";
//     } else if (date == 5) {
//         return "Juma";
//     } else if (date == 6) {
//         return "Shanba";
//     } else if (date == 7) {
//         return "Yakshanba";
//     }
// }

// console.log(getWeeks(2));

// let num = 8;

// switch (num) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break; 
//     case 5:
//         console.log("Juma");
//         break;
//      case 6:
//         console.log("Shanba");
//         break;
//     default:
//         console.log("Bunaqa Kun mavjud emas")
//         break;
// }

// 3.m || Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.
// Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi.
// Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

// let num = 2000;

// if( num % 4==0 &&  num % 100 !=0 &&  num % 400==0){
//     console.log(true)
// }else{
//     console.log(false)
// }


// 4.m || a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling.
//  Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.


// function checkdNymber(num){
//     if(num>=1 && num<=10){
//         return 1;
//     }else if(num>=10 && num<=100){
//         return 2;
//     }else if(num>=100 && num<1000){
//         return 3;
//     }
// }

// console.log(checkdNymber(109));

// 5.m ||a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat
//    bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

// let a = 2;
// let b = 3;
// let c = 4;  
// let d = 5;

// if(a>0 && b>0 && c>0 && d>0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 6.m || a soni berilgan.  0 dan a gacha bo'lgan sonlar yig'indisini toping
// va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

// let a = 3;

// let num  = 0;

// for (let i = 0; i <= a; i++) {
//     num += i;
// }
// console.log(num);


//7.m || a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true
// bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan
// songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3
// demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8
//     bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas

// let a = 6;

// let num  = 0;

// for (let i = 0; i < a; i++) {
//     if (a % i === 0) {
//         num += i;
//     }
// }

// if (num == a){
//     console.log("mukkamal son")
// }else{
//     console.log("mukkammal son emas")
// }

//8.m || n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

// let n = 12532;

// let num = n.toString().split('');

// console.log(num.length)

// 9.m || n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true
//  bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  
//  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni 
// while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .

// let n = 12321;

// for (let i = 0; i <n; i++) {

// }


// 10.m || n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.

// let n = 12532;

// let num = n.toString().split('');

// let sum  = 0
// for (let i = 0; i < num.length; i++) {
//     sum += parseInt(num[i]);    
// }

// console.log(sum);

// 11.m ||array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib
//  o'tkazing va konsolga chiqaring.

// let array = [1,2,3,4,5,6,7,8,9,10]

// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray.unshift(array[i]);
// }

// console.log(newArray)


// 12.m ||n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring.
//  Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.

// let array = [2,3,1,4,2,6,7, 2,9];
// let n = 2;

// let newArray = [];


// for (let i = 0; i < array.length; i++) {
//    if(array[i] ==n){
//     newArray.push(array[i]);
//    }
// }

// console.log(newArray.length);

// 13.m || a, array[] berilgan. Arrayning xohlagan ikkita
//   elementlarini  yig'indisi a ga teng bo'lishini
//  aniqlang va ularni  konsolga chiqaring.

// function findPairs(arr, target) {
//     let pairs = [];

//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) { 
//           pairs.push([arr[i], arr[j]]); 
//         }
//       }
//     }

//     return pairs;
//   }

//   let a = [2, 4, 6, 8, 9];
//   let sum = 10;

//   let result = findPairs(a, sum);

//   console.log(result);


// 14.m ||Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring
//  (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.


// let array = [9, 29, 4, 24, 2, 1, 7, 8];

// const newArray = array.sort((a, b) =>{
//     return a-b;
// })

// console.log(newArray);

// 15.m || Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping.
//  Bunda array elementlari bir biriga teng emas deb oling.

const array = [1,2,3,4,5,6,7,8];

for (let i = 0; i < array.length; i++) {
    const element = array[i]; 
}

