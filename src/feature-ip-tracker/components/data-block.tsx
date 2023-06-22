import { FC } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserIPInfo } from "../types";

const DataBlock: FC<{ userIPInfo: UserIPInfo | null }> = ({ userIPInfo }) => {
  return (
    <DateBlock>
      <Block>
        <Label>ip adress</Label>
        <Info>{userIPInfo?.ip}</Info>
      </Block>
      <Block>
        <Label>location</Label>
        <Info>
          {userIPInfo?.country || "-"}, {userIPInfo?.city || "-"},{" "}
          {userIPInfo?.postal || "-"}
        </Info>
      </Block>
      <Block>
        <Label>timezone</Label>
        <Info>
          {userIPInfo?.timezone?.utc ? "UTC " + userIPInfo?.timezone?.utc : "-"}
        </Info>
      </Block>
      <Block>
        <Label>isp</Label>
        <Info>{userIPInfo?.connection?.isp || "-"}</Info>
      </Block>
    </DateBlock>
  );
};

export default DataBlock;

const DateBlock = styled.div`
  display: flex;
  align-items: stretch;
  position: absolute;
  z-index: 10;
  width: 70vw;
  background: white;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 4px 8px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 5px rgba(34, 60, 80, 0.2);

  > div {
    border-right: 1px solid black;
    padding: 0px 8px;
  }
  > div:first-child {
    padding-left: 0px;
  }
  > div:last-child {
    border-right: none;
  }
`;
const Block = styled.div`
  width: 25%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
`;
const Label = styled.p`
  margin: 0px;
  text-transform: uppercase;
  font-size: 14px;
  color: gray;
  margin-bottom: 8px;
  width: 100%;
`;

const Info = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
`;
