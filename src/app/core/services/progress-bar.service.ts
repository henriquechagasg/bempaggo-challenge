import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProgressBarService {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  private progress$ = new BehaviorSubject<number>(0);

  isLoading = this.isLoading$.asObservable();

  progress = this.progress$.asObservable();

  setIsLoading(value: boolean): void {
    this.progress$.next(0);
    this.isLoading$.next(value);
  }

  setProgress(value: number) {
    this.progress$.next(value);
  }
}
