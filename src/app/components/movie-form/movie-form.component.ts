import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieForm = new FormGroup({
    movieName: new FormControl('', []),
    rating: new FormControl('', []),
    releaseDate: new FormControl(new Date(), []),
  });
  constructor(private _userService: UserService,
    public ref: MatDialogRef<MovieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.ref.close();
  }
  save() {
    console.log(this.movieForm.value);
    this._userService.addMovie(this.movieForm.value).subscribe(data => {
      this.ref.close(data);
    })
  }
}
