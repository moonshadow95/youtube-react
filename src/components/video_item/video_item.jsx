import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    const detailListType = display === 'list' ? styles.row : styles.column;

    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={`${styles.video} ${detailListType}`}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
