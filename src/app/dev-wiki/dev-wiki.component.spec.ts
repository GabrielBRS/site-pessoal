import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWikiComponent } from './dev-wiki.component';

describe('DevWikiComponent', () => {
  let component: DevWikiComponent;
  let fixture: ComponentFixture<DevWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevWikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
