import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EagerModule } from './modules/eager/eager.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';


import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CompOneComponent } from './components/counter/comp-one/comp-one.component';
import { CompTwoComponent } from './components/counter/comp-two/comp-two.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { ObsPipeableOperatorsComponent } from './components/obs-pipeable-operators/obs-pipeable-operators.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { PostComponent } from './components/post/post.component';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { DataService } from './services/data.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChangeDetectionDemoyComponent } from './components/change-detection-demoy/change-detection-demoy.component';


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
    EditPostComponent,
    ObservableDemoComponent,
    ObsPipeableOperatorsComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    ChangeDetectionDemoyComponent
  ],
  imports: [              // Module - built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EagerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // BackButtonDisableModule.forRoot()
  ],
  providers: [
    DataService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },{
      provide :HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    }
  ],          // service
  bootstrap: [AppComponent]
})
export class AppModule { }
