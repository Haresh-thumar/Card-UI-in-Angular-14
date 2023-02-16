import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCustomElementComponent } from './mat-custom-element.component';

describe('MatCustomElementComponent', () => {
  let component: MatCustomElementComponent;
  let fixture: ComponentFixture<MatCustomElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCustomElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
