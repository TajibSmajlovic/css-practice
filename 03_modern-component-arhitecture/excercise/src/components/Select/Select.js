import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" }}>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  border-radius: 8px;
  background-color: ${COLORS.gray50};
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  /* height: fit-content; */
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
