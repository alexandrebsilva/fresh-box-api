import { IsNumber, IsString } from "class-validator";

export class StepCreateRequest {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsNumber()
  order!: number;
}
