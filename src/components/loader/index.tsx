import React from "react";
import { Loader2 } from "lucide-react";

interface PropsType {
  showLoader: boolean;
}
const Loader = (props: PropsType) => {
  const { showLoader = false } = props;
  return (
    <>
      {showLoader ? (
        <div className="w-full h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center z-[999]">
          <div className="text-white text-center flex flex-col gap-2 items-center justify-center">
            <Loader2 className="animate-spin" />
            <h3>Loading...</h3>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
