import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ChevronDown, Settings } from 'angular-feather/icons';

const icons = {
  ChevronDown,
  Settings,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
