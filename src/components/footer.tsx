export function Footer({ className, logo, title, desc, name }: { className?: string; logo: string; title: React.ReactNode; desc: string; name: string }) {
    return (
        <footer className={`border-t-4 ${className} bg-white flex flex-col items-center p-16`}>
            <div className="w-full max-w-6xl">
                <div className="">
                    <div className="flex flex-col gap-4">
                        <a href="/" className="flex gap-3 items-center">
                            <img src={logo} alt="" className="w-9 h-9 rounded-lg" />
                            <p className="font-space-grotesk font-semibold text-xl">{title}</p>
                        </a>
                        <p className="font-rubik text-gray-600">{desc}</p>
                    </div>
                </div>
                <div className="mt-8 pt-8">
                    <p>
                        &copy; {new Date().getFullYear()} {name}
                    </p>
                </div>
            </div>
        </footer>
    )
}
