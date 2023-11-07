import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsqueciPage } from './esqueci.page';

describe('EsqueciPage', () => {
  let component: EsqueciPage;
  let fixture: ComponentFixture<EsqueciPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsqueciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
