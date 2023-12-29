import React, { useState } from "react";
import { BsGithub, BsGoogle, BsWhatsapp } from "react-icons/bs";
import { Input } from "../components/Input";
import Button from "../components/Button";
import AuthSocialButton from "../components/AuthSocialButton";

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

  const handleSubmit = () => {};

  const socialAction = (provider) => {};

  return (
    <div className="bg-neutral-100 h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[70%] w-[90%] md:w-[60%] lg:w-[40%] ring-1 ring-gray-100 shadow-md bg-white flex flex-col items-center gap-4 py-4">
        <div>
          <BsWhatsapp className="text-green-700 text-[50px]" />
        </div>
        <div className="font-semibold text-2xl text-green-700">
          {Variant === "LOGIN" ? "Sign in to continue" : "Register New Account"}
        </div>
        <form className="w-full px-4 gap-4 flex flex-col items-center justify-center">
          <Input
            placeholder="email"
            disabled={true}
            label="email"
            error={true}
            id="email"
            required={true}
            key={"email"}
          />
          <Input
            placeholder="password"
            disabled={true}
            label="password"
            error={true}
            id="password"
            required={true}
            key={"password"}
          />
          {Variant === "REGISTER" && (
            <>
              <Input
                placeholder="username"
                disabled={true}
                label="username"
                error={true}
                id="username"
                required={true}
                key={"username"}
              />
            </>
          )}

          <Button
            danger={false}
            disabled={false}
            secondary={false}
            key={"button"}
            onclick={handleSubmit}
            type="submit"
            Variant={Variant}
          />
        </form>

        <div className="mt-6 flex flex-col w-full lg:w-[60%] px-6">
          <div className="relative">
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
            {Variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {Variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
