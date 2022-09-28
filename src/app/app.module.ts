import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpSkillInfoComponent } from './emp-skill-Info/empskillInfo.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { SetSkillSetColor } from './@Directives/setSkillSetColor';
import { DiableBtn } from './@Directives/disablebtn';


@NgModule({
  declarations: [
    AppComponent,
    EmpSkillInfoComponent,
    EmpInfoComponent,
    SetSkillSetColor,
    DiableBtn
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
