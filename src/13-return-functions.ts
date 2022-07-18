(() => {
  const calcTotal = (prices: number[]): number => {
    // let total = 0;
    // prices.forEach((item) => {
    //   total += item;
    // });
    // return total
    const rta = prices.reduce((total, num) => {
      return total + num;
    })
    return rta;
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es: ${rta}`)
  }

  printTotal([1,2,1,2,1]);
  // console.log(rta);


})()
