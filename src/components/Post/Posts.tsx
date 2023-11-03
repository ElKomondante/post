import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/action-creators";
import { IPostInfo, IStoreState } from "../../types";
import { PostRow } from "./PostRow";
import styles from "./PostRow.module.scss"
declare module '*.scss';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: IStoreState) => state.posts.posts);
  const theme = useSelector((state: IStoreState) => state.ui.theme);
  const search = useSelector((state: IStoreState) => state.posts.search);

  useEffect(() => {
    dispatch(loadPosts({
      search,
    }));
  }, [search]);

  const splitForGrid = (posts: IPostInfo[]) => {
    let grid: IPostInfo[][] = [[]];
    let fouthCount = Math.ceil((posts.length - 3) / 4);
    for (let i = 0; i < posts.length; i++) {
      if (grid[0].length < 3) {
        grid[0].push(posts[i]);
      }
    }
    for (let j = 0; j < fouthCount; j++) {
      grid.push([]);

      for (let i = j * 4 + 3; i < posts.length; i++) {
        if (grid[j + 1].length < 4) {
          grid[j + 1].push(posts[i]);
        }
      }
    }

    return grid;
  };

  return (
    <>
      <div className={styles[`posts-container_${theme}`]}>
        {splitForGrid(posts).map((el) => (
          <PostRow row={el} />
        ))}
      </div>
    </>
  );
};
export { Posts };