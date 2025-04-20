export class patient
{

    patientID:number|null;
    patientname:string;
    patientgender:string;
    bloodGroup:string;
    patientaddress:string;
    patientphoneNum:number;
    patientemail:string;
    age:number;
    appointmentDate:string;
    patientPrescription:string;
    doctorFees:number;
    patientDoasge:string;

    constructor()
    {
        this.patientID=null;
        this.patientname="";
        this.patientgender="";
        this.bloodGroup=""; 
        this.patientaddress="";
        this.patientphoneNum=0;
        this.patientemail="";
        this.age=0;
        this.appointmentDate="";
        this.patientPrescription="";
        this.doctorFees=0;
        this.patientDoasge="";
    }
}