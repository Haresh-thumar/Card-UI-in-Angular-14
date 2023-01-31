import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRootComponent } from './bus-root.component';

describe('BusRootComponent', () => {
  let component: BusRootComponent;
  let fixture: ComponentFixture<BusRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
