import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WishItem} from 'src/shared/models/WishItem';
import {WishItemComponent} from './wish-item.component';

describe('WishItemComponent', () => {
    let component: WishItemComponent;
    let fixture: ComponentFixture<WishItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WishItemComponent]
        });
        fixture = TestBed.createComponent(WishItemComponent);
        component = fixture.componentInstance;
        component.wish = new WishItem("Hello Test");
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
