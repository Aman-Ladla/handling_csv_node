const fn = require("./fetchingData");

const main = async () => {
    const { booksData, magazinesData } = await fn.fetchingData();

    let temp = booksData.concat(magazinesData);

    temp.sort((a, b) => {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    });

    console.log(temp);
};

main();
