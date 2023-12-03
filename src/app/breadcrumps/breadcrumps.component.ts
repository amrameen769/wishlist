import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-breadcrumps',
    templateUrl: './breadcrumps.component.html',
    styleUrls: ['./breadcrumps.component.scss'],
})
export class BreadcrumpsComponent implements OnInit {
    @Input() variant: "page" | "card" | "" = "";
    @Input() breadCrumbPaths: string[] = []
    icon: string = "/";
    breadcrumbPath: string[] = [];

    ngOnInit(): void {
        this.breadCrumbPaths.forEach((item, index) => {
            if (index === 0) {
                this.breadcrumbPath[index] = item
            } else {
                this.breadcrumbPath[index] = this.breadcrumbPath[index - 1].concat("/", item)
            }
        })
        if (this.variant === "" || this.variant === "card") {
            this.icon = "assets/icons/chevron-right.svg"
        } else {
            this.icon = "/"
        }

        console.log(this.breadcrumbPath);
    }

}
