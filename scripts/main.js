var name;
var magic_power = 0, house_credit = 5;
var day = 1; 
var House;

// Beginning
function startPrompt() {
  name = prompt("We're ready to embark on our adventure at Hogwarts. Please tell me your name!");
  if (name != null && name != "") {
    alert(`Welcome to Hogwarts，${name}！`);
  }
  
  const subtitleElement = document.getElementById("welcome");
  const subtitleText = "My dear young wizard, welcome to Hogwarts! You must be very talented and curious! Here you will be taught brand-new magic knowledge and experience unforeseen exciting events. You will be tested, but afterwards you could win the glory for your house if you can successfully pass them. Good luck and be brave. Now, sit tight and the Sorting Hat will assign you a house.";
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= subtitleText.length) {
        subtitleElement.innerText = subtitleText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);
  
  setTimeout(assignHouse, 18500);
}


function assignHouse(){
  document.getElementById("HatImage").innerHTML = `
      <img src="resources/Hat.png" alt="Hat" height="150">
  `;
  const buttonContainer = document.getElementById("birthday_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Put on Sorting Hat!";
  newButton.onclick = () => {
      const birth = prompt("A person's birthday is closely related to their personality and destiny. The Sorting Hat will take your birthday into account to assign you to a Hogwarts house. Please enter your birthday (yyyymmdd - Ignore spaces and symbols): ");
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
  const houseText = "The Hat considered for a moment, then the rip near the brim opened and shouted: " + House + "! Now, let me introduce some rules to you: Since you were in muggles' world for so long before, you have to successfully pass four weeks of study and win 5 or higher magic powers to graduate as a qualified wizard, while managing your initial house credit of 5. Beware of running out of house credit, as it will result in expulsion from school. Good luck!";
  index = 0;
  const intervalid = setInterval(() => {
    if (index <= houseText.length) {
      houseElement.innerText = houseText.slice(0, index);
      index++;
    } else {
      clearInterval(intervalid);
    }
  }, 50);
  setTimeout(updateAnnouncement, 5000);
  setTimeout(updateHouse, 5000);
  setTimeout(week1, 22500);
}

// update
function updateHouse() {
  const houseImageElement = document.getElementById("houseImage");
  houseImageElement.src = "resources/" + House + ".png";
}
function updateAnnouncement() {
  var announcementElement = document.getElementById("Announcement");
  announcementElement.innerHTML = "Your house: " + House + "<br><br>Magic power: " + magic_power + "<br><br>House credit: " + house_credit;
}

// Week1
var right = 0;
var wrong = 0;
function week1(){
  const buttonContainer = document.getElementById("week1_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Let's begin the journey of the first week!";
  newButton.onclick = () => {
      alert("Professor is ready to take a sudden test about potion.");
      potion1();
  };
  week1_button.appendChild(newButton);
}

function potion1(){
  document.getElementById("PotionImage").innerHTML = `
    <img src="resources/Potion.png" alt="Potion" height="150">
  `;
  document.getElementById("week1").innerHTML = `
    <h3>Q1: Please choose how long is the effect of one cup of Polyjuice Potion?</h3>
    <form>
      <input type="radio" name="option" value="A"> A. One Day<br>
      <input type="radio" name="option" value="B"> B. Two Hours<br>
      <input type="radio" name="option" value="C"> C. One Hour<br>
      <input type="radio" name="option" value="D"> D. Forever<br>
      <br>
      <input type="button" value="Submit" onclick="checkAnswer1()">
    </form>
    `;
}

function checkAnswer1() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    if (selectedValue === "C") {
      right = right + 1;
      alert("Yes! You are correct! Do not drink too much!");
    } else {
      wrong = wrong + 1;
      alert("No! Didn't you read the story of secret chamber? You did not review my class! Drink less my child!");
    }
  } else {
    alert("Please choose an option.");
  }
  potion2();
}

function potion2(){
  document.getElementById("week1").innerHTML = `
    <h3>Q2: Please choose which potion is to cure the traumatic injury.</h3>
    <form>
      <input type="radio" name="option" value="A"> A. Felix Felicis<br>
      <input type="radio" name="option" value="B"> B. Polyjuice Potion<br>
      <input type="radio" name="option" value="C"> C. Dittany<br>
      <input type="radio" name="option" value="D"> D. Skele-Grow<br>
      <br>
      <input type="button" value="Submit" onclick="checkAnswer2()">
    </form>
    `;
}

function checkAnswer2() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    if (selectedValue === "C") {
      right = right + 1;
      alert("Yes! You are correct! Be safe all the time!");
    } else {
      wrong = wrong + 1;
      alert("No! It is not tasty! You need some luck ~");
    }
  } else {
    alert("Please choose an option.");
  }
  potion3();
}

function potion3(){
  document.getElementById("week1").innerHTML = `
    <h3>Q3: Please choose which potion is to get some good luck.</h3>
    <form>
      <input type="radio" name="option" value="A"> A. Felix Felicis<br>
      <input type="radio" name="option" value="B"> B. Polyjuice Potion<br>
      <input type="radio" name="option" value="C"> C. Dittany<br>
      <input type="radio" name="option" value="D"> D. Skele-Grow<br>
      <br>
      <input type="button" value="Submit" onclick="checkAnswer3()">
    </form>
    `;
}

function checkAnswer3() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    if (selectedValue === "A") {
      right = right + 1;
      alert("Yes! You are correct! I hope you did not use your luck to answer that!");
    } else {
      wrong = wrong + 1;
      alert("No! I hope you will not gonna use this potion.");
    }
  } else {
    alert("Please choose an option.");
  }
  potion4();
}

function potion4(){
  document.getElementById("week1").innerHTML = `
    <h3>Q4: Please choose which potion is to grow bones.</h3>
    <form>
        <input type="radio" name="option" value="A"> A. Felix Felicis<br>
        <input type="radio" name="option" value="B"> B. Polyjuice Potion<br>
        <input type="radio" name="option" value="C"> C. Dittany<br>
        <input type="radio" name="option" value="D"> D. Skele-Grow<br>
      <br>
      <input type="button" value="Submit" onclick="checkAnswer4()">
    </form>
    `;
}

function checkAnswer4() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    if (selectedValue === "D") {
      right = right + 1;
      alert("Yes! You are correct! Be safe when you play Quidditch!");
    } else {
      wrong = wrong + 1;
      alert("No! Wrong potion for this injury!");
    }
  } else {
    alert("Please choose an option.");
  }
  potion();
}

function potion(){
  var overall = right - wrong;
  const resultElement = document.getElementById("week1_result");
  var resultText;
  if (overall > 0){
    magic_power = magic_power + overall;
    resultText = "You got " + right + " questions right and got " + wrong + " questions wrong. You successfully gained " + overall + " magic power!" ;
  }
  else{
      if (overall < 0){
        house_credit = house_credit - 1;
        resultText = "You did not study well! You lost one house credit!";
      }
      else{
        resultText = "You got two questions right and got two questions wrong. You got nothing in the end.";
      }
  }
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= resultText.length) {
        resultElement.innerText = resultText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);

  updateAnnouncement();
  setTimeout(week2, 4000);
}

// Week2
function week2(){
  const buttonContainer = document.getElementById("week2_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Let's begin the journey of the second week!";
  newButton.onclick = () => {
      alert("We are going to have a mind reading class.");
      week2_intro();
  };
  week2_button.appendChild(newButton);
}

function week2_intro(){
  document.getElementById("MindImage").innerHTML = `
    <img src="resources/Mind.png" alt="Mind" height="150">
  `;
  const mindElement = document.getElementById("week2_intro");
  const mindText = "This class teaches wizards how to know the thoughts of Death Eaters and win. In this lesson, we will practice simple mind reading skills through a guessing game.";
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= mindText.length) {
        mindElement.innerText = mindText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);
  setTimeout(week2_intro2, 9000);
}

function week2_intro2(){
  document.getElementById("week2_intro2").innerHTML = `
    <p>Game Rule: <br>A random integer between 1 and 100 will be generated. You have six chances of guessing. Every time you guess wrong, the system will tell you the relationship between your answer and the correct answer. Then you can guess again. <p><br>
    <input type="button" value="I understand the rules. Let us start!" onclick="psyco()">
  `;
}

function psyco(){
  const answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer);
  var psycoElement = document.getElementById("psycoclass");
  let x;
  let result;

  for (let i = 6; i >= 1; --i) {
    x = parseInt(prompt("You have " + i + " more chances. Please enter your guess: "));
    if (x === answer) {
      magic_power = magic_power + 2;
      result = "Congratulations! You are right! Your magic power is increased by 2!";
      break;
    } 
    else{
      if (x < answer){
        alert("You are wrong. The correct answer is larger than " + x);
      }
      else{
        alert("You are wrong. The correct answer is smaller than " + x);
      }
    }
  }
  if(!result){
    result = "Sorry, you didn't pass the game. The correct answer is: " + answer + ". You need more practice!";
  }

  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= result.length) {
        psycoElement.innerText = result.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);

  updateAnnouncement();
  setTimeout(week3, 4000);
}

// Week3
var right2 = 0;
var wrong2 = 0;

function week3(){
  const buttonContainer = document.getElementById("week3_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Let's begin the journey of the third week!";
  newButton.onclick = () => {
      alert("Professor is ready to take a sudden test about spell.");
      spell1();
  };
  week3_button.appendChild(newButton);
}

function spell1(){
  document.getElementById("SpellImage").innerHTML = `
    <img src="resources/Spell.png" alt="Spell" height="150">
  `;
  document.getElementById("week3").innerHTML = `
  <h3>Q1: Please choose which spell is the forbidden spell!</h3>
  <form>
    <input type="radio" name="option_new" value="A"> A. AvadaKedavra<br>
    <input type="radio" name="option_new" value="B"> B. Reducto<br>
    <input type="radio" name="option_new" value="C"> C. Alohomora<br>
    <input type="radio" name="option_new" value="D"> D. Lumos<br>
    <br>
    <input type="button" value="Submit" onclick="checkAnswer11()">
  </form>
  `;
}

function checkAnswer11() {
  var selectedOption = document.querySelector('input[name="option_new"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    console.log(selectedValue);
    if (selectedValue === "A") {
      right2 = right2 + 1;
      alert("Yes! You are correct! But remember, do not use it no matter what!");
    } else {
      wrong2 = wrong2 + 1;
      alert("No! You need some light my dear student!");
    }
  } else {
    alert("Please choose an option.");
  }
  spell2();
}

function spell2(){
  document.getElementById("week3").innerHTML = `
  <h3>Q2: Please choose which spell is to open the door.</h3>
  <form>
      <input type="radio" name="option_new" value="A"> A. AvadaKedavra<br>
      <input type="radio" name="option_new" value="B"> B. Reducto<br>
      <input type="radio" name="option_new" value="C"> C. Alohomora<br>
      <input type="radio" name="option_new" value="D"> D. Lumos<br>
    <br>
    <input type="button" value="Submit" onclick="checkAnswer22()">
  </form>
  `;
}

function checkAnswer22() {
  var selectedOption = document.querySelector('input[name="option_new"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    console.log(selectedValue);
    if (selectedValue === "C") {
      right2 = right2 + 1;
      alert("Yes! You are correct! Do not use it to open my office!");
    } else {
      wrong2 = wrong2 + 1;
      alert("No! You did not review my class!");
    }
  } else {
    alert("Please choose an option.");
  }
  spell3();
}

function spell3(){
  document.getElementById("week3").innerHTML = `
  <h3>Q3: Please choose which spell is to get some light.</h3>
  <form>
      <input type="radio" name="option_new" value="A"> A. AvadaKedavra<br>
      <input type="radio" name="option_new" value="B"> B. Reducto<br>
      <input type="radio" name="option_new" value="C"> C. Alohomora<br>
      <input type="radio" name="option_new" value="D"> D. Lumos<br>
    <br>
    <input type="button" value="Submit" onclick="checkAnswer33()">
  </form>
  `;
}

function checkAnswer33() {
  var selectedOption = document.querySelector('input[name="option_new"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    console.log(selectedValue);
    if (selectedValue === "D") {
      right2 = right2 + 1;
      alert("Yes! You are correct! Use it when you are in dark!");
    } else {
      wrong2 = wrong2 + 1;
      alert("No! You may need some keys!");
    }
  } else {
    alert("Please choose an option.");
  }
  spell4();
}

function spell4(){
  document.getElementById("week3").innerHTML = `
  <h3>Q4: Please choose which spell is to smash objects.</h3>
  <form>
      <input type="radio" name="option_new" value="A"> A. AvadaKedavra<br>
      <input type="radio" name="option_new" value="B"> B. Reducto<br>
      <input type="radio" name="option_new" value="C"> C. Alohomora<br>
      <input type="radio" name="option_new" value="D"> D. Lumos<br>
    <br>
    <input type="button" value="Submit" onclick="checkAnswer44()">
  </form>
  `;
}

function checkAnswer44() {
  var selectedOption = document.querySelector('input[name="option_new"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    console.log(selectedValue);
    if (selectedValue === "B") {
      right2 = right2 + 1;
      alert("Yes! You are correct! Do not use it to your classmates!");
    } else {
      wrong2 = wrong2 + 1;
      alert("No! You did not review my class!");
    }
  } else {
    alert("Please choose an option.");
  }
  spell();
}

function spell(){
  var overall2 = right2 - wrong2;
  const resultElement = document.getElementById("week3_result");
  var resultText;
  if (overall2 > 0){
    magic_power = magic_power + overall2;
    resultText = "You got " + right2 + " questions right and got " + wrong2 + " questions wrong. You successfully gained " + overall2 + " magic power!" ;
  }
  else{
      if (overall2 < 0){
        house_credit = house_credit - 1;
        resultText = "You did not study well! You lost one house credit!";
      }
      else{
        resultText = "You got two questions right and got two questions wrong. You got nothing in the end.";
      }
  }
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= resultText.length) {
        resultElement.innerText = resultText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);

  updateAnnouncement();
  setTimeout(week4, 3500);
}

// Week4
function week4(){
  const buttonContainer = document.getElementById("week4_button");
  const newButton = document.createElement("button");
  newButton.innerText = "Let's begin the journey of the fourth week!";
  newButton.onclick = () => {
      alert("You are travelling around the Hogworts Castle.");
      week4_intro();
  };
  week4_button.appendChild(newButton);
}

function week4_intro(){
  document.getElementById("DragonImage").innerHTML = `
    <img src="resources/Dragon.png" alt="Dragon" height="150">
  `;
  const gamblerElement = document.getElementById("week4_intro");
  const gamblerText = "Woow! Watch out! There is a fire dragon! Calm Down! We need to fight it! ";
  let index = 0;
  const intervalId = setInterval(() => {
    if (index <= gamblerText.length) {
        gamblerElement.innerText = gamblerText.slice(0, index);
        index++;
      } else {
        clearInterval(intervalId);
      }
  }, 50);
  setTimeout(week4_intro2, 4000);
}

function week4_intro2(){
  document.getElementById("week4_intro2").innerHTML = `
    <p>Rules: <br>You only know the probable HP of that dragon is around 5-7, but you will get help from the ghosts three times.<br>Harry can kill 1 HP<br>Snape can kill 2 HP<br>Dumbledore can kill 3 HP<br>It depends on your courage and your good luck! You will get their help randomly and you initial power is 0.<br><p>
    <input type="button" value="I understand the rules. Here we go!" onclick="dragon()">
  `;
}

function dragon(){
    let hp = 0;
    let power = 0;
    let input;

    hp = Math.floor(Math.random() * 3) + 5;

    for (let i = 0; i < 3; i++) {
      input = prompt("Please input <get power> to get support!");
      
      let temp = 0;
      temp = Math.floor(Math.random() * 3) + 1;
      
      if (temp === 1) {
        power += temp;
        alert("You get Harry Potter's Help! Your power is " + power + " right now!");
      } 
      else{ 
          if (temp === 2) {
            power += temp;
            alert("You get Snape's Help! Your power is " + power + " right now!");
          } 
          else {
            power += temp;
            alert("You get Dumbledore's Help! Your power is " + power + " right now!");
          }
      }
    }
    var result = "";
    result = "You can know the dragon's HP is " + hp + " after you watch closely!<br>";
    if(power > hp) {
      magic_power = magic_power + 2;
      result = result + "You successfully beat the dragon! You earned 2 magic power!";
    }
    else {
      if (power < hp){
        result = result + "Unfortunately, you do not have enough ability! You lost 2 credits!";
        house_credit = house_credit - 2;
      }
      else{
        magic_power = magic_power + 1;
        result = result + "It is a draw! However, you earned 1 magic power because you are brave enough!";
      }
    }
    const dragonElement = document.getElementById("dragon");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= result.length) {
          dragonElement.innerHTML = result.slice(0, index);
          index++;
        } else {
          clearInterval(intervalId);
        }
    }, 50);

    updateAnnouncement();
    setTimeout(ending, 7500);
}

// Result
function ending(){
  document.getElementById("EndingImage").innerHTML = `
    <img src="resources/Ending.png" alt="Ending" height="150">
  `;
  if(house_credit === 0){
    document.getElementById("ending").innerHTML = `<p>Unfortunately, your have no house credits. But, do not give up! <br>One moment lose does not mean everthing! Trust yourself and try again!</p>`;
  }
  else{
    if( magic_power > 4){
      document.getElementById("ending").innerHTML = `<p>Congradulations! You have successfully passed the four-week test with outstanding performance. <br>You are qualified to be an excellent wizard. You can use you power to benefit others!<br> Also, do not forget! Hogworts will always be your home!</p>`;
   }
    else{
      document.getElementById("ending").innerHTML = `<p>You've done well, but your magical abilities haven't reached the graduation requirement yet. <br>Go back and review the courses. See you next semester!</p>`;
    }
  }
}