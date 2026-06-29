"use client"

import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

interface SidebarLink {
    text: string
    to: string
    icon: IconProp
}

interface SidebarDivider {
    isDivider: true
}

interface SidebarProps {
    links?: (SidebarLink | SidebarDivider)[]
    colors: {
        iconTextColor: string
        activeLinkBg: string
        activeLinkBgHover: string
    }
}

function isDivider(link: SidebarLink | SidebarDivider): link is SidebarDivider {
    return (link as SidebarDivider).isDivider === true
}

export function Sidebar({ links, colors }: SidebarProps) {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const pathname = usePathname()

    return (
        <div className={`${collapsed ? "w-20" : "w-64"} py-8 px-4 flex flex-col justify-between gap-8 bg-white border-r border-gray-200 h-full font-rubik`}>
            <div className="flex flex-col gap-2">
                {links?.map((link, i) => {
                    if (isDivider(link)) return <hr key={i} className="border-gray-200 my-2" />

                    const isActive = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to)

                    return (
                        <Link
                            href={link.to}
                            className={`flex gap-4 items-center px-2 py-2 rounded-lg ${collapsed ? "justify-center" : ""} ${isActive ? `${colors.activeLinkBg} ${colors.activeLinkBgHover}` : "hover:bg-gray-100 active-bg-gray-200"}`}
                            key={`${link.to}-${i}`}
                        >
                            <div className="w-[31px] h-6 flex-shrink-0 flex items-center justify-center">
                                <FontAwesomeIcon icon={link.icon} className={`text-xl ${colors.iconTextColor}`} />
                            </div>
                            {!collapsed && <p>{link.text}</p>}
                        </Link>
                    )
                })}
            </div>
            <div className={`px-4 flex flex-col ${collapsed ? "items-center" : "items-end"}`}>
                <button
                    className="bg-gray-100 hover:bg-gray-200 w-7 h-7 rounded-lg text-gray-700 flex items-center justify-center cursor-pointer"
                    onClick={() => setCollapsed((c) => !c)}
                >
                    <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
                </button>
            </div>
        </div>
    )
}
