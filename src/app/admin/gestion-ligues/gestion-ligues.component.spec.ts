import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLiguesComponent } from './gestion-ligues.component';

describe('GestionLiguesComponent', () => {
  let component: GestionLiguesComponent;
  let fixture: ComponentFixture<GestionLiguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLiguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLiguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
