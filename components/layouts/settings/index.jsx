import React from 'react';
import LangSwitch from './language';
import SettingIcon from '@heroicons/react/24/outline/Cog8ToothIcon';
import ThemeSwitch from './theme';

export default function Settings() {
  return (
    <>
      <div className='dropdown'>
        <label tabIndex={0} className='btn btn-ghost '>
          <SettingIcon className='w-6 h-6' />
        </label>
        <ul
          tabIndex={0}
          className='menu menu-xs dropdown-content mt-3 mx-auto shadow bg-base-200 rounded-box'
        >
          <ThemeSwitch />
          <LangSwitch />
        </ul>
      </div>
    </>
  );
}
