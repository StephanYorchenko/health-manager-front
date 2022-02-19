import {BaseRepositoryRest} from "./BaseRestRepository";

type PatientTemperatureDTO = {
  saved_at: string;
  value: string;
}

class StatsRepository extends BaseRepositoryRest{
  getPatientTemp(patientId: number): Promise<PatientTemperatureDTO[]>{
    const url = `/api/patient/${patientId}/temp`
    return this.get<{}, PatientTemperatureDTO[]>(url);
  }
}

export const statsRepository = new StatsRepository();