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
  itemsMongo: any[] = [];
  insertForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
  })
  formCategory = this.fb.group({
    name: ['', Validators.required],
  })
  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => { this.items = data })
    this.itemService.getItemsMongo().subscribe(data => { this.itemsMongo = data })
  }
  ngOnChanges() {
    this.itemService.getItemsMongo().subscribe(data => { this.itemsMongo = data })
  }


  addCategoryForm() {
    this.itemService.insertCategory(this.formCategory.getRawValue()).subscribe(data => {
      data = this.itemsMongo
    })
    console.log(this.formCategory.getRawValue())
  }

  onDeleteCategory(id: any) {
    this.itemService.deleteCategory(id).subscribe({
      next: response => {
        console.log('Xóa thành công', response);
        // Tùy chọn: Làm mới danh sách hoặc xử lý phản hồi
      },
      error: error => {
        console.error('Xóa thất bại', error);
      },
      complete: () => {
        console.log('Hoàn thành thao tác xóa');
      }
    });
    console.log(id);
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
