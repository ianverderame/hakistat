import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanartComponent } from './fanart.component';

describe('FanartComponent', () => {
  let component: FanartComponent;
  let fixture: ComponentFixture<FanartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
