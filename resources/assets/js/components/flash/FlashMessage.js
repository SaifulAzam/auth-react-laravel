import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.props.deleteFlashMessage(this.props.message.id);
  }
  render() {
    const { id, type, text} = this.props.message;
      return (
        <div className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error',
        })} > 
            {text}

            <button onClick={this.onClick} className="close"><span>&times;</span></button>
        </div>
  )
  }
}


export default FlashMessage;