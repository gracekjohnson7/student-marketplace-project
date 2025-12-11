import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.page.html',
  styleUrls: ['./item-model.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] 
})
export class ItemModelPage {
  @Input() item: any;
  constructor(private modalCtrl: ModalController) {}
  close() {
    this.modalCtrl.dismiss();
  }
  toggleFavorite() {
    this.item.favorite = !this.item.favorite;
  }
}
