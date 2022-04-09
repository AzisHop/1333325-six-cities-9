import React from 'react';

import './loading-screen.css';

export default function LoadingScreen() {
  return (
    <div className="spinner-pulse">
      <div className="spinner">
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}
