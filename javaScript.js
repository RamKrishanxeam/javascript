// 1) JavaScript क्या है?
// JavaScript एक programming language है जो आपकी वेबसाइट को interactive और dynamic बनाती है।
// HTML और CSS वेबसाइट की structure और style के लिए होते हैं, वहीं JavaScript उसमें जान डालती है।
// उदाहरण के लिए:
// बटन पर क्लिक करने से कुछ हो
// फॉर्म की validation (गलत इनपुट को रोकना)
// स्लाइड शो, popup, dropdowns आदि

// var a = 12;
// {
//   var a = 13;
//   console.log(a);
// }

// console.log(a);

// var a = 12;

// {
//   var a = 13;
//   console.log(a);
// }

// console.log(a);

// Object.keys() JavaScript की एक method है जो किसी object की keys
// (properties के नाम) को एक array के रूप में लौटाती है।

// JavaScript में Object (ऑब्जेक्ट) एक डेटा टाइप है जिसका उपयोग key-value pairs को स्टोर करने के लिए किया जाता है।
// आप इसे एक "container" की तरह समझ सकते हैं जिसमें डेटा को एक नाम (key) के साथ स्टोर किया जाता है।

// JavaScript में "keys" का मतलब होता है किसी object की property के नाम। जब आप किसी object बनाते हैं,
//  तो उसमें data को "key-value pair" के रूप में स्टोर किया जाता है।

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
// };
// console.log((Object.keyscar));

// Key क्या होती है?
// Key = नाम (identifier)
// Value = उस नाम से जुड़ा हुआ डेटा

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
    },
  },
];

console.log(data[Object.keys(data)[0]]);
