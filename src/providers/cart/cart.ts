import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CartProvider {
  private CART_KEY: string = 'cart';

  cart: any[] = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.CART_KEY).then((val) => {
      if (val && val.length > 0) {
        this.cart = val;
        return this.cart;
      } else {
        this.save();
      }
    });
  }

  post(product: any, qty: number = 1){
    this.toCart(product, qty);
  }

  toCart(product: any, qty: number){
    let exist = false;
    for(let i in this.cart){
      if(this.cart[i].variation_id){
        if(this.cart[i].variation_id == product.variation_id){
          this.cart[i].quantity += qty;
          exist = true;
          break;
        }
      }else{
        if(this.cart[i].id == product.id){
          this.cart[i].quantity += qty;
          exist = true;
          break;
        }
      }
    }

    if(!exist){
      product.quantity = qty;
      this.add(product);
    }

    this.save();
  }

  add(product: any){
    let tmp = {
      quantity: product.quantity,
      name: product.name,
      images: product.images,
      id: product.id,
      price: product.price,
      weight: product.weight,
      regular_price: product.regular_price,
      on_sale: product.on_sale,
      in_stock: product.in_stock,
      attributes: product.attributes,
      variation_id: product.variation_id
    }
    this.cart.push(tmp);
    return this.save();
  }

  remove(product: any){
    for(let i in this.cart){
      if(product.variation_id){
        if(this.cart[i].id == product.id && this.cart[i].variation_id == product.variation_id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }else{
        if(this.cart[i].id == product.id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }
    }
    return this.save();
  }

  get totalQty(){
    return this.cart.length;
  }

  get totalQtyDetail(){
    let qty = 0;
    for(let i in this.cart)
      qty += this.cart[i].quantity;
    return qty;
  }
 get totalweight(){
    let tweight = 0;
    for(let i in this.cart)
      tweight += this.cart[i].weight*this.cart[i].quantity;
    return tweight;
  }
 get shippingvalue(){
    let tw:any, fprice:any;
    tw=this.totalweight;
    if(tw>=0.25 && tw<=15) {
     fprice = 33;
    }
    else if(tw>=15.25 && tw<=16) {
      fprice = 34;
    }
     else if(tw>=16.25 && tw<=17) {
      fprice = 35;
    }
     else if(tw>=17.25 && tw<=18) {
      fprice = 36;
    }
     else if(tw>=18.25 && tw<=19) {
      fprice = 37;
    }
     else if(tw>=19.25 && tw<=20) {
      fprice = 38;
    }
     else if(tw>=20.25 && tw<=21) {
      fprice = 39;
    }
     else if(tw>=21.25 && tw<=22) {
      fprice = 40;
    }
     else if(tw>=22.25 && tw<=23) {
      fprice = 41;
    }
     else if(tw>=23.25 && tw<=24) {
      fprice = 42;
    }
     else if(tw>=24.25 && tw<=25) {
      fprice = 43;
    }
     else if(tw>=25.25 && tw<=26) {
      fprice = 44;
    }
     else if(tw>=26.25 && tw<=27) {
      fprice = 45;
    }
     else if(tw>=27.25 && tw<=28) {
      fprice = 46;
    }
     else if(tw>=28.25 && tw<=29) {
      fprice = 47;
    }
     else if(tw>=29.25 && tw<=30) {
      fprice = 48;
    }
     else if(tw>=30.25 && tw<=31) {
      fprice = 49;
    }
     else if(tw>=31.25 && tw<=32) {
      fprice = 50;
    }
     else if(tw>=32.25 && tw<=33) {
      fprice = 51;
    }
     else if(tw>=33.25 && tw<=34) {
      fprice = 52;
    }
     else if(tw>=34.25 && tw<=35) {
      fprice = 53;
    }
     else if(tw>=35.25 && tw<=36) {
      fprice = 54;
    }
     else if(tw>=36.25 && tw<=37) {
      fprice = 55;
    }
     else if(tw>=37.25 && tw<=38) {
      fprice = 56;
    }
     else if(tw>=38.25 && tw<=39) {
      fprice = 57;
    }
     else if(tw>=39.25 && tw<=40) {
      fprice = 58;
    }
     else if(tw>=40.25 && tw<=41) {
      fprice = 59;
    }
     else if(tw>=41.25 && tw<=42) {
      fprice = 60;
    }
     else if(tw>=42.25 && tw<=43) {
      fprice = 61;
    }
     else if(tw>=43.25 && tw<=44) {
      fprice = 62;
    }
     else if(tw>=44.25 && tw<=45) {
      fprice = 63;
    }
     else if(tw>=45.25 && tw<=46) {
      fprice = 64;
    }
     else if(tw>=46.25 && tw<=47) {
      fprice = 65;
    }
     else if(tw>=47.25 && tw<=48) {
      fprice = 66;
    }
     else if(tw>=48.25 && tw<=49) {
      fprice = 67;
    }
     else if(tw>=49.25 && tw<=50) {
      fprice = 68;
    }
     else if(tw>=50.25 && tw<=51) {
      fprice = 69;
    };
return fprice;
  }
  get lineItems(){
    let tmp, line_items = [];
    for(let i in this.cart){
      tmp = {
        meta_data: [{
          key: 'img',
          value: this.cart[i].images[0].src
        }],
        product_id: this.cart[i].id,
        quantity: this.cart[i].quantity
      };

      if(this.cart[i].variation_id)
        tmp.variation_id = this.cart[i].variation_id;

      line_items.push(tmp);
    }

    return line_items;
  }

  get total(){
    let total = 0;
    for(let i in this.cart)
      total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity);

    return total;
  }

  save(){
    return this.storage.set(this.CART_KEY, this.cart);
  }

  reset(){
    this.cart = [];
    return this.storage.remove(this.CART_KEY).then(() => {});
  }

  get all() {
    return this.cart;
  }
}
