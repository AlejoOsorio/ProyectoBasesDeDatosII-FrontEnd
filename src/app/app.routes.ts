import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { CrearPedidoComponent } from './componentes/crear-pedido/crear-pedido.component';
import { EliminarPedidoComponent } from './componentes/eliminar-pedido/eliminar-pedido.component';
import { VerPedidoComponent } from './componentes/ver-pedido/ver-pedido.component';

export const routes: Routes = [
    { path: '', component: CrearPedidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'actualizar', component: ActualizarComponent },
    { path: 'crear-pedido', component: CrearPedidoComponent },
    { path: 'eliminar-pedido', component: EliminarPedidoComponent },
    { path: 'ver-pedido', component: VerPedidoComponent },
    { path: "**", pathMatch: "full", redirectTo: "" }
];
