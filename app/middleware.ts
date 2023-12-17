import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res});
    await supabase.auth.getSession();

    // console.log('inside midlware')
    return res;
}