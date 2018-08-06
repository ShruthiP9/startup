import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondetailsComponent } from './persondetails.component';

describe('PersondetailsComponent', () => {
  let component: PersondetailsComponent;
  let fixture: ComponentFixture<PersondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
