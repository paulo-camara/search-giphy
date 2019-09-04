import React from 'react';
import PropTypes from 'prop-types';

import Carousel, { Modal, ModalGateway } from 'react-images';

export class BoxPicture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const { onCopy, onShuffle, image, index } = this.props;

        return (
            <div className="box-picture">
                <div key={index} className="container-picture">
                    <img src={image.src} />
                </div>
                <button className="copy" onClick={onCopy}>Copy</button>
                <button className="shuffle" onClick={onShuffle}>Shuffle</button>
            </div>

        )
    }
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    onShuffle: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired,
    onClick: PropTypes.func
};