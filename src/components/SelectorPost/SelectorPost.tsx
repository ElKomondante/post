import {useParams} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreState } from "../../types";
import { loadPost } from '../redux/action-creators';

const SelectorPost = () => {
  const selectedPost = useSelector((state: IStoreState) => state.posts.selectedPost)
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadPost(Number(id)))
  }, [id])


  return (
    <div>
      <h1 className='selectorPost-title'>{selectedPost?.title}</h1>
      <img src={selectedPost?.image} style={{width: '1000px', height: '520px'}} alt='smth'/>
      <div>
        <p>{selectedPost?.text}</p>
      </div>
    </div>
  )
}

export { SelectorPost }