import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product/product';
import { Filter } from './filter/filter';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,Product,Filter],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
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
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }
}
