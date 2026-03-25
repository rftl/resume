import {TestBed} from '@angular/core/testing';
import {DOCUMENT} from '@angular/common';
import {ThemeService} from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let document: Document;

  function setup(): void {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    document = TestBed.inject(DOCUMENT);
  }

  afterEach(() => {
    localStorage.clear();
    document?.body.classList.remove('dark-theme');
  });

  describe('initial state', () => {
    it('should default to dark when localStorage has no value', () => {
      setup();
      expect(service.isDark()).toBeTrue();
    });

    it('should be dark when localStorage has "true"', () => {
      localStorage.setItem('dark-theme', 'true');
      setup();
      expect(service.isDark()).toBeTrue();
    });

    it('should be light when localStorage has "false"', () => {
      localStorage.setItem('dark-theme', 'false');
      setup();
      expect(service.isDark()).toBeFalse();
    });

    it('should apply dark-theme class to body when starting dark', () => {
      setup();
      expect(document.body.classList.contains('dark-theme')).toBeTrue();
    });

    it('should not apply dark-theme class to body when starting light', () => {
      localStorage.setItem('dark-theme', 'false');
      setup();
      expect(document.body.classList.contains('dark-theme')).toBeFalse();
    });
  });

  describe('toggle()', () => {
    beforeEach(() => setup());

    it('should switch from dark to light', () => {
      service.toggle();
      expect(service.isDark()).toBeFalse();
    });

    it('should switch from light back to dark', () => {
      service.toggle();
      service.toggle();
      expect(service.isDark()).toBeTrue();
    });

    it('should remove dark-theme class from body when switching to light', () => {
      service.toggle();
      expect(document.body.classList.contains('dark-theme')).toBeFalse();
    });

    it('should add dark-theme class to body when switching back to dark', () => {
      service.toggle();
      service.toggle();
      expect(document.body.classList.contains('dark-theme')).toBeTrue();
    });

    it('should persist light preference to localStorage', () => {
      service.toggle();
      TestBed.flushEffects();
      expect(localStorage.getItem('dark-theme')).toBe('false');
    });

    it('should persist dark preference to localStorage', () => {
      service.toggle();
      service.toggle();
      TestBed.flushEffects();
      expect(localStorage.getItem('dark-theme')).toBe('true');
    });
  });
});