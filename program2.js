const data = require("./fetchingData");

const main = async () => {
    const { authorsData, booksData, magazinesData } = await data.fetchingData();

    const finalData = {
        authorsData,
        booksData,
        magazinesData,
    };

    console.log(finalData);
};

main();
