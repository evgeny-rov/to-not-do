import React from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { StyledToolTip, StyledInfoWrapper } from '../../styled/menu';

export default () => {
  return (
    <StyledInfoWrapper>
      <StyledToolTip>
        <span>Your todos will be reset in 24 hours.</span>
        <span>Try to complete all of them in time!</span>
        <hr />
        <span>To remove todo swipe it to the right</span>
        <span>or click twice on the checkbox.</span>
        <hr />
        <span>Use recycle to remove all complete todos.</span>
        <span>You can turn off/on timer by clicking on it.</span>
      </StyledToolTip>
      <InfoSVG title="Info"/>
    </StyledInfoWrapper>
  );
};
