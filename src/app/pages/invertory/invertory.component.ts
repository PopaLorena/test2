import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-invertory',
  templateUrl: './invertory.component.html',
  styleUrls: ['./invertory.component.scss']
})
export class InvertoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];

  constructor(public dialog: MatDialog, public itemService: ItemService) { }

  async openDialog(id: number | undefined) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: { idToBeEdit: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  };

  getItems(): void {
    this.itemService.getItems().subscribe((list: Item[]) => {
      this.itemList = list;

    }, (err) => {
      this.error = err.error;
    })
  }

  deleteItem(id: number | undefined): void {
    this.itemService.delete(id!).subscribe(
      () => {

        window.location.reload();
      }, (err) => {
      }
    );
  }

  ngOnInit(): void {
    this.getItems();
  }


}
