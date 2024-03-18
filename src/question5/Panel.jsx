import React, { useState } from "react";

export default function Panel({ title, collapsible, children}) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
  <div>
    <h3>{title}</h3>
    {collapsible ? (
      <>
        <button onClick={toggleCollapsed}>{collapsed ? "Visa" : "Mindre"}</button>
        {!collapsed && <div>{children}</div>}
      </>
    ):(
      <div>{children}</div>
    )}
  </div>
  );
}
