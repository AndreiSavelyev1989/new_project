import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
});

export const restoreAPI = {
  restorePassword: async (email: string) => {
    const promise = await instance.post('auth/forgot', {
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
    const promise = await instance.post('auth/set-new-password', {
      password: password,
      resetPasswordToken: resetPasswordToken,
    });
    return promise;
  },
};
