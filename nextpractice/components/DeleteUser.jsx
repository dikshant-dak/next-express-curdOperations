import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
    const [userIdToDelete, setUserIdToDelete] = useState('');
    // const [deletionStatus, setDeletionStatus] = useState(null);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8005/customers/${userIdToDelete}`);
            setDeletionStatus('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h2>Delete User</h2>
            <label>
                User ID:
                <input className="border border-solid border-gray-400 focus:border-blue-500 focus:outline-none ml-2"
                    type="text"
                    value={userIdToDelete}
                    onChange={(e) => setUserIdToDelete(e.target.value)}
                />
            </label>
            <button className="ml-2" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default DeleteUser;