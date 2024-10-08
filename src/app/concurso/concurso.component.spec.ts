import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoComponent } from './concurso.component';

describe('ConcursoComponent', () => {
  let component: ConcursoComponent;
  let fixture: ComponentFixture<ConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
