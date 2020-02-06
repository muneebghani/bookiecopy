import React from 'react';
import './Card.component.scss';

const Card = () => {
  return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
        <img alt='quotedimage' src='https://www.brijeshdalmia.com/wp-content/uploads/2017/09/5-books.jpg?10x10'/>
        <div>
        <h1 className='h1styles'>Rent out any book you want</h1>
        <button className='h2styles'>Rent now!</button>
        </div>
        </div>
    );
}

export default Card;