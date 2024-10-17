import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3'; 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const apiReq = req.clone({
    //   setHeaders: {
    //     'x-api-key': this.apiKey 
    //   }
    // });
    const apiReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.apiKey}`  
        }
      });


    return next.handle(apiReq);
  }
}
