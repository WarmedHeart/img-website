import type { NextPage } from "next";
import Viewer from "viewerjs";
import 'viewerjs/dist/viewer.css';

interface IDetailProp {
  detailId: number;
};

const Detail: NextPage<IDetailProp> = (props) => {
  const {
    detailId
  } = props;

  // 根据图片url下载图片，可跨域
  const donwloadPhoto = (e: MouseEvent, {imgSrc}: {imgSrc: string}) => {
    e.stopPropagation();
    const fileName = imgSrc.split('/').pop() || 'download';
    const x = new XMLHttpRequest();
    x.open('GET', imgSrc, true);
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

  const reviewPhoto = (e) => {
    const viewer = new Viewer(e.target, {});
    viewer.show();
  }

  return (<>
    Detail:{detailId}
  </>);
};

Detail.getInitialProps = (context) => {
  const { id } = context.query;

  return {
    detailId: Number(id),
  };
};

export default Detail;
