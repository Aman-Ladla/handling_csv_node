const data = require("./fetchingData");

const main = async () => {
    const { booksData, magazinesData } = await data.fetchingData();

    const tbdIsbn = "2365-5632-7854";
    let found = false;

    for (let book of booksData) {
        if (book.isbn === tbdIsbn) {
            console.log(book.title);
            found = true;
            break;
        }
    }

    if (!found) {
        for (let magazine of magazinesData) {
            if (magazine.isbn === tbdIsbn) {
                console.log(magazine.title);
                found = true;
                break;
            }
        }
    }
};

main();
