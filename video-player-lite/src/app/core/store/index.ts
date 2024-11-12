// This module defines the respective module about Redux store and
// state management system.
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

const actions: [] = [
];

@NgModule({
  imports: [StoreModule.forRoot(actions)],
  declarations: [],
  exports: [],
  providers: [],
})
export class CoreStoreModule {}
