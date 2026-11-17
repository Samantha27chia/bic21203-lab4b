const firstBookTitle = document.getElementById("firstBookTitle");
const secondBookAuthor = document.getElementById("secondBookAuthor");
const genresContainer = document.getElementById("genres");
const status = document.getElementById("status");

async function loadBooks() {
  try {
    const response = await fetch("books.json");

    // fetch() does not reject automatically for HTTP error status codes.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.books) || data.books.length < 2) {
      throw new Error("The JSON file does not contain the expected book data.");
    }

    firstBookTitle.textContent = `First book title: ${data.books[0].title}`;
    secondBookAuthor.textContent = `Second book author: ${data.books[1].author}`;

    // Display each book's genres in a separate paragraph.
    genresContainer.textContent = "";
    data.books.forEach((book) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `${book.title} — ${book.genres.join(", ")}`;
      genresContainer.appendChild(paragraph);
    });

    status.textContent = "Book data loaded successfully.";
  } catch (error) {
    status.textContent = "Unable to load book data. Check the JSON file and run this page using a local server.";
    console.error("Error loading books:", error);
  }
}

loadBooks();
