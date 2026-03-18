import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-tarefa-api',
  templateUrl: './modal-tarefa-api.component.html',
  styleUrls: ['./modal-tarefa-api.component.scss']
})
export class ModalTarefaApiComponent implements OnInit {
  novaTarefa: any = {
    titulo: '',
    descricao: '',
    concluida: false
  };

  constructor(public dialogRef: MatDialogRef<ModalTarefaApiComponent>) { }

  ngOnInit(): void {
  }
  salvar() {
    this.dialogRef.close(this.novaTarefa);
  }

  cancelar() {
    this.dialogRef.close();
    alert("Campo vazio")
  }
}

