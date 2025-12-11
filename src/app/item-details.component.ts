import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ItemDetailsComponent {
  @Input() item: any;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
  toggleFavorite(){
    this.item.favorite=!this.item.favorite;
  }
}