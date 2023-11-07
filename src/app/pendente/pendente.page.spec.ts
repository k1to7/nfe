import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendentePage } from './pendente.page';

describe('PendentePage', () => {
  let component: PendentePage;
  let fixture: ComponentFixture<PendentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
