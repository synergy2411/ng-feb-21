import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';

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
    CompTwoComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [              // Module - built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],          // service
  bootstrap: [AppComponent]
})
export class AppModule { }
