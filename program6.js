const fn = require("./fetchingData");
const { stringify } = require("csv");
const fs = require("fs");

const main = async () => {
    const { booksData, magazinesData } = await fn.fetchingData();

    booksData.push({
        title: "sample book 1",
        isbn: "1111-2222-3333",
        authors: "null-aman@chocat.org",
        publishedAt: "12.12.2012",
    });

    magazinesData.push({
        title: "sample magazine 1",
        isbn: "4444-5555-6666",
        authors: "null-aman@chocat.org",
        publishedAt: "12.12.2013",
    });

    stringify(booksData, { header: true }, (err, output) => {
        fs.writeFile(__dirname + "/newBooksFile.csv", output, () => {
            if (err) console.log(err);
        });
    });

    stringify(magazinesData, { header: true }, (err, output) => {
        fs.writeFile(__dirname + "/newMagazinesFile.csv", output, () => {
            if (err) console.log(err);
        });
    });
};

main();
