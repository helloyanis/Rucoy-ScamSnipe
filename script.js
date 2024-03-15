document.addEventListener("DOMContentLoaded", (event) => {
  loadJSONData();
});
async function loadJSONData() {
    fetch("scammer_list.json")
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                document.querySelector(".cardcont").innerHTML += `<div class="card">
          <div class="card-header">
            <h2>${element.name}</h2>
          </div>
          <div class="card-body">
            <p>
              <strong>Scam Type:</strong> ${element.reason}
            </p>
            <p>
              <strong>Discord account(s) IDs:</strong> ${element.discord_accounts.join(', ') }
            </p>
            <p>
              <strong>In-game name history:</strong> ${element.name_history.join(', ')}
            </p>
          </div>
        </div>`;
            });
        });
}

