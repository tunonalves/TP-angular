import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddCoponentComponent } from './client-add-coponent.component';

describe('ClientAddCoponentComponent', () => {
  let component: ClientAddCoponentComponent;
  let fixture: ComponentFixture<ClientAddCoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddCoponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddCoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
