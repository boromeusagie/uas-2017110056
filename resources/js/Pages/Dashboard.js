import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const user = props.user;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl md:text-3xl leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="container mx-auto md:px-4">
                    <div className="w-full mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">Welcome, {user.name}!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="container mx-auto md:px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="container mx-auto md:px-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
