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
    return (
        <header className="bg-white px-8 h-16 border-b border-gray-200 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl flex items-center justify-between gap-8 ">
                <a href="/" className="flex gap-3 items-center">
                    <img src={logo} alt="" className="w-9 h-9 rounded-lg" />
                    <p className="font-space-grotesk font-semibold text-xl">{title}</p>
                </a>
                {links && (
                    <div className="flex items-center gap-6 font-rubik">
                        {links.map((link, i) => (
                            <a
                                href={link.to}
                                className={link?.className ?? "text-gray-800 hover:text-gray-700 active:text-gray-600"}
                                key={`${link.to}-${link.text}-${link.className}-${i}`}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}
