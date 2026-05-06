// export function RightTriangle() {
//   for (let i = 0; i <4; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// reverse right angel trianagel
export function RightTriangle() {
  for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j <4-i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
