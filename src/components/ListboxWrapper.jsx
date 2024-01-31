import React from "react";

const ListboxWrapper = ({ children }) => {
  return (
    <div className="w-full max-h-[270px] max-w-[380px] px-6 overflow-auto py-2 rounded-small my-3 relative scrollbar-hidden">
      {children}
    </div>
  );
};

export default ListboxWrapper;
