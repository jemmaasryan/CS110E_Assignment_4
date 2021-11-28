
const matutils = require("./utils");

const mat1 = [
    [1, 2],
    [3, 4]
];

const mat2 = [
  [7, 8],
  [6, 5]
];

console.log(matutils.matrixProduct(mat1, mat2));

/* Task1 - product
 mat1: a1 a2      mat2: b1 b2    Result: (a1*b1 + a2*b3) (a1*b2 + a2*b4)
       a3 a4            b3 b4            (a3*b1 + a4*b3) (a3*b2 + a4*b4)
   
       (1*7 + 2*6) (1*8 + 2*5)          (19, 18)
       (3*7 + 4*6) (3*8 + 4*5)          (45, 44)
*/ 

console.log(matutils.sumOfMatrices(mat1, mat2));

/* Task2 - sum 
  mat1: a1 a2          mat2: b1 b2      Result: (a1+b1) (a2+b2)
        a3 a4                b3 b4              (a3+b3) (a4+b4)
   
    (1+7) (2+8)                          (8, 10)
    (3+6) (4+5)                          (9, 9)
*/

console.log(matutils.sumOfEachRow(mat1));

/* Task 3 - sum of each row 
mat1 1+2      result: 3, 7            mat2 7+8          result: 15, 11
     3+4                                   6+5
*/
