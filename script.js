let budget = document.querySelector("#budget");
let add = document.querySelector("#add");
let confirm = document.querySelector("#confirm");
let modal = document.querySelector("#modal");
let amount = document.querySelector("#amount");
add.addEventListener("click", () => {
  budget.style.display = "block";
  confirm.style.display = "block";
  modal.style.position = "absolute";
});

confirm.addEventListener("click", () => {
  if (!budget.value) alert("Budget cannot be empty!!");
  else {
    let value = budget.value.replace(/,/g, "");
    budget.style.display = "none";
    confirm.style.display = "none";
    modal.style.position = "";
    budget.value = "";
    amount.innerHTML = "₹" + Number(value).toLocaleString("en-IN");
  }
});
