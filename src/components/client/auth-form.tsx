"use client"

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export function AuthForm({
    action,
    title,
    description,
    below,
    submitText = "Sign in",
    color = "blue",
}: {
    action: (formData: FormData) => Promise<{ error?: string } | void>
    title?: React.ReactNode
    description?: React.ReactNode
    below?: React.ReactNode
    submitText?: string
    color?: string
}) {
    const [error, setError] = useState<string | null>(null)
    const [pending, setPending] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className="flex-1 flex flex-col items-center justify-center font-rubik gap-8 p-12 py-16">
            <div className="flex flex-col items-center gap-2 text-center">
                {title && <h1 className="font-space-grotesk text-3xl font-bold text-gray-900">{title}</h1>}
                {description && <p className="text-gray-600">{description}</p>}
            </div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault()
                    setError(null)
                    setPending(true)
                    try {
                        const result = await action(new FormData(e.currentTarget))
                        if (result?.error) setError(result.error)
                    } finally {
                        setPending(false)
                    }
                }}
                className="flex flex-col gap-4 w-full max-w-md bg-white p-12 rounded-3xl shadow-[0_0_1rem_0_#00000010]"
            >
                <label className="flex flex-col gap-1">
                    <p>Email</p>
                    <input
                        className="px-3 py-2 border-2 border-gray-300 rounded-lg"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@address.com"
                        required
                    />
                </label>
                <label className="flex flex-col gap-1">
                    <p>Password</p>
                    <span className="flex gap-2">
                        <input
                            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder={showPassword ? "password" : "••••••••"}
                            required
                        />
                        <button type="button" className={`button gray w-20`} onClick={() => setShowPassword((x) => !x)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </span>
                </label>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={pending} className={`mt-4 button ${color}`}>
                    {pending ? "Signing in..." : submitText}
                </button>
            </form>
            {below && <p>{below}</p>}
        </div>
    )
}
