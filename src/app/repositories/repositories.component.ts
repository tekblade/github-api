import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandleRestRequestsService } from '../handle-rest-requests.service';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  param:string;
  flagThatChecksIfUserExists:boolean=undefined;
  flagThatPreventChangingDataInRuntime:boolean=false;
  repositories:any[]=[]   //I didn't create interface Repository because this would be long to write class. Am I doing it wrong?
  constructor(private activatedRoute: ActivatedRoute,private getRepo:HandleRestRequestsService) {
    this.activatedRoute.params.subscribe(value => 
      this.param=value['id']
    );
  }

  ngOnInit() {
    let helpArrayForCuttingFirstIndex=[];
    this.getRepo.getUserRepositories(this.param).subscribe(
      value=>{
        helpArrayForCuttingFirstIndex.push(value);
        for(let val of helpArrayForCuttingFirstIndex)   //a little bit confusing 
          for(let help of val)                          //got an array of one element with subarray of array desired 
            this.repositories.push(help);               //instead of push could be used '=' sign
        this.flagThatChecksIfUserExists=false; 
        this.flagThatPreventChangingDataInRuntime=true;
      },
      err=>{      
        this.flagThatChecksIfUserExists=true; 
        this.flagThatPreventChangingDataInRuntime=true;       
        console.clear();
      }
    );
  }

}
