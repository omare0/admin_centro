import { Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';
import { NuevaCancionComponent } from './canciones/nueva-cancion/nueva-cancion.component';
import { EditarCancionComponent } from './canciones/editar-cancion/editar-cancion.component';
import { EnsenanzasComponent } from './ensenanzas/ensenanzas.component';
import { NuevaEnsenanzaComponent } from './ensenanzas/nueva-ensenanza/nueva-ensenanza.component';
import { EditarEnsenanzaComponent } from './ensenanzas/editar-ensenanza/editar-ensenanza.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { NuevoAnuncioComponent } from './anuncios/nuevo-anuncio/nuevo-anuncio.component';
import { EditarAnuncioComponent } from './anuncios/editar-anuncio/editar-anuncio.component';

const Routing: Routes = [
  {
    path: 'canciones',
    component: CancionesComponent
  },
  {
    path: 'nueva-cancion',
    component: NuevaCancionComponent
  },
  {
    path: 'editar-cancion/:id',
    component: EditarCancionComponent
  },
  {
    path: 'ensenanzas',
    component: EnsenanzasComponent
  },
  {
    path: 'nueva-ensenanza',
    component: NuevaEnsenanzaComponent
  },
  {
    path: 'editar-ensenanza/:id',
    component: EditarEnsenanzaComponent
  },
  {
    path: 'anuncios',
    component: AnunciosComponent
  },
  {
    path: 'nuevo-anuncio',
    component: NuevoAnuncioComponent
  },
  {
    path: 'editar-anuncio/:id',
    component: EditarAnuncioComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
