import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import the main App component
import { AppComponent } from './app.component';

//Import animations for angualr material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

// importing material components
import {
  MatFormFieldModule, MatToolbarModule,
  MatIconModule, MatButtonModule,
  MatInputModule, MatStepperModule,
  MatCardModule, MatTooltipModule,
  MatTabsModule, MatCheckboxModule,
  MatChipsModule, MatMenuModule, MatTabNav,
} from '@angular/material';

import {MatDividerModule} from '@angular/material/divider';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
