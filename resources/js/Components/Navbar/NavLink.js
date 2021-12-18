import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, icon, children }) {
    return (
        <li className="items-center">
            <Link
                href={href}
                className={
                    active
                        ? 'text-xs uppercase py-3 font-bold block text-red-500 hover:text-red-900 transition ease-in-out duration-150'
                        : 'text-xs uppercase py-3 font-bold block text-gray-900 hover:text-gray-500 transition ease-in-out duration-150'
                }
            >
                {icon}
                {children}
            </Link>
        </li>
    );
}
