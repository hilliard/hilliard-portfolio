import * as Turbo from '@hotwired/turbo';
import { Application } from '@hotwired/stimulus';

import CommandPaletteController from './controllers/command_palette_controller';
import FilterController from './controllers/filter_controller';
import ThemeController from './controllers/theme_controller';
import MobileMenuController from './controllers/mobile_menu_controller';
import ToastController from './controllers/toast_controller';

// Start Stimulus application
const application = Application.start();

// Register controllers
application.register('command-palette', CommandPaletteController);
application.register('filter', FilterController);
application.register('theme', ThemeController);
application.register('mobile-menu', MobileMenuController);
application.register('toast', ToastController);

// Turbo configuration
Turbo.session.drive = true;

export { application, Turbo };
