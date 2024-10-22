import config from '@/config'

import { NextRequest, NextResponse } from "next/server"

import { FetchUser } from '@/lib/auth/account'



export async function GET(request: NextRequest) {

    const redirect_uri = `https://discord.com/oauth2/authorize?client_id=${config.discord.client_id}&response_type=code&redirect_uri=${encodeURIComponent(config.baseUrl + config.discord.redirect_uri)}&scope=${config.discord.scope.split(' ').join('+')}`

    return NextResponse.redirect(redirect_uri)

}