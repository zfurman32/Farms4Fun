// On form submit
   // 0. Prevent form from submitting - DONE
   // 1. Grab number of sheep input - DONE
   // 2. For each of these inputs, create each animal
     // Loop from 0 to N animal - DONE
       // For each iteration:
         // create IMG tag - DONE
         // give IMG tag correct image - DONE
         // append to "farm" - DONE
   // 4. Reset inputs to default state - DONE
   // 5. Randomize new animal location within farm. - DONE
   // 6. Add farm name. - DONE
   // 7. Drag and dropping images
          // select IMG
          // move image within "farm"
          // drop IMG
   
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
// https://gist.github.com/
// https://developer.mozilla.org/en-US/
// http://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click/9122675 <<< Read this

const animalForm = document.getElementById("custom-farm");
const sheepInput = document.getElementById('sheep');
const chickenInput = document.getElementById('chicken');
const pigInput = document.getElementById('pig');
const farm = document.getElementById('farm');
const farmName = document.getElementById('farmName')

animalForm.onsubmit = function (event) {
  event.preventDefault();
  farm.innerHTML = "";

  const numberOfSheep = sheepInput.value;
  const numberOfChickens = chickenInput.value;
  const numberOfPigs = pigInput.value;
  const farmNameInput = farmName.value;

  function addNameToFarm () {
    const farmName = document.createTextNode(farmNameInput);
    const farmElement = document.createElement('h1');
    farmElement.appendChild(farmName);
    farmElement.id = "new-farmName";
    return farmElement
  }

  farm.appendChild(addNameToFarm());
  
  for (var i = 0; i < numberOfSheep; i++) { // Maybe there's a different way to accomplish this?
    farm.appendChild(createSheep());
  };
  
  for (var i = 0; i < numberOfChickens; i++) { 
    farm.appendChild(createChicken());
  };

  for (var i = 0; i < numberOfPigs; i++) { 
    farm.appendChild(createPig());
  };
  
  function createSheep () { // Function arguments to customize the animal image
    const image = document.createElement('img');
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sheep_in_gray.svg/706px-Sheep_in_gray.svg.png";
    image.height = 100;
    image.width = 120;
    image.id = "new-sheep";
    image.className = "farm-animal";
    image.zIndex = 100;
    image.style.top = 275+"px";
    image.style.left = 500+Math.floor(Math.random()*200)+"px";
    return image;
  };

  function createChicken () { 
    const image = document.createElement('img');
    image.src = "https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png";
    image.height = 100;
    image.width = 120;
    image.id = "new-chicken";
    image.className = "farm-animal";
    image.zIndex = 100;
    image.style.top = 275+"px";
    image.style.left = Math.floor(Math.random()*300)+"px";
    return image;
  };

  function createPig () { 
    const image = document.createElement('img');
    image.src = "https://cdn.pixabay.com/photo/2012/05/07/04/17/pig-47920_960_720.png";
    image.height = 100;
    image.width = 120;
    image.id = "new-pig";
    image.className = "farm-animal";
    image.zIndex = 100;
    image.style.top = 375+"px";
    image.style.left = 550+Math.floor(Math.random()*205)+"px";
    return image;
  };

  resetInputs([sheepInput, chickenInput, pigInput]);

  function resetInputs (inputs) {
    inputs.forEach(function (input) { input.value = 0; });
  };
}



