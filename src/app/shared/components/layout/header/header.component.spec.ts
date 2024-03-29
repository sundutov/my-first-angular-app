import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header).not.toBeUndefined();
  });

  it('should contain home button', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header.innerHTML).toContain('Home');
  });
});
