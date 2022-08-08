/*
1. JavaScript একটি High Level , Interpreted scripting Language.
2. JavaScript কোডের ভাষাকে কম্পিউটারের ভাষায় রুপান্তর করে এবং সেই কোড কে Run করে।
3. Variable হল যার মান যেকোন সময় পরিবর্তন যোগ্য।
4. Variable ডিক্লায়ার করার নিয়ম নিম্নরূপ:
    var age = 12;
5. Variable এর নাম পরিবর্তন করার নিয়ম নিম্নরূপ:
    var age = 12;
    age = age + 1;
6. Variable কে 2 টা ভাগে ভাগ করা যায়। ১) Primitive এবং 2) Non Primitive । এদের মধ্যে primitive গুলো হল
numaric, string, boolian, null, undefined etc. এবং Non primitive গুলো হল: object, array etc.
7. primitive গুলো হল numaric, string, boolian, null, undefined etc. এবং Non primitive গুলো হল  object, array etc.
8. Variable নাম লেখার নিয়ম নিম্নরূপঃ
    i) Variable এর নামের শুরুতে Number হতে পারবে না।
    ii) Variable এর নামের মধ্যে (-) থাকতে পারবে না।
    iii) Variable এর নাম লেখার ক্ষেত্রে ( _ ) ব্যবহার করা যাবে এবং camelCase ব্যবহার করা যাবে।
    iv) Variable এর নাম Case Sensitive.
    v) Variable এর নাম হিসেবে JavaScript Keyword ব্যবহার করা যাবে না।
    vi) Variable এর নামে কোন হোয়াইট স্পেস থাকবে না।
9. দুইটি Variable এর মধ্যে + থাকলে Variable দুটি যোগ হবে; দুইটি Variable এর মধ্যে - থাকলে প্রথম Variable থেকে দ্বিতীয় variable বিয়োগ হবে; দুইটি Variable এর মধ্যে * থাকলে Variable দুটি গুন হবে;দুইটি Variable এর মধ্যে / থাকলে Variable দুটি ভাগ হবে; দুইটি Variable এর মধ্যে % থাকলে Variable দুটির ভাগশেষ পাওয়া যাবে।
10. শর্টহ্যান্ড:
    var age = 12;
    age += 1 --> থাকলে age এর সাথে 1 যোগ হবে। 
    age -= 1 --> থাকলে age এর থেকে 1 বিয়োগ হবে। 
    age *= 1 --> থাকলে age এর সাথে 1 গুণ হবে। 
    age /= 1 --> থাকলে age কে 1 দ্বারা ভাগ হবে।
11. ++ থাকলে 1 যোগ হয় এবং -- থাকলে 1 বিয়োগ হয়।
12. parsInt দিয়ে string এর প্রথমে কোন সংখ্যা থাকলে সেটাকে Number এ রূপান্তর করা যায়। parseFloat, parseInt এর মতোই কাজ করে তবে parseInt ব্যবহার করলে ভগ্নাংশ আসে না আর parseFloat ব্যবহার করলে ভগ্নাংশ আসে। toFixed দশমিকের পর কয় সংখ্যা নিবে সেটা ঠিক করে।
13. Array একধরনের Variable । যেখানে একই ধরনের অনেকগুলো মান থাকে।
Array ডিক্লেয়ার করার নিয়ম:
    var age =[12, 15, 12, 26, 20];
14. Array মধ্যে উপাদান সংখ্যা বের করার নিয়ম:
    var age =[12, 15, 12, 26, 20];
    var element = age.length
15. Array এর Index 0 দিয়ে শুরু হয় এবং Index দিয়ে এর মান পরিবর্তনের নিয়ম নিম্ন রূপ:
    age[2] = 100;
16. কোন একটা উপাদানের মান -1 হলে সেই উপাদানটি ঐ Array তে বিদ্যমান নেই।
17. Index দিয়ে এর মান পরিবর্তনের নিয়ম নিম্ন রূপ:
    age[2] = 100;
18. Index দিয়ে এর মান বের নিয়ম নিম্ন রূপ:
    var elementName = age[3];
19. Array এর উপাদান দিয়ে Index No বের করার নিয়ম:
    var indexOf15 = age.indexOf(15);
20. ইনডেক্সের এর মান Undefined এর মানে হল ঐ উপাদানটি Array তে নেই।
21. Array এর শেষে উপাদান যোগ করার নিয়ম:
    var addLastName = age.push(100);
    Array এর শেষ উপাদান বের করার নিয়ম:
    var removeLastName = age.pop();
22. Array এর প্রথমে উপাদান যোগ করার নিয়ম:
    var addLastName = age.unshift(100);
    Array এর প্রথম উপাদান বের করার নিয়ম:
    var removeLastName = age.shift();
23. তুলনা করতে If ব্যবহার করতে হয়।
    >   --> বড়
    <   --> ছোট
    ==  --> সমান
    !=  --> সমান নয়
    >=  --> বড় অথবা সমান
    <=  --> ছোট অথবা সমান
    === --> সমান এবং একই জাতীয়
    !== --> সমান নয় এবং একই জাতীয় নয়
    &&  --> এবং
    ||  --> অথবা
26. While Loop এ শর্ত দেওয়া থাকে। এই শর্ত যতক্ষণ থাকবে ততক্ষন Loop চলতে থাকে।
27. For Loop, While Loop এর মতই কাজ করে।
28. While Loop এর Variable Change না করলে Loop টি চলতেই থাকবে।
32. For Loop হল While Loop এর Short Version
*/
// Solution - 24:
let myMoney = 8000;
if (myMoney > 80000){
    console.log("I will buy macBook");
} 
else if (myMoney > 60000){
    console.log("I will buy gamingLaptop");
} 
else if (myMoney > 40000){
    console.log("I will buy lenovoLaptop");
}
else if (myMoney > 20000){
    console.log("I will buy oldLaptop");
}
else {
    console.log("I am happy with mobile phone")
}
//Solution 25 :
let number = 0;
while (number < 39){
    console.log("Ajke Amar Mon Valo Nei");
    number++;
}
//Solution 29 :
for(let num = 0; num <= 98; num++){
    if(num < 58){
        continue;
    }
    console.log("Numbers Are " + num);
}
//Solution 30 :
for(let numEven = 0; numEven <= 456; numEven += 2){
    if(numEven < 412){
        continue;
    }
    console.log("Even Numbers Are " + numEven);
}
//Solution 31 :
for(let numOdd = 1; numOdd <= 623; numOdd += 2){
    if(numOdd < 580){
        continue;
    }
    console.log("Odd Numbers Are " + numOdd);
}
// Solution 33 :
let courseTopic = ["variable", "array", "string", "Loop", "conditional"];
for (let i = 0; i < courseTopic.length; i++){
    let endTopic = courseTopic[i];
    console.log(endTopic);
}
// Solution 34 :
let handset = ["nokia", "samsung", "symphony"];
let num1 = 0;
while (num1 < handset.length){
    let usedHandset = handset[num1];
    console.log(usedHandset);
    num1++;
}
// Solution 35 :
for(let number = 30; number <= 86; number++){
    if(number > 44){
        break;
    }
    console.log("My numbers Are " + number);
}
// Solution 36 :
let booksPrice = [250, 150, 300, 210, 100, 140, 165, 172];
for (let num2 = 0; num2 < booksPrice.length; num2++){
    let takenBooksPrice = booksPrice[num2];
    if(takenBooksPrice > 200){
        continue;
    }
    console.log(takenBooksPrice);
}