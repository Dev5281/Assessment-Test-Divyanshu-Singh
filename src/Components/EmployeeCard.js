import React from 'react';

function EmployeeCard({ employee }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <img src={employee.img} alt={employee.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{employee.name}</h3>
            <p className="text-sm text-gray-600">{employee.role}</p>
            <p className="text-sm text-gray-600">{employee.email}</p>
            <div className="mt-3">
                <button className="bg-red-500 text-white px-4 py-1 rounded-lg mr-2">Block</button>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Details</button>
            </div>
        </div>
    );
}

export default EmployeeCard;