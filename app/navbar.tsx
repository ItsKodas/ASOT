'use client'

import Link from 'next/link'
import Image from 'next/image'

import * as Icon from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material'

import DarkTheme from '@/themes/dark'

import Logo from '@/public/logo.png'



export default function Navbar() {

    const Links = [
        { name: 'Home', href: '/', icon: <Icon.Home /> },
        { name: 'ORBAT', href: '/orbat', icon: <Icon.Group /> },
        { name: 'MILPACS', href: '/milpacs', icon: <Icon.MilitaryTech /> },
        { name: 'Gallery', href: '/gallery', icon: <Icon.Collections /> },
    ]



    return (
        <ThemeProvider theme={DarkTheme}>
            <div
                className='z-50 px-10 flex flex-row justify-between'
                style={{
                    width: '100%',
                    height: '80px',
                    position: 'fixed',
                    borderBottom: '1px solid #db001d',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}
            >

                <div className='min-w-[50px] self-center flex flex-row items-center gap-x-3'>
                    <IconButton style={{ padding: 0 }}>
                        <Image src={Logo} width={50} alt='Logo' />
                    </IconButton>
                    {/* <Typography variant='h5' fontWeight={800} letterSpacing={3}>ASOT</Typography> */}
                </div>

                <div className='flex flex-row justify-end gap-x-10 self-center'>
                    {Links.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Button color='inherit' startIcon={link.icon}>{link.name}</Button>
                        </Link>
                    ))}
                </div>

                <div className='self-center'>
                    <IconButton>
                        <Icon.AccountCircle />
                    </IconButton>
                </div>

            </div>
        </ThemeProvider>
    )
}