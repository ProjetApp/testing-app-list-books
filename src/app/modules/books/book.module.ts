import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { livrosRoutes } from "./livros.routes";

import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookComponent } from "./containers/book.component";

import { BookService } from "./services/book.service";

@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent,
    BooksListComponent,
  ],
  imports: [
    RouterModule.forChild(livrosRoutes)
  ],
  exports: [
    BookComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule {}