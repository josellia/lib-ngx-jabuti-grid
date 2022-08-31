import { Component, ElementRef, Input, OnChanges,  Renderer2,  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-jabuti-grid',
  template: `
    <section  [ngClass]="classes">
      <ng-content></ng-content>
   </section>
  `,
  styleUrls: ['./Grid.module.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxJabutiGridComponent implements OnChanges {
	@Input() column!: boolean;
	@Input() expanded!: string;

	@Input() lg!: string;
	@Input() md!: string;
	@Input() row!: boolean;
	@Input() sm!: string;

	classes!: string;
  alignItems!: string;
  justify!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    this.gridType();
  }

  gridType(): void{
    const styles = ClassesGrid;
    const isRow = this.row || !this.column;

		this.classes =
			(!isRow ? styles.COLUMN  : styles.ROW) +

			(isRow && this.expanded ? ` ${styles.EXPANDED }` : '') +
			(isRow && this.justify ? ` ${styles.JUSTIFY }` : '') +
			(isRow && this.alignItems
				? ` ${this.renderer.addClass(this.el.nativeElement, 'align-' + this.alignItems)}`
				: '' +

				  (!isRow && this.sm
						? ` ${this.renderer.addClass(this.el.nativeElement, 'sm-' + this.sm)}`
						: '') +
				  (!isRow && this.md
						? ` ${this.renderer.addClass(this.el.nativeElement, 'md-' + this.md)}`
						: '') +
				  (!isRow && this.lg
						? `${this.renderer.addClass(this.el.nativeElement, 'lg-' + this.lg)}`
						: ''));
  }
}

enum ClassesGrid {
  COLUMN = 'column',
  ROW = 'row',
  EXPANDED = 'expanded',
  JUSTIFY = 'justify'
}
