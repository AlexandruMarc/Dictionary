let number = false;

function adaos() {
    if (number) return;
    const container = document.getElementById("container");
    const elementsHtml = `
        <div>
        <label for="wordInput">Word:</label>
        <input type="text" id="wordInput" placeholder="Enter a word" />

        <label for="definitionInput">Definition:</label>
        <input type="text" id="definitionInput" placeholder="Enter the definition" />

        <button onclick="addWord()">Add Word</button>
        </div>`;
    container.insertAdjacentHTML("beforeend", elementsHtml);
    number = true;
}

// Obiect pentru stocarea cuvintelor și definițiilor
const dictionary = {};

// Funcție pentru adăugarea unui cuvânt și a definiției sale
function addWord() {
    const wordInput = document.getElementById("wordInput");
    const definitionInput = document.getElementById("definitionInput");

    //trim() - inlatura spatiile de la inceputul si de la sfaritul imputului daca am "  hello  " --> "hello"
    const word = wordInput.value.trim();
    const definition = definitionInput.value.trim();

    if (word && definition) {
        dictionary[word.toLowerCase()] = definition;
        wordInput.value = "";
        definitionInput.value = "";
        showMessage(`The word "${word}" has been added to the dictionary.`);
    } else {
        showError("Please fill in both fields.");
    }
    number = false;
    container.removeChild(container.lastChild);
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
