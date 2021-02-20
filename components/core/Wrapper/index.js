import Head from 'next/head'
import Navbar from '../atoms/Navbar'
import Menu from '../atoms/Navbar/Menu';

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
      <div className="absolute bottom-0 right-0">
        <Menu label="fun" link="/vibhav"> </Menu>
      </div>
    </div>
  );
}

export default Wrapper;