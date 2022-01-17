/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const STYLES = {
  small: {
    height: "8px",
    padding: "0px",
    radius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0px",
    radius: "4px",
  },
  large: {
    height: "16px",
    padding: "4px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding,
        "--radius": styles.radius,
      }}
    >
      <VisuallyHidden>{`${value}%`}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": `${value}%`,
            "--height": styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);

  background: ${COLORS.primary};
`;

export default ProgressBar;
