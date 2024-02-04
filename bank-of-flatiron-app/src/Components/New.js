import {useState} from 'react'

function New() {
    const [formData, newFormData] = useState({
        category: "",
        description: "",
        amount: "",
        date: ""
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        newFormData({
            ...formData,
            [name]: value
        })
    }
    async function NewTransaction(e){
       e.preventDefault()
       try {
            const response = await fetch("http://localhost:8001/transactions", {
                method: "post",
                headers: { "Content-Type": 'application/json'},
                body: JSON.stringify(formData)
            })
            if(response.ok){
                alert("Transaction was created successfully!")
                newFormData({
                    category: '',
                    description: '',
                    amount: '',
                    date: ''
                })
            }else{
                console.log("Failed to create transaction")
            }

       } catch (error) {
        console.log("Error occured while creating Transaction: ", error)
       } 
    }
  return (
    <div>
        <form onSubmit={NewTransaction}>
            <input 
                type="text" 
                name='category'
                placeholder="Category" 
                onChange={handleInputChange}/>
            <input 
                type="text" 
                name='description'
                placeholder="Description" 
                onChange={handleInputChange}/>
            <input 
                type="number" 
                name='amount'
                placeholder="Amount" 
                onChange={handleInputChange}/>
            <input 
            type="date" 
            name='date'
            placeholder="Date"
            onChange={handleInputChange}/>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default New;