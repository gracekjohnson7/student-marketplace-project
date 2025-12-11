import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  name: string;
  price: string;
  location: string;
  contact: string;
  details: string;
  image: string | null;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // initial items
  private items: Item[] = [
    {
      name: 'Mini Fridge',
      price: '$40',
      location: 'Good Counsel',
      contact: 'jdoe@villanova.edu',
      details: 'good condition, 15"-30"',
      image: 'assets/fridge.jpg',
      favorite: false
    },
    {
      name: 'Head Board',
      price: '$50',
      location: 'Sheehan Hall',
      contact: 'student@villanova.edu',
      details: 'twin bed sizing, small tear in side',
      image: 'assets/headboard.jpg',
      favorite: false
    },
    {
    name: 'Textbooks Bundle',
    price: '$25',
    location: 'Kennedy Hall',
    contact: 'mwhite@villanova.edu',
    details: 'Includes Calc I, Psychology, and Microecon books',
    image: 'assets/textbooks.jpg',
    favorite: false
  },
  {
    name: 'Desk Chair',
    price: '$30',
    location: 'The Commons',
    contact: 'lgreen@villanova.edu',
    details: 'Comfortable, adjustable height, minor scratches',
    image: 'assets/deskchair.jpg',
    favorite: false
  },
  {
    name: 'Twin Mattress Topper',
    price: '$20',
    location: 'St. Mary’s Hall',
    contact: 'pclark@villanova.edu',
    details: '2-inch foam, clean, lightly used',
    image: 'assets/mattresstopper.jpg',
    favorite: false
  },
  {
    name: 'Laundry Hamper',
    price: '$8',
    location: 'Sullivan Hall',
    contact: 'hpatel@villanova.edu',
    details: 'Collapsible, blue, easy to carry',
    image: 'assets/hamper.jpg',
    favorite: false
  },
  {
    name: 'Men’s Winter Coat',
    price: '$35',
    location: 'Alumni Hall',
    contact: 'tnguyen@villanova.edu',
    details: 'Size L, very warm, great condition',
    image: 'assets/wintercoat.jpg',
    favorite: false
  },
  {
    name: 'Mini Vacuum',
    price: '$15',
    location: 'Caughlin Hall',
    contact: 'rlee@villanova.edu',
    details: 'Works well, great for dorm cleanup',
    image: 'assets/minivacuum.jpg',
    favorite: false
  },
  {
    name: 'String Lights',
    price: '$5',
    location: 'Fedigan Hall',
    contact: 'sanders@villanova.edu',
    details: '15 ft long, warm white lights',
    image: 'assets/lights.jpg',
    favorite: false
  },
  {
    name: 'Microwave',
    price: '$35',
    location: 'Stanford Hall',
    contact: 'amiller@villanova.edu',
    details: 'Clean, works perfectly, 700W',
    image: 'assets/microwave.jpg',
    favorite: false
  },
  {
    name: 'Rug',
    price: '$18',
    location: 'O’Dwyer Hall',
    contact: 'csantos@villanova.edu',
    details: '4x6 ft, grey, no stains',
    image: 'assets/rug.jpg',
    favorite: false
  },
  {
    name: 'Clothes Hangers',
    price: '$5',
    location: 'Delurey Hall',
    contact: 'bjackson@villanova.edu',
    details: 'Plastic, black, lightly used',
    image: 'assets/hangers.png',
    favorite: false
  },
  {
    name: 'Shower Caddy',
    price: '$7',
    location: 'Sullivan Hall',
    contact: 'ekelly@villanova.edu',
    details: 'Mesh, teal, lightweight, great for dorm showers',
    image: 'assets/showercaddy.jpg',
    favorite: false
  },
  {
    name: 'Desk Lamp',
    price: '$12',
    location: 'Stanford Hall',
    contact: 'aroberts@villanova.edu',
    details: 'LED lamp with adjustable brightness',
    image: 'assets/desklamp.jpg',
    favorite: false
  },
  {
    name: 'Throw Blanket',
    price: '$10',
    location: 'Sheehan Hall',
    contact: 'vsmith@villanova.edu',
    details: 'Soft, grey, barely used',
    image: 'assets/blanket.jpg',
    favorite: false
  },
  {
    name: 'Wall Art Set',
    price: '$15',
    location: 'St. Rita’s Hall',
    contact: 'nmartin@villanova.edu',
    details: '3-piece set, abstract designs, good condition',
    image: 'assets/wallart.jpg',
    favorite: false
  },
  {
    name: 'Calculator TI-84 Plus',
    price: '$45',
    location: 'Good Counsel',
    contact: 'ltorres@villanova.edu',
    details: 'Perfect working condition, includes cover',
    image: 'assets/calculator.jpg',
    favorite: false
  },
  {
    name: 'Humidifier',
    price: '$18',
    location: 'St. Mary’s Hall',
    contact: 'jyoung@villanova.edu',
    details: 'Small room humidifier, clean and functional',
    image: 'assets/humidifier.jpg',
    favorite: false
  },
  {
    name: 'Dorm Fan',
    price: '$20',
    location: 'The Commons',
    contact: 'gfernandez@villanova.edu',
    details: 'Oscillating fan, perfect for early semester heat',
    image: 'assets/fan.jpg',
    favorite: false
  },
  {
    name: 'Under-Bed Storage Bins',
    price: '$14',
    location: 'Fedigan Hall',
    contact: 'mmurphy@villanova.edu',
    details: 'Set of two, clear plastic, wheels attached',
    image: 'assets/storagebins.jpg',
    favorite: false
  },
  {
    name: 'Coffee Maker',
    price: '$60',
    location: 'Alumni Hall',
    contact: 'rcohen@villanova.edu',
    details: 'Single-serve, includes reusable filter',
    image: 'assets/coffeemaker.jpg',
    favorite: false
  },
  {
    name: 'Backpack',
    price: '$18',
    location: 'Caughlin Hall',
    contact: 'awilson@villanova.edu',
    details: 'Navy blue, lightly used, many pockets',
    image: 'assets/backpack.jpg',
    favorite: false
  },
  {
    name: 'Whiteboard',
    price: '$8',
    location: 'O’Dwyer Hall',
    contact: 'jrodriguez@villanova.edu',
    details: '18x24 inches, includes markers',
    image: 'assets/whiteboard.jpg',
    favorite: false
  },
  {
    name: 'Yoga Mat',
    price: '$10',
    location: 'Sullivan Hall',
    contact: 'agray@villanova.edu',
    details: 'Nonslip surface, teal, lightly used',
    image: 'assets/yogamat.jpg',
    favorite: false
  },
  {
    name: 'Dry Erase Markers',
    price: '$4',
    location: 'Sheehan Hall',
    contact: 'kthomas@villanova.edu',
    details: 'Pack of 4, unopened',
    image: 'assets/markers.jpg',
    favorite: false
  },
  {
    name: 'LED Desk Strip Lights',
    price: '$9',
    location: 'Kennedy Hall',
    contact: 'sotoole@villanova.edu',
    details: '1 meter strip, USB powered, remote included',
    image: 'assets/ledstrip.jpg',
    favorite: false
  },
  {
    name: 'Water Bottle',
    price: '$6',
    location: 'Delurey Hall',
    contact: 'mpayne@villanova.edu',
    details: 'Stainless steel, keeps cold for 12 hours',
    image: 'assets/waterbottle.jpg',
    favorite: false
  },
  {
    name: 'Rolling Cart',
    price: '$15',
    location: 'The Commons',
    contact: 'bwalsh@villanova.edu',
    details: '3-tier rolling organizer, white',
    image: 'assets/rollingcart.jpg',
    favorite: false
  },
  {
    name: 'Shoe Rack',
    price: '$10',
    location: 'Stanford Hall',
    contact: 'zgreen@villanova.edu',
    details: 'Holds up to 15 pairs, metal, sturdy',
    image: 'assets/shoerack.jpg',
    favorite: false
  },
  {
    name: 'Bedside Shelf',
    price: '$12',
    location: 'Good Counsel',
    contact: 'fcarter@villanova.edu',
    details: 'Clamps to bed frame, great for phones or books',
    image: 'assets/bedside.jpg',
    favorite: false
  },
  {
    name: 'Bluetooth Speaker',
    price: '$18',
    location: 'Fedigan Hall',
    contact: 'hwest@villanova.edu',
    details: 'Portable, loud, good battery life',
    image: 'assets/speaker.jpg',
    favorite: false
  },
  {
    name: 'Laundry Detergent (Full Bottle)',
    price: '$6',
    location: 'Alumni Hall',
    contact: 'dporter@villanova.edu',
    details: 'Unopened bottle of Tide, 32 loads',
    image: 'assets/detergent.jpg',
    favorite: false
  }
  ]; //end items

  //home page updates automatically
  private itemsSubject = new BehaviorSubject<Item[]>(this.items);
  public items$ = this.itemsSubject.asObservable();

  addItem(item: Item) {
    this.items.push(item);
    this.itemsSubject.next(this.items); // triggers updates
  } //end addItem

  getItems(): Item[] {
    return this.itemsSubject.value;
  } //end getItem

  toggleFavorite(item: Item) {
    item.favorite = !item.favorite;
    this.itemsSubject.next(this.items); // emit updated items array
  } //end toggleFavorite
}