import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExhibitsComponent } from './show-exhibits.component';

describe('ShowExhibitsComponent', () => {
  let component: ShowExhibitsComponent;
  let fixture: ComponentFixture<ShowExhibitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExhibitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExhibitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
