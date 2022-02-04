import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-change-detection-demoy',
  templateUrl: './change-detection-demoy.component.html',
  styleUrls: ['./change-detection-demoy.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionDemoyComponent implements OnInit {
  @Input() user: { name: string };

  notes = [
    { id: '1', title: 'shopping' },
    { id: '2', title: 'grocery' },
    { id: '3', title: 'insurance' },
  ];

  addNewNote() {
    // this.notes.push({id : "4", title : "planting"})
    this.notes = [
      { id: '1', title: 'shopping' },
      { id: '2', title: 'grocery' },
      { id: '3', title: 'insurance' },
      { id: '4', title: 'planting' },
    ];
  }

  trackById(index, el){
    return el.id;
  }

  constructor(private cdRef : ChangeDetectorRef) {}

  ngOnInit(): void {}

  onDetech(){
    this.cdRef.detach()
  }

  onReattach(){
    this.cdRef.reattach()
  }
}
