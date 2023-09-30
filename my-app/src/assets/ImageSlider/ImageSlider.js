import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import Images from './images.json'


function ImageSlider()
{
  

    return (
        <Carousel>
            {
                Images.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default ImageSlider
