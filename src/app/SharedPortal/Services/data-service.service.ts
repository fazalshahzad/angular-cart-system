import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // Myclass = {
  //   _id: String,
  //   Name: String,
  //   Age: Number
  // }

  DummyData: any = [
    {
      _id: 1,
      Name: 'bat',
      Image1: 'https://static-01.daraz.pk/p/0f69b816d29785841c38387d0bbfdf09.jpg',
      Image2: 'https://cricketmart.co.uk/wp-content/uploads/2021/07/Gray-Nicolls-Oblivion-Stealth-5-Star-Lite-Cricket-Bat.jpg',
      Image3: 'https://static-01.daraz.pk/p/dbd2a1524bf1ea0c0b98f95b026af85f.jpg',
      Image4: 'https://www.mrcrickethockey.com/wp-content/uploads/2021/11/Gray-Nicolls-Vapour-Cricket-Bat-2022.jpg',
      Description:'this is my best bat',
      qty:10
    },
    {
      _id: 2,
      Name: 'ball',
      Image1: 'https://static-01.daraz.pk/p/39c4f95c10ee2dda5c764faf8327271d.jpg',
      Image2: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cricket-ball-red-madeinaustralia.jpg',
      Image3: 'https://static-01.daraz.pk/p/ad4eb5300b1c8300683365bd6928dc08.jpg',
      Image4: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/305900/305964.jpg',
      Description:'this is my best ball',
      qty:12
    },
    {
      _id: 3,
      Name: 'helmet',
      Image1: 'http://www.tornadosportscompany.com/wp-content/uploads/2020/01/Helmets-6.jpg',
      Image2: 'https://thesportsfactory.pk/wp-content/uploads/2020/11/masuri-helmets-min.png',
      Image3: 'https://cdn.shopify.com/s/files/1/0154/7422/9302/products/senioryellow_d4dff78b-1b0a-4c88-bf5d-0773cb07ec57_800x.jpg?v=1638275304',
      Image4: 'https://thesportsfactory.pk/wp-content/uploads/2020/11/masuri-helmets-e-line-min.png',
      Description:'this is my best helmet',
      qty:14
    },
    {
      _id: 4,
      Name: 'shirt',
      Image1: 'https://theshoppies.pk/wp-content/uploads/2020/08/Pakistan-T20-Kit-NEW-season-2021.jpg',
      Image2: 'https://mthsialkot.com/media/catalog/product/cache/868536bf93ead49751c3dc500eea75fe/s/u/sublimation-cricket-shirtson9b.jpeg',
      Image3: 'https://static-01.daraz.pk/p/fd7948879a42049e27cf756944dd8356.jpg',
      Image4: 'https://5.imimg.com/data5/TO/KO/LW/SELLER-1756364/cricket-shirts-500x500.jpg',
      Description:'this is my best shirt',
      qty:16
    },
    {
      _id: 5,
      Name: 'cap',
      Image1: 'https://static-01.daraz.pk/p/ff22595cdfc1da304425226467ef0c3f.jpg',
      Image2: 'https://static-01.daraz.pk/p/87aca903dd63c242c9f8fb3404746f30.jpg',
      Image3: 'https://static-01.daraz.pk/p/4ab110c7769ffc5b6e482a7706e0015b.jpg',
      Image4: 'https://images-na.ssl-images-amazon.com/images/I/61bTLHD4fIL.jpg',
      Description:'this is my best cap',
      qty:18
    },
    {
      _id: 6,
      Name: 'glasses',
      Image1: 'https://static-01.daraz.pk/p/f7cc43dd98a6a0b7c99e70b641493249.jpg',
      Image2: 'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/e16fc557feef076209059b06657a7379/g/l/glider-sunglasses-white.jpg',
      Image3: 'https://static.toiimg.com/photo/msid-85761005,resizemode-4/85761005.cms',
      Image4: 'http://sc04.alicdn.com/kf/Hb32c3f8285eb40858b600eb32142aee0G.jpg',
      Description:'this is my best glasses',
      qty:20
    }
  ]

  constructor() { }

  GetData() {
    return this.DummyData;
  }
}
