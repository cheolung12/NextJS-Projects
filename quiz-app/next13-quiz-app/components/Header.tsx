'use client'; // state 써서
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { title: 'Home', path: '/' },
    { title: 'Question', path: '/question' },
    { title: 'State', path: '/state' },
    { title: 'Quiz', path: '/quiz' },
  ];

  return (
    <header className='shadow-lg'>
      <div
        className={`fixed lg:hidden transition-all z-20 duration-300 ${
          open ? 'right-0' : '-right-64'
        } p-4 bg-orange-500 h-screen w-64`}
      >
        <XCircleIcon
          className={`w-8 h-8 stroke-slate-50 mb-4 cursor-pointer`}
          stroke='2'
          onClick={() => setOpen(false)}
        />
        <div className='flex flex-col space-y-4'>
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setOpen(false)}
              className='px-6 py-2 text-slate-100 rounded bg-orange-700'
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center px-6 py-4 bg-orange-600'>
        <div className='text-slate-50 text-xl sm:text-4xl lg:text-2xl xl:text-4xl font-bold'>
          Quiz App
        </div>
        <nav className='space-x-8 hidden lg:flex'>
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setOpen(false)}
              className='px-6 py-2 text-slate-100 rounded bg-orange-700'
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <Bars3Icon
          onClick={() => setOpen((prev) => !prev)}
          className='lg:hidden stroke-indigo-50 w-6 h-6'
        />
      </div>
    </header>
  );
};

export default Header;
