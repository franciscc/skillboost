import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FullnamePipe } from './pipes/fullname.pipe';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatTooltipModule,
    MatInputModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    FullnamePipe
  ]
})
export class SharedModule { }
