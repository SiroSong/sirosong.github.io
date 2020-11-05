import Head from "next/head";
import Link from "next/link"
import Layout from "../components/layout";

export default function About(props) {
  console.log(props)
  return (
    <Layout>
      <Head>
        <title>this is about</title>
      </Head>
      <h1>This is About</h1>
      <Link href="/">go back</Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const date_string = Date().toString()

  return {
    props: {
      value: date_string
    }
  }
}