import { TestBed } from "@angular/core/testing";

import { ProgramsService } from "./programs.service";
import { HttpClientModule } from "@angular/common/http";

describe("ProgramsService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it("should be created", () => {
    const service: ProgramsService = TestBed.get(ProgramsService);
    expect(service).toBeTruthy();
  });
});
