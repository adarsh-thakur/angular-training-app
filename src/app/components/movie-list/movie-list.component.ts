import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  displayedColumns = ["_id", "movieName", "rating", "releaseDate","action"];
  data: any[] = [];
  showLoader: boolean = true;

  constructor(private _userUser: UserService,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getMovieList();
  }
  getMovieList() {
    this._userUser.getMovies().subscribe((data: any) => {
      this.data = data;
      this.showLoader = false;
    })
  }
  openForm() {
    let openedDialogRef = this.dialog.open(MovieFormComponent, {
      height: '400px',
      width: '500px'
    });
    openedDialogRef.afterClosed().subscribe(data => {
      console.log(data);
      this._snackBar.open('Movie Added Successfully!', undefined,{
        duration: 1000
      });
      this.getMovieList();
    })
  }
  delete(row:any) {
    this._userUser.deleteMovie(row._id).subscribe(data => {
      console.log(data);
      this._snackBar.open('Movie Deleted Successfully!', undefined,{
        duration: 1000
      });
      this.getMovieList();
    })
  }
}
