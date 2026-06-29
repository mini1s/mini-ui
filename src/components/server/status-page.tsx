import { faSadCry, faSadTear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type IconName = "cry" | "tear"

function mapIcon(name?: IconName) {
    if (name == "tear") return faSadTear
    else return faSadCry
}

export function StatusPage({
    Link,
    semititle,
    title,
    text,
    iconClassName,
    iconName,
    links,
}: {
    Link: React.FC<{ href: string; [key: string]: any }>
    semititle?: string
    title?: string
    text?: string
    iconClassName?: string
    iconName?: IconName
    links?: { text: string; to: string; color?: string }[]
}) {
    return (
        <div className="min-h-[50vh] flex-1 flex items-center justify-center p-16 gap-16 text-gray-800">
            <div className={iconClassName ?? `text-gray-400`}>
                <FontAwesomeIcon icon={mapIcon(iconName)} className="w-32" />
            </div>
            <div className="flex flex-col gap-4">
                {semititle && <h2 className="text-2xl font-space-grotesk font-bold text-gray-600">Error 404</h2>}
                {title && <h1 className="text-5xl font-space-grotesk font-bold">Page not found</h1>}
                {text && <p className="font-rubik mt-6">{text}</p>}
                {links && (
                    <div className="flex gap-4 mt-6">
                        {links.map((link, i) => (
                            <Link key={i} href={link.to} className={`button ${link.color ?? "gray"} font-rubik`}>
                                {link.text}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
