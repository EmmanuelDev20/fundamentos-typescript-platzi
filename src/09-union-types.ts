(() => {
  let userId: string | number;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      // Al momento de saber que es un string, ts lo trata como tal y activa sus metodos
      myText.concat;
    } else {
      // Al momento de saber que es un numero por defecto, ts lo trata como tal y activa sus metodos

    }
  }

  greeting('asd');
  greeting(2341234);
})()
