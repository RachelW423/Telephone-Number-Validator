const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const telephoneCheck = (userInput) => {
  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const combined = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

  const phoneTest = document.createElement('p');
  phoneTest.className = 'results-text';
  phoneTest.style.color = combined.test(userInput) ? '#00ff00' : '#ff0000';
  phoneTest.appendChild(
    document.createTextNode(
      `${combined.test(userInput) ? 'Valid' : 'Invalid'} US number: ${userInput}`
    )
  );
  resultsDiv.appendChild(phoneTest);
};

checkBtn.addEventListener('click', () => {
  telephoneCheck(userInput.value);
  userInput.value = '';
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});