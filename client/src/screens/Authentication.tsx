import React from "react";

const Authentication = () => {
  const handleGoogleAuth = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

  const handleGithubAuth = () => {
    window.open("http://localhost:5000/api/v1/auth/github", "_self");
  };
  
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="border-2 shadow-lg flex flex-col w-[60%] h-[80%] items-center justify-center gap-4">
        <button
          className="py-2 px-8 bg-red-500 text-white font-bold w-[50%]"
          onClick={() => handleGoogleAuth()}
        >
          Continue with Google
        </button>
        <button
          className="py-2 px-8 bg-black text-white font-bold w-[50%]"
          onClick={() => handleGithubAuth()}
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Authentication;
