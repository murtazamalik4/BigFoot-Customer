import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdminCoursesSubjectsComponent } from './admin/admin-courses-subjects/admin-courses-subjects.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BillDetailComponentComponent } from './bill-detail-component/bill-detail-component.component';
import { BookingHistoryComponentComponent } from './booking-history-component/booking-history-component.component';
import { CustomfooterComponent } from './customfooter/customfooter.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

import { StudentCoursesSubjectsLessonSingleComponent } from './student/student-courses-subjects-lesson-single/student-courses-subjects-lesson-single.component';
import { StudentCoursesSubjectsLessonsComponent } from './student/student-courses-subjects-lessons/student-courses-subjects-lessons.component';
import { StudentCoursesSubjectsComponent } from './student/student-courses-subjects/student-courses-subjects.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { TeacherCoursesSubjectsLessonSingleComponent } from './teacher/teacher-courses-subjects-lesson-single/teacher-courses-subjects-lesson-single.component';

import { TeacherCoursesSubjectsLessonsComponent } from './teacher/teacher-courses-subjects-lessons/teacher-courses-subjects-lessons.component';
import { TeacherCoursesSubjectsComponent } from './teacher/teacher-courses-subjects/teacher-courses-subjects.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherDoubtsComponent } from './teacher/teacher-doubts/teacher-doubts.component';
import { TeacherParentsComponent } from './teacher/teacher-parents/teacher-parents.component';
import { TeacherPracticeSubjectsLessonSingleComponent } from './teacher/teacher-practice-subjects-lesson-single/teacher-practice-subjects-lesson-single.component';
import { TeacherPracticeSubjectsLessonsComponent } from './teacher/teacher-practice-subjects-lessons/teacher-practice-subjects-lessons.component';
import { TeacherPracticeSubjectsComponent } from './teacher/teacher-practice-subjects/teacher-practice-subjects.component';
import { TeacherPracticeComponent } from './teacher/teacher-practice/teacher-practice.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TeacherStudyMaterialSubjectsLessonsComponent } from './teacher/teacher-study-material-subjects-lessons/teacher-study-material-subjects-lessons.component';
import { TeacherStudyMaterialSubjectsComponent } from './teacher/teacher-study-material-subjects/teacher-study-material-subjects.component';
import { TeacherStudyMaterialComponent } from './teacher/teacher-study-material/teacher-study-material.component';


const appRoutes: Routes = [
    {path: '', component: TeacherDashboardComponent},
 


    {path: 'admin/dashboard', component: AdminDashboardComponent},

    {path: 'admin/courses', component: AdminCoursesComponent},
    {path: 'admin/course-subjects', component: AdminCoursesSubjectsComponent},
    {path: 'admin/course-lessons', component: AdminDashboardComponent},
    {path: 'admin/course-lesson', component: AdminDashboardComponent},

    {path: 'admin/practice', component: AdminDashboardComponent},
    {path: 'admin/practice-subjects', component: AdminDashboardComponent},
    {path: 'admin/practice-lessons', component: AdminDashboardComponent},
    {path: 'admin/practice-lesson', component: AdminDashboardComponent},

    {path: 'admin/study-materials', component: AdminDashboardComponent},
    {path: 'admin/study-material-subjects', component: AdminDashboardComponent},
    {path: 'admin/study-material-lessons', component: AdminDashboardComponent},
    {path: 'admin/study-material-lesson', component: AdminDashboardComponent},

    {path: 'admin/profile', component: AdminDashboardComponent},


    //Teacher Routes
    {path: 'teacher/dashboard', component: TeacherDashboardComponent},

    {path: 'teacher/courses', component: TeacherCoursesComponent},
    {path: 'teacher/course-subjects', component: TeacherCoursesSubjectsComponent},
    {path: 'teacher/course-lessons', component: TeacherCoursesSubjectsLessonsComponent},
    {path: 'teacher/course-lesson', component: TeacherCoursesSubjectsLessonSingleComponent},

    {path: 'teacher/practice', component: TeacherPracticeComponent},
    {path: 'teacher/practice-subjects', component: TeacherPracticeSubjectsComponent},
    {path: 'teacher/practice-lessons', component: TeacherPracticeSubjectsLessonsComponent},
    {path: 'teacher/practice-lesson', component: TeacherPracticeSubjectsLessonSingleComponent},

    {path: 'teacher/study-materials', component: TeacherStudyMaterialComponent},
    {path: 'teacher/study-material-subjects', component: TeacherStudyMaterialSubjectsComponent},
    {path: 'teacher/study-material-lessons', component: TeacherStudyMaterialSubjectsLessonsComponent},

    {path: 'teacher/doubts', component: TeacherDoubtsComponent},
    {path: 'teacher/parents', component: TeacherParentsComponent},
    {path: 'teacher/profile', component: TeacherProfileComponent},


    //Student Routes
    {path: 'student/dashboard', component: StudentDashboardComponent},

    {path: 'student/courses', component: StudentCoursesComponent},
    {path: 'student/course-subjects', component: StudentCoursesSubjectsComponent},
    {path: 'student/course-lessons', component: StudentCoursesSubjectsLessonsComponent},
    {path: 'student/course-lesson', component: StudentCoursesSubjectsLessonSingleComponent},

    {path: 'student/practice', component: AdminDashboardComponent},
    {path: 'student/practice-subjects', component: AdminDashboardComponent},
    {path: 'student/practice-lessons', component: AdminDashboardComponent},
    {path: 'student/practice-lesson', component: AdminDashboardComponent},

    {path: 'student/study-materials', component: AdminDashboardComponent},
    {path: 'student/study-material-subjects', component: AdminDashboardComponent},
    {path: 'student/study-material-lessons', component: AdminDashboardComponent},
    {path: 'student/study-material-lesson', component: AdminDashboardComponent},

    {path: 'student/profile', component: StudentProfileComponent},



    {path: 'login', component: LoginPageComponent},
    {path: 'footer', component: CustomfooterComponent},
    {path: 'sign-up', component: SignupPageComponent},
    {path: 'bill-details', component: BillDetailComponentComponent},
    {path: 'booking-history', component: BookingHistoryComponentComponent},
];

@NgModule({ 
    imports: [
        RouterModule.forRoot(appRoutes, { 
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled' 
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}