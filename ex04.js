const expenses = ["500","350.50","1000"]

// converte valores
const parseExpenses = expenses.map(value => Number(value));

// função calcula gastos e retorna total
function calculateExpenses(expenses) {
    let total = 0;
    for (const value of expenses) {
        if (isNaN(value)) continue  
        total += value;
    }
    return total;
}

// função verifica limite de gastos
function hasExceededLimit(total) {
    return total > 2000 
    ? 'Limite ultrapassado'
    : 'Gasto dentro do limite';
}
// loga primeira lista
console.log( `Total: ${calculateExpenses(parseExpenses)}\n${hasExceededLimit(calculateExpenses(parseExpenses))}\n`)

const expenses2 = ["800","900","700"]
const parseExpenses2 = expenses2.map(value => Number(value))

// loga segunda lista
console.log( `Total: ${calculateExpenses(parseExpenses2)}\n${hasExceededLimit(calculateExpenses(parseExpenses2))}\n`)