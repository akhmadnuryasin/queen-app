import React from "react";

const ListboxWrapper = ({ children }) => {
  return (
    <div className="w-full max-h-[270px] max-w-[360px] px-6 overflow-auto py-2 rounded-small scrollbar-hidden mt-3">
      {children}
    </div>
  );
};

export default ListboxWrapper;
