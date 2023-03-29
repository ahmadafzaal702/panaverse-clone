import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-2xl mx-auto px-20"> {children}</div>;
};

export default Wrapper;
