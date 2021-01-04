import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UtilsServiceProvider } from '../../providers/utils-service/utils-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
/**
 * Generated class for the UserregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userregister',
  templateUrl: 'userregister.html',
})
export class UserregisterPage {
  _title:string;
  private registerForm: FormGroup;
  headerTitle:string;
  phoneno:string;
  emailid:string;
  fullname:string;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  capturedSnapURL:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera,
    public authService: AuthServiceProvider,
    public utils: UtilsServiceProvider,

    private formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.group({
        fullname: ['', Validators.required],
        phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
        emailid: ['', Validators.required],
      
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserregisterPage');
    this.headerTitle="Registration";

  }
  openGallery(){
      this.camera.getPicture(this.cameraOptions).then((imageData) => {
        // this.camera.DestinationType.FILE_URI gives file URI saved in local
        // this.camera.DestinationType.DATA_URL gives base64 URI
        
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.capturedSnapURL = base64Image;
      }, (err) => {
        
        console.log(err);
        // Handle error
      });
  }
  SubmitDetails(){
    this.phoneno=this.registerForm.value.phone;
    this.fullname=this.registerForm.value.fullname;
    this.emailid=this.registerForm.value.emailid;

    this.utils.presentLoading();
    let stringObject={
      "strSearchString": "<Info><ACTION>A</ACTION><Mobileno>"+this.phoneno+"</Mobileno><Email>"+this.emailid+"</Email><Fullname>"+this.fullname+"</Fullname><UserType>1</UserType></Info>"
      }
      this.authService.RegistrationUser(stringObject).subscribe((result) => {
        this.utils.dismissLoading();
        if (result) {
          if (result[0].Id>0) {
          this.navCtrl.setRoot('LoginPage')
          }
          else if(result[0].ErrorId==-2){
          this.utils.presentAlert("Oops", "Number Already exits")

          }
          else {
            this.utils.presentAlert("Oops", "Registration Failed, please check details")
  
            }
        }
      });
  }

}
