import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioListarPage } from './usuario-listar.page';

describe('UsuarioListarPage', () => {
  let component: UsuarioListarPage;
  let fixture: ComponentFixture<UsuarioListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
