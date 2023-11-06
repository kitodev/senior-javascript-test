import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsHashComponent } from './fs-hash.component';

describe('FsHashComponent', () => {
  let component: FsHashComponent;
  let fixture: ComponentFixture<FsHashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsHashComponent]
    });
    fixture = TestBed.createComponent(FsHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
