(() => {
  // let myNumber: number;
  // let myName: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 1234;

  let myString: string | undefined = undefined;
  myString = 'Hola'

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    if(name) {
      hello += name.toLowerCase();
    }
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
})()
