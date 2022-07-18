(() => {
  let myDynamicVar: any;

  myDynamicVar= 'hola';

  const rta = (myDynamicVar as string).toLowerCase();
  console.log('rta', rta);

  myDynamicVar = 1234;
  const rta2 = (<number>myDynamicVar);
  console.log(rta2);
})()
