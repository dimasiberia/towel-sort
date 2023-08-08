
module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  }else if(matrix.length>0){
  for(let i = 1;i<matrix.length;i++){
    matrix[i] = matrix[i].sort((a, b) => b - a);
    i++;
  }
}
  return matrix.flat();
}


