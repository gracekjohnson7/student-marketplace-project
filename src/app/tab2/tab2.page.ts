import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemService, Item } from '../item.service';
import { ModalController } from '@ionic/angular';
import { ItemModelPage } from '../item-model/item-model.page';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class Tab2Page implements OnInit {
  title = '';
  price: number | null = null;
  location = '';
  contact = '';
  details = '';
  imagePreview: string | null = null;

  favorites: Item[] = [];

  constructor(private itemService: ItemService, private modalCtrl: ModalController) {}

  async openItem(item: Item) {
    const modal = await this.modalCtrl.create({
      component: ItemModelPage,
      componentProps: { item }
    }); //end model
    return modal.present();
  } //end openItem

  ngOnInit() {
    this.itemService.items$.subscribe(items => {
      // Filter for favorites
      this.favorites = items.filter(item => item.favorite);
    });
  } //end ngOnInit

  addItem() {
    if (!this.title || this.price === null) return;

    const newItem: Item = {
      name: this.title,
      price: `$${this.price.toFixed(2)}`,
      location: this.location,
      contact: this.contact,
      details: this.details,
      image: this.imagePreview,
      favorite: false
    }; //end newItem

    this.itemService.addItem(newItem);

    // reset form
    this.title = '';
    this.price = null;
    this.location = '';
    this.contact = '';
    this.details = '';
    this.imagePreview = null;
  } //end addItem

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      this.imagePreview = null;
      return;
    } //end if

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }; //end reader
    reader.readAsDataURL(file);
  } //end export

  toggleFavorite(item: Item) {
    this.itemService.toggleFavorite(item); // <-- was: item.favorite = !item.favorite
  } //end toggleFavorite
}