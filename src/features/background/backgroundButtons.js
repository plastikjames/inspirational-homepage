import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import { BsDash } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { selectImg, changeImg } from './backgroundSlice';

const BackgroundButtons = () => {
    const dispatch = useDispatch();
    const selectedImage = useSelector(selectImg);
    const dashes = [0,1,2,3,4,5,6,7,8,9];

    return (
      <div id="buttoncontainer">
        <button value="left" onClick={() => {if (selectedImage !== 0) {dispatch(changeImg(selectedImage -1))}}}><SlArrowLeft/></button>
        {dashes.map(dash => {
            return <button value={dash} onClick={() => dispatch(changeImg(dash))}><BsDash/></button>
        })}
        <button value="right" onClick={() => {if (selectedImage !== 9) {dispatch(changeImg(selectedImage +1))}}}><SlArrowRight/></button>
      </div>
    )
}

export default BackgroundButtons;