import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadcrumpsComponent} from './breadcrumps.component';

describe('BreadcrumpsComponent', () => {
    let component: BreadcrumpsComponent;
    let fixture: ComponentFixture<BreadcrumpsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BreadcrumpsComponent]
        });
        fixture = TestBed.createComponent(BreadcrumpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
