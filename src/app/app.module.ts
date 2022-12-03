import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LeftCardComponent } from './card/left-card/left-card.component';
import { RightCardComponent } from './card/right-card/right-card.component';
import { SpinAvatarComponent } from './card/left-card/spin-avatar/spin-avatar.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LeftCardComponent,
    RightCardComponent,
    SpinAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
