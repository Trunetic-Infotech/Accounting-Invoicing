import { useState } from "react"

export default function ExpenseReport() {
    const [payments, setPayments] = useState([
        {
            member: "Donald Risher",
            details: "Maintenance",
            date: "20 Sep, 2022",
            amount: "$1200.00",
            status: "Approved",
            type: "Google Pay"
        },
        {
            member: "Brody Holman",
            details: "Flight Booking",
            date: "20 Sep, 2022",
            amount: "$240.00",
            status: "Approved",
            type: "Credit Card",
        },
        {
            member: "Jolie Hood",
            details: "Office Rent",
            type: "Cash",
            date: "20 Sep, 2022",
            amount: "$3600.00",
            status: "Failed",

        },
        {
            member: "Howard Lyons",
            details: "Maintenance",
            date: "20 Sep, 2022",
            amount: "$3200.00",
            type: "gpay",
            status: "Pending"
        },
        {
            member: "Howard Oneal",
            details: "Office Rent",
            date: "20 Sep, 2022",
            amount: "$240.00",
            type: "gpay",
            status: "Approved"
        },
    ])
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        member: "",
        details: "",
        type: "",
        date: "",
        amount: "",
        status: "Approved",
    });
    const handleChange = (e) => {
        setFormData((prev) => ({
            prev,
            [e.target.member]: e.target.value,
        }))
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="mb-6 items-center flex justify-between">
                <h1 className="text-2xl font-bold">Payments</h1>
                <button 
                onClick={()=>setShowModal(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg">+ Add Payment</button>
            </div>
            <input
                type="text"
                placeholder="Search for Result"
                className="w-full mb-2 md:w-auto max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <div className="hidden md:grid grid-cols-7 gap-4 font-semibold text-gray-600 mb-2 px-4">
                <span>Member</span>
                <span> Date</span>
                <span>Payment Details</span>
                <span>Payment Type</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Action</span>
            </div>
            <div className="space-y-3">
                {payments.map((payment, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow px-4 py-3 grid grid-cols-1 md:grid-cols-7
                         gap-4 items-center"
                    >

                        <span className="text-sm">{payment.member}</span>
                        <span className="text-sm">{payment.date}</span>
                        <span className="text-sm">{payment.details}</span>
                        <span className="text-sm">{payment.type}</span>
                        <span className="text-sm">{payment.amount}</span>
                        <span
                            className={`text-sm px-3 py-1 rounded-full w-fit ${payment.status === "Approved"
                                ? "bg-purple-100 text-purple-600"
                                : payment.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                        >
                            {payment.status}
                        </span>
                        <div>
                            <button className="text-blue-600 text-sm hover:underline">Edit</button>
                        </div>

                    </div>
                ))}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-blck bg-opacity-50 flex items-center justify-center z-50">
                    <div  className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                        <button className="absolute top-2 right-3 text-gray-500 text-xl"
                        onClick={()=>setShowModal(false)}
                        >&times;</button>
                        <h2 className="text-xl font-bold mb-4">Add Payment</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Member</label>
                                <input
                                    type="text"
                                    name="member"
                                    value={formData.member}
                                    onChange={handleChange}
                                    placeholder="Enter member"
                                    className="w-full border border-gray-300 px-3 py-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-3 py-2 rounded"
                                    
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Details</label>
                                <input
                                    type="text"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Enter details"
                                    className="w-full border border-gray-300 px-3 py-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Payment Type</label>
                                <select
                                    
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    
                                    className="w-full border border-gray-300 px-3 py-2 rounded"
                                ><option value="Cash">Cash</option>
                                <option value="Cash">Card</option>
                                <option value="Cash">Online Payment</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Amount</label>
                                <input
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
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
                    <option value="Disabled">Failed</option>
                  </select>
                </div>
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                                    onClick={()=>setShowModal(false)}>Cancel</button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded"
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            alert("submit")
                                        }}
                                        >Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            )
            }

        </div>

    )
}