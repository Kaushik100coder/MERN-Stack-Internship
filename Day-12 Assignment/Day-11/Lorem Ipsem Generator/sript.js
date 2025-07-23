const wordsList = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
    "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
    "et", "dolore", "magna", "aliqua"
];

function getRandomWord() {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
}

function generateParagraph(wordCount) {
    let words = [];
    for (let i = 0; i < wordCount; i++) {
        words.push(getRandomWord());
    }
    return words.join(" ");
}

function generateLorem() {
    const paraCount = parseInt(document.getElementById("paragraphs").value);
    const wordsPerPara = parseInt(document.getElementById("words").value);
    const tag = document.getElementById("tag").value;
    const includeHTML = document.getElementById("includeHTML").checked;
    const outputDiv = document.getElementById("output");

    let result = "";

    for (let i = 0; i < paraCount; i++) {
        const text = generateParagraph(wordsPerPara);
        if (includeHTML) {
            result += `<${tag}>${text}</${tag}>\n`;
        } else {
            result += `${text}\n\n`;
        }
    }

    if (includeHTML) {
        outputDiv.innerHTML = result;
    } else {
        outputDiv.innerText = result;
    }
}