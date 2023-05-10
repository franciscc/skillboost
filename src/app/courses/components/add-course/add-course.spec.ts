import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AddCourseComponent } from './add-course.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  let coursesServiceSpy: jasmine.SpyObj<CoursesService>;
  let notificationServiceSpy: jasmine.SpyObj<NotificationService>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<AddCourseComponent>>;

  beforeEach(async () => {
    const coursesServiceSpyObj = jasmine.createSpyObj('CoursesService', ['CreateCourse']);
    const notificationServiceSpyObj = jasmine.createSpyObj('NotificationService', ['SendNotification']);
    const matDialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);

    coursesServiceSpy = coursesServiceSpyObj as jasmine.SpyObj<CoursesService>;

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
    ],
      declarations: [AddCourseComponent],
      providers: [
        { provide: CoursesService, useValue: coursesServiceSpyObj },
        { provide: NotificationService, useValue: notificationServiceSpyObj },
        { provide: MatDialogRef, useValue: matDialogRefSpyObj },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;

    coursesServiceSpy = TestBed.inject(CoursesService) as jasmine.SpyObj<CoursesService>;
    notificationServiceSpy = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;
    matDialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<AddCourseComponent>>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when calling closeDialog', () => {
    component.closeDialog();

    expect(matDialogRefSpy.close).toHaveBeenCalled();
  });

});
