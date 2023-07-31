import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaGeoJSON from "../assets/gadm41_IND_1.json";
import stateDescriptions from "../assets/dis.json"; // Replace with the correct path

function App() {
  const [hoveredState, setHoveredState] = useState(null);

  const handleStateHover = (geography) => {
    setHoveredState(geography.properties.NAME_1);
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const getDescription = () => {
    if (hoveredState && stateDescriptions[hoveredState]) {
      return stateDescriptions[hoveredState];
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-y-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [80, 22],
        }}
      >
        <Geographies geography={indiaGeoJSON.features}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleStateHover(geo)}
                onMouseLeave={handleStateLeave}
                style={{
                  default: {
                    fill: "#3B82F6",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#EF4444",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredState && (
        <div className="absolute bottom-0 right-4 text-center">
          <p className="text-xl font-semibold">{hoveredState}</p>
          <p>{getDescription()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
