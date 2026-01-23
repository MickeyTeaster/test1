// let a = 5;
// let b = 10
// let radius = 3;

// console.log("Summ: " + (a+b));
// console.log("Minus: " + (b-a));
// console.log("Умножение: " + (a*b));
// console.log("Деление: " + (a/b));
// console.log("Procent: " + (a%b));

// let area = Math.PI * (radius ** 2);
// console.log("Ploshad kruga:", area);

// console.log("Uravnenie: " + (a+b/b*a*(b+b+b+b)));





// let base = 5;
// let height = 10;

// console.log(S = 1/2*base*height);

// let celsius = 15;
// let fahrenheit = ((celsius*9/5)+32);

// console.log("Температура в Фаренгейтах: " + (fahrenheit));






// let grade1 = 67;
// let grade2 = 48;
// let grade3 = 75;
// let grade4 = 30;

// let medium = (grade1 + grade2 + grade3 + grade4) / 3;

// console.log(medium);

// if (medium >= 80) {
//     console.log("Gratefull result")
// }
// if (medium > 60) {
//         console.log("Good result")
// }
// if (medium <= 60) {
//             console.log("Bad result")
// }





// let isLoggedIn = true;
// let hasPremium = false;
// let daysLeft = 5;

// if (isLoggedIn && hasPremium) {
//     console.log("Gratefull result");
// }
// else if (isLoggedIn && daysLeft < 7) {
//     console.log("Ваша подписка скоро истекает. Дней осталось:" + daysLeft);
// }
// else {
//         console.log("Bad result");
// }






// let isNewCustomer = true;
// let isStudent = false;
// let totalAmount = 150;

// if (isNewCustomer || isStudent) {
//     console.log("Поздравляем! Вы получаете скидку 10%!");
// }
// else if  (totalAmount > 100) {
//     console.log("Скидка за объём применена. Ваш заказ: " +totalAmount);
// }
// else {
//     console.log("Покупка без скидки!");
// }






// let startNumber = 1;
// while (startNumber <= 30) {
//     console.log(startNumber);
//     startNumber += 5;
// }
    



// let counter = 1;
// while (counter <= 50) {
//     if (counter % 2 != 0) {
//     console.log(counter);
//     }
//     counter += 1;     
// }




// напиши функцию, которая принимает массив данных и возвращает случайный элемент массива

/* let getRandomElement = (arrayName) => {
     let length = arrayName.length;
     let saveRandomIndex = Math.floor(Math.random() * length);
     return arrayName[saveRandomIndex];
 }
 let massive = [0, 2, 3, 4, 5, 6];
 let randomElement = getRandomElement(massive);

 console.log(randomElement);
*/





// напиши функцию, которая при вызове отдает UNIX timestamp (текущая дата и время в мс)

/* let getTimestamp = () => {
     return Date.now();
 }
 console.log(getTimestamp());
*/


// if, else. напиши функцию, которая принимает параметр "лицензия" и возвращает регион для выбранной лицензии (который мы аргументом передаем)

// const LICENSE_REGIONS = {
//     "KZ": "KZ",
//     "COM": "LatAm, Asia, Central Europe, Africa",
//     "WL": "Asia, CA"
// };
// const getRegionByLicense = (license) => {
// if (license === "KZ") {
//     return "KZ";
// } 
// else if (license === "COM") {
//     return "LatAm, Asia, Central Europe, Africa";
// }
// else if (license === "WL") {
//     return "Asia, CA";
// }
// else {
//     return "Unknown license";
// }
// };
// console.log(getRegionByLicense("COM"));

// objects. вариант 2

// const LICENSE_REGIONS = {
//     "KZ": "KZ",
//     "COM": "LatAm, Asia, Central Europe, Africa",
//     "WL": "Asia, CA"
// };

// const getRegionByLicense = (license) => {
//     return LICENSE_REGIONS[license] || "Unknown license";
// };
// console.log(getRegionByLicense("WL"));







//  enum License {
//    KZ = "KZ",
//    COM = "COM",
//    WL = "WL"
//  }

//  const LICENSE_REGIONS: Record<LicenseType, string> = {
//    [License.KZ]: "KZ",
//    [License.COM]: "LatAm, Asia, Central Europe, Africa",
//    [License.WL]: "Asia, CA"
//  };

//   const getRegionByLicense = (license: License  ) => {}
//   console.log(getRegionByLicense("WL"));






//  export type E164 = string;

// export enum MaskingType {
//     KEEP_CODE = 'KEEP_CODE',
//     REMOVE_CODE = 'REMOVE_CODE'
// }

// const LICENSE_INFO: Record<License, { code: string; intlLength: number }> = {
//     [License.COM]: { code: '7', intlLength: 11 },
//     [License.WL]: { code: '7', intlLength: 11 },
//     [License.KZ]: { code: '7', intlLength: 11 },
//     [License.MGA]: { code: '1', intlLength: 11 },
//     [License.ONT]: { code: '1', intlLength: 11 },
// };

// const E164_PREFIX = '+';

// /**
//  * Normalizes input phone digits to E.164 format
//  * @throws {IllegalArgumentError} If format is invalid
//  */
// export function normalizeE164(digits: string): E164 {
//     const license: License = getLicenseFromConfigFile();
//     const { code, intlLength } = LICENSE_INFO[license];

//     if (digits.length !== intlLength) {
//         throw new IllegalArgumentError(`Invalid length for ${license}: "${digits}" (${digits.length} digits). Expected ${intlLength}.`);
//     }

//     if (!digits.startsWith(code)) {
//         throw new IllegalArgumentError(`Invalid code for ${license}: "${digits}". Must start with "${code}".`);
//     }

//     return `${E164_PREFIX}${digits}`;
// }


const count = 5;
console.log(count); // Выведет: 5
