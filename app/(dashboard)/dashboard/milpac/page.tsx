import { Member } from '@/lib/auth'
import { connection } from 'next/server'
import { redirect } from 'next/navigation'

import { Paper, Divider, Typography, Button } from '@mui/material'
import { Person, MilitaryTech, Collections } from '@mui/icons-material'



export default async function Page() {

    await connection()

    const auth = new Member()
    await auth.fetchRoles().catch(console.warn)
    if (!auth.roles) return redirect('/login')

    if (!auth.hasRoles(['J5 - Milpac Staff', 'Dedi Admin'])) return redirect('/dashboard')


    return (
        <div className='h-full w-full p-10 pt-[100px]'>
            <div className='m-auto max-w-[500px] flex flex-col justify-center gap-5'>



            </div>
        </div>
    )
}