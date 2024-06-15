import { useRef } from "react";
import Head from "next/head";

import PhotoList from "@/components/business/photo-list";
import TopBanner from "@/components/business/top-banner";

import styles from "@/styles/index.module.scss";

export default function Home() {

  const wrapperRef = useRef(null);
  
  return (
    <div className={styles['main-page-container']} ref={wrapperRef}>
      <Head>
        <title>自由图片网</title>
        <meta
          name="description"
          content="A img website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 顶导 */}
      <TopBanner
        wrapperClass={styles['top-banner']}
      />
      {/* 简略版图片排列 */}
      <PhotoList
        wrapperClass={styles['context']}
      />
    </div>
  );
}
