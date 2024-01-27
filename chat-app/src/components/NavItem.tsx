import Link from 'next/link';
import React from 'react';

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul className={`text-md justify-center flex w-full gap-4 ${mobile && 'flex-col h-full'} items-center`}>
      <li className='nav-item'><Link href='/admin'>Admin</Link></li>
      <li className='nav-item'><Link href='/user'>User</Link></li>
      <li className='nav-item'><Link href='/signout'>SignOut</Link></li>
      <li className='nav-item'><Link href='/signin'>SignIn</Link></li>
    </ul>
  );
};

export default NavItem;
