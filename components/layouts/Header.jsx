import React from 'react';
import Link from 'next/link';
import Settings from '@/components/layouts/settings';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('Header');

  return (
    <header>
      <div className='navbar bg-base-300'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52'
            >
              {' '}
              <li>
                <Link  href={`/${locale}/`}>
                  {t('home')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-center'></div>
        <div className='navbar-end'>
          <Settings />
        </div>
      </div>
    </header>
  );
}
