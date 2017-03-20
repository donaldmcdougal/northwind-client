import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../../services/northwind.service";

@Component({
  selector: 'app-grid-simple',
  templateUrl: './grid-simple.component.html',
  styleUrls: ['./grid-simple.component.css']
})
export class GridSimpleComponent implements OnInit {

  data:Array<any> = [];

  constructor(private service:ProductsService) {
    this.service.query(null).then(data => {
      this.data = data;
    });
  }

  ngOnInit() {
  }

  //data:Array<any> = this.genData(10);

  private colHeaders:Array<string> = ['Code', 'Name'];
  private columns:Array<any> = [
    {
      data: 'productCode',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'productName',
      renderer: 'text',
      readOnly: true
    }
    /*
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
    */
  ];
  private colWidths:Array<number> = [null, null, null, null, null, null, 30];
  private options:any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  private afterChange(e:any) {
    console.log(e);
  }

  private afterOnCellMouseDown(e:any) {
    console.log(e);
  }

  private genData(rows) {
    if (rows === void 0) { rows = 10; }
    var products = [
      {
        description: 'Big Mac',
        options: [
          { description: 'Big Mac' },
          { description: 'Big Mac & Co' },
          { description: 'McRoyal' },
          { description: 'Hamburger' },
          { description: 'Cheeseburger' },
          { description: 'Double Cheeseburger' }
        ]
      },
      {
        description: 'Fried Potatoes',
        options: [
          { description: 'Fried Potatoes' },
          { description: 'Fried Onions' }
        ]
      }
    ], firstNames = ['Ted', 'John', 'Macy', 'Rob', 'Gwen', 'Fiona', 'Mario',
      'Ben', 'Kate', 'Kevin', 'Thomas', 'Frank'], lastNames = ['Tired', 'Johnson', 'Moore', 'Rocket', 'Goodman', 'Farewell',
      'Manson', 'Bentley', 'Kowalski', 'Schmidt', 'Tucker', 'Fancy'], address = ['Turkey', 'Japan', 'Michigan', 'Russia', 'Greece', 'France', 'USA',
      'Germany', 'Sweden', 'Denmark', 'Poland', 'Belgium'];
    var items = [];
    var product;
    var newProduct;
    for (var i = 0; i < rows; i++) {
      product = products[Math.floor(Math.random() * products.length)];
      newProduct = {
        description: product.description,
        options: []
      };
      product.options.forEach(function (p) {
        newProduct.options.push({ description: p.description });
      });
      items.push({
        id: i + 1,
        name: {
          first: firstNames[Math.floor(Math.random() * firstNames.length)],
          last: lastNames[Math.floor(Math.random() * lastNames.length)]
        },
        date: Math.max(Math.round(Math.random() * 12), 1) + " / " + Math.max(Math.round(Math.random() * 28), 1) + " /\n      " + (Math.round(Math.random() * 80) + 1940),
        address: Math.floor(Math.random() * 100000) + " " + address[Math.floor(Math.random() * address.length)],
        price: Math.floor(Math.random() * 100000) / 100,
        isActive: Math.floor(Math.random() * products.length) / 2 === 0 ? 'Yes' : 'No',
        product: newProduct
      });
    }
    return items;
  }
}
