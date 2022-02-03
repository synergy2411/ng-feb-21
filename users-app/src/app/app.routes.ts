import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { UsersComponent } from "./components/users/users.component";
import { DeactivatedGaurdService } from "./service/deactivated-gaurd.service";
import { LoginGaurdService } from "./services/login-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "",
    redirectTo : "login",
    pathMatch : "full"
  },{
    path : "login",         // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",      // http://localhost:4200/register
    component : RegisterComponent,
    canDeactivate : [DeactivatedGaurdService]
  },{
    path : "users",         // http://localhost:4200/users
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  }, {
    path : "observable-demo",        // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "pipe-demo",         // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {path : "overview/:prodId/:prodName", component : OverviewComponent},
      {path : "specification", component : SpecificationComponent}
    ]
  },{
    path : "**",                // http://localhost:4200/doesNotExist
    redirectTo : "login",
    pathMatch : "full"
  }
]
