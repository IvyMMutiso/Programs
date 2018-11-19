import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DeleteActivityComponent } from "./delete-activity.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

describe("DeleteActivityComponent", () => {
  let component: DeleteActivityComponent;
  let fixture: ComponentFixture<DeleteActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
