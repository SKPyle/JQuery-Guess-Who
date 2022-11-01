$(document).ready(onReady);



console.log("client.js has been loaded");

function onReady() {
  console.log("jquery is ready!");
  renderPeople();
  nameRandomizor();

  //$('.image').on('click', function that ids random photo, sets alert
}

function renderPeople() {
  people.forEach((person) => {
    //person is the specific name for the individual indices of the people array
    // looping through 'people' array, 'append' jQuery/html into targeted div with .peopleRows class
    console.log("in renderPeople");
    $(".peopleRows").append(`
            <div onClick="">
                ${person.userProfile}             
            </div>
        `);
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function nameRandomizor() {
  const nameIndex = randomNumber(0, people.length - 1);
  //take a number from the array limited to the length of array targeting the name property
  const randomName = people[nameIndex].name;

  $(".randomNameDiv").append(`
        <div>
            ${randomName}             
        </div>`);
}

console.log("Here are all the available people:", people);
