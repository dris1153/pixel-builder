'use client'

import { Header } from '@/components/layout'
import { FCC } from '@/core/types/common.type'
import { memo } from 'react'
import { Toaster } from 'sonner'

const LayoutProvider: FCC = ({ children }) => {
    return (
        <>
            <div className="bg-background flex h-full flex-col">
                <Header />
                <main className="max-w-full flex-1">{children}</main>
                <Toaster
                    theme="dark"
                    position="top-center"
                    toastOptions={{
                        className: 'sonner',
                        classNames: {
                            icon: '!w-5 !h-5',
                        },
                    }}
                    // icons={{
                    //   success: <FillCheckIcon className="*:fill-success" />,
                    //   error: <FillXIcon className="*:fill-error" />,
                    //   loading: <LoadingIcon />,
                    // }}
                />
            </div>
        </>
    )
}

export default memo(LayoutProvider)
