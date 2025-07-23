const passwordInput = document.getElementById("password");
const strengthText = document.querySelector("#strength span");

passwordInput.addEventListener("input", function() {
    const value = passwordInput.value;

    if (value.length === 0) {
        strengthText.textContent = "—";
        strengthText.style.color = "#e74c3c";
        return;
    }

    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSymbol = /[^a-zA-Z0-9]/.test(value);

    if (hasLowercase && !hasUppercase && !hasSymbol && value.length >= 4) {
        strengthText.textContent = "Easy";
        strengthText.style.color = "#f39c12";
    } else if (hasLowercase && hasUppercase && hasDigit && !hasSymbol) {
        strengthText.textContent = "Moderate";
        strengthText.style.color = "#27ae60";
    } else if (hasLowercase && hasUppercase && hasDigit && hasSymbol) {
        strengthText.textContent = "Hard";
        strengthText.style.color = "#2980b9";
    } else {
        strengthText.textContent = "Weak";
        strengthText.style.color = "#e67e22";
    }
});