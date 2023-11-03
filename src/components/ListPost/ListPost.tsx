import { Post } from "../Post/index";
import './style.scss';
import { IStoreState, PostTypes } from '../../types';
import { useSelector } from 'react-redux';

const info = { 
  "id": 17, 
  "image": "https://cdn.pixabay.com/photo/2023/05/30/05/50/yellow-headed-blackbird-8027623_640.jpg", 
  "text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.", 
  "date": "2021-12-12", 
  "lesson_num": 1, 
  "title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk", 
  "author": 4 
}

const ListPosts = () => {
  const theme = useSelector((state: IStoreState) => state.ui.theme)
  return (
    <div className={`container-listPosts ${theme}`}>
      <div className='main'>
        {/* <Post postInfo={info} type={PostTypes.FULL} />
        <div className='_1-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_2-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_3-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_4-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_5-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_6-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_7-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_8-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_9-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_10-vertical'>
          <Post postInfo={info} type={PostTypes.VERTICAL} />
        </div>
        <div className='_1-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div>
        <div className='_2-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div>
        <div className='_3-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div>
        <div className='_4-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div>
        <div className='_5-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div>
        <div className='_6-small'>
          <Post postInfo={info} type={PostTypes.SMALL} />
        </div> */}
      </div>
    </div>
  )
}

export { ListPosts }