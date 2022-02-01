import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countrycode"
})
export class CountryCodePipe implements PipeTransform{
  transform(value: any, code : string) {
    switch (code) {
      case "USA": return `+1 ${value}`
      case "AUS": return `+12 ${value}`
      case "CHN": return `+33 ${value}`
      default: return "+91 " +value;
    }
  }
}

// Create Reverse pipe to revere the string
