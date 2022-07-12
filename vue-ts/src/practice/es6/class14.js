
export function Main() {
{
  let arr = ['hello','word'];
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}
}



