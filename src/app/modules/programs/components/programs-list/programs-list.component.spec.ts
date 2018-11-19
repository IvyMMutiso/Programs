import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProgramsListComponent } from "./programs-list.component";
import { MatTableModule, MatIconModule, MatDialogModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ProgramsService } from "src/app/modules/shared/service/programs.service";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "src/app/reducers";

describe("ProgramsListComponent", () => {
  let component: ProgramsListComponent;
  let fixture: ComponentFixture<ProgramsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsListComponent ],
      imports: [MatTableModule,
        MatIconModule,
        HttpClientModule,
        MatDialogModule,
        StoreModule.forRoot(reducers, { metaReducers })],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ProgramsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should at least have one program", () => {
  //   expect(component.programs.length).toBeGreaterThan(0);
  // });
});
