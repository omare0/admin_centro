import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEnsenanzaComponent } from './nueva-ensenanza.component';

describe('NuevaEnsenanzaComponent', () => {
  let component: NuevaEnsenanzaComponent;
  let fixture: ComponentFixture<NuevaEnsenanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaEnsenanzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaEnsenanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
