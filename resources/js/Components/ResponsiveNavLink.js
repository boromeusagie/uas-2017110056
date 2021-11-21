import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 ${
                active
                    ? 'text-red-700 bg-red-50 focus:outline-none focus:text-red-800 focus:bg-red-100'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
