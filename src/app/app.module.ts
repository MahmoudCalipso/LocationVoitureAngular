import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaisonModule } from './Models/maison/maison.module';
import { AppComponent } from './app.component';
import { AddVoitureComponent } from './Views/add-voiture/add-voiture.component';
import { ConducteurModule } from './Models/conducteur/conducteur.module';
import { ContratModule } from './Models/contrat/contrat.module';
import { MarqueModule } from './Models/marque/marque.module';
import { ModelModule } from './Models/model/model.module';
import { SocieteModule } from './Models/societe/societe.module';
import { UserModule } from './Models/user/user.module';
import { VoitureModule } from './Models/voiture/voiture.module';
import { HeaderComponent } from './Views/header/header.component';
import { FooterComponent } from './Views/footer/footer.component';
import { EditVoitureComponent } from './Views/edit-voiture/edit-voiture.component';
import { IndexVoitureComponent } from './Views/index-voiture/index-voiture.component';
import { IndexConducteurComponent } from './Views/index-conducteur/index-conducteur.component';
import { AddConducteurComponent } from './Views/add-conducteur/add-conducteur.component';
import { EditConducteurComponent } from './Views/edit-conducteur/edit-conducteur.component';
import { EditContratComponent } from './Views/edit-contrat/edit-contrat.component';
import { AddContratComponent } from './Views/add-contrat/add-contrat.component';
import { IndexContratComponent } from './Views/index-contrat/index-contrat.component';
import { IndexModelComponent } from './Views/index-model/index-model.component';
import { AddModelComponent } from './Views/add-model/add-model.component';
import { EditModelComponent } from './Views/edit-model/edit-model.component';
import { EditMarqueComponent } from './Views/edit-marque/edit-marque.component';
import { AddMarqueComponent } from './Views/add-marque/add-marque.component';
import { IndexMarqueComponent } from './Views/index-marque/index-marque.component';
import { IndexMaisonComponent } from './Views/index-maison/index-maison.component';
import { AddMaisonComponent } from './Views/add-maison/add-maison.component';
import { EditMaisonComponent } from './Views/edit-maison/edit-maison.component';
import { EditSocieteComponent } from './Views/edit-societe/edit-societe.component';
import { AddSocieteComponent } from './Views/add-societe/add-societe.component';
import { IndexSocieteComponent } from './Views/index-societe/index-societe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Views/register/register.component';
import { LoginComponent } from './Views/login/login.component';
import { ProfileComponent } from './Views/profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddVoitureComponent,
    HeaderComponent,
    FooterComponent,
    EditVoitureComponent,
    IndexVoitureComponent,
    IndexConducteurComponent,
    AddConducteurComponent,
    EditConducteurComponent,
    EditContratComponent,
    AddContratComponent,
    IndexContratComponent,
    IndexModelComponent,
    AddModelComponent,
    EditModelComponent,
    EditMarqueComponent,
    AddMarqueComponent,
    IndexMarqueComponent,
    IndexMaisonComponent,
    AddMaisonComponent,
    EditMaisonComponent,
    EditSocieteComponent,
    AddSocieteComponent,
    IndexSocieteComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaisonModule,
    ConducteurModule,
    ContratModule,
    MarqueModule,
    ModelModule,
    SocieteModule,
    UserModule,
    VoitureModule
  ],
  providers: [authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
