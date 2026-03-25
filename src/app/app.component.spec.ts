import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {IMAGE_LOADER, ImageLoaderConfig} from '@angular/common';
import {AppComponent} from './app.component';
import {faCaretSquareLeft, faCaretSquareRight} from '@fortawesome/free-solid-svg-icons';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        {provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => config.src}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title "resume"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('resume');
  });

  it('should start with menu active', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.menuActive).toBeTrue();
  });

  it('should return left caret icon when menu is active', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.getMenuState()).toEqual(faCaretSquareLeft);
  });

  it('should return right caret icon when menu is inactive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.menuActive = false;
    expect(fixture.componentInstance.getMenuState()).toEqual(faCaretSquareRight);
  });
});