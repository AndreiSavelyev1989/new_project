import axios from 'axios';

// const instance = axios.create({
//     baseURL: "http://localhost:7542/2.0/",
//     withCredentials: true
// })

const instanceHeroku = axios.create({
  withCredentials: true,
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
});

export const cardsAPI = {
  getCards: async (packId) => {
    return instanceHeroku.get(
      'cards/card?cardsPack_id=602c0d0e3a1410000468aa60'
    );
  },
  addCard: async (packId) => {
    return instanceHeroku.post('cards/card', {
      card: {
        cardsPack_id: '602c0d0e3a1410000468aa60',
      },
    });
  },
  delCard: async (cardId) => {
    return instanceHeroku.delete(`cards/card?id=${cardId}`);
  },
  updateCard: async () => {},
};

export const restoreAPI = {
  restorePassword: async (email) => {
    const promise = await instanceHeroku.post('auth/forgot', {
      email,
      from: 'dreamonaut@mail.ru',
      message: `<div style="background-color: lime; padding: 15px">
              password recovery link: 	
              <a href='http://localhost:3000/new_project/#/new-password/$token$'>	
              Follow the link to set a new password</a></div>`,
    });
    return promise;
  },
  setNewPassword: async (password, resetPasswordToken) => {
    const promise = await instanceHeroku.post('auth/set-new-password', {
      password: password,
      resetPasswordToken: resetPasswordToken,
    });
    return promise;
  },
};
