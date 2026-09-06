export function Footer({
    className,
    logo,
    title,
    desc,
    name,
    bottom,
    links,
    Link,
}: {
    className?: string
    logo: string
    title: React.ReactNode
    desc: string
    name: string
    bottom?: React.ReactNode
    links?: {
        heading: string
        links: { text: string; to: string }[]
    }[]
    Link: React.FC<{ href: string; [key: string]: any }>
}) {
    return (
        <footer
            className={`border-t-4 ${className} bg-white flex flex-col items-center p-16`}
        >
            <div className="w-full max-w-6xl">
                <div className="flex justify-between gap-16 gap-x-24 flex-col md:flex-row">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex gap-3 items-center">
                            <img
                                src={logo}
                                alt=""
                                className="w-9 h-9 rounded-lg"
                            />
                            <p className="font-space-grotesk text-xl">
                                {title}
                            </p>
                        </Link>
                        <p className="font-rubik text-gray-600">{desc}</p>
                    </div>
                    <div className="flex gap-12 gap-y-10 flex-wrap">
                        {links?.map((column, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <p
                                    className={`font-space-grotesk uppercase text-xs mb-2 font-regular tracking-wider text-gray-600`}
                                >
                                    {column.heading}
                                </p>
                                {column.links.map((link, j) => (
                                    <Link
                                        href={link.to}
                                        key={j}
                                        className="font-rubik text-gray-800 hover:text-gray-700 active:text-gray-600"
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gap-6 mt-12 pt-6 border-t border-gray-300 flex justify-between sm:items-center flex-col sm:flex-row">
                    <p className="font-roboto-mono text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} {name}
                    </p>
                    <div className="flex items-center gap-4 flex-wrap">
                        {bottom}
                    </div>
                </div>
            </div>
        </footer>
    )
}
