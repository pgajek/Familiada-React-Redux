import React from 'react';
import './SideBoard.css';

const SideBoard = ({ team: { points, fails } }) => {
  const failsTab = [];
  for (let i = 0; i < fails; i++) {
    failsTab.push({
      text: 'X',
      id: i
    });
  }
  const failsToRender = failsTab.map(fail => (
    <div key={fail.id} className="fail">
      {fail.text}
    </div>
  ));

  return (
    <div className="sideBoard">
      <div className="fails">{failsToRender}</div>
      <div className="points">{points}</div>
    </div>
  );
};

export default SideBoard;
