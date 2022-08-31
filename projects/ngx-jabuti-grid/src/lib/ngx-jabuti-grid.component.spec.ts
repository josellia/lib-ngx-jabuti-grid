import { Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJabutiGridComponent } from './ngx-jabuti-grid.component';

describe(NgxJabutiGridComponent.name, () => {
  let component: NgxJabutiGridComponent;
  let fixture: ComponentFixture<NgxJabutiGridComponent>;
  let renderer2: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJabutiGridComponent ],
      providers: [Renderer2]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJabutiGridComponent);
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    spyOn(renderer2, 'addClass').and.callThrough();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when (@Input column) is true`, () => {
    component.row = true;
    fixture.detectChanges();
    component.gridType();

    expect(component.classes).toBe('row');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when (@Input row) is true`, () => {
    component.row = true;
    fixture.detectChanges();
    component.gridType();

    expect(component.classes).toBe('row');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when (@Input column) is true`, () => {
    component.column = true;
    fixture.detectChanges();
    component.gridType();

    expect(component.classes).toBe('column');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when (@Input expanded) is 'row expanded'`, () => {
    component.expanded = 'expanded';
    fixture.detectChanges();
    component.gridType();

    expect(component.classes).toBe('row expanded');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when (@Input justify) is row justify`, () => {
    component.justify = 'row justify';
    fixture.detectChanges();
    component.gridType();

    expect(component.classes).toBe('row justify');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should row when alignItems is center`, () => {
    component.alignItems = 'center';
    fixture.detectChanges();
    component.gridType();

    expect(renderer2.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'align-center');
  });
});
