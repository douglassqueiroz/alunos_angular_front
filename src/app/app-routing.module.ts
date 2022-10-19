import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./core/components/heroes/heroes.component";

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}