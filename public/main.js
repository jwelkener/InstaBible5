const verseInputField = document.getElementById('verseInput');

// Function to check if the entered value is a valid verse format
function isValidVerseFormat(verse) {
	const verseRegex = /^[a-zA-Z]+\s\d+:\d+$/;
	return verseRegex.test(verse);
  }

// Listen for input events on the verse input field
verseInputField.addEventListener('input', function () {
    const verseInput = verseInputField.value;
    // const imageInput = imageInputField.value;
    if (isValidVerseFormat(verseInput)) {
        // Fetch and display the verse only if the image is already present
        fetchVerseAndDisplay(verseInput).catch((error) => {
            // Handle error as needed
            console.error('Error displaying verse after image:', error);
        });
    }
});

async function fetchVerseAndDisplay (verse) {
	console.log(verse);
	const res = await fetch ('/verse-search', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'post', 
		body: JSON.stringify({searchText:verse})
	})
	const json = await res.json();
	console.log(json);
}
