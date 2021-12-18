import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { NgChartjsModule } from 'ng-chartjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordResetPageComponent } from './password-reset-page/password-reset-page.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { CustomheaderComponent } from './customheader/customheader.component';
import { CustomfooterComponent } from './customfooter/customfooter.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLeftSidebarComponent } from './student-left-sidebar/student-left-sidebar.component';
import { StudentRightSidebarComponent } from './student-right-sidebar/student-right-sidebar.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses.component';
import { StudentStudyMaterialComponent } from './student/student-study-material/student-study-material.component';
import { StudentPracticeComponent } from './student/student-practice/student-practice.component';
import { StudentAnalyticsComponent } from './student/student-analytics/student-analytics.component';
import { StudentLeaderboardComponent } from './student/student-leaderboard/student-leaderboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentCoursesSubjectsComponent } from './student/student-courses-subjects/student-courses-subjects.component';
import { StudentStudyMaterialSubjectsComponent } from './student/student-study-material-subjects/student-study-material-subjects.component';
import { StudentPracticeSubjectsComponent } from './student/student-practice-subjects/student-practice-subjects.component';
import { StudentCoursesSubjectsLessonsComponent } from './student/student-courses-subjects-lessons/student-courses-subjects-lessons.component';
import { StudentStudyMaterialSubjectsLessonsComponent } from './student/student-study-material-subjects-lessons/student-study-material-subjects-lessons.component';
import { StudentPracticeSubjectsLessonsComponent } from './student/student-practice-subjects-lessons/student-practice-subjects-lessons.component';
import { StudentPracticeSubjectsLessonSingleComponent } from './student/student-practice-subjects-lesson-single/student-practice-subjects-lesson-single.component';
import { StudentCoursesSubjectsLessonSingleComponent } from './student/student-courses-subjects-lesson-single/student-courses-subjects-lesson-single.component';
import { TeacherStudyMaterialComponent } from './teacher/teacher-study-material/teacher-study-material.component';
import { TeacherPracticeComponent } from './teacher/teacher-practice/teacher-practice.component';
import { TeacherParentsComponent } from './teacher/teacher-parents/teacher-parents.component';
import { TeacherDoubtsComponent } from './teacher/teacher-doubts/teacher-doubts.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TeacherCoursesSubjectsComponent } from './teacher/teacher-courses-subjects/teacher-courses-subjects.component';
import { TeacherStudyMaterialSubjectsComponent } from './teacher/teacher-study-material-subjects/teacher-study-material-subjects.component';
import { TeacherPracticeSubjectsComponent } from './teacher/teacher-practice-subjects/teacher-practice-subjects.component';
import { TeacherCoursesSubjectsLessonsComponent } from './teacher/teacher-courses-subjects-lessons/teacher-courses-subjects-lessons.component';
import { TeacherCoursesSubjectsLessonSingleComponent } from './teacher/teacher-courses-subjects-lesson-single/teacher-courses-subjects-lesson-single.component';
import { TeacherPracticeSubjectsLessonsComponent } from './teacher/teacher-practice-subjects-lessons/teacher-practice-subjects-lessons.component';
import { TeacherStudyMaterialSubjectsLessonsComponent } from './teacher/teacher-study-material-subjects-lessons/teacher-study-material-subjects-lessons.component';
import { TeacherPracticeSubjectsLessonSingleComponent } from './teacher/teacher-practice-subjects-lesson-single/teacher-practice-subjects-lesson-single.component';
import { AdminStudyMaterialComponent } from './admin/admin-study-material/admin-study-material.component';
import { AdminPracticeComponent } from './admin/admin-practice/admin-practice.component';
import { AdminParentsComponent } from './admin/admin-parents/admin-parents.component';
import { AdminDoubtsComponent } from './admin/admin-doubts/admin-doubts.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminCoursesSubjectsComponent } from './admin/admin-courses-subjects/admin-courses-subjects.component';
import { AdminStudyMaterialSubjectsComponent } from './admin/admin-study-material-subjects/admin-study-material-subjects.component';
import { AdminPracticeSubjectsComponent } from './admin/admin-practice-subjects/admin-practice-subjects.component';
import { AdminCoursesSubjectsLessonsComponent } from './admin/admin-courses-subjects-lessons/admin-courses-subjects-lessons.component';
import { AdminCoursesSubjectsLessonSingleComponent } from './admin/admin-courses-subjects-lesson-single/admin-courses-subjects-lesson-single.component';
import { AdminPracticeSubjectsLessonsComponent } from './admin/admin-practice-subjects-lessons/admin-practice-subjects-lessons.component';
import { AdminStudyMaterialSubjectsLessonsComponent } from './admin/admin-study-material-subjects-lessons/admin-study-material-subjects-lessons.component';
import { AdminPracticeSubjectsLessonSingleComponent } from './admin/admin-practice-subjects-lesson-single/admin-practice-subjects-lesson-single.component';
import { TeacherRightSidebarComponent } from './teacher/teacher-right-sidebar/teacher-right-sidebar.component';
import { TeacherLeftSidebarComponent } from './teacher/teacher-left-sidebar/teacher-left-sidebar.component';
import { AdminRightSidebarComponent } from './admin/admin-right-sidebar/admin-right-sidebar.component';
import { AdminLeftSidebarComponent } from './admin/admin-left-sidebar/admin-left-sidebar.component';
import { BillDetailComponentComponent } from './bill-detail-component/bill-detail-component.component';
import { BookingHistoryComponentComponent } from './booking-history-component/booking-history-component.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CustomheaderComponent,
        CustomfooterComponent,
        SignupPageComponent,
        LoginPageComponent,
        PasswordResetPageComponent,
        Error404PageComponent,
        StudentDashboardComponent,
        StudentLeftSidebarComponent,
        StudentRightSidebarComponent,
        TeacherDashboardComponent,
        TeacherCoursesComponent,
        StudentCoursesComponent,
        StudentStudyMaterialComponent,
        StudentPracticeComponent,
        StudentAnalyticsComponent,
        StudentLeaderboardComponent,
        StudentProfileComponent,
        StudentCoursesSubjectsComponent,
        StudentStudyMaterialSubjectsComponent,
        StudentPracticeSubjectsComponent,
        StudentCoursesSubjectsLessonsComponent,
        StudentStudyMaterialSubjectsLessonsComponent,
        StudentPracticeSubjectsLessonsComponent,
        StudentPracticeSubjectsLessonSingleComponent,
        StudentCoursesSubjectsLessonSingleComponent,
        TeacherStudyMaterialComponent,
        TeacherPracticeComponent,
        TeacherParentsComponent,
        TeacherDoubtsComponent,
        TeacherProfileComponent,
        TeacherCoursesSubjectsComponent,
        TeacherStudyMaterialSubjectsComponent,
        TeacherPracticeSubjectsComponent,
        TeacherCoursesSubjectsLessonsComponent,
        TeacherCoursesSubjectsLessonSingleComponent,
        TeacherPracticeSubjectsLessonsComponent,
        TeacherStudyMaterialSubjectsLessonsComponent,
        TeacherPracticeSubjectsLessonSingleComponent,
        
        AdminStudyMaterialComponent,
        AdminPracticeComponent,
        AdminParentsComponent,
        AdminDoubtsComponent,
        AdminProfileComponent,
        AdminCoursesSubjectsComponent,
        AdminStudyMaterialSubjectsComponent,
        AdminPracticeSubjectsComponent,
        AdminCoursesSubjectsLessonsComponent,
        AdminCoursesSubjectsLessonSingleComponent,
        AdminPracticeSubjectsLessonsComponent,
        AdminStudyMaterialSubjectsLessonsComponent,
        AdminPracticeSubjectsLessonSingleComponent,
        TeacherRightSidebarComponent,
        TeacherLeftSidebarComponent,
        AdminRightSidebarComponent,
        AdminLeftSidebarComponent,
        BillDetailComponentComponent,
        BookingHistoryComponentComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        NgChartjsModule,
        FormsModule,
        HttpClientModule,
        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzImageModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeViewModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule,
        NzPipesModule,
        QuillModule.forRoot(),
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {
            provide: LocationStrategy, 
            useClass: PathLocationStrategy
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
