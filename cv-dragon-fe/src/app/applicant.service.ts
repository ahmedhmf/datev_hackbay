import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ApplicantService{
    public selectedJobs: string[] = [];
    public emailAddress: string = '';

}