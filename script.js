let budget = document.querySelector("#budget");
let addBtn = document.querySelector("#add");
let confirm = document.querySelector("#confirm");
let modal = document.querySelector("#modal");
let amount = document.querySelector("#amount");
let expenseModal = document.querySelector("#expenseModal");
let expenseBtn = document.querySelector("#expense");
let price = document.querySelector("#price");
let item = document.querySelector("#item");
let addItem = document.querySelector("#addItem");
let list = document.querySelector("#list");
let cancelBtn = document.querySelector("#cancel");

expenseBtn.addEventListener("click", () => {
  price.style.display = "block";
  item.style.display = "block";
  addItem.style.display = "block";
  expenseModal.style.position = "absolute";
  cancelBtn.style.display = "block";
});

addItem.addEventListener("click", () => {
  if (!price.value && !item.value) {
    alert("Item and Price cannot be empty!!");
  } else {
    addExpense(item.value, price.value);
    displayExpense();
    revertExpenseModal();
  }
});

cancelBtn.addEventListener("click", () => {
  revertExpenseModal();
  revertModal();
});

function revertExpenseModal() {
  price.style.display = "none";
  item.style.display = "none";
  price.value = "";
  item.value = "";
  addItem.style.display = "none";
  expenseModal.style.position = "";
  cancelBtn.style.display = "none";
}

function revertModal() {
  budget.style.display = "none";
  confirm.style.display = "none";
  modal.style.position = "";
  budget.value = "";
  cancelBtn.style.display = "none";
}

let expenses = JSON.parse(localStorage.getItem("Expense")) || [];
function addExpense(name, amount) {
  const expense = {
    name: name,
    amount: amount,
  };
  expenses.push(expense);
  localStorage.setItem("Expense", JSON.stringify(expenses));
  updateBudget(amount);
}

function displayExpense() {
  list.innerHTML = "";

  expenses.forEach((exp) => {
    const li = document.createElement("li");
    li.classList.add("expense-item");

    li.textContent = `${exp.name}       ${"₹" + Number(exp.amount).toLocaleString("en-IN")}`;

    list.appendChild(li);
  });
}

window.addEventListener("load", () => {
  displayExpense();
  setBudget();
});

addBtn.addEventListener("click", () => {
  budget.style.display = "block";
  confirm.style.display = "block";
  modal.style.position = "absolute";
  cancelBtn.style.display = "block";
});

confirm.addEventListener("click", () => {
  if (!budget.value) {
    alert("Budget cannot be empty!!");
  } else {
    let value = budget.value.replace(/,/g, "");
    revertModal();
    localStorage.setItem("Budget", value);
    setBudget();
  }
});

function setBudget() {
  let budget = localStorage.getItem("Budget");
  if (budget < 0) {
    amount.style.color = "red";
  }
  amount.innerHTML = "₹" + Number(budget).toLocaleString("en-IN");
}

function updateBudget(amount) {
  let budget = localStorage.getItem("Budget");
  let price = amount;
  let updatedBudget = budget - price;
  localStorage.setItem("Budget", updatedBudget);
  setBudget();
}
