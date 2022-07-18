(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1)
  console.log(producto1.title)
  console.log(producto1.size)


  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2)
  console.log(producto2.title)
  console.log(producto2.size)


})()
