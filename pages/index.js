  import Head from "next/head";
  import Link from "next/link";

  import Date from "../components/date";
  import Layout, { siteTitle } from "../components/layout";
  import { getSortedPostsData } from "../lib/posts";
  import utilStyles from "../styles/utils.module.css";

  export default function Home({ allPostsData }) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hello, my name is <strong>Mohammed Rezq</strong> from{" "}
            <strong>Yemen</strong>, currently living in <strong>Egypt</strong>, I
            consider my self a front-end developer focused on{" "}
            <strong>Reactjs</strong> front-end development environment, I like to
            build websites that can help and serve people. <br />
            Follow me on <strong><a href="https://www.twitter.com/mohammedrezq2">Twitter</a></strong>.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>

        <section className={utilStyles.headingMd}><hr /></section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => {
              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              );
            })}
          </ul>
        </section>
      </Layout>
    );
  }

  export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  };
