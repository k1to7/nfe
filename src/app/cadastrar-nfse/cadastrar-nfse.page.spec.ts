import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarNfsePage } from './cadastrar-nfse.page';

describe('CadastrarNfsePage', () => {
  let component: CadastrarNfsePage;
  let fixture: ComponentFixture<CadastrarNfsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarNfsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
