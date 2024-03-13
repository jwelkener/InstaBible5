// Array of books with corresponding chapters
const books = [
	{ name: "Genesis", chapters: 50 },
	{ name: "Exodus", chapters: 40 },
	{ name: "Leviticus", chapters: 27 },
	// Add other books with their chapters
  ];
  
  // Function to populate the books dropdown
  function populateBooks() {
	const bookSelect = document.getElementById("bookSelect");
	books.forEach(book => {
	  const option = document.createElement("option");
	  option.value = book.name;
	  option.textContent = book.name;
	  bookSelect.appendChild(option);
	});
  }
  
  // Function to populate the chapters dropdown based on the selected book
  function populateChapters() {
	const bookName = document.getElementById("bookSelect").value;
	const selectedBook = books.find(book => book.name === bookName);
	const chapterSelect = document.getElementById("chapterSelect");
	chapterSelect.innerHTML = ''; // Clear previous options
	for (let i = 1; i <= selectedBook.chapters; i++) {
	  const option = document.createElement("option");
	  option.value = i;
	  option.textContent = "Chapter " + i;
	  chapterSelect.appendChild(option);
	}
  }
  
  // Function to populate the verses dropdown based on the selected chapter
  function populateVerses() {
	const verseSelect = document.getElementById("verseSelect");
	verseSelect.innerHTML = ''; // Clear previous options
	const selectedChapter = document.getElementById("chapterSelect").value;
	const totalVerses = 10; // For demonstration, you can replace this with the actual number of verses in the selected chapter
	for (let i = 1; i <= totalVerses; i++) {
	  const option = document.createElement("option");
	  option.value = i;
	  option.textContent = "Verse " + i;
	  verseSelect.appendChild(option);
	}
  }
  
  // Populate books initially and listen for changes to update chapters and verses
  populateBooks();
  document.getElementById("bookSelect").addEventListener("change", populateChapters);
  document.getElementById("chapterSelect").addEventListener("change", populateVerses);
  