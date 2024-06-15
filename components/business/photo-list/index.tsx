
import { ReactElement } from "react";
import Router from "next/router"
import PhotoAlbum, { RenderPhoto } from "react-photo-album";
import classNames from "classnames";

import styles from "./styles.module.scss";

const photos = [
  { id: "1", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "2", src: "https://cdn.pixabay.com/photo/2023/09/20/15/47/fish-8265114_640.jpg", width: 1, height: 4 },
  { id: "3", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "4", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "5", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "6", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "7", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "8", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
  { id: "9", src: "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg", width: 1, height: 1 },
];

interface IPhotoList {
  wrapperClass?: string;
};
const PhotoList = (props: IPhotoList): ReactElement => {
  const {wrapperClass} = props;

  const handlePhotoItem = (photo) => {
    const {id} = photo;

    Router.push(`/detail/${id}`);
  };

  // 自定义渲染图片
  const renderPhoto: RenderPhoto = ({photo, layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
    <div className={styles['photo-container']} style={{marginBottom: style.marginBottom}}>
      <img style={{ ...style, margin: 0 }} {...restImageProps} onClick={() => handlePhotoItem(photo)} />
      {/* <div className={styles['photo-operate']}>
        <div className={styles['overlay-controls']}>
        </div>
        <div className={styles['overlay-bottom']}>
          <div className={styles['tooltip-item']}>
            <button onClick={(e) => donwloadPhoto(e, {imgSrc: restImageProps.src})}>
              <svg t="1717210550297" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4287" width="20" height="20"><path d="M877.49 381.468H668.638V68.191H355.36v313.277H146.51l365.489 365.49 365.49-365.49zM146.51 851.383v104.425h730.98V851.383H146.51z" fill="#ffffff" p-id="4288"></path></svg>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );

  return (
    <div className={classNames([wrapperClass])}>
      <PhotoAlbum
        layout="masonry"
        columns={4}
        spacing={24}
        photos={photos}
        renderPhoto={renderPhoto}
      />
    </div>
    
  );
}

export default PhotoList;