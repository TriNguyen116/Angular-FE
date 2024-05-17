import { Component, OnInit, inject } from '@angular/core';
import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PluginComponent } from '../../layout/plugin/plugin.component';
import { ItemService } from '../../services/itemService/item.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SidenavComponent, NavbarComponent, FooterComponent, PluginComponent, CommonModule, ReactiveFormsModule,],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  itemService: ItemService = inject(ItemService)
  fb: FormBuilder = inject(FormBuilder)
  // insertForm: any
  items: Item[] = [];
  insertForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
  })
  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => { this.items = data })
  }
  onSubmit() {
    let item = new Item();
    item.id = this.insertForm.controls["id"].value!;
    item.name = this.insertForm.controls["name"].value!;
    item.description = this.insertForm.controls["description"].value!;
    this.itemService.insertItem(item).subscribe(data => {
      console.log("insert Form", data);
      this.items.push(data);
      this.insertForm.reset()
    })
  }

}
