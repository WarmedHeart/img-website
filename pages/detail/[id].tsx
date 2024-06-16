import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Router from "next/router"
import Image from "next/image";
import Viewer from "viewerjs";
import 'viewerjs/dist/viewer.css';

import styles from "@/styles/detail.module.scss";
import LOGO from "@/public/logo.png";

const labelList: string[] = [
  "风景", "宠物", "建筑", "美食", "人物",
  "艺术", "动物", "自然", "旅行", "科技",
  "运动", "城市", "文化", "健康", "家庭",
  "工作", "音乐", "电影", "时尚", "教育",
  "游戏", "书籍", "节日", "历史", "冒险",
  "趣味", "摄影", "汽车", "航空", "植物"
];

interface IDetailProp {
  detailId: number;
};

const Detail: NextPage<IDetailProp> = (props) => {
  const {
    detailId
  } = props;

  const viewer = useRef<null | Viewer>(null);

  useEffect(() => {

    return () => {
      viewer.current?.destroy();
    }
  }, [])
  // 根据图片url下载图片，可跨域
  const donwloadPhoto = () => {
    const fileName = '作品名称' || 'download';
    const x = new XMLHttpRequest();
    x.open('GET', 'https://assets.react-photo-album.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage07.ac608196.jpg&w=1080&q=75', true);
    x.responseType = 'blob';
    x.onload = function () {
      let url = window.URL.createObjectURL(x.response)
      let a = document.createElement('a')
      a.href = url
      a.download = fileName;
      a.click()
    };
    x.send();
  }

  const reviewPhoto = (e: any) => {
    if (!viewer.current) {
      viewer.current = new Viewer(e.target, {title: false, movable: false, navbar: false, button: false});
    }
    viewer.current.show();
  }

  return (
    <div className={styles['detail-container']}>
      <div className={styles['top-banner']}>
        {/* logo */}
        <Image onClick={() => Router.replace('/')} className={styles['logo']} src={LOGO} alt="" />
      </div>
      <div className={styles['context-wrapper']}>
        <div className={styles['context']}>
          {/* 图片 */}
          <div className={styles['view-left']}>
            <h1 className={styles['line']}>
              Royalty-Free photo: alberta, amazing, banff, beautiful, blue, canada, clouds, colorful, forest, hdr, hiking
            </h1>
            <figure>
              {/* 定宽、高度自适应 */}
              <img onClick={reviewPhoto} className={styles['detail-img']} src="https://assets.react-photo-album.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage07.ac608196.jpg&w=1080&q=75" alt="图片" />
              <figcaption className={styles['detail-img-title']}>two women lying on bed</figcaption>
            </figure>

            <h2>Photo keywords:</h2>
            <div className={styles['keywords-wrapper']}>
              <ul className={styles['tag']}>
                {
                  labelList.map(label => (
                    <li
                      key={label}
                    >
                      <span>{label}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          {/* 介绍 */}
          <div className={styles['right-side']}>
            {/* 下载 */}
            <button
              className={styles['download']}
              onClick={donwloadPhoto}
            >Download original Image(resolution:4108x2734)</button>
            {/* 作者信息 */}
            <div className={styles['author-info']}>
              <div className={styles['item']}>
                <div className={styles['label']}>作者：</div>
                <div className={styles['value']}>a_针叶林</div>
              </div>
              <div className={styles['item']}>
                <div className={styles['label']}>上传日期：</div>
                <div className={styles['value']}>2020 年 5 月 19 日星期二</div>
              </div>
              <div className={styles['item']}>
                <div className={styles['label']}>尺寸：</div>
                <div className={styles['value']}>7000 x 4667 像素</div>
              </div>
              {/* 联系方式等 */}
              <div className={styles['extra-info']}>
                  <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.getInitialProps = (context) => {
  const { id } = context.query;

  return {
    detailId: Number(id),
  };
};

export default Detail;
