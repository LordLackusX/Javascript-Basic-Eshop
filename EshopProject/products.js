
let products = {
  Games: {
     Borderladns3: {
         name : "Borderlands 3",
         description: 'Nice Looter Shooter',
         price: 69.99,
         image: 'Borderlands3.jpg'
     },
      DarkSouls3: {
          name : "Dark Souls 3 ",
          description: 'Easy game',
          price: 14.99,
          image: 'DarSouls.jpg'
      },
      Cuphead: {
          name : "Cuphead",
          description: 'actuall hard game',
          price: 9.99,
          image: 'cuphead.jpg'
      },
      Left4Dead2: {
        name : "Left4Dead2",
        description: 'zombie survival',
        price: 19.99,
        image: 'l4d2.jpg'
    },




  },
  Merch: {
      TShirts: {
          name : "T-shirt",
          description: 'Good to wear',
          price: 19.99,
          image: 'Shirt.png'
      },
      Cups: {
          name : "Tea Cup",
          description: 'Used to transfer hot liquid',
          price: 6.99,
          image: 'Cofee.png'
      },
      
  }
  }

console.log(products.Games.Borderladns3);
console.log(products.Merch.TShirts);



for (let L1Name in products){
  console.log(L1Name);
  for (let L2Name in products[L1Name]){
      console.log(" - " + L2Name);

  }
}