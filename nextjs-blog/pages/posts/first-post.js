import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className={utilStyles.heading2Xl, utilStyles.headingcolor}>01. What I've learned so far</h1>
      <p>So far, I've learned all about how to make a quick blog with NextJS and how to add styling to it with TailwindCSS. I've done a little bit of troubleshooting on a problem with adding the profile image to this site and it helped me to understand more about how images are presented on the page. It's really interesting how NextJS sites perform lazy loading. I'm interested to see more of how that will impact my experience developing with this.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
