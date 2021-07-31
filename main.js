let form = document.getElementById("stockForm");

let purchasePrice = document.getElementById("initial");

let quantity = document.getElementById("quant");

let currentPrice = document.getElementById("curr");

let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.body.style.backgroundColor = "white";

    if (Number(currentPrice.value) <= 0 || Number(purchasePrice.value) <= 0 || Number(quantity.value) <= 0) {
        result.innerHTML = "Please enter values greater than 0."
    }
    else {
        let diff = Number(currentPrice.value) - Number(purchasePrice.value);

        let outcome = "gained", outcome2 = "profit", emoji = "🤑";

        if (diff < 0) {
            outcome = "lost";

            outcome2 = "loss";

            diff = Math.abs(diff);

            emoji = "😞";
        }

        let percent = (diff / Number(purchasePrice.value)) * 100;

        diff = diff * Number(quantity.value);

        if (percent >= 50) {
            if (outcome2 === "profit") {
                document.body.style.backgroundColor = "	#98FB98";
            }
            else {
                document.body.style.backgroundColor = "#ffcccb";
            }
        } else {
            document.body.style.backgroundColor = "#98c8f9";
        }

        percent = percent.toFixed(2);

        diff = diff.toFixed(2);

        let res = `You ${outcome} ${percent}% ${emoji} . Total ${outcome2} is ₹${diff}.`

        result.innerHTML = res;
    }
})