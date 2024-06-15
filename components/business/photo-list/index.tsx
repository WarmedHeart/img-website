
import { ReactElement, useState } from "react";
import Router from "next/router"
import PhotoAlbum, { ClickHandlerProps, Photo, RenderPhoto } from "react-photo-album";
import classNames from "classnames";
import InfiniteScroll from 'react-infinite-scroller';

import styles from "./styles.module.scss";


interface IPhotoList {
  value: Array<any>;
  wrapperClass?: string;
  onNextPhotos: (pageNum: number) => Promise<boolean>
};
const PhotoList = (props: IPhotoList): ReactElement => {
  const {wrapperClass, value, onNextPhotos} = props;

  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page: number) => {
    const hasMore = await onNextPhotos(page);
    setHasMore(hasMore);
    console.log(1111111, page);
  };

  const handlePhotoItem = (params: ClickHandlerProps) => {
    const {photo: {key}} = params;

    Router.push(`/detail/${key}`);
  };

  return (
    <div className={classNames([wrapperClass, styles['photo-list-wrapper']])}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <PhotoAlbum
          layout="rows"
          photos={value}
          onClick={handlePhotoItem}
        />
      </InfiniteScroll>
    </div>
  );
}

export default PhotoList;