export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const zero = () => ({type: 'ZERO'});
export const rnd = () => ({type: 'RND', payload: () =>{
  return Math.floor(Math.random()*10)
}});