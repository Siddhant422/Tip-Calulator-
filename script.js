const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {

  const bill = Number(billInput.value);

  const tipPercentage = Number(tipInput.value) / 100;

  const tipAmount = bill * tipPercentage;

  const total = Number(bill + tipAmount);

  const PerPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${PerPersonTotal.toFixed(2).toLocaleString('en-US')}`;
}
const increasePeople = () => {

  numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}


const decreasePeople = () => {

  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}