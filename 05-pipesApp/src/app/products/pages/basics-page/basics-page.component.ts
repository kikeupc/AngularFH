import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'enrique';
  public nameUpper: string = 'ENRIQUE';
  public fullName: string = 'enRiQUE MARtiNeZ';

  public customDate: Date = new Date();
}
