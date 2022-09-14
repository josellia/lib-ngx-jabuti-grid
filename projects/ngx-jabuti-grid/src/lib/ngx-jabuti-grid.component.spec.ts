import {  Renderer2} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJabutiGridComponent } from './ngx-jabuti-grid.component';

class MockRenderer {
  addClass(document: string, cssClass: string): any {
    return true;
  }
}
describe(NgxJabutiGridComponent.name, () => {
  let component: NgxJabutiGridComponent;
  let fixture: ComponentFixture<NgxJabutiGridComponent>;
  let renderer: MockRenderer;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJabutiGridComponent ],

      providers: [{
        provide: Renderer2,
        useClass: MockRenderer
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJabutiGridComponent);
    renderer =  fixture.debugElement.injector.get(Renderer2);

    spyOn(renderer, 'addClass').and.callThrough();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${NgxJabutiGridComponent.prototype.ngOnChanges.name} Should ngOnChanges when call gridType`, () => {
    spyOn(component, 'gridType');

    fixture.detectChanges();
    component.ngOnChanges();

    expect(component.gridType).toHaveBeenCalled();
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

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should alignItems when add class align-center`, () => {
    component.alignItems = 'center';

    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'align-center');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should sm when add class is sm-1`, () => {
    component.sm = '1';
    component.column = true;

    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'sm-1');;
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should md when add class is md-1`, () => {
    component.md = '1';
    component.column = true;

    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'md-1');;
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should lg when add class is lg-1`, () => {
    component.lg = '1';
    component.column = true;

    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'lg-1');;
  });
});
