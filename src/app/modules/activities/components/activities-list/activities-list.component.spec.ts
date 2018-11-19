import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActivitiesListComponent } from "./activities-list.component";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatTableModule, MatIconModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "src/app/reducers";

describe("ActivitiesListComponent", () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesListComponent],
      providers: [ProgramsService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }],
      imports: [MatTableModule,
                MatIconModule,
                HttpClientModule,
                MatDialogModule,
                StoreModule.forRoot(reducers, { metaReducers })],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ActivitiesListComponent);
        component = fixture.componentInstance;
      });
  }));

  // it("should at least one activity", () => {
  //   expect(component.activities).toBeGreaterThan(0);
  // });
});
