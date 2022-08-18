import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";

const Footer = () => {
  return (
    <div className="footer-first">
      <div className="part-all">
        <div className="partners">Partners</div>
        <div className="part-text">
          <a href="" className="part-list">
            WaynDix
          </a>
          <a href="" className="part-list">
            Henrexxi
          </a>
          <a href="" className="part-list">
            Mikail
          </a>
          <a href="" className="part-list">
            AnimeSoul
          </a>
        </div>
      </div>

      <div className="who-all">
        <div className="who">Who are we?</div>
        <div className="who-text">
          <a href="" className="who-list">
            About us
          </a>
          <a href="" className="who-list">
            Privacy Policy
          </a>
          <a href="" className="who-list">
            Copyright
          </a>
          <a href="" className="who-list">
            Terms of Use
          </a>
        </div>
      </div>

      <div className="end-foot">
        <div className="desined">
          <CodeIcon sx={{ fontSize: "16px", marginRight: "5px" }} /> Designed
          and code by <span className="main">WaynDix</span>
        </div>
        <div className="retired">
          <BuildIcon sx={{ fontSize: "13px", marginRight: "5px" }} /> Retired
          developers / Honorable Mentions:{" "}
          <span className="main-two">WaynDix</span>
        </div>
        <div className="cop">Copyright 2022 WaynSoul.</div>
      </div>
    </div>
  );
};

export default Footer;
