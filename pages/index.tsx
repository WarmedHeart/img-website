import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Photo } from "react-photo-album";

import PhotoList from "@/components/business/photo-list";
import TopBanner from "@/components/business/top-banner";

import { getPhotoListBySearch } from "@/services/pages/index";

import styles from "@/styles/index.module.scss";

export default function Home() {
  
  // 关键字
  const [searchKey, setSearchKey] = useState('');
  // 标签
  const [labelList, setLabelList] = useState([]);

  // 分页数据
  const [pageNum, setPageNum] = useState(0);
  const [photos, setPhotos] = useState<Array<Photo>>([]);

  useEffect(() => {
    getPhotoByKeyAndPage({searchKey, labelList, pageNum}, false);
  }, [searchKey, labelList]);


  const getPhotoByKeyAndPage = async (params: {searchKey?: string, labelList?: Array<string>, pageNum: number}, isAppend: boolean) => {
    const resp = await getPhotoListBySearch(params);
    setPhotos(isAppend ? [...photos, ...resp] : resp);

    if (params.pageNum === 5) {
      return false;
    }

    return true;
  }

  return (
    <div className={styles['main-page-container']}>
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
        value={photos}
        wrapperClass={styles['context']}
        onNextPhotos={(pageNum) => getPhotoByKeyAndPage({searchKey, labelList, pageNum}, true)}
      />
    </div>
  );
}
