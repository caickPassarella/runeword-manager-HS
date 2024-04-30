import { H2, Img, RunewordContainer, RunewordItemDisplay } from "./styles";

export const RunewordDisplay = ({ availableRunewords }) => {
  return (
    <RunewordContainer>
      {Object.entries(availableRunewords).map(([key, value]) => (
        <RunewordItemDisplay key={key}>
          <H2>{key}</H2>
          <Img src={value.img} />
        </RunewordItemDisplay>
      ))}
    </RunewordContainer>
  );
};
