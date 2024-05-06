import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import {
  H2,
  H3,
  Img,
  RunewordContainer,
  RunewordItemDisplay,
  TooltipWrapper,
  Tooltip,
} from "./styles";

export const RunewordDisplay = ({ availableRunewords }) => {
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipWidth(tooltipRef.current.offsetWidth);
    }
  }, []); // Update width if the text changes

  return (
    <RunewordContainer>
      {Object.entries(availableRunewords).map(([key, value]) => (
        <RunewordItemDisplay key={key}>
          <H2>{key}</H2>
          {/* <TooltipWrapper>
            <H3>{value.runeword.join(" - ")}</H3>
            <Tooltip width={tooltipWidth} ref={tooltipRef}>
              {`3 drax: 1 Zed\n3 thal: 1 sur`}
            </Tooltip>
          </TooltipWrapper> */}
          <Img src={value.img} />
        </RunewordItemDisplay>
      ))}
    </RunewordContainer>
  );
};

RunewordDisplay.propTypes = {
  availableRunewords: PropTypes.object,
};
