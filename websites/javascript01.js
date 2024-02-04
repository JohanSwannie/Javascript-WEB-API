const output = document.querySelector(".child1-sub-container1");
const output2 = document.querySelector(".child1-sub-container2");
const output3 = document.querySelector(".child2-sub-container1");
const output4 = document.querySelector(".child2-sub-container2");
const output5 = document.querySelector(".child3-sub-container1");
const output6 = document.querySelector(".child4-sub-container2");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");
const button6 = document.querySelector("#btn6");

const url = "temp01.json";

const retrieveData = (data) => {
  let html1 = `<h1 class="heading">Result 1</h1>`;
  data.forEach((person) => {
    html1 += `<div>${person.firstName} ${person.lastName} --- ${person.position}</div>`;
    output.innerHTML = html1;
  });
};

button1.onclick = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      retrieveData(data);
    });
};

const performResult2 = () => {
  const temp02 = [
    {
      name: "Koos",
      surname: "Roos",
      occupation: "Rugby Player",
      address: {
        line1: "28 Sylvia Street",
        line2: "Gonubie",
        line3: "East-London",
        line4: "4167",
        line5: "South Africa",
      },
    },
    {
      name: "James",
      surname: "Mower",
      occupation: "Tennis Player",
      address: {
        line1: "57 Riverstone Drive",
        line2: "Whitianga",
        line3: "Thames-Coromandel",
        line4: "8561",
        line5: "New Zealand",
      },
    },
  ];

  let html2 = `<h1 class="heading">Result 2</h1>`;

  temp02.forEach((person) => {
    html2 += `<div class="heading"> The address of ${person.name} ${person.surname}</div> </br>`;
    html2 += `<p>${person.address["line1"]}</p>`;
    html2 += `<p>${person.address["line2"]}</p>`;
    html2 += `<p>${person.address["line3"]}</p>`;
    html2 += `<p>${person.address["line4"]}</p>`;
    html2 += `<p>${person.address["line5"]}</p>`;
  });

  output2.innerHTML = html2;
};

button2.onclick = () => {
  performResult2();
};

const performResult3 = () => {
  let html3 = `<h1 class="heading">Result 3</h1>`;
  const person1 = {
    title: "Doctor",
    name: "James Mower",
    location: "Cape Town",
  };

  const person2 = {
    title: "Professor",
    name: "Tommie Theron",
    location: "Amsterdam",
  };

  const person3 = {
    title: "President",
    name: "Richard Bluetooth",
    location: "New York",
  };

  const persons = [person1, person2, person3];

  persons[3] = {
    title: "Miss",
    name: "Mary Brown",
    location: "Auckland",
  };

  persons[4] = {
    title: "Mrs",
    name: "Deborah Smith",
    location: "Sydney",
  };

  persons.forEach((person) => {
    html3 += `<p>${person.title} ${person.name} lives in ${person.location}</p>`;
  });
  output3.innerHTML = html3;
};

button3.onclick = () => {
  performResult3();
};

const performResult4 = () => {
  let html4 = `<h1 class="heading">Result 4</h1>`;

  const sportGroups = [
    {
      sport: "Tennis",
      location: "Auckland",
    },
    {
      sport: "Rugby",
      location: "Wellington",
    },
    {
      sport: "Netball",
      location: "Christchruch",
    },
    {
      sport: "Cricket",
      location: "Dunedin",
    },
  ];

  const allSports = [
    sportGroups[0],
    sportGroups[1],
    sportGroups[2],
    sportGroups[3],
  ];

  const moreSports = [
    {
      sport: "Swimming",
      location: "Whitianga",
    },
    {
      sport: "Horse Racing",
      location: "Nelson",
    },
    {
      sport: "Table Tennis",
      location: "Tauranga",
    },
    {
      sport: "Canoeing",
      location: "Kaiteriteri",
    },
  ];

  html4 += `<h2>With forEach Loop</h2></br>`;

  allSports.forEach((sportGroup) => {
    html4 += `<p>${sportGroup.sport} will take place in ${sportGroup.location}</p>`;
  });

  html4 += `</br><h2>With normal for loop</h2></br>`;

  for (let i = 0; i < moreSports.length; i++) {
    html4 += `<p>${moreSports[i].sport} will take place in ${moreSports[i].location}</p>`;
  }

  html4 += `</br><h2>With for in Loop</h2></br>`;

  for (let x in moreSports) {
    html4 += `<p>${moreSports[x].sport} - ${moreSports[x].location}</p>`;
  }

  html4 += `</br><h2>With for of Loop</h2></br>`;

  for (let x of moreSports) {
    html4 += `<p>${x.sport}</p>`;
  }

  output4.innerHTML = html4;
};

const firstName = ["Dennis", "Mary", "John", "Thomas"];
const lastName = ["Dateling", "Brown", "Bland", "Cooper"];

var nameObject = [];

firstName.forEach((value, i) => {
  nameObject[i] = {
    firstName: value,
    lastName: lastName[i],
  };
});

console.log(nameObject);

button4.onclick = () => {
  performResult4();
};

const performResult5 = () => {
  let html5 = `<h1 class="heading">Result 5</h1>`;

  const familyMember1 = {
    fullName: "Ivan Isherwood",
  };

  const familyMember2 = {
    fullName: "Bertus Venter",
  };

  const familyMember3 = {
    fullName: "James Mower",
  };

  const familyMembers = [familyMember1, familyMember2, familyMember3];

  for (let key in familyMembers) {
    console.log(`${familyMembers[key]}`);
  }

  const familyMember = {
    fullName: "Petrus van den Berg",
    age: 51,
    hobby: "Fishing",
    location: {
      address1: "89 Bosbok Street",
      address2: "De Aar",
      address3: 7826,
    },
  };

  for (let key in familyMember) {
    if (key === "location") {
      console.log(` The ${key} is : `);
      for (let key2 in familyMember["location"]) {
        console.log(`${key2} - ${familyMember["location"][key2]}`);
      }
    } else {
      console.log(`${key} : ${familyMember[key]}`);
    }
  }
};

const person10 = {
  title: "Doctor",
  name: "James Mower",
  location: "Cape Town",
};

const person11 = {
  title: "Professor",
  name: "Tommie Theron",
  location: "Amsterdam",
};

const person12 = {
  title: "President",
  name: "Richard Bluetooth",
  location: "New York",
};

const people = [person10, person11, person12];

for (const [key, value] of Object.entries(people)) {
  console.log(key);
  console.log(value);
}

button5.onclick = () => {
  performResult5();
};
