import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGameComponent } from './player-game.component';

describe('PlayerGameComponent', () => {
  let component: PlayerGameComponent;
  let fixture: ComponentFixture<PlayerGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
