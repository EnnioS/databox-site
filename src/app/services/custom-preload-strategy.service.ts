import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable,of, timer } from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      if(route.data['preloadDelay']){
        return timer(route.data['preloadDelay'])
        .pipe(
          flatMap(x =>{
            return fn();
          })
        )
      }else{
        return fn();
      }
    }else{
      return of(null);
    }
  }
}
