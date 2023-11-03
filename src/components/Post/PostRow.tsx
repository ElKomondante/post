import { IPostInfo, PostTypes } from "../../types";
import { Post } from "./Post";
import styles from "./PostRow.module.scss";

const PostRow = (props: any) => {
  const { row } = props;

  switch (true) {
    case row.length == 1:
      row[0].postFormat = PostTypes.FULL;
      break;
    case row.length == 2:
      row[0].postFormat = PostTypes.VERTICAL;
      row[1].postFormat = PostTypes.VERTICAL;
      break;
    case row.length == 3:
      row[0].postFormat = PostTypes.FULL;
      row[1].postFormat = PostTypes.SMALL;
      row[2].postFormat = PostTypes.SMALL;
      break;
    case row.length == 4:
      row[0].postFormat = PostTypes.VERTICAL;
      row[1].postFormat = PostTypes.VERTICAL;
      row[2].postFormat = PostTypes.SMALL;
      row[3].postFormat = PostTypes.SMALL;
      break;
    default:
      break;
  }

  return (
    <div className={styles[`posts-row-${row.length}`]}>
      {row.map((rowVal: IPostInfo, index: number) => (
        <div className={styles[`post-${index}__row-${row.length}`]}>
          <Post>{rowVal}</Post>
        </div>
      ))}
    </div>
  );
};

export { PostRow };