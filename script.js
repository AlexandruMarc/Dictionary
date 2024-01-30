let isAdditionVisible = false;

function toggleAdditionSection() {
    const additionSection = document.getElementById("additionSection");

    if (isAdditionVisible) {
        additionSection.style.display = "none"; // Hide Section
    } else {
        additionSection.style.display = "block"; // Show Section
    }
    isAdditionVisible = !isAdditionVisible;
}

// Object for storing words and definitions
const dictionary = {};

// Function to add a word and its definition
function addWord() {
    const wordInput = document.getElementById("wordInput");
    const definitionInput = document.getElementById("definitionInput");

    const word = wordInput.value.trim();
    const definition = definitionInput.value.trim();

    if (word && definition) {
        dictionary[word.toLowerCase()] = definition;
        wordInput.value = "";
        definitionInput.value = "";
        showMessage(`The word "${word}" has been added to the dictionary.`);
        toggleAdditionSection(); // Hide the section after adding
    } else {
        showError("Please fill in both fields.");
    }
}

function searchWord() {
    const searchInput = document.getElementById("searchInput");
    const searchedWord = searchInput.value.trim().toLowerCase();

    if (dictionary[searchedWord]) {
        showMessage(`The definition of the word "${searchedWord}" is: ${dictionary[searchedWord]}`);
    } else {
        showError(`The word "${searchedWord}" does not exist in the dictionary.`);
    }
}

function showMessage(mesaj) {
    const result = document.getElementById("result");
    result.innerHTML = mesaj;
    result.className = "";
}

function showError(eroare) {
    const result = document.getElementById("result");
    result.innerHTML = eroare;
    result.className = "error";
}
