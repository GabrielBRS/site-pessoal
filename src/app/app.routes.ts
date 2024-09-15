import { Routes } from '@angular/router';
import { DevWikiComponent } from './dev-wiki/dev-wiki.component';
import { HomeComponent } from './home/home.component';
import { ConcursoComponent } from './concurso/concurso.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { AulaComponent } from './aula/aula.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'dev-wiki', component: DevWikiComponent},
    {path:'concurso', component: ConcursoComponent},
    {path:'projetos', component: ProjetosComponent},
    {path:'aulas', component: AulaComponent},
    {path:'consultoria', component: ConsultoriaComponent},
];
