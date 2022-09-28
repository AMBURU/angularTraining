import { Component } from "@angular/core";
import { IEMPSkillInfo } from "../common/model";

@Component({
    selector: 'app-empSkillInfo',
    templateUrl: './empskillInfo.component.html',
    styleUrls: ['./empskillInfo.component.css']
})


export class EmpSkillInfoComponent {

    empSkillSetInfo: IEMPSkillInfo;
    isUserAdmin: boolean;
    newEmpcreatedInfo: string;

    newEmployeeId: number;
    newEmployeeSkillSet: string;


    empSkillSetArray: IEMPSkillInfo[];



    constructor() {

        this.empSkillSetInfo = {
            empId: 11111,
            empSkillset: 'Angular'
        }

        this.isUserAdmin = true;

        this.empSkillSetArray = [
            {
                empId: 11111,
                empSkillset: 'Angular'
            },
            {
                empId: 22222,
                empSkillset: 'React'
            }

        ]
    }

    onAddBtnClick() {
        // this.newEmpcreatedInfo = "New employee created with Id"
        //     + this.newEmployeeId +
        //     'and having skill set in ' + this.newEmployeeSkillSet;
        this.empSkillSetArray.push({
            empId: this.newEmployeeId,
            empSkillset: this.newEmployeeSkillSet
        })

    }



}