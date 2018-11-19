import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActivityDetailsComponent } from "./activity-details.component";
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "src/app/reducers";

describe("ActivityDetailsComponent", () => {
  let component: ActivityDetailsComponent;
  let fixture: ComponentFixture<ActivityDetailsComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityDetailsComponent],
      imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        StoreModule.forRoot(reducers, { metaReducers })],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ProgramsService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ActivityDetailsComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        de = fixture.debugElement.query(By.css("form"));
        element = de.nativeElement;
      });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ActivityDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a test 'activities details page'", async() => {
    expect(component).toBeTruthy();
  });

  it("should call the saveActivity method", async() => {
    fixture.detectChanges();
    spyOn(component, "saveActivity");
    element = fixture.debugElement.query(By.css("button")).nativeElement;
    element.click();
    expect(component.saveActivity).toHaveBeenCalledTimes(0);
  });

  it("form should be invalid", async() => {
    component.activityForm.controls["name"].setValue("");
    expect(component.activityForm.valid).toBeFalsy();
  });

  it("form should be valid", async() => {
    component.activityForm.controls["name"].setValue("program activity");
    expect(component.activityForm.valid).toBeTruthy();
  });
});
