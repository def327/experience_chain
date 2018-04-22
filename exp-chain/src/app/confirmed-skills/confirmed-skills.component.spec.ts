import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedSkillsComponent } from './confirmed-skills.component';

describe('ConfirmedSkillsComponent', () => {
  let component: ConfirmedSkillsComponent;
  let fixture: ComponentFixture<ConfirmedSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
