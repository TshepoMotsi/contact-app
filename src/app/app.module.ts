import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListFooterComponent } from './contact-list-footer/contact-list-footer.component';
import { ContactListHeaderComponent } from './contact-list-header/contact-list-header.component';
import { ContactDataService } from './contact-data.service';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListFooterComponent,
    ContactListHeaderComponent,
    ContactListItemComponent,
    PageNotFoundComponent,
    ContactsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
