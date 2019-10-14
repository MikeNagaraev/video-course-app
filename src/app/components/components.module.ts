import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoCourseComponent } from './video-courses/video-course/video-course.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { CreateVideoCourseComponent } from './video-courses/create-video-course/create-video-course.component';
import { LogoComponent } from './logo/logo.component';

const components = [
  NavigationComponent,
  LoginComponent,
  LogoComponent,
  HeaderComponent,
  FooterComponent,
  VideoCourseComponent,
  VideoCoursesComponent,
  CreateVideoCourseComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
