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
        <p>I am Aian Jae Garcia, a Bachelor of Science in Information Technology student at the University of the Assumption. I am 21 years old, and my birthday is on August 8, 2004. I live in Guemasan Arayat, Pampanga.</p>
        <p>I'm an active person. My hobbies include going to the gym and running. On my days off, I enjoy watching movies, studying, and learning new programming languages.</p>
        <p>I really love music, especially rock. My favorite Linkin Park songs are 'Iridescent,' 'Somewhere I Belong,' and 'What I've Done.' As for food, my favorite is authentic pork sisig with eggs.</p>
        <p>In five years, I see myself working in the tech industry as a web developer or a cybersecurity analyst.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}