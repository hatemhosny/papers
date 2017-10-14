import { retry } from 'rxjs/operator/retry';
import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';

@Injectable()
export class NotificationService {

  constructor(private toasterService: ToasterService) { }

  message(message: string) {
    this.showToast('default', null, message);
  }

  success(message: string) {
    this.showToast('success', null, message);
  }

  info(message: string) {
    this.showToast('info', null, message);
  }

  warning(message: string) {
    this.showToast('warning', null, message);
  }

  error(message: string) {
    this.showToast('error', null, message);
  }

  clear() {
    this.toasterService.clear();
  }

  private showToast(type: string, title: string, body: string) {
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
