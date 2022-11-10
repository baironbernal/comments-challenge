
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyInputComponent } from './reply-input/reply-input.component';
import { HttpClientModule } from '@angular/common/http';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './state/app.state';

    
@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ReplyComponent,
    ReplyInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers,{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
