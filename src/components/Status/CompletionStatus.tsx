import React from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';

// `${Math.floor((complete / total) * 100)}%`

const CompletionStatus = ({ total, complete, expires }: ProgressState) => {
  const isToDoComplete = total === complete;
  const notifyContent = isToDoComplete ? 'Good job! Take a break or add new tasks' : `${complete} / ${total}`;
  const completeClassName = isToDoComplete ? 'completion-notify complete' : 'completion-notify';
  
  return (
    <div className="completion-container">
      <progress id="progress-status" value={complete} max={total}></progress>
      <div className={completeClassName}>
        <Countdown key={expires} countAmount={expires - Date.now()}/>
        <span className="progress">{notifyContent}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return { ...state.progress };
}

export default connect(mapStateToProps)(CompletionStatus);
