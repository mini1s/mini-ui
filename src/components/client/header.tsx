"use client"

import {
    faArrowRight,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export function Header({
    logo,
    title,
    links,
    user,
}: {
    logo: string
    title: React.ReactNode
    links?: { text: string; to: string; className?: string }[]
    user?: { color: string; initial: string }
}) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <>
            <header className="bg-white px-8 h-16 border-b border-gray-300 flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl flex items-center justify-between gap-8 ">
                    <a href="/" className="flex gap-3 items-center">
                        <img src={logo} alt="" className="w-9 h-9 rounded-lg" />
                        <p className="font-space-grotesk font-semibold text-xl">
                            {title}
                        </p>
                    </a>
                    {links && (
                        <>
                            <div className="items-center gap-6 font-rubik hidden md:flex">
                                {links.map((link, i) => (
                                    <a
                                        href={link.to}
                                        className={
                                            link?.className ??
                                            "text-gray-900 hover:text-gray-600"
                                        }
                                        key={`${link.to}-${link.text}-${link.className}-${i}`}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                            <button
                                className="button gray md:hidden"
                                onClick={() => setMenuOpen((prev) => !prev)}
                            >
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="h-4.5"
                                />
                            </button>
                        </>
                    )}
                </div>
            </header>
            {links && (
                <div
                    className={`fixed w-full h-full top-0 left-0 bg-white z-10 transition-[left] duration-300 ease-in-out ${!menuOpen && "left-full"}`}
                >
                    <div className="px-8 h-16 w-full flex flex-col items-center justify-center">
                        <div className="w-full max-w-6xl flex items-center justify-end gap-8 ">
                            <button
                                className="button gray lg:hidden"
                                onClick={() => setMenuOpen((prev) => !prev)}
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="h-4.5"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col items-center">
                        <div className="flex flex-col w-full max-w-lg gap-4">
                            {links.map((link, i) => (
                                <a
                                    href={link.to}
                                    className={`
                                    text-2xl font-space-grotesk font-bold 
                                    ${
                                        link?.className
                                            ? `${link.className} my-4`
                                            : "text-gray-900 hover:text-gray-600 py-4 border-b border-gray-300 flex items-center justify-between"
                                    }
                                `}
                                    key={`${link.to}-${link.text}-${link.className}-${i}`}
                                >
                                    {link.text}
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
