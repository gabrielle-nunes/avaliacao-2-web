import { PacientesComponent } from './pacientes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('PacientesComponent', () => {
  let component: PacientesComponent;
  let fixture: ComponentFixture<PacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
