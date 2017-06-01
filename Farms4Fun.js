// On form submit
   // Prevent form from submitting - DONE
   // Grab number of animals and farm name input - DONE
   // For farm name input - DONE
     // create text node w/input
     // create elememt h1
     // append to element
     // append to farm
   // For each of the animal inputs - DONE
     // Loop from 0 to N animal.
       // For each iteration:
         // create IMG tag.
         // give IMG tag correct image.
         // append to farm
     // Append animals to farm
   // Reset inputs to default state. - DONE
// Drag and drop newly created aniamsl within farm. - PENDING
   // dragstart IMG
   // dragover image within "farm"
   // drop IMG
// Add audio to all animals on click. - PENDING
   
const farmForm = document.getElementById("customize-farm-form");
const sheepInput = document.getElementById('sheep-input');
const chickenInput = document.getElementById('chicken-input');
const pigInput = document.getElementById('pig-input');
const farm = document.getElementById('farm-background');
const farmName = document.getElementById('farm-name-input')
const pigKey = document.getElementById('pig-key-image');
const sheepKey = document.getElementById('sheep-key-image');
const chickenKey = document.getElementById('chicken-key-image');
const animalKey = [pigKey, sheepKey, chickenKey];

farmForm.addEventListener('submit', function (event) {
  event.preventDefault();
  farm.innerHTML = "";

  const numberOfSheep = sheepInput.value;
  const numberOfChickens = chickenInput.value;
  const numberOfPigs = pigInput.value;
  const farmNameInput = farmName.value;

  farm.appendChild(addNameToFarm(farmNameInput));

  //TODO pass in with object instead of two seperare variables.
  //ie: appendAnimals(sheep)
  appendAnimals(numberOfSheep, "sheep");
  appendAnimals(numberOfChickens, "chicken");
  appendAnimals(numberOfPigs, "pig");

  resetInputs([sheepInput, chickenInput, pigInput]);

});

/* Takes farm name input and stores it
 * @param farmNameInput - name inputted in textbox
 */
function addNameToFarm (farmNameInput) {
  const farmName = document.createTextNode(farmNameInput);
  const farmElement = document.createElement('h1');
  farmElement.appendChild(farmName);
  farmElement.id = "new-farm-name";
  return farmElement
}

/**
 * Creates new animal image
 * This is called by appendAnimals()
 * Creates # of animals based off user's input in submit form
 * @param type - type of animal (sheep, chicken, or pig)
 */
function createAnimal(type) {
  const image = document.createElement('img');
  if (type === 'sheep') {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sheep_in_gray.svg/706px-Sheep_in_gray.svg.png"
      image.style.top = 275 +"px"; // TODO randomize location.
      image.style.left = 500 +"px"; // TODO same as above.
      image.className = "sheep";
      image.id = "new-sheep"; // TODO make unique.
  } else if (type === 'chicken') {
      image.src = "https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png"
      image.style.top = 275 + "px";
      image.style.left= 50+"px";
      image.className = 'chicken';
      image.id = "new-chicken"
  } else if (type === 'pig') {
      image.src = "https://cdn.pixabay.com/photo/2012/05/07/04/17/pig-47920_960_720.png"
      image.style.top = 175 + "px";
      image.style.left= 50 +"px";
      image.className = "pig";
      image.id = "new-pig";
  } else { 
      return false; 
  }
    image.height = 100;
    image.width = 120;
    image.setAttribute('draggable', true);
    return image;
}

/**
 * Appends the animals to the farm
 * This is generic so this method can be used for any type of animal
 * @param numOfAnimal - number of animals
 * @param animalName - animal name
 */
function appendAnimals(numOfAnimal, animalName) {
    for (var i = 0; i < numOfAnimal; i++) {
        farm.appendChild(createAnimal(animalName));
    }
}

/**
 * Resets the submit form after clicked.
 * Occurs anytime form is submitted. 
 * All values go to 0.
 * @param inputs - Grabs all inputs submitted via form
 */
function resetInputs (inputs) {
  inputs.forEach(function (input) { input.value = 0; });
}


//TODO Drag newly created animals within farm.
//TODO Add code block.
animalKey.forEach (function (animal) {
  animal.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dropEffect = "move";
  })
});

farm.addEventListener('dragover', function (ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
});

farm.addEventListener('drop', function (ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
});


//TODO Be able to select all pigs, chickens, sheep.
animalKey.forEach ( function(animal) {
  animal.addEventListener('click', function(event) {
    switch (animal) {
      case pigKey:
        return playAnimalNoise('pig');
        break;
      case sheepKey:
        return playAnimalNoise('sheep');
        break;
      case chickenKey:
        return playAnimalNoise('chicken');
        break;
      default:
        return console.log('Error');
    }
  })
});

/**
 * Plays animal's noise anytime clicked.
 * @param animal - type of animal clicked.
 */
function playAnimalNoise (animal) {
    if (animal === 'pig') {
        var audio = new Audio('http://www.junglewalk.com/Asounds/pig_grunt.wav');
        return audio.play();
    } else if (animal === 'sheep') {
        var audio = new Audio('http://www.junglewalk.com/Asounds/lamb1.wav');
        return audio.play();
    } else {
        var audio = new Audio('http://www.junglewalk.com/Asounds/chicken1.wav');
        return audio.play();
    }
}