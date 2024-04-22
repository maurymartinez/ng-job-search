import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagElementComponent } from './tag-element.component';

describe('TagElementComponent', () => {
  let component: TagElementComponent;
  let fixture: ComponentFixture<TagElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
