import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsPoolComponent} from './product-pool.component';

describe('ProductsPoolComponent', () => {
  let component: ProductsPoolComponent;
  let fixture: ComponentFixture<ProductsPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsPoolComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
