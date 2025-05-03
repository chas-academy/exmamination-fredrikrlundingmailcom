const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")
const inputDesc = document.getElementById("desc")
const inputAmount = document.getElementById("amount")


const income = []
const expenses = []
const transactions = []

incomeBtn.addEventListener("click", () =>
{
    const desc = inputDesc.value
    const amount = Number(inputAmount.value)

    income.push({desc, amount, type: "Inkomst"})

    if (transactionList) {
        const transactionItem = document.createElement("li");
        transactionItem.innerHTML = `${desc} - ${amount} kr (Inkomst)`;
        transactionList.appendChild(transactionItem);
    }

    ClearInputFields()
    UpdateList(income)
    balance.innerHTML = CalculateBalance()
})

expenseBtn.addEventListener("click", () =>
{
    const desc = inputDesc.value
    const amount = Number(inputAmount.value)

    expenses.push({desc, amount, type: "Utgift"})

    if (transactionList) {
        const transactionItem = document.createElement("li");
        transactionItem.innerHTML = `${desc} - ${amount} kr (Utgift)`;
        transactionList.appendChild(transactionItem);
    }

    ClearInputFields()
    UpdateList(expenses)
    balance.innerHTML = CalculateBalance()
})

function ClearInputFields()
{
    inputAmount.value = ""
    inputDesc.value = ""
}

function UpdateList(list)
{
    if (list === income)
    {
        incomeList.innerHTML = ""
    }
    else
    {
        expenseList.innerHTML = ""
    }

    for (let item of list)
    {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${item.desc} - ${item.amount} kr (${item.type})`

        if (item.type === "Inkomst")
        {
            incomeList.appendChild(listItem)
        }
        else
        {
            expenseList.appendChild(listItem)
        }

    }
   
}

function CalculateBalance()
{
    let incomeAmount = 0
    let expensesAmount = 0

    for (const item of expenses)
    {
        expensesAmount += item.amount
    }

    for (const item of income)
    {
        incomeAmount += item.amount
    }

    return incomeAmount - expensesAmount
}