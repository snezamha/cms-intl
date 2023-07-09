'use client';
import React from 'react';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function LangSwitch() {
  const pathname = usePathname();
  const pathnameWithoutLanguage = pathname.slice(3);
  return (
    <>
      <li>
        <Link href={'/en' + pathnameWithoutLanguage} locale='en'>
          <Flag code='gb' style={{ width: '25px', height: '25px' }} />
        </Link>
      </li>
      <li>
        <Link href={'/fa' + pathnameWithoutLanguage} locale='fa'>
          <Flag code='ir' style={{ width: '25px', height: '25px' }} />
        </Link>
      </li>
      <li>
        <Link href={'/de' + pathnameWithoutLanguage} locale='de'>
          <Flag code='de' style={{ width: '25px', height: '25px' }} />
        </Link>
      </li>
    </>
  );
}
