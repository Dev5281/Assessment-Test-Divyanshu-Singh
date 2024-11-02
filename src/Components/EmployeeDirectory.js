import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const employeesData = [
    { id: 1, name: 'Johnson Wood', role: 'Front End Developer', email: 'johnsonwood@microsoft.com', status: 'Active', img:"https://xsgames.co/randomusers/assets/avatars/male/25.jpg" },
    { id: 2, name: 'John Doe', role: 'Team Lead', email: 'johndoe@microsoft.com', status: 'Active', img:"https://xsgames.co/randomusers/assets/avatars/male/31.jpg" },
    { id: 3, name: 'Fakhar Naveed', role: 'UI/UX Designer', email: 'fakhar@microsoft.com', status: 'Active', img:"https://xsgames.co/randomusers/assets/avatars/male/4.jpg" },
    { id: 4, name: 'Alex Made', role: 'Backend Developer', email: 'alexmade@microsoft.com', status: 'Inactive', img:"https://xsgames.co/randomusers/assets/avatars/male/65.jpg" },
    { id: 5, name: 'Johnson Wood', role: 'Front End Developer', email: 'johnsonwood@microsoft.com', status: 'Inactive', img:"https://xsgames.co/randomusers/assets/avatars/male/66.jpg" },
    { id: 6, name: 'John Dee', role: 'Team Lead', email: 'johndee@microsoft.com', status: 'Inactive', img:"https://xsgames.co/randomusers/assets/avatars/male/19.jpg" },
];

function EmployeeDirectory() {
    const [statusFilter, setStatusFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filteredEmployees = employeesData.filter(employee => 
        (statusFilter === 'All' || employee.status === statusFilter) &&
        (employee.name.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="p-8 w-full mx-auto">
            <header className="flex justify-between items-center mb-8">
            <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-1/3"
                />
                <div className="flex items-center">
                    <img src="data:image/jpeg;base64,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" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                    <p className="font-semibold">Divyanshu Singh</p>
                </div>
            </header>
            <div className='text-3xl'>Employees</div>
            <div className="flex space-x-4 mb-6 relative justify-end">
                <button
                    onClick={() => setStatusFilter('All')}
                    className={`px-4 py-2 rounded-full   ${statusFilter === 'All' ? 'bg-purple-300 text-white' : 'bg-white text-gray-700'}`}
                >
                    All
                </button>
                <button
                    onClick={() => setStatusFilter('Active')}
                    className={`px-4 py-2 rounded-full ${statusFilter === 'Active' ? 'bg-purple-300 text-white' : 'bg-white text-gray-700'}`}
                >
                    Active
                </button>
                <button
                    onClick={() => setStatusFilter('Inactive')}
                    className={`px-4 py-2 rounded-full ${statusFilter === 'Inactive' ? 'bg-purple-300 text-white' : 'bg-white text-gray-700'}`}
                >
                    Inactive
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmployees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} />
                ))}
            </div>
        </div>
    );
}

export default EmployeeDirectory;
