export function SidebarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-1 min-h-180 relative grid grid-cols-[auto_1fr] min-[112.5rem]:block min-[112.5rem]:flex flex-col min-[112.5rem]:items-center">
            {children}
        </div>
    )
}

export function ContentNextToSidebar({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="max-w-7xl w-full flex-1">{children}</div>
}
