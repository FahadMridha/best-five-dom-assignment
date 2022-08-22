const playerArray = [];

function display(playerList) {
    const addedPlayerList = document.getElementById('player-name');
    addedPlayerList.innerHTML = '';
    for (let i = 0; i < playerList.length; i++) {
        const name = playerList[i];
        // console.log(name)
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>`;
        if (playerArray.length > 5) {
            alert('you selecet Max five Players')
            return;
        }
        addedPlayerList.appendChild(tr);

    }
}

function addToList(element) {
    // console.log(element.parentNode.parentNode.children[1].innerText)
    const playerName = element.parentNode.parentNode.children[1].innerText;
    playerArray.push(playerName);
    // console.log(playerArray);
    document.getElementById('total-added-player').innerText = playerArray.length;
    display(playerArray);
}