import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, It's Erica!</p>
        <p>I'm really excited to have made this page. I'm using this space to try out different things that I'm learning about for NextJS. Let's see how cool I can make this look.</p>
        <h3>Posts</h3>
        <Link href="/posts/first-post">
          <a>01. What I've learned so far</a>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
