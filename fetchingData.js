const fetchData = require("./program1");

const fetchingData = async () => {
    let authors = [];
    let books = [];
    let magazines = [];

    const authorsData = [];
    const booksData = [];
    const magazinesData = [];

    authors = await fetchData("authors");
    books = await fetchData("books");
    magazines = await fetchData("magazines");
    // console.log(authors);
    // console.log(books);
    // console.log(magazines);

    for (let i = 1; i < authors.length; i++) {
        const author = authors[i];
        const tempObj = {};
        for (let j = 0; j < author.length; j++) {
            if (j === 0) {
                tempObj[authors[0][j].substring(1)] = author[j];
            } else {
                tempObj[authors[0][j]] = author[j];
            }
        }
        authorsData.push(tempObj);
    }

    for (let i = 1; i < books.length; i++) {
        const book = books[i];
        const tempObj = {};
        for (let j = 0; j < book.length; j++) {
            if (j === 0) {
                tempObj[books[0][j].substring(1)] = book[j];
            } else {
                tempObj[books[0][j]] = book[j];
            }
        }
        booksData.push(tempObj);
    }

    for (let i = 1; i < magazines.length; i++) {
        const magazine = magazines[i];
        const tempObj = {};
        for (let j = 0; j < magazine.length; j++) {
            if (j === 0) {
                tempObj[magazines[0][j].substring(1)] = magazine[j];
            } else {
                tempObj[magazines[0][j]] = magazine[j];
            }
        }
        magazinesData.push(tempObj);
    }

    return { authorsData, booksData, magazinesData };
};

module.exports.fetchingData = fetchingData;
