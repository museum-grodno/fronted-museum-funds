import { Component, VERSION } from "@angular/core";
import { Buffer } from "buffer";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  onFileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        var arrayBuffer: ArrayBuffer = reader.result as ArrayBuffer;
        if (arrayBuffer) {
          let buffer: any = Buffer.from(arrayBuffer);
    //      let datatable: DataTable = Dbf.read(buffer);
//console.log(datatable);
        }
      };
    }
  }
}
