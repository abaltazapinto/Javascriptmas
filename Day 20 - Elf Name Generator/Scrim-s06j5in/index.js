const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];


/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 

let namesArray = [];
for(i = 0; i < elfFirstNames.length; i++) {
  const lastName = elfLastNames[i];
  const firstName = elfFirstNames[i];
  const allName = `${firstName} ${lastName}`
  namesArray.push(allName);
  renderName(namesArray)
}

function generateElfName(firstName, lastName) {
  const lastInitial = lastName[0]?.toUpperCase() || "A";
  const firstInitial = firstName[0]?.toUpperCase() || "A";
  const firstNameIndex = firstInitial.charCodeAt(0) - 65;
  const lastNameIndex = lastInitial.charCodeAt(0) - 65;
  const elfFirstName = elfFirstNames[firstNameIndex % elfFirstNames.length];
  const elfLastName = elfLastNames[lastNameIndex % elfLastNames.length];
  return `${elfFirstName} ${elfLastName}`;
} 

// Add an event listener to generate names and display them

// just go the html and grab the first name input and las name
const elfNameDisplay = document.getElementById("elf-name-display");
const generateButton = document.getElementById("generate-btn");

generateButton.addEventListener("click", (e) => {
  e.preventDefault();

  const firstNameInput = document.getElementById("first-name").value;
  const lastNameInput = document.getElementById("last-name").value;
  const elfNameDisplay = document.getElementById("elf-name-display");

  if(!firstNameInput && !lastNameInput) {
    elfNameDisplay.textContent = `Please enter a first and last name`
  }else{
    
    const elfName = generateElfName(firstNameInput, lastNameInput);

    if(!namesArray.includes(elfName)) {
      namesArray.push(elfName);
      console.log(namesArray);
      renderName(namesArray);
  } else {
    elfNameDisplay.textContent = `Attention!!!! </br>
    ${elfName} already exist on the list, please submit other name `
  }
}
})

function renderName(array) {
  if (namesArray.length > 0) {
    const listElement = document.getElementById("elf-names-list");
    listElement.innerHTML = "";
    array.forEach(name => { 
      const li = document.createElement("li")
      li.textContent = name
      listElement.appendChild(li);
    });
  }
}