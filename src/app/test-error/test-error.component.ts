import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public showError(): void {
    throw JSON.stringify({
      date: new Date().getTime(),
      component: 'test-error',
      function: 'showError',
      msg: 'это ошибка при нажатии на кнопку' // произвольный текст,
                                              // помогающий понять проблему
    });
  }

}
