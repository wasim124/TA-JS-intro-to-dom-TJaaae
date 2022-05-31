console.log(got);

let parentElm = document.querySelector(".box");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let cards = allPeople.map((person) => {
  return `<li class = "card ">
            <div class = "flex center">
                <img 
                src= ${person.image}
                alt = ${person.name}
                />
                <h2>${person.name}</h2>
            </div>
            <p> ${person.description}</p>
            <a class = "btn" href = ${person.wikiLink}>Learn More!</a>
        </li>`;
});

parentElm.innerHTML = cards.join("");

console.log(allPeople);

console.log(cards);
