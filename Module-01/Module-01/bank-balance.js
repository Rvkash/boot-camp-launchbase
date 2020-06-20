const user = {
  name: 'Rafael',
  transactions: [],
  balance: 0
}

function createTransaction (transaction) {
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
    user.balance = user.balance + transaction.value
  } else {
    user.balance = user.balance - transaction.value
  }
}

function getHigherTransactionByType (type) {
  let higherTransaction
  let higherValue = 0

  for (const transaction of user.transactions) {
    if (transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue () {
  let sum = 0

  for (const transaction of user.transactions) {
    sum += transaction.value
  }

  return sum / user.transactions.length
}

function getTransactionsCount () {
  const count = {
    credit: 0,
    debit: 0
  }

  for (const transaction of user.transactions) {
    if (transaction.type === 'credit') { count.credit++ } else { count.debit++ }
  }

  return count
}

createTransaction({ type: 'credit', value: 90 })
createTransaction({ type: 'credit', value: 100 })
createTransaction({ type: 'debit', value: 70 })
createTransaction({ type: 'debit', value: 15 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit')) //

console.log(getAverageTransactionValue())
console.log(getTransactionsCount())
