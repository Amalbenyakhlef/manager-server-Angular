import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {

  ///the font parameters
  FontList =['', 'Phosphate','Garamond','Arial'];
  bgColor!:string;
  txtColor!:string;
  txtSize!:string;
  txtFont!:string;
  AlignList= ['center','justify','left','right'];
  txtAlign!:string;


  constructor() { }

  ngOnInit(): void {
  }

  //change the style
  changeSize(value :string){
    this.txtSize=value+'px';
  }

}
