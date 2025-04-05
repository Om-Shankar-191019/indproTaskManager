import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (userInput) => {
    const success = handleInputValidation(userInput);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      if (userInput.remember) {
        localStorage.setItem("indAuthUser", JSON.stringify(data));
      } else {
        sessionStorage.setItem("indAuthUser", JSON.stringify(data));
      }
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputValidation = (userInput) => {
  const { username, email, password, confirmPassword } = userInput;
  if (!username || !email || !password || !confirmPassword) {
    toast.error("Please fill all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password and confirm password do not match.");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters.");
    return false;
  }
  return true;
};
