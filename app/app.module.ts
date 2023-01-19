import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';

// how to create form with data driven forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    StudentComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
// how to create form with data driven forms
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
