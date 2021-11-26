import React from "react";
import Dropdown from '@/Components/Commons/Dropdown';

export default function Header() {
    return (
        <nav className="hidden absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start md:flex md:items-center p-4">
            <div className="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">
                <Dropdown>
                    <Dropdown.Trigger>
                        <a className="text-gray-500 block" href="#">
                            <div className="items-center flex">
                                <span className="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full">
                                    <img alt="..." className="w-full rounded-full align-middle border-none shadow-lg" src="../../images/team-1-800x800.jpg"/>
                                </span>
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
    );
}
