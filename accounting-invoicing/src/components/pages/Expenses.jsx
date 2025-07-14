import { useState } from "react"

export default function Expenses() {
    const [expenses,setExpenses] =useState( [
        {
            expenses: "Office Maintenance",
            company: "Heidenreich-Kautzer",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Approved"
        },
         {
            expenses: "Office Maintenance",
            company: "Heidenreich-Kautzer",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Approved"
        },
         {
            expenses: "Office Maintenance",
            company: "Heidenreich-Kautzer",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Pending"
        },
         {
            expenses: "Office Maintenance",
            company: "Heidenreich-Kautzer",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Approved"
        },
         {
            expenses: "Office Maintenance",
            company: "Heidenreich-Kautzer",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Approved"
        },
    ])
    const [showModal,setShowModal]=useState(false);
    const [formData,setFormData]=useState({
        expenses:"",
        company:"",
        date:"",
        amount:"",
        status:"Approved",
    })
    const handleChange=(e)=>{
        setFormData((prev)=>({
            prev,
            [e.target.expenses]:e.target.value
        }))
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="mb-6 items-center flex justify-between">
                <h1 className="text-2xl font-bold">Expenses Report</h1>
                <button 
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={()=>setShowModal(true)}
                >+ Add Expense</button>
            </div>
            <input
                type="text"
                placeholder="Search for Result"
                className="w-full mb-2 md:w-auto max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <div className="hidden md:grid grid-cols-5 gap-4 font-semibold text-gray-600 mb-2 px-4">
                <span>Expenses</span>
                <span>Company</span>
                <span>Expense Date</span>
                <span>Amount</span>
                <span>Status</span>
            </div>
            <div className="space-y-3">
                {expenses.map((expense, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow px-4 py-3 grid grid-cols-1 md:grid-cols-5
                         gap-4 items-center"
                    >

                        <span className="text-sm">{expense.expenses}</span>
                        <span className="text-sm">{expense.company}</span>
                        <span className="text-sm">{expense.date}</span>
                        <span className="text-sm">{expense.amount}</span>
                        <span className={`text-sm px-3 py-1 rounded-full w-fit${expense.status === "Approved" ?
                            "bg-purple-100 text-purple-600"
                            : "bg-red-100 text-red-600"}`}>{expense.status}
                        </span>

                    </div>
                ))}
            </div>
            {showModal &&(
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
              <button 
              className="absolute top-2 right-3 text-gray-500 text-xl"
              onClick={
                () => setShowModal(false)}>
                  &times;
                  </button>
              <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Expense</label>
                  <input
                    type="text"
                    name="expense"
                    value={formData.expenses}
                    onChange={handleChange}
                    placeholder="Enter Expense"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input
                    type="text"
                    name="cpmpany"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Amount</label>
                  <input
                    type="text"
                    name="amouny"
                    value={formData.amouny}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium">Status</label>
                  <select

                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  >
                    <option value="Active">Approved</option>
                    <option value="Disabled">Pending</option>
                  </select>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                    onClick={()=>setShowModal(false)}
                    >Cancel</button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("submit")
                    }}
                  >Save</button>
                </div>
              </form>

            </div>
          </div>
            )}
        </div>

    )
}