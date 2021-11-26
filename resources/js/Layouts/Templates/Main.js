import React from "react";

export default function Main({ header, children }) {
    return (
        <>
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
        </>
    );
}
