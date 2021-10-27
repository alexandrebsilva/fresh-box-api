import { IsString } from "class-validator";

export class UnitOfMeasurementCreateRequest {
  @IsString()
  name!: string;

  @IsString()
  abbreviation!: string;
}
