import React from 'react';
import { BoxPicture } from '../BoxPicture/BoxPicture';
import { ModalGateway, Modal } from 'react-images';


export class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const images = [
            { source: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },

        ]

        return (
            <div className="gallery">
                <h3 className="title">Favoritos</h3>
                <div className="container">
                    {images.map((image, index) => {
                        return (
                            <BoxPicture
                                image={image.source}
                                index={index}
                                onClick={() => console.log('fav')} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
