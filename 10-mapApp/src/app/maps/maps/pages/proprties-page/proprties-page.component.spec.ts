import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprtiesPageComponent } from './proprties-page.component';

describe('ProprtiesPageComponent', () => {
  let component: ProprtiesPageComponent;
  let fixture: ComponentFixture<ProprtiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprtiesPageComponent]
    });
    fixture = TestBed.createComponent(ProprtiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
