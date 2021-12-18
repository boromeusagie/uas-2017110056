import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ButtonLink({ href, icon, children }) {
    return (
        <li className="items-center">
            <Link
                href={href}
                className={
                    'block w-full text-center text-xs uppercase py-2 px-4 font-bold bg-red-900 hover:bg-red-700 text-white border border-transparent rounded-md my-5 tracking-widest transition ease-in-out duration-150'
                }
            >
                {icon}
                {children}
            </Link>
        </li>
    );
}
