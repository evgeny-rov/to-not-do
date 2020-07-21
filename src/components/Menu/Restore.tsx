import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as TrashSVG } from '../../trash-can.svg';
import Modal from '../Modal';

interface Props {
  resetApp: () => void;
}

const Restore = ({ resetApp }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmation = () => {
    setShowConfirm(false);
    resetApp();
  }

  if (showConfirm) {
    return (
      <Modal onAbort={() => setShowConfirm(false)}>
        <span className="modal-text">Reset all of your progress?</span>
        <div className="modal-user-input">
          <input type="button" className="btn-modal" value="Yes" onClick={handleConfirmation}/>
          <input type="button" className="btn-modal" value="No" onClick={() => setShowConfirm(false)} />
        </div>
      </Modal>
    );
  } else {
    return <TrashSVG onClick={() => setShowConfirm(true)} />
  }
}

export default connect(null, { resetApp })(Restore);
