import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[setColor]'
})
export class SetSkillSetColor implements OnInit {

    @Input() skillSet: string;
    constructor(private eleRef: ElementRef, private rendera: Renderer2) {
        console.log(this.skillSet)
    }
    ngOnInit(): void {

        if (this.skillSet === "Angular") {
            this.rendera.addClass(this.eleRef.nativeElement, 'text-bg-success');
        }
        else if (this.skillSet === "React") {
            this.rendera.addClass(this.eleRef.nativeElement, 'text-bg-primary');
        } else if (this.skillSet != "React" && this.skillSet != "Angular") {
            this.rendera.addClass(this.eleRef.nativeElement, 'text-bg-info');
        }
    }

}