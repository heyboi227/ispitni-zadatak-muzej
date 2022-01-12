import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteExhibitionsComponent } from './favorite-exhibitions.component';

describe('FavoriteExhibitionsComponent', () => {
  let component: FavoriteExhibitionsComponent;
  let fixture: ComponentFixture<FavoriteExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
