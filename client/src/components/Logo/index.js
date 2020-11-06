import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";

function Logo() {
  return (
    <React.Fragment>
      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "900",
          fontSize: "40px",
          color: "white",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <span style={{ color: "#f7ee24" }}>
          {" "}
          <LocationOnIcon />
          GO
        </span>
        SEE
      </div>
    </React.Fragment>
  );
}

export default Logo;
