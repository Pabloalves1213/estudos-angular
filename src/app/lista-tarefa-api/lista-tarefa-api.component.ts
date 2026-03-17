import { Component, OnInit } from '@angular/core';
import { TarefasApiService } from '../services/tarefas-api.service';

@Component({
  selector: 'app-lista-tarefa-api',
  templateUrl: './lista-tarefa-api.component.html',
  styleUrls: ['./lista-tarefa-api.component.scss']
})
export class ListaTarefaApiComponent implements OnInit {

  tarefas: any[] = [];
  erroMensagem: string = '';

  constructor(private tarefasService: TarefasApiService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefasService.getTarefas().subscribe({
      next: (dados) => {
        this.tarefas = dados;
        console.log('Sucesso', dados);
      },
    });
  }
}
