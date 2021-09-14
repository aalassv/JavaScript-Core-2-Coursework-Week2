function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  addPeople(arrayOfPeople);
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

function addPeople(listOfNames) {
  listOfNames.forEach((element) => {
    let name = document.createElement("h1");
    content.appendChild(name);
    name.innerText = element.name;
    let job = document.createElement("h2");
    content.appendChild(job);
    job.innerText = element.job;
  });
}

//   let span = document.createElement("span");
//   span.className = "badge bg-primary rounded-pill";
//   li.appendChild(span);
//   let i = document.createElement("i");
//   i.className = "fa fa-check";
//   span.appendChild(i);
// }
// });

listOfNames(people);
