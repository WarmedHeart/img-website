import { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
}

const photos = [
  { id: "1", asset: "image01.018d1d35.jpg", width: 1080, height: 780 },
  { id: "2", asset: "image02.cf33eff7.jpg", width: 1080, height: 1620 },
  { id: "1", asset: "image03.cdc32b45.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image04.9a1f6335.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image05.d7ef12b4.jpg", width: 1080, height: 1620 },
  { id: "1", asset: "image06.4ab952e3.jpg", width: 1080, height: 607 },
  { id: "1", asset: "image07.ac608196.jpg", width: 1080, height: 608 },
  { id: "1", asset: "image08.95e095b5.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image09.fa6c4764.jpg", width: 1080, height: 1549 },
  { id: "1", asset: "image10.411ea655.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image11.f3ea483a.jpg", width: 1080, height: 694 },
  { id: "1", asset: "image12.5a9347ea.jpg", width: 1080, height: 1620 },
  { id: "1", asset: "image13.ce46dd98.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image14.68b2812c.jpg", width: 1080, height: 1440 },
  { id: "1", asset: "image15.4461facf.jpg", width: 1080, height: 1620 },
  { id: "1", asset: "image16.5ad17d8b.jpg", width: 1080, height: 810 },
  { id: "1", asset: "image17.a242e897.jpg", width: 1080, height: 595 },
  { id: "1", asset: "image18.0479bde8.jpg", width: 1080, height: 160 },
  { id: "1", asset: "image19.ab7b61f4.jpg", width: 1080, height: 810 },
  { id: "1", asset: "image20.f62571df.jpg", width: 1080, height: 720 },
  { id: "1", asset: "image21.14c9bee0.jpg", width: 1080, height: 1440 },
].map(
  ({ id, asset, width, height }) =>
    ({
      key: id,
      src: assetLink(asset, width),
      width,
      height,
      srcSet: breakpoints.map((imageWidth) => ({
        src: assetLink(asset, imageWidth),
        width: imageWidth,
        height: Math.round((height / width) * imageWidth),
      })),
    }) as Photo,
);

// 
export const getPhotoListBySearch = (params: {searchKey?: string, labelList?: Array<string>, pageNum: number}): Promise<Array<Photo>> => {
  return Promise.resolve(photos);
};