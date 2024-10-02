import { axiosInstance } from '@/lib/axios';
// handle user register

export const registerUser = async(userData) => {
    try {
    const response = await axiosInstance.post("api/v1/register", userData);
    console.log("Register Success", response);
    return response.data;    
    } catch (error) {
        console.error(error.message);
    }
};

export const loginUser = async (loginData) => {
    try {
      const response = await axiosInstance.post("/api/v1/login", loginData);
      console.log("Login Success", response);
      return response.data;
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

export const logoutUser = () => {
    
}

export const deletedAccountUser = () => {
    
}