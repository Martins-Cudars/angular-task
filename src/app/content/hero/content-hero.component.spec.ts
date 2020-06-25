import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeroComponent } from './content-hero.component';

describe('ContentHeroComponent', () => {
  let component: ContentHeroComponent;
  let fixture: ComponentFixture<ContentHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
