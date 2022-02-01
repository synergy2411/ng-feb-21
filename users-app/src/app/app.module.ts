import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    UsersComponent
  ],
  imports: [              // Module - built-in / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],          // service
  bootstrap: [AppComponent]
})
export class AppModule { }
