import cn from 'classnames';
import Head from 'next/head'
import { useState } from 'react';
import Navbar from '../atoms/Navbar'
import Menu from '../atoms/Navbar/Menu';
import styles from './index.module.scss'

function Wrapper({ title, favicon, children }) {
  return (
    <div >
      <Head>
        <title>{title || "Home"}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div className={cn(styles.hero)}>
        <Navbar />
        <div className={'min-h-screen text-white lg:text-red-700'}>
          {children}
        </div>
        <div className='p-4 text-center'>Footer</div>
      </div>
    </div>
  );
}

export default Wrapper;