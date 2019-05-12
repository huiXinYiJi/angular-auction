// import { LoginGuard } from './guard/login.guard';
// import { ChatComponent } from './chat/chat.component';
// import { SalerInfoComponent } from './saler-info/saler-info.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { ProductDescComponent } from './product-desc/product-desc.component';
// import { UnsavedGuard } from './guard/unsaved.guard';
// import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:prodTitle', component: ProductDetailComponent },
  { path: '**', component: Code404Component },
];

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'chat', component: ChatComponent, outlet: 'aux' },
//   { path: 'home', component: HomeComponent },
//   { path: 'product/:id', component: ProductComponent, children: [
//     { path: '', component: ProductDescComponent },
//     { path: 'seller/:id', component: SalerInfoComponent },
//   ], resolve: {
//     product: ProductResolve
//   },
//     // canActivate: [LoginGuard],
//     // canDeactivate: [UnsavedGuard]
//   },
//   { path: '**', component: Code404Component },
// ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
