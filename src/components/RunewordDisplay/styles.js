import { styled } from "styled-components";

export const RunewordContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RunewordItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 5px;
`;

export const H2 = styled.h2`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  color: #ffff;
  opacity: 95%;
`;

export const Img = styled.img`
  width: 400px;
  object-fit: contain;
  padding-top: 5px;
`;

export const H3 = styled.h3`
  font-size: 15px;
  font-family: "Roboto";
  font-weight: 400;
  color: #ffff;
  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
`;

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  border-bottom: 1px dotted black;
`;

export const Tooltip = styled.span`
  visibility: hidden;
  min-width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 100%;
  left: 50%;
  white-space: pre-line;
  margin-left: ${(props) => `-${props.width / 2}px`};

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;

  ${TooltipWrapper}:hover & {
    visibility: visible;
  }

  &::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
