// axios for Google OAuth
import axios from "axios";

// Decode jwt code
import jwt_decode from "jwt-decode";

// Google OAuth for users
export const createOrGetUser = async (response, addUser) => {
  const decoded = jwt_decode(response.credential);

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  await axios.post(`http://localhost:5173/api/auth `, user);
};
