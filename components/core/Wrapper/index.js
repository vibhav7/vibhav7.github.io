import cn from 'classnames';
import Head from 'next/head'
import { useState } from 'react';
import Navbar from '../atoms/Navbar'
import Menu from '../atoms/Navbar/Menu';

function Wrapper({ title, favicon, children }) {
  const [highlightstyle, setHighlightstyle] = useState({ left: 120, top: 25, backgroundColor: 'purple' })
  function moveHighlight(e) {
    // console.log(e.nativeEvent)
    setHighlightstyle({
      left: e.nativeEvent.pageX - 10,
      top: e.nativeEvent.pageY - 10,
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    })
  }
  return (
    <>
      <div className={cn('absolute z-20 w-20 h-20 rounded-full opacity-50 animate-ping pointer-events-none')} style={highlightstyle}></div>
      <div onMouseMove={moveHighlight}>
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