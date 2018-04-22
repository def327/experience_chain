import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CustomWeb3Service } from './custom-web3.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmedSkillsComponent } from './confirmed-skills/confirmed-skills.component';
import { MatSelectModule } from '@angular/material/select';

const appRoutes: Routes = [
  { path: 'add-skill', component: AddSkillComponent },
  { path: 'confirmed-skills', component: ConfirmedSkillsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AddSkillComponent,
    ConfirmedSkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    CustomWeb3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
