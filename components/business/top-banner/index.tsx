import classNames from "classnames";
import { ReactElement, useState } from "react";
import Image from "next/image";

import styles from './styles.module.scss';

interface ITopBanner {
  wrapperClass?: string;
};

const labelList: string[] = [
  "风景", "宠物", "建筑", "美食", "人物",
  "艺术", "动物", "自然", "旅行", "科技",
  "运动", "城市", "文化", "健康", "家庭",
  "工作", "音乐", "电影", "时尚", "教育",
  "游戏", "书籍", "节日", "历史", "冒险",
  "趣味", "摄影", "汽车", "航空", "植物"
];

const TopBanner = (props: ITopBanner): ReactElement => {
  const {wrapperClass} = props;

  // 用户输入关键字
  const [searchKey, setSearchKey] = useState('');
  // 是否展开
  const [expandExplore, setExpandExplore] = useState(false);
  // 用户选中的标签列表
  const [selectedLabelList, setSelectedLabelList] = useState<string[]>([]);

  // enter搜索
  const handleInputKey = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      console.log('搜索...');
    }
  }
  
  // 处理用户操作的标签
  const handleLabelItem = (label: string) => {
    if (selectedLabelList.includes(label)) {
      // 如果标签已被选中，取消选中
      setSelectedLabelList(selectedLabelList.filter(selectedLabelList => selectedLabelList !== label));
  } else {
      // 如果标签未被选中，添加到选中列表中
      setSelectedLabelList([...selectedLabelList, label]);
  }
  }

  return (
    <div className={classNames([wrapperClass])}>
      <div className={classNames([styles['top-banner-wrapper']])}>
        {/* logo */}
        <Image className={styles['logo']} src="" alt="" />
        {/* search */}
        <div className={styles['search']}>
          <div className={styles['container']}>
            <svg className={styles['icon']} height="24" viewBox="0 0 1024 1024" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m712.746667 799.146667a405.418667 405.418667 0 0 1 -241.493334 79.317333 407.210667 407.210667 0 1 1 407.210667-407.253333c0 90.453333-29.44 173.952-79.36 241.536l143.018667 142.976a61.098667 61.098667 0 0 1 -86.4 86.4l-142.933334-142.976zm-239.146667-37.546667a288 288 0 1 0 0-576 288 288 0 0 0 0 576z" fill="#656f79"/></svg>
            <input
              className={styles['handle']}
              type="text"
              value={searchKey}
              onChange={({target: {value}}) => setSearchKey(value)}
              onKeyDown={handleInputKey}
              placeholder="Search Website"
            />
          </div>
        </div>
        {/* explore */}
        <div
          className={classNames([styles['tab'], 'base-font', 'site-hover'])}
          onClick={() => setExpandExplore(!expandExplore)}
        >Explore</div>
        {/* login */}
        <div className={classNames([styles['tab'], styles['login'],'base-font', 'site-hover'])}>Log In</div>
      </div>
      {/* explore expand */}
      <div className={ classNames([styles['expand-base'], expandExplore ? styles['expand-label-show'] : styles['expand-label-hidden']])}>
        <div className={styles['label-wrapper']}>
          <h4>Popular Search Tags</h4>
          <ul>
            {
              labelList.map(label => (
                <li
                  key={label}
                  onClick={() => handleLabelItem(label)}
                >
                  <span className={classNames([styles['label-item'], selectedLabelList.includes(label) && styles['label-item-active']])}>{label}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
