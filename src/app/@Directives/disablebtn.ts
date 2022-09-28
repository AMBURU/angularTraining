import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appdisableafterclick]'
})

export class DiableBtn implements OnInit {

    constructor(private eleRef: ElementRef, private rendera: Renderer2) {

        console.log('test',this.eleRef);
    }
    ngOnInit(): void {

    }
    @HostListener('click') onClick() {
        //  this.eleRef.nativeElement.diabled = true;
        this.rendera.setAttribute(this.eleRef.nativeElement, 'disabled', 'true');
      }
   

}