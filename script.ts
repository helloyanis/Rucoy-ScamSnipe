document.addEventListener("DOMContentLoaded", (event) => {

});
async function loadJSONData(){
    fetch("scammer_list.json")
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
}

