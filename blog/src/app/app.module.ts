import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponentComponent} from './home-component/home-component.component';
import {BlogComponent} from "./components/blog/blog.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import {DataService} from "./services/data-service.service";
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import {AuthServiceService} from "./services/auth-service.service";
import {AdminGuardGuard} from "./services/admin-guard.guard";
import {AuthInterceptor} from "./services/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthenticationService} from "./services/authentication.service";
import {HttpIntercepterBasicAuthService} from "./services/http/interceptor-auth.service";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    // canActivate: [AdminGuardGuard]
  },
  {
    path: 'blog/detail/:id',
    component: BlogDetailComponent,
    // canActivate: [AdminGuardGuard]
  },
  {
    path: 'blog/create',
    component: BlogCreateComponent,
    // canActivate: [AdminGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SignupComponent
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponentComponent,
    BlogComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    FilterPipe,
    BlogItemDetailComponent,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogDetailComponent,
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    AuthenticationService, //AuthSeriveceService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService, //AuthInterceptor
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

