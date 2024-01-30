import React from "react";
import { Button } from "@nextui-org/react";

const List = (props) => {
  return (
    <Button className="w-full my-2 hover:bg-[#061492] text-[#061492] from-pink-500 to-yellow-500 hover:text-white border-small border-[#061492] rounded-md p-6 bg-transparent">
      {props.label}
    </Button>
  );
};

export default List;
