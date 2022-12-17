import React from "react";
import styles from "./ConsentToggle.module.css";

export interface ConsentToggleProps {
    onToggleClick?: () => void
}

const ConsentToggle = ( {onToggleClick}:ConsentToggleProps ) => {
    return (
        <button onClick={onToggleClick} className={styles["consent-toggle"]} aria-label="Edit cookie settings">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17
            0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13
            35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0
            0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77
            54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11
            80.53-12.76l69.13-35.21a132.273 132.273 0 0 0
            57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176
            368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32
            32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33
            32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32
            32-14.33 32-32 32z"
          />
        </svg>
      </button>
    )
}

export default ConsentToggle;