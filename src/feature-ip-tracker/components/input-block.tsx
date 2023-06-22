import { FC } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import RightChevron from "./right-chevron";

const InputBlock: FC<{
  writtenIP: string;
  setWrittenIP: (a: string) => void;
}> = ({ writtenIP, setWrittenIP }) => {
  return (
    <StyledInputButton>
      <Input
        value={writtenIP}
        onChange={({ target }) => setWrittenIP(target.value)}
        placeholder="Search for any IP adress or domain"
      />
      <StyleddButton>
        <RightChevron />
      </StyleddButton>
    </StyledInputButton>
  );
};

export default InputBlock;

const StyledInputButton = styled.div`
  height: 60px;
  width: 40%;
`;
const Input = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  padding: 16px;
  border-radius: 8px 0px 0px 8px;
  border: none;
  width: calc(100% - 60px);
`;

const StyleddButton = styled.button`
  background: black;
  border-radius: 0px 8px 8px 0px;
  border: none;
  height: 60px;
  width: 60px;
  cursor: pointer;
`;
