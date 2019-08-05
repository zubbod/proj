import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatListModule,
  MatDividerModule,
  MatDatepickerModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatNativeDateModule,
  MatStepperModule,
  MatExpansionModule,
  MatRadioModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatExpansionModule,
  MatRadioModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 25000}}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class OwnCustomMaterialModule { }
