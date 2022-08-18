import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
}

export default function AboutUsPage() {
  return (
    <div className="standart-back">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" className="ab-up-all">
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
            className="text-upload"
          >
            AboutUsPage
          </Link>
        </Breadcrumbs>
      </div>
      <div className="not-work">
      In development
      </div>
    </div>
  );
}
