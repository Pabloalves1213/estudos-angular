import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas-local',
  templateUrl: './lista-tarefas-local.component.html',
  styleUrls: ['./lista-tarefas-local.component.scss']
})
export class ListaTarefasLocalComponent implements OnInit {
  tarefas = [
    {
      id: 1, descricao: 'Revisar conceitos de componentização',
      concluida: true
    },
    {
      id: 2, descricao: 'Praticar a exibição de listas', concluida:
        false
    },
  ];
  novaTarefa: string = '';
  adicionarTarefas() {
    const nova = {
      id: this.tarefas.length + 1,
      descricao: this.novaTarefa,
      concluida: false
    };
    this.tarefas.push(nova);
    this.novaTarefa = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
