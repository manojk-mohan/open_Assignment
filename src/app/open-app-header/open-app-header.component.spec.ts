import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAppHeaderComponent } from './open-app-header.component';

describe('OpenAppHeaderComponent', () => {
  let component: OpenAppHeaderComponent;
  let fixture: ComponentFixture<OpenAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
