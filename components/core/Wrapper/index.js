import cn from 'classnames';
import Head from 'next/head'
import { useState } from 'react';
import Navbar from '../atoms/Navbar'
import Menu from '../atoms/Navbar/Menu';

function Wrapper({ title, favicon, children }) {
  return (
    <>
      <div className={cn('absolute z-20 w-20 h-20 rounded-full opacity-50 animate-ping pointer-events-none')}></div>
      <div >
        <Head>
          <title>{title || "Home"}</title>
          <link rel="icon" href={favicon || "/favicon.ico"} />
        </Head>
        <div>
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;