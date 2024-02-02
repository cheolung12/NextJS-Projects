import bcrypt from 'bcryptjs';
import prisma from '@/helpers/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, name, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 12); // 12는 salt값

  const user = await prisma.user.create({
    data: {
        email, name, hashedPassword
    }
  })
  return NextResponse.json(user);
}
