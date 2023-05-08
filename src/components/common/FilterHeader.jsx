// Init
import React from 'react';
// Component
export default function FilterHeader(props) {
  const { title, desp } = props;

  return (
    <div className="NftFiltrationHeader">
      <div className="NftFiltrationHeaderTitle">{title}</div>
      <div className="NftFiltrationHeaderDesp">{desp}</div>
    </div>
  );
}
