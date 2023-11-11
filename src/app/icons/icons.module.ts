import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  ChevronDown,
  Settings,
  Clock,
  MessageCircle,
  ThumbsDown,
  ThumbsUp,
  ChevronLeft,
  Twitter,
  Youtube,
  Facebook,
} from 'angular-feather/icons';

const icons = {
  ChevronDown,
  Settings,
  Clock,
  MessageCircle,
  ThumbsDown,
  ThumbsUp,
  ChevronLeft,
  Twitter,
  Youtube,
  Facebook,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
