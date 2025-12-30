const expense = {
    houseRent : 5000,
    meal :3000,
    personalEx : 2000
}
function calculateSavings(expense,income){
    if(typeof income !== "number"){return "invalid input"}
    const totalExpenses = expense.houseRent+ expense.meal + expense.personalEx 
    if(income<totalExpenses ){return "earn more"}
    const savings = income - totalExpenses
    return savings 
}

console.log(calculateSavings(expense,7600))