/**
 * 
 * @param callBack 
 * @param delay 
 * @returns 
 */
export const debaunce = function(callBack: any, delay = 300) {
  let t: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(t);
    
    t = setTimeout(() => callBack.apply(this, args), delay);
  };
};
