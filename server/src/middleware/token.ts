import JWT, { JwtPayload } from "jsonwebtoken";

const generateToken = async (id: {id : JwtPayload}):Promise<string> => {
  const token = JWT.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return token
};

export default generateToken;
