import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MoneyPipe } from './pipes/money.pipe';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe,
    MoneyPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe,
    MoneyPipe,
  ]
})
export class SharedModule { }
