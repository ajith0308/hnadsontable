import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsontableComponent } from './handsontable.component';

describe('HandsontableComponent', () => {
  let component: HandsontableComponent;
  let fixture: ComponentFixture<HandsontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsontableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
