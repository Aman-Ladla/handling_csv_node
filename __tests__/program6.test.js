const fetchData = require("../program1");

test("Testing new csv contains added value", async () => {
    const arr = await fetchData("newMagazinesFile");
    // console.log(arr);
    expect(arr).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                "sample magazine 1,4444-5555-6666,null-aman@chocat.org,12.12.2013",
            ]),
        ])
    );
});