document.addEventListener("DOMContentLoaded", (event) => {
  loadJSONData();
  document.querySelector("#search").addEventListener("keyup", search);
  document.querySelector("#searchform").addEventListener("submit", handleForm);
});
async function loadJSONData() {
    fetch("scammer_list.json")
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                document.querySelector(
                  ".cardcont"
                ).innerHTML += `<div class="card" onclick="window.open('https://www.rucoyonline.com/characters/${element.name}')">
          <div class="card-header">
            <h2>${element.name}</h2>
          </div>
          <div class="card-body">
            <p>
              <strong>Scam Type:</strong><br>${element.reason}
            </p>
            <p>
              <strong>Discord account(s) IDs:</strong><br>${element.discord_accounts.join(
                ", "
              )}
            </p>
            <p>
              <strong>Name history:</strong><br>${element.name_history.join(
                ", "
              )}
            </p>
          </div>
        </div>`;
            });
        });
}

function search() {
  let input = document.querySelector('#search').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card');
  
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
    }
    else {
      x[i].style.display="block";        
    }
  }
}
function handleForm(event) {
  event.preventDefault();
}

