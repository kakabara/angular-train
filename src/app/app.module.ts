import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';


const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
