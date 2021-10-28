import { IsNumber, IsOptional, IsString } from "class-validator";

export class StepUpdateRequest {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  order?: number;
}
