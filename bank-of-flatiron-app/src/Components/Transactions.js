import {useState, useEffect} from 'react'


function Transactions() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function fetchTransactions(){
            const response = await fetch("http://localhost:8001/transactions")
            const transactions = await response.json()
            setTransactions(transactions)
        }
        fetchTransactions()
    },  [])

  return (
    <div>
        <table className='table'>
           <thead>
            <tr>
                <th>No</th>
                <th>Date</th>
                <th>Desription</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            </thead> 
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default Transactions