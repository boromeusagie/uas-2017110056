import React, { useState } from 'react';
import ApplicationLogo from '@/Components/Commons/ApplicationLogo';
import NavLink from '@/Components/Navbar/NavLink';
import ButtonLink from '@/Components/Navbar/ButtonLink';
import ResponsiveNavLink from '@/Components/Navbar/ResponsiveNavLink';

export default function Navbar({ auth }) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
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
                        <ResponsiveNavLink href={route('product')} active={route().current('product')}>
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
                        <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                            <i className="fas fa-cart-plus mr-2 text-sm opacity-75"></i>
                            Cashier
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
                        <NavLink href={route('product')} active={route().current('product')}>
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
                        <ButtonLink href={route('login')}>
                            <i className="fas fa-cart-plus mr-2 text-sm opacity-75"></i>
                            Cashier
                        </ButtonLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
