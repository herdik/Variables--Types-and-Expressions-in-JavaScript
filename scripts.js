let object = {
    colors:["orange", "blue", "green", "purple"]
  };
  object.ManyColors;
  if (object.colors.length > 3) {
    object.ManyColors = true;
  }
  console.log(object);
  
  let names = ['Jano', 'Juro', 'Petka', 'Lucka', 'Misko', 'Fifko'];
  if (names[2].length > 5) {
    console.log('tretia polozka ma viac ako 5 znakov');
  } else {
    console.log('ma malo znakov')
  }
  console.log(names[names.length - 1]);
  names.push('Ferko');
  console.log(names[names.length - 1]);
  console.log(3 < 4 && (5 > 6 || 7 < 8));
  names[0] = ('Juro');
  console.log(names);
  if (names.length > 4) {
    console.log('viac poloziek ako 4');
  }
  
  
  console.log('Hello world'.length);
  
  
  
  
  let jano = 32;
  //console.log(jano)
  
  //console.log(!!!true);
  //console.log(!true);
  console.log(5 !== 5);
  console.log(100 % 3);
  
  let ageJuro = 2022 - 1983;
  console.log(ageJuro);
  let ww2 = 1945 - 1939;
  console.log(ww2);
   let shareTesla = 943.90;
   let tesla = 76 * shareTesla;
   console.log(tesla);
   let secondOfDay = 60 * 60 * 24;
   console.log(secondOfDay);
   let hungarians = (9700000 / 7900000000) * 100;
   console.log(hungarians);
   let bigger = 14000000000 / 10700000;
   console.log(bigger);
   console.log(654 % 7);