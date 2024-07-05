import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const submitReferral = (referralData) => {
  return api.post('/api/referral', referralData);
};

export default api;