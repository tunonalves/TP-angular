import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLitComponentComponent } from './client-lit-component.component';

describe('ClientLitComponentComponent', () => {
  let component: ClientLitComponentComponent;
  let fixture: ComponentFixture<ClientLitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLitComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
