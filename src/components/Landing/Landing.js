import React from 'react';

const LandingComponent = () => {
  const style = {
    page: {},
    layout: {},
    heading: {
      textAlign: 'center',
      fontSize: '48px',
      margin: '64px',
    },
  };

  return (
    <div style={style.page}>
      <div style={style.layout}>
        <div style={style.heading}>Landing Page</div>
      </div>
    </div>
  );
};

export default LandingComponent;
