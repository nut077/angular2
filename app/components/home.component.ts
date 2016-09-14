import { Component } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { SidePanelComponent } from './side-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: 'app/components/home.component.html',
  directives: [PhotoListComponent, SidePanelComponent]
})

export class HomeComponent {}
