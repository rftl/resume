import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {faBriefcase, faMapMarkerAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {By} from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('icons', () => {
    it('should have mail icon', () => {
      expect(component.faMail).toEqual(faPaperPlane);
    });

    it('should have map icon', () => {
      expect(component.faMap).toEqual(faMapMarkerAlt);
    });

    it('should have work icon', () => {
      expect(component.faWork).toEqual(faBriefcase);
    });
  });

  describe('yearsOfExperience', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should not count the current year before the May anniversary', () => {
      vi.setSystemTime(new Date(2026, 3, 30));
      expect(component.yearsOfExperience).toBe(10);
    });

    it('should count the current year on the May anniversary', () => {
      vi.setSystemTime(new Date(2026, 4, 1));
      expect(component.yearsOfExperience).toBe(11);
    });

    it('should render the years in the about block', () => {
      vi.setSystemTime(new Date(2026, 9, 10));
      fixture.detectChanges();
      const about = fixture.debugElement.query(By.css('.about-block')).nativeElement as HTMLElement;
      expect(about.textContent).toContain('over 11 years');
    });
  });

  describe('template', () => {
    it('should render the hero banner', () => {
      const hero = fixture.debugElement.query(By.css('.hero-banner'));
      expect(hero).toBeTruthy();
    });

    it('should render three contact cards', () => {
      const cards = fixture.debugElement.queryAll(By.css('.contact-card'));
      expect(cards.length).toBe(3);
    });

    it('should render the about block', () => {
      const about = fixture.debugElement.query(By.css('.about-block'));
      expect(about).toBeTruthy();
    });
  });
});
