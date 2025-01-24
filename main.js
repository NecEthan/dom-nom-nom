const foodStock = [
  { img: "🍕", name: "pizza", foodType: "junk", price: 2.5 },
  { img: "🍔", name: "burger", foodType: "junk", price: 3 },
  { img: "🍟", name: "fries", foodType: "junk", price: 1 },
  { img: "🌭", name: "hot dog", foodType: "junk", price: 1.5 },
  { img: "🥗", name: "salad", foodType: "healthy", price: 2 },
  { img: "🥙", name: "pita", foodType: "healthy", price: 0 },
  { img: "🥪", name: "sandwich", foodType: "healthy", price: 3 },
  { img: "🌯", name: "burrito", foodType: "healthy", price: 5 },
  { img: "🥣", name: "soup", foodType: "healthy", price: 2 },
];

/**
 * Takes a food object and turns it into an HTML element.
 * @param {Object} foodObject - The food object containing img, name, and price properties.
 * @returns {HTMLElement} The HTML element representing the food card.
 */
const createFoodCard = (foodObject) => {
  const div = document.createElement("div");
  div.classList.add("card");

  for (const key in foodObject) {
    const p = document.createElement("p");
    p.textContent = foodObject[key];
    div.appendChild(p);
  }

  return div;
};

const randomFood = document.querySelector(".random-food");

randomFood.appendChild(createFoodCard(foodStock[0]));

// 1. DISPLAY RANDOM CARD
// TODO: WHEN A USER CLICKS ON THE NEXT BUTTON
// - THE DISPLAYED CARD WILL BE REMOVED.
// - A NEW RANDOM FOOD CARD SHOULD BE DISPLAYED.

const nextBtn = document.getElementById('next-btn')

nextBtn.addEventListener('click', () => {
  const card = document.querySelector(".card");

  const randomNum = Math.floor(Math.random() * 8) + 1;
  card.remove();
  randomFood.appendChild(createFoodCard(foodStock[randomNum]));

})

// 2. DISPLAY ALL
// TODO: THE view-all-food ELEMENT IS EMPTY
// - HOW CAN YOU REMOVE THE ...?
// - HOW CAN YOU ITERATE THROUGH THE foodStock ARRAY AND CREATE A CARD FOR EACH?
// - HOW CAN YOU ADD THEM TO THE HTML ELEMENT?
const viewBtn = document.querySelector('#view-btn');
const viewFood = document.querySelector('.view-all-food');

viewBtn.addEventListener('click', () => {
  foodStock.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('p');
    name.textContent = item.name;

    const foodType = document.createElement('p');
    foodType.textContent = `Type: ${item.foodType}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${item.price.toFixed(2)}`;

    card.appendChild(name);
    card.appendChild(foodType);
    card.appendChild(price);

    viewFood.appendChild(card);
  });
});



// 3. THE EVENT
// THE CODE BELOW
// - GETS ALL OF THE HTML ELEMENTS WITH A CLASS OF title
// - IT SETS AN EVENT LISTENER ON EACH ELEMENT
// - HAVE A LOOK AT THE event IN THE CONSOLE WHEN YOU HOVER OVER A TITLE
const titles = document.querySelectorAll(".title");
const colors = ['pink', 'red', 'yellow', 'green', 'blue', 'purple']

titles.forEach((title) => {
  title.addEventListener("mouseover", (event) => {
    console.dir(event);
    console.log(event.target);
    const randomNum = Math.floor(Math.random() * 6) + 1;
    event.target.style.color = `${colors[randomNum]}`;
  });
});

// TODO:
// - WHEN THE MOUSE LEAVES AN ELEMENT WITH A CLASS OF title, CHANGE THE TEXT TO A DIFFERENT COLOR

// 4. ADD FOOD & USE THE EVENT
// TODO: WHEN A FORM IS SUBMITTED, GET THE VALUES, CREATE A FOOD OBJECT, UPDATE THE foodStock, AND DISPLAY
const form = document.querySelector(".food-form");

form.addEventListener("submit", (event) => {
  // STOPS A FORM FROM SUBMITTING ALLOWING YOU TO HANDLE THE SUBMISSION WITH JAVASCRIPT INSTEAD
  event.preventDefault();
  console.log(event);

  // - HOW DO YOU GET A INPUT VALUE(S) FROM A FORM EVENT?
  console.log(event.target.emoji.value)
  const emoji = event.target.emoji.value;
  const fname = event.target.name.value;
  const price = event.target.price.value;

  const foodObject = {};
  // - HOW DO YOU ADD THE VALUES TO THE foodObject?
  foodObject.name = fname;
  foodObject.price = price;
  foodObject.img = emoji;
  // HOW CAN YOU UPDATE THE view-all-food CONTAINER TO HAVE THE NEW foodObject?
  foodStock.push(foodObject)
  console.log(foodStock)
  form.reset();
});
