import {BaseRepositoryRest} from "./BaseRestRepository";

type PatientTemperatureDTO = {
  saved_at: string;
  value: string;
}

type PatientHmotnostDTO = PatientTemperatureDTO;

class StatsRepository extends BaseRepositoryRest{
  getPatientTemp(patientId: number): Promise<PatientTemperatureDTO[]>{
    const url = `/api/patient/${patientId}/temp`
    return this.get<{}, PatientTemperatureDTO[]>(url);
  }

  getPatientHmotnost(patientId: number): Promise<PatientHmotnostDTO[]>{
    const url = `/api/patient/${patientId}/hmotnost`
    return this.get<{}, PatientHmotnostDTO[]>(url);
  }
}

export const statsRepository = new StatsRepository();