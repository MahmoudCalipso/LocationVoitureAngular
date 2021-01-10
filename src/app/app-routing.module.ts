import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConducteurComponent } from './Views/add-conducteur/add-conducteur.component';
import { AddContratComponent } from './Views/add-contrat/add-contrat.component';
import { AddMaisonComponent } from './Views/add-maison/add-maison.component';
import { AddMarqueComponent } from './Views/add-marque/add-marque.component';
import { AddModelComponent } from './Views/add-model/add-model.component';
import { AddSocieteComponent } from './Views/add-societe/add-societe.component';
import { AddVoitureComponent } from './Views/add-voiture/add-voiture.component';
import { EditConducteurComponent } from './Views/edit-conducteur/edit-conducteur.component';
import { EditContratComponent } from './Views/edit-contrat/edit-contrat.component';
import { EditMaisonComponent } from './Views/edit-maison/edit-maison.component';
import { EditMarqueComponent } from './Views/edit-marque/edit-marque.component';
import { EditModelComponent } from './Views/edit-model/edit-model.component';
import { EditSocieteComponent } from './Views/edit-societe/edit-societe.component';
import { EditVoitureComponent } from './Views/edit-voiture/edit-voiture.component';
import { HeaderComponent } from './Views/header/header.component';
import { IndexConducteurComponent } from './Views/index-conducteur/index-conducteur.component';
import { IndexContratComponent } from './Views/index-contrat/index-contrat.component';
import { IndexMaisonComponent } from './Views/index-maison/index-maison.component';
import { IndexMarqueComponent } from './Views/index-marque/index-marque.component';
import { IndexModelComponent } from './Views/index-model/index-model.component';
import { IndexSocieteComponent } from './Views/index-societe/index-societe.component';
import { IndexVoitureComponent } from './Views/index-voiture/index-voiture.component';
import { LoginComponent } from './Views/login/login.component';
import { ProfileComponent } from './Views/profile/profile.component';
import { RegisterComponent } from './Views/register/register.component';

const routes: Routes = [
  // Index Root
  {
    path: 'conducteur', component: HeaderComponent,
    children: [{ path: '', component: IndexConducteurComponent }, ],
  },
  {
    path: 'contrat', component: HeaderComponent,
    children: [{ path: '', component: IndexContratComponent }, ]
  },
  {
    path: 'maison', component: HeaderComponent,
    children: [{ path: '', component: IndexMaisonComponent }, ]
  },
  {
    path: 'marque', component: HeaderComponent,
    children: [{ path: '', component: IndexMarqueComponent }, ]
  },
  {
    path: 'model', component: HeaderComponent,
    children: [{ path: '', component: IndexModelComponent }, ]
  },
  {
    path: 'societe', component: HeaderComponent,
    children: [{ path: '', component: IndexSocieteComponent }, ]
  },
  {
    path: 'voiture', component: HeaderComponent,
    children: [{ path: '', component: IndexVoitureComponent }, ]
  },
  // Ajouter Root
  {
    path: 'conducteur/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddConducteurComponent }, ]
  },
  {
    path: 'contrat/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddContratComponent }, ]
  },
  {
    path: 'maison/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddMaisonComponent }, ]
  },
  {
    path: 'marque/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddMarqueComponent }, ]
  },
  { path: 'model/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddModelComponent },]
  },
  {
    path: 'societe/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddSocieteComponent },]
  },
  {
    path: 'voiture/ajouter', component: HeaderComponent,
    children: [{ path: '', component: AddVoitureComponent },]
  },
   // Modifier Root
  {
    path: 'conducteur/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditConducteurComponent },]
  },
  {
    path: 'contrat/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditContratComponent },]
  },
  {
    path: 'maison/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditMaisonComponent },]
  },
  {
    path: 'marque/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditMarqueComponent },]
  },
  {
    path: 'model/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditModelComponent },]
  },
  {
    path: 'societe/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditSocieteComponent },]
  },
  {
    path: 'voiture/modifier/:id', component: HeaderComponent,
    children: [{ path: '', component: EditVoitureComponent },]
  },
  {
    path: 'profile', component: HeaderComponent,
    children: [{ path: '', component: ProfileComponent },]
  },
  {
    path: '', component: HeaderComponent,
    children: [{ path: '', component: ProfileComponent },]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
