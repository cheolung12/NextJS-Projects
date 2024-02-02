import { DefaultSession } from 'next-auth';

// d는 declare
// 세션 타입 설정
declare module 'next-auth' {
  interface Session {
    user?: {
      id?: string;
      role?: string;
    } & DefaultSession['user'];
  }
}
