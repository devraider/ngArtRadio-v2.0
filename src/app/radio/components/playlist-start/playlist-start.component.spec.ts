import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistStartComponent } from './playlist-start.component';

describe('PlaylistStartComponent', () => {
  let component: PlaylistStartComponent;
  let fixture: ComponentFixture<PlaylistStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistStartComponent]
    });
    fixture = TestBed.createComponent(PlaylistStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
