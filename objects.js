function calcAge() {
  this.yearsOld = 2023 - this.birthYear;
  return this.yearsOld;
}

const user = {
  name: "Mariya",
  secondName: "Luschik",
  birthYear: 1995,
  calcAge,
  location: {
    country: "Russia",
    city: "Pushkino",
    adress: "1st Nekrasocskiy 9",
  },
};

user.calcAge();

user.location["city"] = "Moscow";
console.log(user);
