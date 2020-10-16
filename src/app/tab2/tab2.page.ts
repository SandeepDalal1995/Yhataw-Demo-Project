import { Component, OnInit, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  reactiveForm: FormGroup;

  // public form = [
  //   { val: 'Mobile Service', isChecked: true },
  //   { val: 'Mobile Repair', isChecked: false },
  //   { val: 'Battery Change', isChecked: false },
  //   { val: 'Tempered Glass Change', isChecked: false },
  // ];
  repairList: Array<String> = ["Mobile Service", "Mobile Repair", "Battery Change", "Tempered Glass Change"];
  imgArray = [
    'https://www.mobigarage.com/admin-mobigarage/images/14-02-2019-1550200371.png',
    'https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg',
    'https://cnet4.cbsistatic.com/img/6e9LWi83HQ52UBOiQqxGQQlcAZI=/940x0/2017/05/22/a9fd53a2-2cb9-472c-8f5d-d00c0debc40f/iphone-battery-replacement-ifixit.jpg',
    'https://lh3.googleusercontent.com/proxy/NYzXvfJIi61BoWDPqG_6izFtr5pILPA4fZP931dr59EBWxHLCOJ2IxL_5eEvJ4_N3AjfjMvNuuwlbfsPRSIenMMsdvpMNdGndzLH864WVTyATC9s_lem8pMafS9FZbLjGHyjVQ',
  ];
  selectedRepairValue: Array<String> = [];
  @Output() UserSelectedFromList;
  constructor(
    private homeMenuCtrl: MenuController,
    private _fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.reactiveForm = this._fb.group({
      repairArrayList: this.addRepairListControls(),
    });
  }

  addRepairListControls() {
    const arr = this.repairList.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  get repairArray() {
    return <FormArray>this.reactiveForm.get('repairArrayList');
  }

  getSelectedRepairValue() {
    this.selectedRepairValue = [];
    this.repairArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedRepairValue.push(this.repairList[i]);
      }
    });
    console.log(this.selectedRepairValue);
  }
  busesMenu() {
    this.homeMenuCtrl.enable(true, 'busesMenu');
    this.homeMenuCtrl.open('busesMenu');
  }

  onSubmit() {
    const UserSelectedFromList = this.selectedRepairValue;
    console.log({ ...this.reactiveForm.value, UserSelectedFromList });
  }

}
