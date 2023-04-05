const h2 = document.createElement("h2");
h2.textContent = "Kelly Etue!";

document.querySelector("body").appendChild(h2);

function addEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('Kellyetue@myaccount.com');
    })
}


