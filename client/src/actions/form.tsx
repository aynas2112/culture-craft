import * as api from '../api';

export const createPose = (pose)=> async(dispatch)=>{
    try {
        const {data} = await api.createPose(pose);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
