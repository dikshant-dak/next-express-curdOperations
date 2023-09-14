import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ id }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getOneCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:8005/customers/${id}`);
                const userData = response.data;
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        getOneCustomer();
    }, [id]);

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="font-semibold">User Details</h2>
            {user ? (
                <div className="p-5">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Address: {user.address}</p>
                    <p>Date of Birth: {user.dateOfBirth}</p>
                    <p>Gender: {user.gender}</p>

                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}

export default UserDetails;
