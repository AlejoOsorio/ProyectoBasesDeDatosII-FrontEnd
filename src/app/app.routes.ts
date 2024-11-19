import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdministrarPedidoComponent } from './componentes/administrar-pedido/administrar-pedido.component';
import { CrearPedidoComponent } from './componentes/crear-pedido/crear-pedido.component';
import { VerPedidoComponent } from './componentes/ver-pedido/ver-pedido.component';
import { GananciasVendedorComponent } from './componentes/ganancias-vendedor/ganancias-vendedor.component';

export const routes: Routes = [
    { path: '', component: CrearPedidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'administrar-pedidos', component: AdministrarPedidoComponent },
    { path: 'crear-pedido', component: CrearPedidoComponent },
    { path: 'ver-pedido/:id-pedido', component: VerPedidoComponent },
    { path: 'ganancias-vendedor', component: GananciasVendedorComponent },
    { path: "**", pathMatch: "full", redirectTo: "" }
];
