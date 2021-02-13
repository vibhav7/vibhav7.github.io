import Head from 'next/head'

function Wrapper({ title, favicon, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Home"}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;