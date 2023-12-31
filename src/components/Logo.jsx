/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logoimage from "/logo.png";

function Logo({ width = "60px" }) {
  return (
    <div>
      <img src={logoimage} style={{ width: width }} alt="Logo" />
    </div>
  );
}

export default Logo;
