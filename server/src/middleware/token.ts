import JWT from "jsonwebtoken";

const generateToken = async (id: any) => {
  const token = JWT.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return token
};

export default generateToken;
