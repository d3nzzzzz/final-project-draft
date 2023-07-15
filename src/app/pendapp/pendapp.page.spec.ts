import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendappPage } from './pendapp.page';

describe('PendappPage', () => {
  let component: PendappPage;
  let fixture: ComponentFixture<PendappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
