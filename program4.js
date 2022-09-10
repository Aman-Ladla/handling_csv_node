const fn = require("./fetchingData");

const main = async () => {
    const { authorsData, booksData, magazinesData } = await fn.fetchingData();

    const data = {};

    for (const author of authorsData) {
        data[author.email] = [];
    }

    for (const book of booksData) {
        const bookAuthors = book.authors.split(",");

        for (const bookAuthor of bookAuthors) {
            data[bookAuthor].push(book.title);
        }
    }

    for (const magazine of magazinesData) {
        const magazineAuthors = magazine.authors.split(",");

        for (const magazineAuthor of magazineAuthors) {
            data[magazineAuthor].push(magazine.title);
        }
    }

    console.log(data);
};

main();
