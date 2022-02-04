import { sum, Reservation } from './util';

// AAA Pattern : Arrange-Act-Assert

describe("Util Suite", () => {


  let reservation : Reservation;

  // Setup & Tear-down
  beforeEach(() => {
    // Arrange
    reservation = new Reservation();
  })

  beforeAll(() =>{})

  afterEach(()=>{})

  afterAll(()=>{})

  it("Should test checkout", () => {
    // Act
    reservation.checkout();
    // Assert
    expect(reservation.numberOfCustomer).toEqual(9)
  })

  it("Should test bookCustomer", () => {
    reservation.bookCustomer();
    expect(reservation.numberOfCustomer).toEqual(11)
  })

  it("Should pass the test", () => {
    expect(true).toBeTruthy()
  })

  it("Should return the sum of values", () => {
    expect(sum(2,4)).toBe(6);
  })

})
