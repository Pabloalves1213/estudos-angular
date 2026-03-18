import { Component, OnInit } from '@angular/core';
import { TarefasApiService } from '../services/tarefas-api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTarefaApiComponent } from '../modal-tarefa-api/modal-tarefa-api.component';
@Component({
  selector: 'app-lista-tarefa-api',
  templateUrl: './lista-tarefa-api.component.html',
  styleUrls: ['./lista-tarefa-api.component.scss']
})
export class ListaTarefaApiComponent implements OnInit {

  tarefas: any[] = [];
  erroMensagem: string = '';
  addTarefas: any[] = [];

  constructor(private tarefasService: TarefasApiService, private dialog: MatDialog) { }

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
 abrirModal(): void {
  const dialogRef = this.dialog.open(ModalTarefaApiComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.tarefasService.addtarefas(result).subscribe({
        next: () => {
          this.carregarTarefas();
        },
        error: (erro) => {
          console.error('Erro ao adicionar tarefa', erro);
        }
      });
    }
  });
}
}
