// Select the question form element
const questionForm = document.getElementById('ask-question');

// Add event listener for form submission (prevents default form submission)
questionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the subject and question values from the form
  const subject = document.getElementById('subject').value;
  const question = document.getElementById('question').value;

  // Validate subject and question (optional)
  if (subject.trim() === '' || question.trim() === '') {
    alert('Please enter both subject and question!');
    return;
  }

  // Simulate form submission (for now, display an alert)
  alert(`Subject: ${subject}\nQuestion: ${question}`);

  // Clear the form after submission (optional)
  questionForm.reset();
});
