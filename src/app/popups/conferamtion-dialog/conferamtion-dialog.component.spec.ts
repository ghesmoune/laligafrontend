import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferamtionDialogComponent } from './conferamtion-dialog.component';

describe('ConferamtionDialogComponent', () => {
  let component: ConferamtionDialogComponent;
  let fixture: ComponentFixture<ConferamtionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferamtionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferamtionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
