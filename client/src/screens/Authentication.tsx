import React, { useCallback, useState } from "react";

type Variant = "LOGIN" | "REGISTER";

const Authentication = () => {
  const [Variant, setVariant] = useState<Variant>("LOGIN");

  const [isLoading, setisLoading] = useState(false);

  const toggleVariant = () => {
    if (Variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  };

  return (
    <div className="bg-neutral-100 h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[70%] w-[90%] md:w-[60%] lg:w-[40%] ring-1 ring-gray-100 shadow-md bg-white flex flex-col">
        <div className="">Sign in to continue</div>
      </div>
    </div>
  );
};

export default Authentication;
