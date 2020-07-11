import React from 'react';
import '../../App.css';
import user from '../../img/user.svg';

class Counter extends React.Component {
  render() {
    return (
      <>
        <div className={'counters'}>
          <div className={'container-form-search__user'}>
            <img src={user} alt={'Countador de Registro'} />
            <span id='countRegister'>{this.props.records.length}</span>
          </div>
        </div>
      </>
    )
  }
}

export default Counter;