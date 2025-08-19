import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Aian Jae Garcia, a Bachelor of Science in Information Technology student at the University of the Assumption. I live in Guemasan Arayat, Pampanga. My hobbies include going to the gym and studying. Additionally, my favorite songs by Linkin Park are "Iridescent," "Somewhere I Belong," and "What I've Done." When it comes to food, my favorite is authentic pork sisig with eggs. In five years, I see myself working in the tech industry as a web developer or a cybersecurity analyst. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}