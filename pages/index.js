import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href="/hello">
        <a animate={{ x: 100 }} layoutId={'hello'}>
          click me 2
        </a>
      </Link>
      <div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ duration: 2 }}
          layoutId={'hello'}
        >
          <div style={{ background: 'green' }}>foo</div>
        </motion.div>
      </div>
    </div>
  );
}
