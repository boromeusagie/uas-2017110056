import React from 'react';
import Sidebar from '@/Layouts/Templates/Sidebar';
import Footer from './Templates/Footer';
import Header from './Templates/Header';
import Main from './Templates/Main';

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar auth={auth} />
            <div className="relative md:ml-64 bg-gray-50 min-h-screen">
                <Header />

                <Main header={header} children={children} />

                <Footer auth={auth} />
            </div>
        </div>
    );
}
