import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJabutiGridComponent } from './ngx-jabuti-grid.component';

describe('NgxJabutiGridComponent', () => {
  let component: NgxJabutiGridComponent;
  let fixture: ComponentFixture<NgxJabutiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJabutiGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJabutiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
