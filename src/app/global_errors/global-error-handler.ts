import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {ErrorLoggingService} from "./error-logging.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler{
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const errorMessage = JSON.parse(error.message);
    const loggingService = this.injector.get(ErrorLoggingService);

    loggingService.logError(errorMessage)
      .subscribe(
        () => {
        console.error(JSON.stringify(errorMessage));
      },
        err => console.error(err)); // тут просто законсолим ошибку на клиенте
                                    // не будем вызывать "сами себя",
                                    // видимо сервер недоступен
                                    // либо ошибка в роутере на бекенде
  }
}
