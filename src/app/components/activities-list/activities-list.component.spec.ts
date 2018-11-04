import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActivitiesListComponent } from "./activities-list.component";
import { ProgramsService } from "src/app/lists/service/programs.service";

describe("ActivitiesListComponent", () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesListComponent],
      providers: [ProgramsService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ActivitiesListComponent);
        component = fixture.componentInstance;
      });
  }));

  it("should at least one activity", () => {
    expect(component.activities.length).toBeGreaterThan(0);
  });
});
