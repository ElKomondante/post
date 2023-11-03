import { useSelector } from "react-redux";
import { IStoreState, PostTypes } from "../../types";
import styles from "./Post.module.scss";

const Post = (props: { children: any }) => {
  const {
    date,
    description,
    title,
    image,
    postFormat = PostTypes.FULL,
    onClick,
  } = props.children;

  const todoTheme = useSelector((state: IStoreState) => state.ui.theme);
  return (
    <div
      className={`${styles[`post-container_${postFormat}`]} ${
        styles[`post_container_${todoTheme}`]
      }`}
      onClick={onClick}
    >
      <div className={styles["post-container-horizontal"]}>
        <div className={styles["text-container"]}>
          <h4 className={styles["text-container__post-date"]}>{date}</h4>
          <h2 className={styles["text-container__post-title"]}>{title}</h2>
          <h4 className={styles["text-container__post-data"]}>{description}</h4>
        </div>
        <img src={image} className={styles["post-img"]} />
      </div>
      <div className={styles["post-bar"]}>
      </div>
    </div>
  );
};

export { Post };