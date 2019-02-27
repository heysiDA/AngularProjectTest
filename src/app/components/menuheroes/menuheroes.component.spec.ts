import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuheroesComponent } from './menuheroes.component';

describe('MenuheroesComponent', () => {
  let component: MenuheroesComponent;
  let fixture: ComponentFixture<MenuheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
