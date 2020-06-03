import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinthunuoiComponent } from './thongtinthunuoi.component';

describe('ThongtinthunuoiComponent', () => {
  let component: ThongtinthunuoiComponent;
  let fixture: ComponentFixture<ThongtinthunuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinthunuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinthunuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
