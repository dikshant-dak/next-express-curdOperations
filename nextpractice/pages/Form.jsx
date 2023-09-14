import React, { useState } from 'react';
import axios from "axios";

const Form = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8005/customers', userData);
            const newUser = response.data;
            onUserAdded(newUser);

            setUserData({
                name: "",
                email: "",
                phone: "",
                address: "",
                dateOfBirth: "",
                gender: ""

            });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center  p-20">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit} className="">
                <div className="p-10">
                    <label>Name:</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9" type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
                </div>
                <div className="p-10">
                    <label >Email:</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9"  type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                </div>
                <div className="p-10">
                    <label>Phone:</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9"  type="phone" id="phone" name="phone" value={userData.phone} onChange={handleChange} />
                </div>
                <div className="p-10">
                    <label >Address</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9"  id="text" name="address" value={userData.address} onChange={handleChange} />
                </div>
                <div>
                    <label>Date Of Birth:</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9"  type="text" id='dateOfBirth' name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} />
                </div>
                <div className="p-10">
                    <label>Gender:</label>
                    <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-9" type="text" id="gender" name="gender" value={userData.gender} onChange={handleChange} />
                </div>

                <div className="flex justify-center items-center">
                    <button className="bg-[#FF385C] text-white w-20 h-10 rounded-lg hover:opacity-80">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
