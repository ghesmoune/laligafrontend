import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGategorieComponent } from './gestion-gategorie.component';

describe('GestionGategorieComponent', () => {
  let component: GestionGategorieComponent;
  let fixture: ComponentFixture<GestionGategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
