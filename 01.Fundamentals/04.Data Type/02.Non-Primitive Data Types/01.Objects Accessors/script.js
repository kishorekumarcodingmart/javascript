// JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.

let person = {
    firstName: "John",
    lastName: "Doe",
    language: "english",
    get lang() {
      return this.language;
    }
  };

// to call the function inside the object without parathesis
console.log(person.lang)

// JavaScript Setter (The set Keyword)
// This example uses a lang property to set the value of the language property.

person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

// to change the language
person.lang = "english"

console.table(person)


// JavaScript can secure better data quality when using getters and setters.


// Why Using Getters and Setters?
//     It gives simpler syntax
//     It allows equal syntax for properties and methods
//     It can secure better data quality
//     It is useful for doing things behind-the-scenes