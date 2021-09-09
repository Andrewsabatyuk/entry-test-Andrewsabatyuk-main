// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
const final = [];
for (let i = 0; i <= arr.length + size - 1; i + size) {
  final.push([arr.slice(i, size - 1)]);
}
return final
};
