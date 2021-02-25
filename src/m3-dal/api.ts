import axios from "axios";
import {CardPacksType} from "../m2-bll/redusers/pack-reducer";

// const instance = axios.create({
//     baseURL: "http://localhost:7542/2.0/",
//     withCredentials: true
// })

const instanceHeroku = axios.create(({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
}))


//Cards Api
export const cardsPackAPI = {
     getPacks(page: number | undefined, pageCount: number | undefined) {
        return instanceHeroku.get<GetPacksResponseType>(`cards/pack?page=${page}&pageCount=${pageCount}`)
    },
    createPack(cardsPack:CardPacksType) {
        return instanceHeroku.post('cards/pack', {cardsPack: {...cardsPack}})
    },
    deletePack(id:string) {
        return instanceHeroku.delete(`cards/pack?id=${id}`)
    }

}
//Packs Type
export type GetPacksResponseType = {
    cardPacks: CardPacksType[],
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: string
}


//Auth api
export const authApi = {
    login(data: LoginDataType) {
        return instanceHeroku.post<LoginResponseType>('/auth/login', data)
    },
    me() {
        return instanceHeroku.post("auth/me")
    },
    updateMe(name: string, avatar: string){
       return instanceHeroku.put("auth/me", {name, avatar})
    },
    logout() {
        return instanceHeroku.delete("auth/me")
    }
}

export const restoreAPI = {
    restorePassword: async (email: string | null) => {
        const promise = await instanceHeroku.post<ResponseRestoreType>('auth/forgot', {
            email,
            from: 'dreamonaut@mail.ru',
            message: `<div style="background-color: lime; padding: 15px">
              password recovery link: 	
              <a href='http://localhost:3000/new_project/#/new-password/$token$'>	
              Follow the link to set a new password</a></div>`,
        });
        return promise;
    },
    setNewPassword: async (password: string, resetPasswordToken: string) => {
        const promise = await instanceHeroku.post<ResponseRestoreType>('auth/set-new-password', {
            password: password,
            resetPasswordToken: resetPasswordToken,
        });
        return promise;
    },
};
export const registrationAPI = {
    setRegistration(data: RegistrationParamsType) {
        return instanceHeroku.post<ResponseRegistrationType>("auth/register", data)
    }
}
//Auth Type
// Request types
export type RegistrationParamsType = {
    email: string
    password: string
}
export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

//Response types
type ResponseRestoreType = {
    info: string,
    error?: string
};

type ResponseLoginRegistrationType = {
    email?: string
    created?: string
    isAdmin?: boolean
    name: string
    publicCardPacksCount?: number
    rememberMe?: boolean
    updated?: string
    verified?: boolean
    _id?: string
}
type RegistrationType = {
    __v: number
}
type LoginType = {
    avatar?: string;
    error?: string;
}

type ResponseRegistrationType = ResponseLoginRegistrationType & RegistrationType

export type LoginResponseType = ResponseLoginRegistrationType & LoginType

//Cards API
export const cardsAPI = {
    // getCards: async (cardsPackId: string) => {
    //   return instanceHeroku.get(
    //     `cards/card?cardsPack_id=${cardsPackId}`
    //   );
    // },
    getCards: async (cardsPackId: string, page: number | undefined, pageCount: number | undefined) => {
      return instanceHeroku.get(
        `cards/card?cardsPack_id=${cardsPackId}&page=${page}&pageCount=${pageCount}`
      );
    },
    addCard: async (cardsPackId: string) => {
      return instanceHeroku.post('cards/card', {
        card: {
          cardsPack_id: `${cardsPackId}`,
        },
      });
    },
    delCard: async (cardId: string) => {
      return instanceHeroku.delete(`cards/card?id=${cardId}`);
    },
    updateCard: async (cardId: string) => {
      return instanceHeroku.put('cards/card', {
        card: {
          _id: `${cardId}`,
          question: 'Updated',
          comments: 'Updated'
        },
      });
    },
    addPack: async () => {
      return instanceHeroku.post('/cards/pack', {
        cardsPack: {},
      });
    },
  };
  

type ResponseCardType = {
    answer: string;
    question: string;
    cardsPack_id: string;
    grade: number;
    rating: number;
    shots: number;
    type: string;
    user_id: string;
    created: string;
    updated: string;
    __v: number;
    _id: string;
  };
  
type ResponseCardOptionsType = {
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
  };

