export const sum = (n1,n2) => n1+n2;

export class Reservation{
  numberOfCustomer = 10;

  bookCustomer(){
    ++this.numberOfCustomer;
  }

  checkout(){
    --this.numberOfCustomer;
  }

}
