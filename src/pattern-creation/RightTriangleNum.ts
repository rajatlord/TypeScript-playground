// export function RightTriangleNum(){
//  for (let i = 0; i <=4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j+" ";
//     }
//     console.log(row);
//   }
// }
// 1
// 2 2
// 3 3 3
// 4 4 4 4 

// export function RightTriangleNum(){
//  for (let i = 0; i <=4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += i+" ";
//     }
//     console.log(row);
//   }
// }

// reverse num
export function RightTriangleNum(){
 for (let i = 0; i <=4; i++) {
    let row = "";
    for (let j = 1; j <=4-i; j++) {
      row += j+" ";
    }
    console.log(row);
  }
}