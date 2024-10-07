import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod
    }

    // addRecord(newRecord)
    setDescription("")
    setAmount("")
    setCategory("")
    setPaymentMethod("")
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            required 
            className="input" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            required 
            className="input" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select 
            required 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Payment Method:</label>
          <select 
            required 
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit">
          Add Record
        </button>
      </form>
    </div>
  )
}