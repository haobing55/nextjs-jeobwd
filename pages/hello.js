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
      <div>
        <Link href="/">
          <a animate={{ x: 100 }} layoutId={'hello'}>
            click me
          </a>
        </Link>
        <motion.div
          animate={{ x: -100, y: 30 }}
          transition={{ duration: 2 }}
          layoutId={'hello'}
        >
          <div style={{ background: 'red' }}>bar</div>
        </motion.div>
      </div>
    </div>
  );
}
