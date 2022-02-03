import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  ninjaName : string;
  ninjaBelt : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ninjaName = this.route.snapshot.queryParams['name']
    this.route.queryParams.subscribe(params => {
      this.ninjaBelt = params['belt']
    })
  }

}
