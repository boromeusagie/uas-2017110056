import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Switch from '@/Components/SwitchToggle';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav
                className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
            >
                <div
                    className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
                >
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden absolute w-full left-0 top-28 bg-white'}>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-boxes mr-2 text-sm opacity-75"></i>
                                Product
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-chart-bar mr-2 text-sm opacity-75"></i>
                                Sales
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-file-invoice mr-2 text-sm opacity-75"></i>
                                Report
                            </ResponsiveNavLink>
                        </div>
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                                <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                    <ApplicationLogo className="block h-20 md:h-36 w-auto fill-current text-center" />
                    <ul className="md:hidden items-center flex flex-wrap list-none w-12">
                        <li className="inline-block relative">
                        </li>
                    </ul>
                    <div
                        className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
                        id="example-collapse-sidebar"
                    >
                        <div
                            className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200"
                        >
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <ApplicationLogo className="block h-36 w-auto fill-current" />
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Divider --> */}
                        <hr className="my-4 md:min-w-full" />

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Dashboard
                            </NavLink>
                            <NavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-boxes mr-2 text-sm opacity-75"></i>
                                Product
                            </NavLink>
                            <NavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-chart-bar mr-2 text-sm opacity-75"></i>
                                Sales
                            </NavLink>
                            <NavLink href={route('login')} active={route().current('login')}>
                                <i className="fas fa-file-invoice mr-2 text-sm opacity-75"></i>
                                Report
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="relative md:ml-64 bg-gray-50 min-h-screen">
                <nav
                    className="hidden absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start md:flex md:items-center p-4"
                >
                    <div
                        className="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4"
                    >
                        <Dropdown>
                            <Dropdown.Trigger>
                                <a
                                    className="text-gray-500 block"
                                    href="#"
                                >
                                    <div className="items-center flex">
                                        <span
                                            className="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full"
                                        ><img
                                                alt="..."
                                                className="w-full rounded-full align-middle border-none shadow-lg"
                                                src="../../images/team-1-800x800.jpg"
                                            /></span>
                                    </div>
                                </a>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>
                {/* <!-- Header --> */}
                <div className="md:pt-20 pb-20 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        {header && (
                            <header className="text-center">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                            </header>
                        )}
                    </div>
                </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                </div>
                <footer className="absolute bottom-0 w-full block py-4">
                    <div className="container mx-auto px-4">
                        <hr className="mb-4 border-b-1 border-gray-200" />
                        <div
                            className="flex flex-wrap items-center md:justify-between justify-center"
                        >
                            <div className="w-full md:w-4/12 px-4">
                                <div
                                    className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left"
                                >
                                    Copyright © <span id="get-current-year"></span>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-gray-700 text-sm font-semibold py-1"
                                    >
                                        Boromeus Agie
                                    </a>
                                </div>
                            </div>

                            <Switch />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
