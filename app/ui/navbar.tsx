import Link from 'next/link'
import React from 'react'
import AcmeLogo from './acme-logo'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="text-xl font-bold">
          <AcmeLogo />
        </div>
      </div>
      <div className="flex space-x-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>
        <Link href="/dashboard" className="pr-4 hover:underline">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

