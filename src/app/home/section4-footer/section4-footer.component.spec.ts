import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4FooterComponent } from './section4-footer.component';

describe('Section4FooterComponent', () => {
  let component: Section4FooterComponent;
  let fixture: ComponentFixture<Section4FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section4FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
