const Name = {
  name: "龍生",
  university: "北海学園大学",
  age: 21,
  hobby: ["バスケ", "ゲーム"],
  family: {
    father: "hiroki",
    mother: "yasuyo",
    sister: "momoka",
  },
  ismenter: false,
  sayHello: function() {
    alert(`こんにちは${this.name}です！！`)
  },
}
console.log(Name.name)
console.log(Name.hobby[0])
Name.sayHello()
