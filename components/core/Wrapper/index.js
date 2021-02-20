import Head from 'next/head'
import Navbar from '../atoms/Navbar'

function Wrapper({ title, favicon, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Home"}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div>
        <div>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;