import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { InsertarComponent } from './components/insertar.component/insertar.component';
import { ActualizarComponent } from './components/actualizar.component/actualizar.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'actualizar/:numero', component: ActualizarComponent
    },
    {
        path: 'insertar', component: InsertarComponent
    }
];
