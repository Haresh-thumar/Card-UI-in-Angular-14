import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTimezoneDiffComponent } from './get-timezone-diff.component';

describe('GetTimezoneDiffComponent', () => {
  let component: GetTimezoneDiffComponent;
  let fixture: ComponentFixture<GetTimezoneDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTimezoneDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTimezoneDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
