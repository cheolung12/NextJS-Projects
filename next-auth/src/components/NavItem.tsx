import { User } from '@prisma/client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

const NavItem = ({ mobile, currentUser }: NavItemProps) => {
  return (
    <ul
      className={`text-md justify-center flex w-full gap-4 ${
        mobile && 'flex-col h-full'
      } items-center`}
    >
      <li className='nav-item'>
        <Link href='/admin'>Admin</Link>
      </li>
      <li className='nav-item'>
        <Link href='/user'>User</Link>
      </li>
      {currentUser ? (
        <li className='nav-item'>
          <button onClick={() => signOut()}>SignOut</button>
        </li>
      ) : (
        <li className='nav-item'>
          <button onClick={() => signIn()}>SignIn</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
