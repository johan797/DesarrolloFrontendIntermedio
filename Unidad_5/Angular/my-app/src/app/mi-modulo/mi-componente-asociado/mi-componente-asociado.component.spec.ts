import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteAsociadoComponent } from './mi-componente-asociado.component';

describe('MiComponenteAsociadoComponent', () => {
  let component: MiComponenteAsociadoComponent;
  let fixture: ComponentFixture<MiComponenteAsociadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteAsociadoComponent]
    });
    fixture = TestBed.createComponent(MiComponenteAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
