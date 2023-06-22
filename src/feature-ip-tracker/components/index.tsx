import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserIPInfo } from "../types";
import MapComponent from "./map-component";
import DataBlock from "./data-block";
import InputBlock from "./input-block";
import { useDebounce } from "use-debounce";

const IPAdressTracker: FC = () => {
  const [userIPInfo, setUsersIPInfo] = useState<UserIPInfo | null>(null);
  const [writtenIP, setWrittenIP] = useState("");
  const [value] = useDebounce(writtenIP, 1000);

  async function getUserIPInfo(ip?: string) {
    const res = await fetch("https://ipwho.is/" + ip);
    const json = await res.json();
    setUsersIPInfo(json);
  }

  useEffect(() => {
    getUserIPInfo(value);
  }, [value]);

  return (
    <>
      <TopperWrapper>
        <Title>IP Adress Tracker</Title>

        <InputBlock writtenIP={writtenIP} setWrittenIP={setWrittenIP} />
        <DataBlock userIPInfo={userIPInfo} />
      </TopperWrapper>

      <MapComponent userIPInfo={userIPInfo} />
    </>
  );
};

export default IPAdressTracker;

const TopperWrapper = styled.div`
  background-image: url("https://static.vecteezy.com/system/resources/previews/011/351/207/original/abstract-technology-futuristic-glowing-blue-and-purple-light-lines-with-speed-motion-effect-on-dark-blue-background-free-vector.jpg");
  padding: 36px 0px 100px;
  text-align: center;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 36px;
  color: white;
  margin: 0px 0px 36px;
`;
