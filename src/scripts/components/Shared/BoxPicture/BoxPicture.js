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
        const { onClick, image, index } = this.props;

        return (
            <div key={index} className="container-picture">
                {onClick ? <span className="favorite" onClick={onClick}>❤</span> : null}
                <Carousel views={[{ source: image }]} />
            </div>
        )
    }
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func
};