import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({field, value, label, error, type, onChange}) => {
    return (
            <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={field}
                className="form-control"
            />
            {error && <span className="help-block">{error}</span>}
        </div>  
        );
}

TextFieldGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.array
}
TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;