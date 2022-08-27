import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCompComponent } from './private-comp.component';

describe('PrivateCompComponent', () => {
  let component: PrivateCompComponent;
  let fixture: ComponentFixture<PrivateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
