import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [], // Keep this empty for standalone components
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // FormsModule is still needed for non-standalone components
  ],
  providers: [],
  bootstrap: [] // AppComponent will be bootstrapped in main.ts
})
export class AppModule {}