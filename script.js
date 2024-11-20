//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {event.preventDefault();
const age = document.getElementById('age').value;
const name = document.getElementById('name').value;

if (!age || !name) {
	alert('Both fields are required!');
	return;
}

const ageValidationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000); // 4 seconds delay
  });

ageValidationPromise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry, Doe. You aren\'t old enough.`);
    });
});