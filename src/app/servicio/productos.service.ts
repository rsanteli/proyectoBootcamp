import { Injectable } from '@angular/core';
import { Product } from '../model/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Product[] = 
    [
      {
        "Id": "jenlooper-cactus",
        "Maker": "@jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
        "Title": "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
        "Description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
        "Ratings": [
          5,
          5
        ]
      },
      {
        "Id": "jenlooper-light",
        "Maker": "jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/book-light-dee7e4",
        "Title": "A beautiful switch-on book light",
        "Description": "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
        "Ratings": null
      },
      {
        "Id": "jenlooper-lightshow",
        "Maker": "@jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",
        "Url": "https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db",
        "Title": "Bling your Laptop with an Internet-Connected Light Show",
        "Description": "Create a web-connected light-strip API controllable from your website, using the Particle.io.",
        "Ratings": null
      },
      {
        "Id": "jenlooper-survival",
        "Maker": "jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb",
        "Title": "Create a Compact Survival Kit with LED Track Lighting",
        "Description": "Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster",
        "Ratings": null
      },
      {
        "Id": "sailorhg-bubblesortpic",
        "Maker": "sailorhg",
        "img": "https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png",
        "Url": "https://twitter.com/sailorhg/status/1090107740049952770",
        "Title": "Bubblesort Visualization",
        "Description": "Visualization of sailor scouts sorted by bubblesort algorithm by their planet\u0027s distance from the sun",
        "Ratings": null
      },
      {
        "Id": "sailorhg-corsage",
        "Maker": "sailorhg",
        "img": "https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png",
        "Url": "https://twitter.com/sailorhg/status/1090113666911891456",
        "Title": "Light-up Corsage",
        "Description": "Light-up corsage I made with my summer intern.",
        "Ratings": null
      },
      {
        "Id": "sailorhg-kit",
        "Maker": "sailorhg",
        "img": "https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png",
        "Url": "https://twitter.com/sailorhg/status/1090122822007963648",
        "Title": "Pastel hardware kit",
        "Description": "Pastel hardware kits complete with custom manufactured pastel alligator clips.",
        "Ratings": null
      },
      {
        "Id": "sailorhg-led",
        "Maker": "sailorhg",
        "img": "https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg",
        "Url": "https://twitter.com/sailorhg/status/1090117277540745216",
        "Title": "Heart-shaped LED",
        "Description": "custom molded heart shaped LED with sprinkles.",
        "Ratings": null
      },
      {
        "Id": "selinazawacki-soi-shirt",
        "Maker": "selinazawacki",
        "img": "https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png",
        "Url": "https://www.instagram.com/p/BNvESj-j8PI/",
        "Title": "Black Sweatshirt",
        "Description": "Black sweatshirt hoody with the Sick of the Internet logo.",
        "Ratings": null
      },
      {
        "Id": "selinazawacki-soi-pins",
        "Maker": "selinazawacki",
        "img": "https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png",
        "Url": "https://www.instagram.com/p/BNm6hZzDoEF/",
        "Title": "Sick of the Internet Pins",
        "Description": "Still some time to enter the pin/sticker giveaway! ",
        "Ratings": null
      },
      {
        "Id": "vogueandcode-hipster-dev-bro",
        "Maker": "vogueandcode",
        "img": "https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png",
        "Url": "https://www.vogueandcode.com/shop/hipster-dev-bro",
        "Title": "Hipster Dev",
        "Description": "Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.",
        "Ratings": null
      },
      {
        "Id": "vogueandcode-pretty-girls-code-tee",
        "Maker": "vogueandcode",
        "img": "https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png",
        "Url": "https://www.vogueandcode.com/shop/pretty-girls-code-tee",
        "Title": "Pretty Girls Code Tee",
        "Description": "Everyone\u2019s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
        "Ratings": null
      },
      {
        "Id": "vogueandcode-ruby-sis-2",
        "Maker": "vogueandcode",
        "img": "https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png",
        "Url": "https://www.vogueandcode.com/shop/ruby-sis-2",
        "Title": "Ruby Sis",
        "Description": "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!",
        "Ratings": [
          3,
          5,
          5,
          4,
          3,
          2,
          1,
          4,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ]
      },
      {
        "Id": "selinazawacki-moon",
        "Maker": "selinazawacki",
        "img": "https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png",
        "Url": "https://www.instagram.com/p/BFktVYPinKQ/",
        "Title": "Holographic Dark Moon Necklace",
        "Description": "Not sure if I\u0027ll be making more, get it while I have it in the store.",
        "Ratings": null
      },
      {
        "Id": "selinazawacki-shirt",
        "Maker": "selinazawacki",
        "img": "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
        "Url": "https://www.instagram.com/p/BEXlpiZCnJ3",
        "Title": "Floppy Crop",
        "Description": "Used up the Diskette fabric today to make 2 of these crops.",
        "Ratings": null
      }
    ]
  
  constructor() { }

  listadoProductos(): Product[] {
    return this.productos;
  }
}
