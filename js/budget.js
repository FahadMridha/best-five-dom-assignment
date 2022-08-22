function getFieldValueById(InputId) {
    const fieldValue = parseInt(document.getElementById(InputId).value);
    return fieldValue;
}

function getTextElementValueById(InputId) {
    const elementTextValue = parseInt(document.getElementById(InputId).innerText);
    return elementTextValue;
}

function setTextElementValue(inputid, result) {
    const elementValue = document.getElementById(inputid);
    elementValue.innerText = result;
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFieldValueById('player-cost');
    // const playerNumber = getTextElementValueById('player-number');
    const totalPlayer = playerArray.length
    // console.log(totalPlayer);
    const totalCost = perPlayerCost * totalPlayer;
    setTextElementValue('player-expenses', totalCost);
})
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = getTextElementValueById('player-expenses')
    const managerCost = getFieldValueById('manager-cost');
    const coachCost = getFieldValueById('coach-cost');
    const totalExpenses = playerExpenses + managerCost + coachCost;
    setTextElementValue('final-total', totalExpenses)
})