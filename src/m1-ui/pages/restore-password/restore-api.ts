import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
});

type ResponseType = {
  info: string,
  error?: string
};

export const restoreAPI = {
  restorePassword: async (email: string | null) => {
    const promise = await instance.post<ResponseType>('auth/forgot', {
      email,
      from: 'dreamonaut@mail.ru',
      message: `<div style="background-color: lime; padding: 15px">
              password recovery link: 	
              <a href='http://localhost:3000/#/new-password/$token$'>	
              link</a></div>`,
    });
    return promise;
  },
  setNewPassword: async (password: string, resetPasswordToken: string) => {
    const promise = await instance.post<ResponseType>('auth/set-new-password', {
      password: password,
      resetPasswordToken: resetPasswordToken,
    });
    return promise;
  },
};
