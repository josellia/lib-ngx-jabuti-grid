import { ElementRef, Renderer2, Type } from '@angular/core';
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
  let renderer2: Renderer2;
  let elementRef: ElementRef;

  let renderer: MockRenderer;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJabutiGridComponent ],
      //providers: [Renderer2]
      providers: [{
        provide: Renderer2,
        useClass: MockRenderer
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJabutiGridComponent);
    elementRef = fixture.componentRef.injector.get(ElementRef);
    //renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    renderer =  fixture.debugElement.injector.get(Renderer2);
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

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should alignItems when add class align-center`, () => {
    component.alignItems = 'center';
    spyOn(renderer, 'addClass').and.callThrough();
    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'align-center');
  });

  it(`#${NgxJabutiGridComponent.prototype.gridType.name} Should sm when add class is sm-`, () => {
    component.sm = 'sm-1';
    spyOn(renderer, 'addClass');
    fixture.detectChanges();
    component.gridType();

    expect(renderer.addClass).not.toHaveBeenCalledWith(jasmine.any(Object), 'sm');;
  });
});
