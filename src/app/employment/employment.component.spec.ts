import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EmploymentComponent} from './employment.component';
import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';

describe('EmploymentComponent', () => {
  let component: EmploymentComponent;
  let fixture: ComponentFixture<EmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employment data', () => {
    expect(component.employmentData.length).toBeGreaterThan(0);
  });

  it('should expand the first item by default', () => {
    const firstCode = component.employmentData[0].code;
    expect(component.isExpanded(firstCode)).toBeTrue();
  });

  it('should not expand subsequent items by default', () => {
    if (component.employmentData.length > 1) {
      const secondCode = component.employmentData[1].code;
      expect(component.isExpanded(secondCode)).toBeFalse();
    }
  });

  it('should expand a collapsed item when toggled', () => {
    const code = component.employmentData[component.employmentData.length - 1].code;
    component.toggleContent(code);
    expect(component.isExpanded(code)).toBeTrue();
  });

  it('should collapse an expanded item when toggled', () => {
    const firstCode = component.employmentData[0].code;
    component.toggleContent(firstCode);
    expect(component.isExpanded(firstCode)).toBeFalse();
  });

  it('should show down caret for expanded item', () => {
    const firstCode = component.employmentData[0].code;
    expect(component.getArrowIcon(firstCode)).toEqual(faCaretDown);
  });

  it('should show right caret for collapsed item', () => {
    const firstCode = component.employmentData[0].code;
    component.toggleContent(firstCode);
    expect(component.getArrowIcon(firstCode)).toEqual(faCaretRight);
  });
});