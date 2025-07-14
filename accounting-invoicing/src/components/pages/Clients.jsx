import { use } from "react";
import React,{ useState } from "react";
export default function Clients() {
  const [users, setUsers] = useState([
    {
      name: "Donald Risher",
      email: "morbi.quis@protonmail.org",
      mobile: "309-300-9739",
      date: "20 Sep, 2022",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Donald Risher",
      email: "morbi.quis@protonmail.org",
      mobile: "309-300-9739",
      date: "20 Sep, 2022",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Donald Risher",
      email: "morbi.quis@protonmail.org",
      mobile: "309-300-9739",
      date: "20 Sep, 2022",
      status: "Disabled",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Donald Risher",
      email: "morbi.quis@protonmail.org",
      mobile: "309-300-9739",
      date: "20 Sep, 2022",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    }])

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    status: "Active",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (

    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 items-center flex justify-between">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowModal(true)}
        >+Add Client</button>
      </div>

      <input type="text"
        placeholder="Search for result"
        className="w-full mb-2 md:w-auto max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <div className="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-600 mb-2 px-4">
        <span>Member Name</span>
        <span>Email</span>
        <span>Mobile</span>
        <span>Registered On</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      <div className="space-y-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow px-4 py-3 grid  md:grid-cols-6 
            gap-4 items-center"
          >
            <div className="flex items-center gap-2">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.name}</span>
            </div>
            <span className="text-sm break-all">{user.email}</span>
            <span className="text-sm">{user.mobile}</span>
            <span className="text-sm">{user.date}</span>
            <span className={`text-sm px-3 py-1 rounded-full w-fit 
            ${user.status === "Active"
                ? "bg-purple-100 text-purple-600"
                : "bg-red-100 text-red-600"}`}>{user.status}</span>

            <div>
              <button className="text-blue-600 text-sm hover:underline">Edit</button>
            </div>

          </div>
        ))}
      </div>
      {
        showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
              <button 
              className="absolute top-2 right-3 text-gray-500 text-xl"
              onClick={
                () => setShowModal(false)}>
                  &times;
                  </button>
              <h2 className="text-xl font-bold mb-4">Add New Client</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Registered Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
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
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
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
        )
      }
    </div>


  )
}