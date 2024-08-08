import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEnsenanzaComponent } from './editar-ensenanza.component';

describe('EditarEnsenanzaComponent', () => {
  let component: EditarEnsenanzaComponent;
  let fixture: ComponentFixture<EditarEnsenanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEnsenanzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEnsenanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
