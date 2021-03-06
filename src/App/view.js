import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { normalize, fontFace } from 'polished';

import { Button, ButtonBar, Display } from '../components';

injectGlobal`
  ${normalize()};

  ${fontFace({
    fontFamily: 'system',
    fontStyle: 'normal',
    fontWeight: 300,
    localFonts: [
      '.SFNSText-Light',
      '.HelveticaNeueDeskInterface-Light',
      '.LucidaGrandeUI',
      'Ubuntu Light',
      'Segoe UI Light',
      'Roboto-Light',
      'DroidSans',
      'Tahoma',
    ],
  })};
`;

const StyledWrapper = styled.div`
  font-family: system;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledBox = styled.div`
  width: 300px;
  max-width: 100%;
`;

const AppView = ({ current, handleReset, handleAdd }) => (
  <StyledWrapper>
    <StyledBox>
      <Display>{current || '0'}</Display>
      <ButtonBar>
        <Button onClick={handleAdd} value="-2">
          -2
        </Button>
        <Button onClick={handleAdd} value="-1">
          -1
        </Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleAdd} value="1">
          +1
        </Button>
        <Button onClick={handleAdd} value="2">
          +2
        </Button>
      </ButtonBar>
    </StyledBox>
  </StyledWrapper>
);

AppView.defaultProps = {
  current: '0',
};

AppView.propTypes = {
  current: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default AppView;
