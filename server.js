const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let jsonData = require("./scammer_list.json");
let fs = require('fs');
const fetch = require('node-fetch'); 

async function getUserInfo(name) {
    //Fetch the website for character info
    try {
            const response = await fetch(`https://www.rucoyonline.com/characters/${name}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "cors"
            });
            const data = await response.text();
            const doc = new JSDOM(data).window.document;
            const newNameElement = doc.querySelector(".character-table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)");
            if (newNameElement) {
                return newNameElement.textContent;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
            return null;
        }
}
async function main() {
    for (let i = 0; i < jsonData.length; i++) {
        for (let oldName in jsonData[i]) {
            let newName = await getUserInfo(oldName);
            if (oldName !== newName) {
                jsonData[i][newName] = jsonData[i][oldName];
                delete jsonData[i][oldName];
            }
        }
    }
    //Write the new json file
    fs.writeFileSync('scammer_list.json', JSON.stringify(jsonData));
}

main();
