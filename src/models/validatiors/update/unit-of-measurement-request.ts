import { IsOptional, IsString } from "class-validator";

export class UnitOfMeasurementUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  abbreviation?: string;
}
