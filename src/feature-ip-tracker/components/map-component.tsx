import { FC } from "react";
import styled from "styled-components";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserIPInfo } from "../types";

const publicAccessToken =
  "pk.eyJ1Ijoic3RyYW5hc3Rhc2lhIiwiYSI6ImNsajcxNW5kNDBzZ2czZHF5dzEyOGY0dW8ifQ.8nktMWAsI-fTwVbEMF79gg";

const MapComponent: FC<{
  userIPInfo: UserIPInfo | null;
}> = ({ userIPInfo }) => {
  const startViewPort = {
    latitude: 44.78209650726346,
    longitude: 51.80409510089605,
    zoom: 3,
  };

  return (
    <MapWrapper>
      <ReactMapGL
        mapboxAccessToken={publicAccessToken}
        initialViewState={{ ...startViewPort }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{
          width: 600,
          height: 600,
        }}
      >
        <Marker
          longitude={userIPInfo?.longitude || 0}
          latitude={userIPInfo?.latitude || 0}
          color="red"
        />
      </ReactMapGL>
    </MapWrapper>
  );
};

export default MapComponent;

const MapWrapper = styled.div`
  .mapboxgl-canvas,
  .mapboxgl-map {
    height: calc(100vh - 246px) !important;
    width: 100vw !important;
  }
`;
