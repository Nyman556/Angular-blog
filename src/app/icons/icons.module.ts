import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  ChevronDown,
  Settings,
  Clock,
  MessageCircle,
} from 'angular-feather/icons';

const icons = {
  ChevronDown,
  Settings,
  Clock,
  MessageCircle,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
