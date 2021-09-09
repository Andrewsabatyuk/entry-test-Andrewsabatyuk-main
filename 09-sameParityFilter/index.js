export const sameParityFilter = (arr = []) => {
  // const el = (arr) => arr % 2 === 0;
 const odd = arr[0] % 2 === 0;
 const newwArr= arr.filter((el)=>
   odd ? el % 2 === 0 : el % 2 !== 0
 ) 
 return newwArr
}
