// ------------1--------------------------
// פונקציית substr:
// היא פונקציה שמשתמשים בה במחרוזת או במערך על מנת
// לרשום איברים ספציפים בעזרת 2 אינדקסים שנרשום בפונקציה והיא נותנת לנו את האיבר-
// מהאינדקס הראשון שרשמנו עד האינדקס השני.

// פונקציית substring:
// substrהיא כמעט כמו ה
// רק שבפונקציה הזו שנכתחב 2 מספרים זה מהאינדקס עד אינדקס לא כולל.HTMLוכשנכתוב
// וכשנכתוב בסוגרים של הפונקציה מספר אחד
// זה יתן לנו מהאינדקס שרשמנו עד הסוף
// ------------2--------------------------
// input-בשתי האירועים נכתבים ב
// oninput:
// הוא כאשר נרצה לרשום באינפוט עצמו ולראות שינוי מיידי ,
// לדוגמא אם נכתוב בתוך האינפוט ונגדיר לו שיכתוב את זה שורה מתחת ,
// היא יכתוב אותו ישר בעת ההקלדה.

// onchange:
// הוא שינוי שנרצה לשנות באינפוט והוא מתבצע ,
// כשנכתוב את השינוי באינפוט ונלחץ על משהו אחר על המסך , וההגדרה שהגדנו לו מיד תשתנה


// ------------3--------------------------!
// HTML הוא אכן אובייקט
// כל דבר כמעט הוא אובייקט ,
// HTMLלכל אובייקט יש את התכונות ומתודות משלו וגם כך ל

// ------------4--------------------------
// אובייקט אכן יכול להכיל פונקציות ,
// ואפשר לגשת לתכונות בעזרת פונקיות , בעזרת אירועים וכו.

// ------------5--------------------------!

// var car = {
//   model: "mazda",
//   price: 120000,
//   year: 2020,
// };
// ------a---------------
// console.log(car.price);
// ------b---------------
// car.year = Date();
// console.log(car.year);

// ------------6--------------------------!
// הדפסנו לחלון 1+5
//  6התשובה היא
//  ובגלל שזה בתוך לולאה שהאורך שלה הוא 5
//  אז יודפס המספר 6 חמש פעמים.

// ------------7--------------------------!
// ------a---------------
// var num = [43, 5, 7, 12, 50];
// document.write(`<p>${num.length}</p>`);
// ------b---------------
// var sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum = sum + num[i];
// }
// document.write(`<button>${sum}</button>`);

// ------------8--------------------------!
// function lengthPass() {
//   if (15 > PasswordInput.value.length && PasswordInput.value.length > 8) {
//     return true;
//   }
//   alert("eroor");
//   return false;
// }
// function char() {
//   for (let i = 0; i < PasswordInput.value.length; i++) {
//     if (PasswordInput.value[i] == "#") {
//       alert("eroor");
//   return false;
//     }
//   }
  
//   return true;
// }

// form.onsubmit = (event) => {
//   event.preventDefault();
//   lengthPass(),char();
// };

// ------------9--------------------------!
// function inputUpperCase(){
//     inputAsk9.value=inputAsk9.value.toUpperCase();
// }

// inputAsk9.oninput = () => {
//     inputUpperCase()
// };

// function inputLoewrCase(){
//     inputAsk9.value=inputAsk9.value.toLowerCase();
// }

// inputAsk9.onchange = () => {
//     inputLoewrCase()
// };

// btnInput.onclick = () => {
//   alert(`${inputAsk9.value}`);
// };
// ------------10--------------------------!
// Articles=[{title:"black women",author:"keren hailu",date:21.7},
//     {title:"lion",author:"simba",date:5.3},
//     {title:"loli",author:"yosi",date:1.3}]

//     for (let i = 0; i < Articles.length; i++) {
//       ArticlesP.innerHTML+= `${Articles[i].title},${Articles[i].author},${Articles[i].date} `  
//     }

