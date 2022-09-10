const fs = require("fs");
const { parse } = require("csv");

let result = [];

const fetchData = async (data) => {
    result = [];
    const fd = fs
        .createReadStream(`./${data}.csv`)
        .pipe(parse({ delimiter: ";", from_line: 1, relax_quotes: true }));

    return new Promise((resolve, reject) => {
        fd.on("data", function (row) {
            result.push(row);
        }).on("error", function (error) {
            result.length = 0;
            reject();
            console.log(error.message);
        });

        return fd.on("end", function () {
            console.log("finished");
            resolve([...result]);
        });
    });
};

module.exports = fetchData;
