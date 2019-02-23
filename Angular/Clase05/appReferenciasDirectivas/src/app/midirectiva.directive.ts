import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[mi-directiva]"
})
export class MiDirectiva {

	@Input("mi-directiva") colorPorDefecto: string = "brown"
	@Input() colorHover: string = "blue"

	constructor(private el: ElementRef) { }

	ngOnInit() {
		//this.el.nativeElement.style.backgroundColor = "yellow"
		this.el.nativeElement.style.backgroundColor = this.colorPorDefecto
	}
	//addEventListener
	@HostListener("mouseenter") mouseEntro() {
		//this.el.nativeElement.style.backgroundColor = "pink"
		this.el.nativeElement.style.backgroundColor = this.colorHover
	}

	@HostListener("mouseleave") mouseSalio() {
		//this.el.nativeElement.style.backgroundColor = "red"
		this.el.nativeElement.style.backgroundColor = this.colorPorDefecto
	}


}