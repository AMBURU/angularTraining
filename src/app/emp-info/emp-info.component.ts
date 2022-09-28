import { Component, Input, OnInit } from '@angular/core';
import { IEMPSkillInfo } from '../common/model';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  /// showMessage:string;

  @Input() empinfo: IEMPSkillInfo;

  constructor() {
    // this.showMessage ="Hi there!"
  }

  ngOnInit(): void {
  }
  showMessagebtn() {
    // this.showMessage ="Hi there!"
  }

}
