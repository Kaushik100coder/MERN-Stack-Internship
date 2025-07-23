const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("stmnt");
const apiUrl = "https://dummyjson.com/quotes/random";

const options = {
    method: "GET"
}

const getJoke = async() => {
    try {
        quoteE1.innerText = "Loading..."
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log(data);

        const quote = data.quote;
        quoteE1.innerText = quote;

    } catch (error) {
        quoteE1.innerText = "An error happended, try again later."
        console.log(error);

    }

};

getJoke();
btnE1.addEventListener("click", getJoke);