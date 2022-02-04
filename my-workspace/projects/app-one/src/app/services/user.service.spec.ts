import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service"

describe("User Service", () => {

  let userService : UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    userService = TestBed.inject(UserService);
  })

  it("Should return user data using observable API", () => {
    userService.getUserdataUsingObservable()
      .subscribe(userdata => {
        expect(userdata).toBeTruthy();
      })
  })

  it("Should return user data from promise API", () => {
    userService.getUserDataUsingPromise()
      .then(userdata => {
        expect(userdata).toBeDefined();
      })
  })

  it("Should return user data", () => {
    expect(userService.getUserData()).toBe(userService.USER_DATA);
  })

  it("Should create user service", () => {
    expect(userService).toBeTruthy();
  })
})
