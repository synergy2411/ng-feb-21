import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { CounterService } from './services/counter.service';
import { CompOneComponent } from './components/counter/comp-one/comp-one.component';
import { CompTwoComponent } from './components/counter/comp-two/comp-two.component';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    LifeCycleDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    DirectiveDemoComponent,
    FilterPipe,
    LoginComponent,
    CommentFormComponent,
    RegisterComponent,
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [              // Module - built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, CounterService],          // service
  bootstrap: [AppComponent]
})
export class AppModule { }
