import { provideHttpClient,withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";

export const appConfig: ApplicationConfig ={
    providers: [provideHttpClient(withFetch()),provideClientHydration()]
}