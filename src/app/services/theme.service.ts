import {effect, inject, Injectable, signal, DOCUMENT} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly STORAGE_KEY = 'dark-theme';
  private readonly document = inject(DOCUMENT);
  isDark = signal<boolean>(localStorage.getItem(this.STORAGE_KEY) !== 'false');

  constructor() {
    // Apply initial state synchronously — no frame delay
    this.document.body.classList.toggle('dark-theme', this.isDark());

    // Only persist to localStorage via effect (no visual impact)
    effect(() => localStorage.setItem(this.STORAGE_KEY, String(this.isDark())));
  }

  toggle(): void {
    this.isDark.update(v => !v);
    // Sync DOM immediately — avoids the effect's async frame delay
    this.document.body.classList.toggle('dark-theme', this.isDark());
  }
}