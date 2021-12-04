import { NgModule } from '@angular/core';
import { RhythmComponent } from './rhythm.component';
import { MaskComponent } from './mask/mask.component';
import { ControlComponent } from './control/control.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    RhythmComponent,
    MaskComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RhythmComponent,
    MaskComponent
  ]
})
export class RhythmModule { }
