import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemModelPage } from '../item-model/item-model.page';
import { ItemService, Item } from '../item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page {
  items: Item[] = [];
  private subscription!: Subscription;

  constructor(private modalCtrl: ModalController, private itemService: ItemService) {}

  ngOnInit() {
    this.subscription = this.itemService.items$.subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleFavorite(item: Item) {
    this.itemService.toggleFavorite(item);
  }

  async openItem(item: Item) {
    const modal = await this.modalCtrl.create({
      component: ItemModelPage,
      componentProps: { item }
    });
    return modal.present();
  }
}
