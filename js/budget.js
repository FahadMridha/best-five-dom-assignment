//<<<<... calculate  player expenses and set valu .....>>>//
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFieldValueById('player-cost');
    const totalPlayer = getTextElementValueById('total-added-player');
    const totalCost = perPlayerCost * totalPlayer;
    setTextElementValue('player-expenses', totalCost);
})
/// calculate total expenses and set totat expenses......>>>>//
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = getTextElementValueById('player-expenses')
    const managerCost = getFieldValueById('manager-cost');
    const coachCost = getFieldValueById('coach-cost');
    if (isNaN(playerExpenses) || isNaN(managerCost) || isNaN(coachCost)) {
        alert('please provide valid number input')
        return;
    }
    if ((playerExpenses < 0) || (managerCost < 0) || (coachCost < 0)) {
        alert('please provide posative number input')
        return;
    }
    const totalExpenses = playerExpenses + managerCost + coachCost;
    setTextElementValue('final-total', totalExpenses)
})