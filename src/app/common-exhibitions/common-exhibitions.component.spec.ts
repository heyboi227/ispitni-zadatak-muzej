import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonExhibitionsComponent } from './common-exhibitions.component';

describe('CommonExhibitionsComponent', () => {
  let component: CommonExhibitionsComponent;
  let fixture: ComponentFixture<CommonExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
