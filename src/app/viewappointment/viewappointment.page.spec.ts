import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ViewappointmentPage } from './viewappointment.page';

describe('ViewappointmentPage', () => {
  let component: ViewappointmentPage;
  let fixture: ComponentFixture<ViewappointmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
