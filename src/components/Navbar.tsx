import Link from 'next/link';
import React from 'react';
import Button from './ui/Button';

const navList = ['Features', 'Developers', 'Docs'];

const Navbar = () => {
  return (
    <header className='px-10'>
      <nav className='flex justify-between items-center'>
        <div className='py-4'>
          <Link href='#' className='text-lg font-bold'>
            BlockAudit.ai{' '}
          </Link>
        </div>

        <div className='glass-bg text-[#cababa] rounded-br-md rounded-bl-md border-b-[1px] border-l-[1px] border-r-[1px] border-[#4b4b4b91] py-4 px-3'>
          <div className='flex gap-8'>
            {navList.map((nav) => (
              <Link key={nav} href='#'>
                {nav}
              </Link>
            ))}
          </div>
        </div>
        <div className='pt-2'>
          <Button customClass='' label='Get Started' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
