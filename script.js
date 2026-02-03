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

expenseBtn.addEventListener("click", () => {
  price.style.display = "block";
  item.style.display = "block";
  addItem.style.display = "block";
  expenseModal.style.position = "absolute";
});

addItem.addEventListener("click", () => {
  if (!price.value && !item.value) {
    alert("Item and Price cannot be empty!!");
  } else {
    price.style.display = "none";
    item.style.display = "none";
    price.value = "";
    item.value = "";
    addItem.style.display = "none";
    expenseModal.style.position = "";
  }
});

addBtn.addEventListener("click", () => {
  budget.style.display = "block";
  confirm.style.display = "block";
  modal.style.position = "absolute";
});

confirm.addEventListener("click", () => {
  if (!budget.value) {
    alert("Budget cannot be empty!!");
  } else {
    let value = budget.value.replace(/,/g, "");
    budget.style.display = "none";
    confirm.style.display = "none";
    modal.style.position = "";
    budget.value = "";
    amount.innerHTML = "₹" + Number(value).toLocaleString("en-IN");
  }
});
