import React from "react";

import type { Props } from "./types";

export const ArchiveIcon: React.FC<Props> = ({ width = "24", height = "24", className, color }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 19.5C5.41667 19.5 5.125 19.375 4.875 19.125C4.625 18.875 4.5 18.5833 4.5 18.25V7.35417C4.5 7.14583 4.52083 6.96875 4.5625 6.82292C4.60417 6.67708 4.68056 6.54167 4.79167 6.41667L5.95833 4.83333C6.06944 4.70833 6.19792 4.62153 6.34375 4.57292C6.48958 4.52431 6.6624 4.5 6.86221 4.5H17.1378C17.3376 4.5 17.5069 4.52431 17.6458 4.57292C17.7847 4.62153 17.9097 4.70833 18.0208 4.83333L19.2083 6.41667C19.3194 6.54167 19.3958 6.67708 19.4375 6.82292C19.4792 6.96875 19.5 7.14583 19.5 7.35417V18.25C19.5 18.5833 19.375 18.875 19.125 19.125C18.875 19.375 18.5833 19.5 18.25 19.5H5.75ZM6.10417 6.70833H17.875L17.1165 5.75H6.85417L6.10417 6.70833ZM5.75 7.95833V18.25H18.25V7.95833H5.75ZM12 16.375L15.25 13.125L14.4167 12.2917L12.625 14.0833V9.89583H11.375V14.0833L9.58333 12.2917L8.75 13.125L12 16.375Z"
      fill={color ? color : "currentColor"}
    />
  </svg>
);
