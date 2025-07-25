import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product/product';
import { Filter } from './filter/filter';
import { Products } from '../../Models/Products';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,Product,Filter],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {

  selectedProduct: Products = null;

  products = [
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa6345be8/images/Fastrack/Catalog/3247QM02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3247QM02",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 3,795",
    discountedPrice: "₹ 3,035",
    productName: "Chrono Analog Black Dial Watch 3247QM02",
    colors: "+2 Colors",
    rating: 4.5,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5e5422ff/images/Fastrack/Catalog/38158QM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38158QM01",
    category: "Unisex Watch",
    percentDiscount: "31% off",
    mrp: "₹ 7,995",
    discountedPrice: "₹ 5,499",
    productName: "Stunners Multifunction Metal-Strap Watch 38158QM01",
    colors: "",
    rating: 4.8,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw94fc890f/images/Fastrack/Catalog/3184NM02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3184NM02",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 2,995",
    discountedPrice: "₹ 2,395",
    productName: "Neo Minimalist Analog Leather-Strap Watch 3184NM02",
    colors: "+2 Colors",
    rating: 4.2,
    inStock: false
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2988a579/images/Fastrack/Catalog/FV30012QM01W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/FV30012QM01W",
    category: "Guys Watch",
    percentDiscount: "30% off",
    mrp: "₹ 2,850",
    discountedPrice: "₹ 1,995",
    productName: "Essentials Quartz Analog Watch FV30012QM01W",
    colors: "+2 Colors",
    rating: 3.9,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb3181a22/images/Fastrack/Catalog/68031AP08_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/68031AP08",
    category: "Unisex Watch",
    percentDiscount: "50% off",
    mrp: "₹ 1,995",
    discountedPrice: "₹ 995",
    productName: "Vyb Enigma Rose-Gold Dial Watch 68031AP08",
    colors: "+4 Colors",
    rating: 4.9,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd8a603bf/images/Fastrack/Catalog/38055PP01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38055PP01",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 3,995",
    discountedPrice: "₹ 3,195",
    productName: "Opulence Sun-Moon Chronograph 38055PP01",
    colors: "+2 Colors",
    rating: 4.6,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2b375b80/images/Fastrack/Catalog/38142WM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38142WM01",
    category: "Men's Watch",
    percentDiscount: "42% off",
    mrp: "₹ 5,999",
    discountedPrice: "₹ 3,499",
    productName: "Thor Multifunction Red-Dial Watch 38142WM01",
    colors: "+2 Colors",
    rating: 4.7,
    inStock: false
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0374f207/images/Fastrack/Catalog/6248SL01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/6248SL01",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 1,795",
    discountedPrice: "₹ 1,435",
    productName: "Vyb Diva Brown-Dial Metal-Strap Watch 6248SL01",
    colors: "",
    rating: 4.1,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwac11dbe1/images/Fastrack/Catalog/3278SL01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3278SL01",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 1,795",
    discountedPrice: "₹ 1,435",
    productName: "Quartz Analog Black-Dial Watch 3278SL01",
    colors: "+3 Colors",
    rating: 3.8,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbbdfb7e0/images/Fastrack/Catalog/38065PP02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38065PP02",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 2,795",
    discountedPrice: "₹ 2,235",
    productName: "Automatics Green-Dial Silver-Strap Watch 38065PP02",
    colors: "+3 Colors",
    rating: 4.3,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4b311045/images/Fastrack/Catalog/6230NL02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/6230NL02",
    category: "Girls Watch",
    percentDiscount: "50% off",
    mrp: "₹ 2,695",
    discountedPrice: "₹ 1,345",
    productName: "Cerame Ceramic Quartz Watch 6230NL02",
    colors: "+2 Colors",
    rating: 4.8,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw25eb5b99/images/Fastrack/Catalog/3301NM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3301NM01",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 5,495",
    discountedPrice: "₹ 4,395",
    productName: "Oceanyx Ceramic Multifunction Watch 3301NM01",
    colors: "+2 Colors",
    rating: 4.6,
    inStock: false
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb6dcc500/images/Fastrack/Catalog/68034PP06W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/68034PP06W",
    category: "Unisex Watch",
    percentDiscount: "10% off",
    mrp: "₹ 1,295",
    discountedPrice: "₹ 1,165",
    productName: "Vyb Maverick Green-Dial Watch 68034PP06W",
    colors: "+2 Colors",
    rating: 3.5,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf79521d8/images/Fastrack/Catalog/FV60028SM01W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/FV60028SM01W",
    category: "Women's Watch",
    percentDiscount: "30% off",
    mrp: "₹ 2,355",
    discountedPrice: "₹ 1,650",
    productName: "Revoltt FR2 UltraVU Smartwatch FV60028SM01W",
    colors: "+2 Colors",
    rating: 4.4,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa57e4d55/images/Fastrack/Catalog/68034PL02W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/68034PL02W",
    category: "Unisex Watch",
    percentDiscount: "10% off",
    mrp: "₹ 1,395",
    discountedPrice: "₹ 1,255",
    productName: "Quartz Analog Pearl-White Watch 68034PL02W",
    colors: "",
    rating: 4.0,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw361de26a/images/Fastrack/Catalog/3273QM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3273QM01",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 3,295",
    discountedPrice: "₹ 2,635",
    productName: "Stunners X Beige-Dial Leather-Strap Watch 3273QM01",
    colors: "+2 Colors",
    rating: 4.1,
    inStock: false
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw55162ad7/images/Fastrack/Catalog/38024PP76W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38024PP76W",
    category: "Unisex Watch",
    percentDiscount: "10% off",
    mrp: "₹ 995",
    discountedPrice: "₹ 895",
    productName: "Quartz Analog Black-Strap Watch 38024PP76W",
    colors: "",
    rating: 3.2,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw48e22984/images/Fastrack/Catalog/6150WM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/6150WM01",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 2,695",
    discountedPrice: "₹ 2,155",
    productName: "Vyb Bliss Sand-Dial Metal-Strap Watch 6150WM01",
    colors: "+1 Colors",
    rating: 4.7,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd0d95db2/images/Fastrack/Catalog/33056296NM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/33056296NM01",
    category: "Couple Watch",
    percentDiscount: "20% off",
    mrp: "₹ 4,795",
    discountedPrice: "₹ 3,835",
    productName: "Duo Analog Leather-Strap Watch 33056296NM01",
    colors: "",
    rating: 4.9,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9a49e46a/images/Fastrack/Catalog/3255NM02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3255NM02",
    category: "Guys Watch",
    percentDiscount: "20% off",
    mrp: "₹ 2,695",
    discountedPrice: "₹ 2,155",
    productName: "Vyb Aviator Blue-Dial Metal-Strap Watch 3255NM02",
    colors: "",
    rating: 4.0,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf3cfd9e2/images/Fastrack/Catalog/6172SL04_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/6172SL04",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 2,695",
    discountedPrice: "₹ 2,155",
    productName: "Stunners Quartz Beige-Dial Watch 6172SL04",
    colors: "+2 Colors",
    rating: 4.3,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3d890c5d/images/Fastrack/Catalog/3270SL03_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3270SL03",
    category: "Guys Watch",
    percentDiscount: "10% off",
    mrp: "₹ 5,295",
    discountedPrice: "₹ 4,765",
    productName: "Cerame Black Ceramic-Strap Watch 3270SL03",
    colors: "+3 Colors",
    rating: 4.5,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a6dab22/images/Fastrack/Catalog/38123SM01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38123SM01",
    category: "Unisex Watch",
    percentDiscount: "56% off",
    mrp: "₹ 8,995",
    discountedPrice: "₹ 3,999",
    productName: "Oceanyx Ceramic Blue-Dial Watch 38123SM01",
    colors: "",
    rating: 2.9,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf4843d8/images/Fastrack/Catalog/38037PP18W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38037PP18W",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 895",
    discountedPrice: "₹ 715",
    productName: "Quartz Analog Pink-Dial Watch 38037PP18W",
    colors: "",
    rating: 4.8,
    inStock: false
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw70e7df41/images/Fastrack/Catalog/38024PP75W_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/38024PP75W",
    category: "Unisex Watch",
    percentDiscount: "10% off",
    mrp: "₹ 995",
    discountedPrice: "₹ 895",
    productName: "Fusion Analog Two-Tone Strap Watch 38024PP75W",
    colors: "+3 Colors",
    rating: 3.7,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw18ef3282/images/Fastrack/Catalog/3305SM02_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/3305SM02",
    category: "Guys Watch",
    percentDiscount: "10% off",
    mrp: "₹ 2,495",
    discountedPrice: "₹ 2,245",
    productName: "Swift Quartz Analog Watch 3305SM02",
    colors: "",
    rating: 4.2,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw27aff9d5/images/Fastrack/Catalog/68008NL01_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/68008NL01",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 1,795",
    discountedPrice: "₹ 1,435",
    productName: "Dazzlet Analog Pink-Dial Watch 68008NL01",
    colors: "+1 Colors",
    rating: 4.6,
    inStock: true
  },
  {
    imageUrl: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfe53d574/images/Fastrack/Catalog/6152SM08_1.jpg?sw=360&sh=360",
    productUrl: "https://www.fastrack.in/shop/watches/6152SM08",
    category: "Girls Watch",
    percentDiscount: "20% off",
    mrp: "₹ 1,495",
    discountedPrice: "₹ 1,195",
    productName: "Vyb Bliss Multi-Color Dial Watch 6152SM08",
    colors: "+9 Colors",
    rating: 4.9,
    inStock: true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2286c9748ed4980846f040cb8d642d5_9366/future-icons-badge-of-sport-pants.jpg",
    "productUrl": "https://www.adidas.co.in/future-icons-badge-of-sport-pants/IV5725.html",
    "category": "Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹5,599.00",
    "discountedPrice": "₹2,799.50",
    "productName": "Future Icons Badge of Sport Pants",
    "colors": "1 Color",
    "rating": 4.6,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b98a4b84e5a14602aadd7f545eb415a7_9366/adidas-z.n.e.-pants.jpg",
    "productUrl": "https://www.adidas.co.in/adidas-z.n.e.-pants/IN5097.html",
    "category": "Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹6,299.00",
    "discountedPrice": "₹3,149.50",
    "productName": "adidas Z.N.E. Pants",
    "colors": "1 Color",
    "rating": 4.7,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/27d2a35a33824186bb89af1f00ea41b1_9366/tiro-23-club-training-top.jpg",
    "productUrl": "https://www.adidas.co.in/tiro-23-club-training-top/HS3617.html",
    "category": "Football",
    "percentDiscount": "-60%",
    "mrp": "₹3,299.00",
    "discountedPrice": "₹1,320.00",
    "productName": "Tiro 23 Club Training Top",
    "colors": "1 Color",
    "rating": 4.5,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3953851ea3d4d9fb0e44c36c9d4985c_9366/adidas-z.n.e.-tee.jpg",
    "productUrl": "https://www.adidas.co.in/adidas-z.n.e.-tee/IQ3533.html",
    "category": "Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹4,599.00",
    "discountedPrice": "₹2,299.50",
    "productName": "adidas Z.N.E. Tee",
    "colors": "1 Color",
    "rating": 5.0,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/588c10f34f5e4603ad0087c74a33f3d2_9366/premiere-crewneck-sweater.jpg",
    "productUrl": "https://www.adidas.co.in/premiere-crewneck-sweater/IK9101.html",
    "category": "Skateboarding",
    "percentDiscount": "-50%",
    "mrp": "₹6,999.00",
    "discountedPrice": "₹3,499.50",
    "productName": "Premiere Crewneck Sweater",
    "colors": "1 Color",
    "rating": null,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8861623e865d407298bb28c3d5e79bd7_9366/runmagica-m.jpg",
    "productUrl": "https://www.adidas.co.in/runmagica-m/JJ6502.html",
    "category": "Running",
    "percentDiscount": "-50%",
    "mrp": "₹4,299.00",
    "discountedPrice": "₹2,149.50",
    "productName": "Runmagica M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/14ef9ace63544a0a966a6d7394c433b5_9366/arsenal-24-25-home-jersey.jpg",
    "productUrl": "https://www.adidas.co.in/arsenal-24-25-home-jersey/IT6141.html",
    "category": "Football",
    "percentDiscount": "-50%",
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.00",
    "productName": "Arsenal 24/25 Home Jersey",
    "colors": "1 Color",
    "rating": 4.8,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/429f87465753431fbef7809768c279ad_9366/adicolor-teamgeist-cropped-track-top.jpg",
    "productUrl": "https://www.adidas.co.in/adicolor-teamgeist-cropped-track-top/JD0265.html",
    "category": "Originals",
    "percentDiscount": "-50%",
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.50",
    "productName": "Adicolor Teamgeist Cropped Track Top",
    "colors": "1 Color",
    "rating": null,
    "inStock": false
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0bd384ccc3a422da72fdcbfd6b2cae6_9366/arsenal-24-25-third-jersey.jpg",
    "productUrl": "https://www.adidas.co.in/arsenal-24-25-third-jersey/IS3629.html",
    "category": "Football",
    "percentDiscount": "-50%",
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.00",
    "productName": "Arsenal 24/25 Third Jersey",
    "colors": "1 Color",
    "rating": 5.0,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bbf123c7fa4f0089fd33c84e0abcde_9366/mistico-m.jpg",
    "productUrl": "https://www.adidas.co.in/mistico-m/JJ5240.html",
    "category": "Running",
    "percentDiscount": "-50%",
    "mrp": "₹1,599.00",
    "discountedPrice": "₹799.50",
    "productName": "Mistico M",
    "colors": "+2 Colors",
    "rating": 4.0,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9072ad57594142629ef32c0ee3d42e35_9366/cloudfoam-move-sock-shoes.jpg",
    "productUrl": "https://www.adidas.co.in/cloudfoam-move-sock-shoes/ID6520.html",
    "category": "Sportswear",
    "percentDiscount": null,
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.50",
    "productName": "Cloudfoam Move Sock Shoes",
    "colors": "2 Colors",
    "rating": 4.6,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9833aa9262dc4407a83eb82a3b25e40b_9366/grand-court-2.0-shoes.jpg",
    "productUrl": "https://www.adidas.co.in/grand-court-2.0-shoes/GW9195.html",
    "category": "Sportswear",
    "percentDiscount": null,
    "mrp": "₹7,999.00",
    "discountedPrice": "₹3,999.50",
    "productName": "Grand Court 2.0 Shoes",
    "colors": "1 Color",
    "rating": 4.7,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dab145d75dbf4e47baf0edc57164da5f_9366/adicolor-jacket-kids.jpg",
    "productUrl": "https://www.adidas.co.in/adicolor-jacket-kids/IY4812.html",
    "category": "Kids - Originals",
    "percentDiscount": "-50%",
    "mrp": "₹6,999.00",
    "discountedPrice": "₹3,499.50",
    "productName": "Adicolor Jacket (Kids)",
    "colors": "1 Color",
    "rating": 5.0,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/44ca521e12564eff8e9a9b2db6dc0aaf_9366/premium-essentials-maxi-dress.jpg",
    "productUrl": "https://www.adidas.co.in/premium-essentials-maxi-dress/JC7869.html",
    "category": "Women - Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.50",
    "productName": "Premium Essentials Maxi Dress",
    "colors": "1 Color",
    "rating": null,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6aa2b42bf3340668c6ae57bf1de736e_9366/train-essentials-training-polo-shirt.jpg",
    "productUrl": "https://www.adidas.co.in/train-essentials-training-polo-shirt/IB8105.html",
    "category": "Men - Training",
    "percentDiscount": "-50%",
    "mrp": "₹2,999.00",
    "discountedPrice": "₹1,499.50",
    "productName": "Train Essentials Training Polo Shirt",
    "colors": "2 Colors",
    "rating": 4.6,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eba0eccd552e492fbcde8a107c7d77ff_9366/ultimashow-2.0-shoes.jpg",
    "productUrl": "https://www.adidas.co.in/ultimashow-2.0-shoes/IE8909.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹5,999.00",
    "discountedPrice": "₹2,999.50",
    "productName": "Ultimashow 2.0 Shoes",
    "colors": "2 Colors",
    "rating": 4.2,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/120b677ab34e4231baea3bf56f83ea64_9366/cloudfoam-walk-lounger-shoes.jpg",
    "productUrl": "https://www.adidas.co.in/cloudfoam-walk-lounger-shoes/ID4054.html",
    "category": "Men - Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹6,999.00",
    "discountedPrice": "₹3,499.50",
    "productName": "Cloudfoam Walk Lounger Shoes",
    "colors": "2 Colors",
    "rating": 4.5,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2aa420650b174c7a83049c2d8d1bb95f_9366/city-rnr-shoes.jpg",
    "productUrl": "https://www.adidas.co.in/city-rnr-shoes/JI0836.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹9,999.00",
    "discountedPrice": "₹4,999.50",
    "productName": "City RNR Shoes",
    "colors": "3 Colors",
    "rating": 4.4,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/299ce0135efd4e3e83d051449c65c955_9366/cmfortz-1.0-m.jpg",
    "productUrl": "https://www.adidas.co.in/cmfortz-1.0-m/JJ5256.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹5,599.00",
    "discountedPrice": "₹2,799.50",
    "productName": "CMFORTZ 1.0 M",
    "colors": "1 Color",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d850458e6294fde9700460e6d3cc0f0_9366/smphny.jpg",
    "productUrl": "https://www.adidas.co.in/smphny-m/JJ5310.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹4,999.00",
    "discountedPrice": "₹2,499.50",
    "productName": "SMPHNY M",
    "colors": "2 Colors",
    "rating": 4.2,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/129e46f2192f40fc999a40ff9737890d_9366/zenith-m.jpg",
    "productUrl": "https://www.adidas.co.in/zenith-m/JJ5300.html",
    "category": "Men - Running",
    "percentDiscount": "-55%",
    "mrp": "₹1,999.00",
    "discountedPrice": "₹899.00",
    "productName": "Zenith M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/59fa3fa591f848a09b9ec62f292174be_9366/aztecx-sneaker.jpg",
    "productUrl": "https://www.adidas.co.in/aztecx-sneaker/IU6965.html",
    "category": "Men - Sportswear",
    "percentDiscount": "-50%",
    "mrp": "₹4,599.00",
    "discountedPrice": "₹2,299.50",
    "productName": "Aztecx Sneaker",
    "colors": "1 Color",
    "rating": 3.4,
    "inStock": false
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4653aa109124d10b526932526050bce_9366/base-switch-m.jpg",
    "productUrl": "https://www.adidas.co.in/base-switch-m/JK0970.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹3,999.00",
    "discountedPrice": "₹1,999.50",
    "productName": "Base Switch M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d890d7aa03ee48e8a740edbe7086c492_9366/cyberrun-m.jpg",
    "productUrl": "https://www.adidas.co.in/cyberrun-m/JJ6511.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹4,299.00",
    "discountedPrice": "₹2,149.50",
    "productName": "Cyberrun M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ad5de4ce54a4e3e8ba350832c3a93f6_9366/jaysaw-reflective-m.jpg",
    "productUrl": "https://www.adidas.co.in/jaysaw-reflective-m/JJ6506.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹4,299.00",
    "discountedPrice": "₹2,149.50",
    "productName": "Jaysaw Reflective M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/122445a74f4c4cb997e7cc1f233abb85_9366/glowrun-reflective-m.jpg",
    "productUrl": "https://www.adidas.co.in/glowrun-reflective-m/JJ6490.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹4,599.00",
    "discountedPrice": "₹2,299.50",
    "productName": "Glowrun Reflective M",
    "colors": "2 Colors",
    "rating": 4.1,
    "inStock": true
  },
  {
    "imageUrl": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b83c150240c345578e5990739b0ed710_9366/basic-run-wave.jpg",
    "productUrl": "https://www.adidas.co.in/basic-run-wave/JK0840.html",
    "category": "Men - Running",
    "percentDiscount": "-50%",
    "mrp": "₹3,799.00",
    "discountedPrice": "₹1,899.50",
    "productName": "Basic Run Wave",
    "colors": "1 Color",
    "rating": 3.9,
    "inStock": true
  }
];

  all:number=this.products.length;
  guysWatch:number= this.products.filter(p=>p.category==='Guys Watch').length;
  girlsWatch:number= this.products.filter(p=>p.category==='Girls Watch').length;
  unisexWatch:number= this.products.filter(p=>p.category==='Unisex Watch').length;
  available:number=0;
  unavailable:number=0;

  selectedCategory: string = 'All';

  OnFilterCategoryChange(value: string) {
    //console.log(value);
    this.selectedCategory = value;
  }

  getFilteredProducts() {
    let filteredProduct=this.products;
    if (!(this.selectedCategory === 'All')) {
      filteredProduct=filteredProduct.filter(p=>p.category===this.selectedCategory);
    }
    if(this.searchTerm&&this.searchTerm.trim()!==''){
      const searchText = this.searchTerm.toLowerCase();
      filteredProduct=filteredProduct.filter(p=>p.productName.toLowerCase().includes(searchText)
        ||p.category.toLowerCase().includes(searchText));

    }
    return filteredProduct;
  }

  @Input()
  searchTerm: string = '';
}
