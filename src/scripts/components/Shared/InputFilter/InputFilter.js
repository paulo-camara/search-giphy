import React from 'react';
import PropTypes from 'prop-types';

export const InputFilter = ({ className, id, onChange, value, onClick }) => (
    <div className="input-filter">
        <input
            id={id}
            placeholder={'Pesquisar'}
            className={`input-search ${className}`}
            onChange={onChange}
            value={value} />
        <button
            className="button-find"
            onClick={onClick}>
            Pesquisar
        </button>
    </div>
);

InputFilter.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};