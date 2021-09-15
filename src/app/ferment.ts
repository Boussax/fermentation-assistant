export interface Ferment {
    id: number;
    name: string;
    lotNumber : string; // formatted string two letters and 8 digits for date XXYYYYMMDD todo
    type : string;
    status: string;
    startDate : number;
    fermentationDuration : {value: number, unit: string};
    parametersOfInterest: string[];
    fermentData: FermentData[];
}

export interface FermentData {
    name : string;
    series: { name: string, value: number }[];
}

