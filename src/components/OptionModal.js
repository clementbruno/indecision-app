import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
    // "!!" before expression allows to convert to real boolean value
      isOpen={!!props.selectedOption}
      // onRequestClose allows to close modal by pressing 'esc' or clicking background
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
  )
};

// Could be refactored as follows with implicit return:
  // const OptionModal = (props) => (
  //   <Modal
  //     // "!!" before expression allows to convert to real boolean value
  //     isOpen={!!props.selectedOption}
  //     // onRequestClose allows to close modal by pressing 'esc' or clicking background
  //     onRequestClose={props.handleClearSelectedOption}
  //     contentLabel="Selected Option"
  //   >
  //     <h3>Selected Option</h3>
  //     {props.selectedOption && <p>{props.selectedOption}</p>}
  //     <button onClick={props.handleClearSelectedOption}>Okay</button>
  //   </Modal>
  // );

export default OptionModal;
