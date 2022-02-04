import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component";

describe("Users Component", () => {
  let fixture : ComponentFixture<UsersComponent>;
  let userComp : UsersComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations :    [UsersComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    userComp = fixture.componentInstance;
  })

  it("Should create the component", () =>{
    expect(userComp).toBeTruthy()
  })

  it("Should have user name as 'Foo'",()=>{
    expect(userComp.user.name).toEqual("Foo")
  })

  it("Should create the template from user name", () => {
    const compiledTemplate = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiledTemplate.querySelector('.user-name').textContent).toContain('Foo')
  })
})
