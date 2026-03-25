import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ResumeComponent} from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have resumeSrc set', () => {
    expect(component.resumeSrc).toBe('RaulTobo_Resume.pdf');
  });
});