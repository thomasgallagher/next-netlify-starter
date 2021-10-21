import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container antialiased">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui at dapibus tincidunt. In eleifend ante sit amet rhoncus cursus. Nullam erat lacus, ultrices vel molestie eu, luctus id enim.
      </main>

      <Footer />
    </div>
  )
}
