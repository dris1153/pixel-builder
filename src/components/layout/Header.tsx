'use client'
import { uiConfig } from '@/core/configs/ui.config'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import Container from '../ui/container'

interface Props {}

export const Header: FC<Props> = () => {
    const pathname = usePathname()
    return (
        <header className="border-border bg-surface relative z-50 flex w-full border-b py-3">
            <Container className="flex shrink-0 items-center justify-between whitespace-nowrap">
                <div className="text-foreground flex items-center gap-8">
                    <Link className="flex cursor-pointer items-center gap-3" href="/">
                        <Image src="/logo.png" alt="Logo" width={28} height={28} className="object-contain" />
                        <h2 className="font-display text-base font-bold tracking-tight text-white">PixelBuilder</h2>
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        {uiConfig.navbar.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-xxs font-bold tracking-wide uppercase transition-colors ${pathname === item.href ? 'text-primary' : 'text-foreground-secondary hover:text-foreground'}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex gap-3">
                    <button className="bg-primary hover:bg-primary-hover text-foreground text-xxs shadow-pixel-sm flex h-9 cursor-pointer items-center justify-center gap-2 rounded px-4 font-bold transition-colors active:translate-y-[2px] active:shadow-none">
                        <Plus />
                        <span className="truncate">New Component</span>
                    </button>

                    <div className="from-primary to-primary-hover ml-2 size-9 cursor-pointer overflow-hidden rounded border border-white/20 bg-gradient-to-br">
                        <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${'PixelMaster'}`}
                            alt="Avatar"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </Container>
        </header>
    )
}
