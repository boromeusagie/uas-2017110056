import React from 'react';
import Switch from '@/Components/Form/SwitchToggle';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full block py-4">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-gray-200" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
                            Copyright © <span id="get-current-year"></span>
                            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm font-semibold py-1">
                                Boromeus Agie
                            </a>
                        </div>
                    </div>

                    <Switch />
                </div>
            </div>
        </footer>
    );
}
