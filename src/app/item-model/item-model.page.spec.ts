import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemModelPage } from './item-model.page';

describe('ItemModelPage', () => {
  let component: ItemModelPage;
  let fixture: ComponentFixture<ItemModelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
