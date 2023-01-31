import { ZERO, INC, DEC, RND } from "./actionTypes";

export const zero = () => ({type: ZERO});
export const inc = () => ({type: INC});
export const dec = () => ({type: DEC});
export const rnd = () => ({type: RND, payload: +(Math.random()*10).toFixed()});