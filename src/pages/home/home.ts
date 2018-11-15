import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { FoodProvider } from '../../providers/food/food';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private db: any;
  private item: string = "";
  private name: string = "";
  private remoteItem: string = "";
  private remoteName: string = "";
  private foodPrefs: any[] = [];
  
  constructor(public navCtrl: NavController,
    private foodService: FoodProvider) {
    this.foodService.getObservable().subscribe(() => {
      this.foodPrefs = this.foodService.getFoodPrefs();
    });
    // firebase.initializeApp(firebaseConfig);
    // this.db = firebase.database();
    // let dataRef = this.db.ref('/foodPrefs');
    // dataRef.on('value', snapshot => {
    //   console.log(snapshot);
    //   this.foodPrefs = []; //start with a blank list
    //   snapshot.forEach(childSnapshot => {
    //     let foodPref = {
    //       key: childSnapshot.key,
    //       name: childSnapshot.val().name,
    //       item: childSnapshot.val().item
    //     };
    //     console.log(foodPref);
    //     this.foodPrefs.push(foodPref);
    //   });
    //});
  }
  private saveToFirebase() {
    this.foodService.addFoodPref({name: this.name, item: this.item})
  //   let listRef = this.db.ref('/foodPrefs');
  //   let prefRef = listRef.push();
  //   let dataRecord = {
  //     name: this.name,
  //     item: this.item
  //   }
  //   prefRef.set(dataRecord);
  }
}