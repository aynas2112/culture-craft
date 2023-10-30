import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const createPose = (newPose)=> API.post('api/pose/newpose', newPose);
