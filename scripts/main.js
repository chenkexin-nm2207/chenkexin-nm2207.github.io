var name;
var magic_power = 0, house_credit = 7;
var day = 1; 
var House;

// Beginning
function startPrompt() {
  name = prompt("We're ready to embark on our adventure at Hogwarts. Please tell me your name!");
  if (name != null && name != "") {
    alert(`Welcome to Hogwarts，${name}！`);
  }
  
  const subtitleElement = document.getElementById("welcome");
  const subtitleText = "My dear young wizard, welcome to Hogwarts! You must be very talent and curious! Here you will be taught brand-new magic knowledge and experience unforeseen exciting events. You will be tested, but afterwards you could win the glory for your house if you can successfully pass them. Good luck and be brave. Now, sit tight and the Sorting Hat will assign you a house.";
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= subtitleText.length) {
        subtitleElement.innerText = subtitleText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 100);
  
  setTimeout(assignHouse, 36500);
}


function assignHouse(){
  const buttonContainer = document.getElementById("birthday_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Put on Sorting Hat!";
  newButton.onclick = () => {
      const birth = prompt("A person's birthday is closely related to their personality and destiny. The Sorting Hat will take your birthday into account to assign you to a Hogwarts house. Please enter your birthday (yyyymmdd Ignore spaces and symbols): ");
      Math.seedrandom(birth);
      const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
      const randomIndex = Math.floor(Math.random() * 4);
      House = houses[randomIndex];
      console.log(House);
      house();
  };
  birthday_button.appendChild(newButton);
}

function house(){
  const houseElement = document.getElementById("house");
  const houseText = "The Hat considered for a moment, then the rip near the brim opened and shouted: " + House + "!";
  index = 0;
  const intervalid = setInterval(() => {
    if (index <= houseText.length) {
      houseElement.innerText = houseText.slice(0, index);
      index++;
    } else {
      clearInterval(intervalid);
    }
  }, 100);
}