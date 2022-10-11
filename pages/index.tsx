import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Users from '../models/users'
import styles from '../styles/Home.module.css'
import connectMongo from '../utils/connection'

export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const users = await Users.find();
    console.log('FETCHED DOCUMENTS');
    console.log(users);
    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

const Home = ({ users } : any) => {
  console.log(users);
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to the new logistics app</title>
        <meta name="description" content="Welcome to the new logistics app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>HELLO TEST APP</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
