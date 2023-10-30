import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoImputAddItensComponent } from './components/todo-imput-add-itens/todo-imput-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoImputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
