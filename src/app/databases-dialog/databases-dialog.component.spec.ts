import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesDialogComponent } from './databases-dialog.component';

describe('DatabasesDialogComponent', () => {
  let component: DatabasesDialogComponent;
  let fixture: ComponentFixture<DatabasesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabasesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
