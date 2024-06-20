import apiClient from './apiClient';

export const createGame = async (theme) => {
  try {
    const response = await apiClient.post('/Game/Create', { theme }, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error('Error creating game:', error);
    throw error;
  }
};

export const makeGuess = async (gameId, letter) => {
    try {
      const response = await apiClient.post('/Game/MakeGuess', { gameId, letter }, {withCredentials : true});
      return response.data;
    } catch (error) {
      console.error('Error making guess:', error);
      throw error;
    }
  };

export const login = async (email, password) =>{
  try{
    const response = await apiClient.post('/login?useSessionCookies=true',{email, password}, {withCredentials: true});
    return response;
  }catch(error){
    console.error("Login Error")
  }
};

export const register = async(email, password) =>{
  try{
    const response = await apiClient.post('/register', {email, password});
    return response;
  }catch(error){
    throw error;
    
  }

}


