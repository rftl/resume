import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SkillsComponent} from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all 7 skill categories', () => {
    expect(component.skillSet.length).toBe(7);
  });

  it('should contain all expected categories', () => {
    const categories = component.skillSet.map(g => g.category);
    expect(categories).toContain('Languages');
    expect(categories).toContain('Frontend');
    expect(categories).toContain('Backend');
    expect(categories).toContain('Cloud & Infrastructure');
    expect(categories).toContain('Data');
    expect(categories).toContain('Security & Identity');
    expect(categories).toContain('Tools & Other');
  });

  describe('sorting', () => {
    it('should sort Frontend skills alphabetically', () => {
      const frontend = component.skillSet.find(g => g.category === 'Frontend')!;
      const sorted = [...frontend.skills].sort((a, b) => a.localeCompare(b));
      expect(frontend.skills).toEqual(sorted);
    });

    it('should sort Backend skills alphabetically', () => {
      const backend = component.skillSet.find(g => g.category === 'Backend')!;
      const sorted = [...backend.skills].sort((a, b) => a.localeCompare(b));
      expect(backend.skills).toEqual(sorted);
    });

    it('should sort Cloud & Infrastructure skills alphabetically', () => {
      const cloud = component.skillSet.find(g => g.category === 'Cloud & Infrastructure')!;
      const sorted = [...cloud.skills].sort((a, b) => a.localeCompare(b));
      expect(cloud.skills).toEqual(sorted);
    });

    it('should sort Data skills alphabetically', () => {
      const data = component.skillSet.find(g => g.category === 'Data')!;
      const sorted = [...data.skills].sort((a, b) => a.localeCompare(b));
      expect(data.skills).toEqual(sorted);
    });

    it('should preserve Languages order (by expertise, not alphabetical)', () => {
      const languages = component.skillSet.find(g => g.category === 'Languages')!;
      expect(languages.skills[0]).toBe('Java');
      expect(languages.skills[languages.skills.length - 1]).toBe('Scala');
    });

    it('should preserve Tools & Other order', () => {
      const tools = component.skillSet.find(g => g.category === 'Tools & Other')!;
      expect(tools.skills[0]).toBe('Fluent in English and Spanish');
      expect(tools.skills[tools.skills.length - 1]).toBe('Project Management');
    });
  });

  describe('skill content', () => {
    it('should include REST and Spring Boot in Backend', () => {
      const backend = component.skillSet.find(g => g.category === 'Backend')!;
      expect(backend.skills).toContain('REST');
      expect(backend.skills).toContain('Spring Boot');
    });

    it('should include Auth0 and OpenAm in Security & Identity', () => {
      const security = component.skillSet.find(g => g.category === 'Security & Identity')!;
      expect(security.skills).toContain('Auth0');
      expect(security.skills).toContain('OpenAm');
    });

    it('should include AWS, Docker, Kubernetes in Cloud & Infrastructure', () => {
      const cloud = component.skillSet.find(g => g.category === 'Cloud & Infrastructure')!;
      expect(cloud.skills).toContain('AWS');
      expect(cloud.skills).toContain('Docker');
      expect(cloud.skills).toContain('Kubernetes');
    });
  });
});