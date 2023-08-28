import axios from "axios";
const URLS: string = "http://localhost:8000/api"

export const RegisterAPI = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${URLS}/register`, data, config)
      .then((res: any) => {
        // console.log("authapi",res)
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const SigninAPI = async (data: any) => {
  try {
    return await axios.post(`${URLS}/login`, data).then((res: any) => {
      console.log("signin: ", res)
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readUserAPI = async () => {
  try {
    return await axios.get(`${URL}/get-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOneAPI = async (id: string) => {
  try {
    return await axios.get(`${URLS}/${id}/read`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
