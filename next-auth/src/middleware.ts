import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

// // 로그인 된 사람만 해당 경로에 접근 가능
// export const config = { matcher: ["/admin/:path*", "/user"] }

// 세션 데이터 가져오기 => getToken()

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
//   console.log(req.nextUrl.pathname); // /admin,  /user ...

  const pathname = req.nextUrl.pathname;

  // 로그인된 유저만 접근 가능
  if (pathname.startsWith('/user') && !session) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // 어드민 유저만 접근 가능
  if (pathname.startsWith('/admin') && session?.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 로그인된 유저는 로그인, 회원가입 페이지에 접근 x
  if (pathname.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
