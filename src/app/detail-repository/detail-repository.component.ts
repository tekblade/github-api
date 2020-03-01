import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandleRestRequestsService } from '../handle-rest-requests.service';

@Component({
  selector: 'app-detail-repository',
  templateUrl: './detail-repository.component.html',
  styleUrls: ['./detail-repository.component.css']
})
export class DetailRepositoryComponent implements OnInit {
  user:string;
  repository:string;
  branches:any[]=[];
  commits:any[]=[];
  helpFlagCheckIfAvailable1:boolean=false;
  helpFlagCheckIfAvailable2:boolean=false;
  constructor(private activatedRoute: ActivatedRoute,private getRepo: HandleRestRequestsService) {
    this.activatedRoute.params.subscribe(value=>{
      this.user=value['user'];
      this.repository=value['repository'];
    });
  }

  ngOnInit() {
    let helpArrayOfBranchesBeforeTransformation:any[]=[];
    this.getRepo.getBranches(this.user,this.repository).subscribe(value=>{
      helpArrayOfBranchesBeforeTransformation.push(value);
      for(let help of helpArrayOfBranchesBeforeTransformation)
        for(let val of help)
          this.branches.push(val);
      this.helpFlagCheckIfAvailable2=true;
    });
    
    let helpArrayOfCommitsBeforeTransformation:any[]=[];
    this.getRepo.getCommits(this.user,this.repository).subscribe(value=>{  //I did load all the content - relative version could use take(1)
      helpArrayOfCommitsBeforeTransformation.push(value);                   //to limit only first(last time) commit
      for(let help of helpArrayOfCommitsBeforeTransformation)
        for(let val of help)
          this.commits.push(val);
      this.helpFlagCheckIfAvailable1=true;
    });
  }

}
