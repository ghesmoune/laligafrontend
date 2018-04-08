import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLeaguesComponent } from './liste-leagues.component';

describe('ListeLeaguesComponent', () => {
  let component: ListeLeaguesComponent;
  let fixture: ComponentFixture<ListeLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
