import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import Price from './price';

const Book = ({ book }) => {
    const [img, setImg] = useState();
    const mountedRef = useRef(true);


    useEffect(() => {
       const image = new Image();
       image.src = book.url;
       image.onload = () => {
           setTimeout(() => {
               if(mountedRef.current){
                setImg(image);
               }
           },300)
       };
       return () => {
           //When the component unmounts
           mountedRef.current = false;
           console.log(img);
       }
    });

    return (
        <div className="book">
            {
                img ?
                    (<>
                        <Link to={`/games/${book.id}`}>
                            <figure className="book__img--wrapper">
                                <img src={book.url} alt="" className='book__img' />
                            </figure>
                        </Link>
                        <div className="book__title">
                            <Link to={`/games/${book.id}`} className='book__title--link'>
                                {book.title}
                            </Link>
                        </div>
                        <Rating rating={book.rating} />
                        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                    </>) : (
                        <>
                            <div className="book__img--skeleton"></div>
                            <div className="skeleton book__title--skeleton">
                            </div>
                            <div className="skeleton book__rating--skeleton">
                            </div>
                            <div className="skeleton book__price--skeleton">
                            </div>
                        </>)
            }
        </div>
    );
}

export default Book;
