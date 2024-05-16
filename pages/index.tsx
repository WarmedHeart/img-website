import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ImgWebsite</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles['top-banner-wrapper']}>
          {/* 顶部导航条 */}
          <div className={styles['top-banner']}></div>
          {/* 搜索 */}
          <div className={styles['search-wrapper']}>
            <span className={classNames("iconfont", styles.icon)}>&#xe618;</span>
            <input className={styles.text} type="text" placeholder="Start searching..." />
          </div>
        </div>
      </main>
    </>
  );
}
